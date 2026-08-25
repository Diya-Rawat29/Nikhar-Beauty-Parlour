"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll handler for navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Escape key handler to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Bridal Studio", href: "#bridal" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md border-b border-gold/15 py-2.5"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#home"
              className="flex flex-col focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 rounded-lg p-1"
              aria-label="Nikhar Makeovers Home"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-maroon">
                NIKHAR
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-gold uppercase font-sans -mt-0.5 font-semibold">
                Makeovers & Beauty Studio
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs xl:text-sm font-semibold text-espresso/80 hover:text-maroon tracking-wider uppercase transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold/60 rounded px-1.5 py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Right Side CTA */}
            <div className="hidden lg:flex items-center space-x-5">
              <a
                href="tel:+919425475675"
                className="flex items-center space-x-2 text-xs font-semibold text-espresso/90 hover:text-maroon transition-colors font-sans tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-gold/60 rounded px-1.5 py-0.5"
                aria-label="Call Nikhar Makeovers directly"
              >
                <Phone className="w-4 h-4 text-gold-dark" />
                <span>Call Now</span>
              </a>
              <Button
                href="#contact"
                variant="primary"
                className="!min-h-[40px] !py-2.5 !px-6 text-[10px] tracking-widest"
                ariaLabel="Book an appointment"
              >
                <span className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                </span>
              </Button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-espresso hover:text-maroon p-2 focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-xl"
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
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
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-espresso lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 z-40 w-full max-w-[340px] bg-cream shadow-2xl flex flex-col justify-between py-6 px-6 lg:hidden"
            >
              {/* Header inside drawer */}
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gold/15">
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-lg font-bold tracking-wide text-maroon">
                      NIKHAR
                    </span>
                    <span className="text-[9px] tracking-[0.2em] text-gold uppercase font-sans font-semibold">
                      Makeovers & Beauty
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-espresso hover:text-maroon focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-xl"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav links list */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-sans text-sm font-semibold text-espresso hover:text-maroon tracking-wider uppercase border-b border-gold/5 pb-2 text-left focus:outline-none focus:ring-2 focus:ring-gold/60 rounded"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTAs inside drawer */}
              <div className="space-y-4 pt-6 border-t border-gold/15">
                <Button
                  href="tel:+919425475675"
                  onClick={() => setIsMobileOpen(false)}
                  variant="secondary"
                  className="w-full flex items-center justify-center space-x-2 text-xs font-semibold"
                  ariaLabel="Call Nikhar Makeovers now"
                >
                  <Phone className="w-4 h-4 text-gold-dark" />
                  <span>Call Now</span>
                </Button>
                <Button
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  variant="primary"
                  className="w-full text-center text-xs font-semibold"
                  ariaLabel="Book your makeover appointment"
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
