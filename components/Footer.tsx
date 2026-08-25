"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import Container from "./ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-maroon-dark text-cream pt-16 pb-28 md:pb-12 overflow-hidden border-t border-gold/20">
      
      {/* Decorative Traditional Circular Outline (Subtle) */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] border border-gold/10 rounded-full -z-1 pointer-events-none opacity-20"></div>

      <Container className="z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div className="space-y-4 text-left">
            <a href="#home" className="flex flex-col focus:outline-none focus:ring-2 focus:ring-gold/60 rounded p-1 max-w-max">
              <span className="font-serif text-3xl font-bold tracking-wide text-cream">
                NIKHAR
              </span>
              <span className="text-[10px] tracking-[0.22em] text-gold uppercase font-sans -mt-1 font-semibold">
                Makeovers & Beauty Studio
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-cream/70 leading-relaxed max-w-xs">
              Where tradition meets timeless beauty. Serving ladies in Barnagar, Madhya Pradesh, with premium bridal makeovers, hairstyling, and skin therapies.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 text-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Instagram Profile"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 text-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Facebook Page"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream/70 font-sans">
              <li>
                <a href="#home" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">About Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Services</a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Bridal Studio</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Gallery Portfolio</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Featured Services */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Featured Work
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream/70 font-sans">
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Bridal Makeovers</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Traditional Saree Draping</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Floral Hairstyling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Herbal Facials</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Designer Cuts & Styling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Bridal Hand Mehndi</a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-cream/70 font-sans">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Jawahar Marg, Badnagar (Barnagar), Madhya Pradesh - 456771</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919425475675" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">
                  +91 94254 75675
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>10:00 AM - 8:00 PM<br />Monday to Sunday</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-gold/15 flex flex-col sm:flex-row justify-between items-center text-xs text-cream/50 font-sans space-y-4 sm:space-y-0">
          <p>&copy; {currentYear} Nikhar Makeovers & Beauty Studio. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <span className="text-gold">♥</span>
            <span>in Madhya Pradesh</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
