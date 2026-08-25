"use client";

import Image from "next/image";
import { Phone, MapPin, MessageCircle, ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-cream pt-20 lg:pt-0 overflow-hidden">
      {/* Background Indian Motif Pattern Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#581123_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2"
            >
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
                Traditional Beauty • Modern Elegance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon leading-tight"
            >
              Where Tradition Meets <br />
              <span className="text-gold font-serif italic font-normal">Timeless Beauty</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-espresso/80 max-w-xl leading-relaxed"
            >
              Indulge in premium Indian beauty treatments, luxury bridal packages, and heritage styling at **Nikhar Herbal Beauty Parlour**. Our expert team crafts bespoke looks that honor your heritage with a modern luxury touch.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#contact"
                className="bg-maroon hover:bg-maroon-dark text-cream px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-lg flex items-center space-x-2 border border-gold/20 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-gold-light" />
                <span>Book Appointment</span>
              </a>
              <a
                href="#services"
                className="bg-transparent hover:bg-gold/10 text-espresso border border-gold/40 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </a>
            </motion.div>

            {/* Direct Connect Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-6 pt-6 border-t border-gold/15 max-w-lg"
            >
              <a
                href="tel:+919425475675"
                className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-espresso hover:text-maroon transition-colors"
                title="Call us directly"
              >
                <span className="p-2.5 rounded-full bg-gold/10 text-gold-dark hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919425475675?text=Hello%20Nikhar%20Herbal%20Beauty%20Parlour,%20I'd%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-espresso hover:text-maroon transition-colors"
                title="Chat on WhatsApp"
              >
                <span className="p-2.5 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <span>WhatsApp</span>
              </a>

              <a
                href="#map"
                className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-espresso hover:text-maroon transition-colors"
                title="View location map"
              >
                <span className="p-2.5 rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>Location</span>
              </a>
            </motion.div>
          </div>

          {/* Premium Visual Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[420px] lg:h-[520px] rounded-t-full border-[10px] border-gold-light shadow-2xl overflow-hidden"
            >
              <Image
                src="/images/hero_bridal.jpg"
                alt="Nikhar Premium Indian Bridal Makeup and Hairstyle"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 320px, 420px"
              />
              {/* Subtle gold overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 via-transparent to-transparent"></div>
            </motion.div>

            {/* Decorative Gold Circular Mandala Frame behind image */}
            <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] border border-gold/10 rounded-full -z-10 pointer-events-none"></div>
            <div className="absolute w-[390px] h-[390px] sm:w-[500px] sm:h-[500px] border border-gold/5 border-dashed rounded-full -z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-sans mb-1 font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4 text-gold-dark" />
        </motion.div>
      </div>
    </section>
  );
}
