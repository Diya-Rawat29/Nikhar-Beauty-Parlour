"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Bridal", href: "#bridal" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md border-b border-gold/15 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-maroon hover:text-maroon-dark transition-colors duration-200">
                NIKHAR
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-sans -mt-1 font-semibold">
                Herbal Beauty Parlour
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm font-medium text-espresso/80 hover:text-maroon tracking-wider transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Right Side CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919425475675"
                className="flex items-center space-x-2 text-sm text-espresso hover:text-maroon transition-colors font-sans font-medium"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Now</span>
              </a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-maroon hover:bg-maroon-dark text-cream px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-md flex items-center space-x-2 border border-gold/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </motion.a>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-espresso hover:text-maroon p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-40 lg:hidden bg-cream border-b border-gold/20 shadow-xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="font-sans text-base font-semibold text-espresso hover:text-maroon tracking-wider border-b border-gold/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <a
                href="tel:+919425475675"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center space-x-2 text-espresso hover:text-maroon border border-maroon/20 py-3 rounded-full font-medium"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="bg-maroon hover:bg-maroon-dark text-cream text-center py-3.5 rounded-full font-semibold uppercase tracking-widest text-xs shadow-md border border-gold/20"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
