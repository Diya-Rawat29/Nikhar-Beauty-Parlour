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
              <span className="font-serif text-3xl font-bold tracking-wide text-cream leading-none">
                NIKHAR
              </span>
              <span className="text-[10px] tracking-[0.22em] text-gold uppercase font-sans mt-2 font-bold">
                MAKEOVERS & BEAUTY
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-cream/80 leading-relaxed max-w-xs font-semibold">
              Where tradition meets timeless beauty. Serving brides and clients in Harsola, Indore, with premium makeovers, hair, and traditional styling.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/nikharmakeovers?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream/10 rounded-full hover:bg-cream/20 text-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Instagram Profile"
              >
                <svg
                  className="w-4 h-4 text-gold"
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
                href="https://www.youtube.com/@itzpinkyjais"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream/10 rounded-full hover:bg-cream/20 text-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="YouTube Channel"
              >
                <svg
                  className="w-4 h-4 text-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-cream/70 font-sans font-semibold">
              <li>
                <a href="#home" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">About Story</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Services Catalog</a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Bridal Experience</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Gallery Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Featured Services */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Featured Work
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-cream/70 font-sans font-semibold">
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
                <a href="#services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">Luxury Herbal Facials</a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-cream/70 font-sans font-semibold">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>12-Kha, Dampura, Harsola, Indore, Madhya Pradesh - 453441</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+918827417126" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded">
                  +91 88274 17126
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
        <div className="mt-12 pt-8 border-t border-gold/15 flex flex-col sm:flex-row justify-between items-center text-xs text-cream/50 font-sans space-y-4 sm:space-y-0 font-medium">
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
