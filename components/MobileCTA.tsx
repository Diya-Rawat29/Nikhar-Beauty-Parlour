"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-cream/95 backdrop-blur-md border-t border-gold/15 py-2.5 px-4 shadow-[0_-4px_12px_rgba(36,33,33,0.06)] flex justify-between items-center md:hidden">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919425475675?text=Hello%20Nikhar%20Makeovers,%20I'd%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 text-espresso hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-xl min-h-[44px]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-green-600" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-wider mt-0.5">
          WhatsApp
        </span>
      </a>

      {/* Vertical Divider */}
      <div className="w-[1px] h-8 bg-gold/25"></div>

      {/* Call Button */}
      <a
        href="tel:+919425475675"
        className="flex-1 flex flex-col items-center justify-center py-1 text-espresso hover:text-maroon transition-colors focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-xl min-h-[44px]"
        aria-label="Call studio phone number"
      >
        <Phone className="w-5 h-5 text-maroon" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-wider mt-0.5">
          Call Now
        </span>
      </a>

      {/* Vertical Divider */}
      <div className="w-[1px] h-8 bg-gold/25"></div>

      {/* Book Button */}
      <a
        href="#contact"
        className="flex-1 flex flex-col items-center justify-center py-1 text-espresso hover:text-maroon transition-colors focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-xl min-h-[44px]"
        aria-label="Request makeover appointment"
      >
        <Calendar className="w-5 h-5 text-gold-dark" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-wider mt-0.5">
          Book Now
        </span>
      </a>

    </div>
  );
}
