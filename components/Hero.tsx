"use client";

import Image from "next/image";
import { Phone, MapPin, MessageCircle, ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cream pt-24 lg:pt-0 overflow-hidden"
    >
      {/* Background Indian Motif Pattern Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#581123_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <Container className="z-10 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2"
            >
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
                Traditional Beauty • Modern Elegance
              </span>
            </motion.div>

            {/* Headline with fluid type */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif font-bold text-maroon leading-tight tracking-wide"
              style={{
                fontSize: "calc(2rem + 2.5vw)",
                lineHeight: "1.15",
              }}
            >
              Where Tradition Meets <br />
              <span className="text-gold font-serif italic font-normal">Timeless Beauty</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-sm sm:text-base md:text-lg text-espresso/80 max-w-xl leading-relaxed"
            >
              Experience bespoke Indian makeover artistry and luxury treatments at **Nikhar Makeovers & Beauty Studio**. We blend rich heritage styling with modern, premium aesthetics to unveil your ultimate look.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <Button
                href="#contact"
                variant="primary"
                className="w-full sm:w-auto"
                ariaLabel="Request a makeover appointment"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <Calendar className="w-4 h-4 text-gold-light" />
                  <span>Book Appointment</span>
                </span>
              </Button>
              
              <Button
                href="#services"
                variant="secondary"
                className="w-full sm:w-auto"
                ariaLabel="Explore beauty services"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-gold-dark" />
                </span>
              </Button>
            </motion.div>

            {/* Mobile Visual (Placed between CTAs and Contacts on Mobile only) */}
            <div className="block lg:hidden w-full pt-4">
              <div className="relative w-full aspect-[4/5] max-w-[340px] mx-auto rounded-t-full border-[6px] border-gold-light shadow-xl overflow-hidden">
                <Image
                  src="/images/hero_bridal.jpg"
                  alt="Nikhar Makeovers Bridal Makeup and Hairstyle Detail"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gold/15 max-w-lg"
            >
              <a
                href="tel:+919425475675"
                className="flex items-center space-x-3 p-3 bg-cream hover:bg-gold/5 rounded-xl border border-gold/15 transition-all text-xs font-semibold uppercase tracking-wider text-espresso/90 focus:outline-none focus:ring-2 focus:ring-gold/60 min-h-[46px]"
                title="Call us directly"
              >
                <span className="p-2 rounded-full bg-gold/10 text-gold-dark">
                  <Phone className="w-4 h-4" />
                </span>
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919425475675?text=Hello%20Nikhar%20Makeovers,%20I'd%20like%20to%20inquire%20about%20your%20bridal%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-cream hover:bg-gold/5 rounded-xl border border-gold/15 transition-all text-xs font-semibold uppercase tracking-wider text-espresso/90 focus:outline-none focus:ring-2 focus:ring-gold/60 min-h-[46px]"
                title="Chat on WhatsApp in a new tab"
              >
                <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <span>WhatsApp</span>
              </a>

              <a
                href="#map"
                className="flex items-center space-x-3 p-3 bg-cream hover:bg-gold/5 rounded-xl border border-gold/15 transition-all text-xs font-semibold uppercase tracking-wider text-espresso/90 focus:outline-none focus:ring-2 focus:ring-gold/60 min-h-[46px]"
                title="Scroll to studio map"
              >
                <span className="p-2 rounded-full bg-blue-500/10 text-blue-600">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>Directions</span>
              </a>
            </motion.div>
          </div>

          {/* Desktop Visual (Hidden on mobile/tablet) */}
          <div className="hidden lg:col-span-5 lg:flex justify-center items-center order-2">
            <div className="relative w-full aspect-[4/5] rounded-t-full border-[10px] border-gold-light shadow-2xl overflow-hidden">
              <Image
                src="/images/hero_bridal.jpg"
                alt="Nikhar Makeovers Bridal Makeup and Hairstyle Detail"
                fill
                priority
                className="object-cover"
                sizes="420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Gold Circular Geometry behind image */}
            <div className="absolute w-[440px] h-[440px] border border-gold/10 rounded-full -z-10 pointer-events-none"></div>
            <div className="absolute w-[480px] h-[480px] border border-gold/5 border-dashed rounded-full -z-10 pointer-events-none"></div>
          </div>

        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer pointer-events-none">
        <span className="text-[9px] tracking-[0.25em] text-gold uppercase font-sans mb-1 font-bold">Scroll</span>
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
