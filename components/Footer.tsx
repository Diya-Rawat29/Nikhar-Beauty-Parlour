"use client";

import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-maroon-dark text-cream pt-16 pb-8 overflow-hidden border-t border-gold/20">
      
      {/* Decorative Gold Circular Mandala Frame behind footer */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] border border-gold/10 rounded-full -z-1 pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Narrative */}
          <div className="space-y-4 text-left">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-wide text-cream">
                NIKHAR
              </span>
              <span className="text-[11px] tracking-[0.25em] text-gold uppercase font-sans -mt-1 font-semibold">
                Herbal Beauty Parlour
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-cream/70 leading-relaxed max-w-xs">
              Where tradition meets timeless beauty. Serving the ladies of Badnagar and the Ujjain region with premium makeup, hair styling, skin treatments, and bridal care since 2011.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 text-gold-light transition-colors"
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
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 text-gold-light transition-colors"
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
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream/70 font-sans">
              <li>
                <a href="#home" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-gold transition-colors">Bridal Studio</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
              </li>
            </ul>
          </div>

          {/* Services list links */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-lg font-bold text-gold tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream/70 font-sans">
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Bridal Makeup Artistry</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Traditional Saree Draping</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Floral Hairstyle (Gajra)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Rejuvenating Gold Facial</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Designer Haircuts & Styling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Intricate Bridal Henna</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
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
                <a href="tel:+919425475675" className="hover:text-gold transition-colors">
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

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gold/15 flex flex-col sm:flex-row justify-between items-center text-xs text-cream/50 font-sans space-y-4 sm:space-y-0">
          <p>&copy; {currentYear} Nikhar Herbal Beauty Parlour. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Designed with</span>
            <span className="text-gold">♥</span>
            <span>in Madhya Pradesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
