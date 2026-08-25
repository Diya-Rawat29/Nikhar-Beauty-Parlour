"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-cream pt-28 pb-12 lg:py-20 overflow-hidden"
    >
      {/* Background Indian Motif Pattern Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#581123_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <Container className="z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content (58%) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 text-left order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2"
            >
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-gold uppercase font-sans">
                MAKEUP • HAIR • BRIDAL
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif font-bold text-maroon leading-tight tracking-wide text-[clamp(2.2rem,5vw,4.5rem)]"
            >
              Where Tradition Meets <br />
              <span className="text-gold font-serif italic font-normal">Timeless Beauty</span>
            </motion.h1>

            {/* Concise Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-sm sm:text-base md:text-lg text-espresso/80 max-w-xl leading-relaxed font-medium"
            >
              Experience premium Indian makeover artistry and luxury treatments at Nikhar. We blend rich heritage styling with modern, premium aesthetics to reveal your most radiant self.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                href="#contact"
                variant="primary"
                className="w-full sm:w-auto !min-h-[50px] !px-10 text-xs tracking-widest font-bold shadow-lg hover:shadow-maroon/20"
                ariaLabel="Request a makeover appointment"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <Calendar className="w-4 h-4 text-gold-light" />
                  <span>BOOK YOUR APPOINTMENT</span>
                </span>
              </Button>
              
              <Button
                href="#services"
                variant="secondary"
                className="w-full sm:w-auto !min-h-[50px] !px-10 text-xs tracking-widest font-bold"
                ariaLabel="Explore beauty services"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <span>EXPLORE SERVICES</span>
                  <ArrowRight className="w-4 h-4 text-gold-dark" />
                </span>
              </Button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-2 pt-2 border-t border-gold/15 max-w-max"
            >
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-espresso/60">
                Loved & Trusted by our clients
              </span>
            </motion.div>
          </div>

          {/* Right: Portrait Image (42%) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 relative w-full px-4 lg:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-[85%] sm:w-[65%] lg:w-full aspect-[3/4] max-w-[380px] lg:max-w-none rounded-t-full border-[8px] sm:border-[10px] border-gold-light shadow-2xl overflow-hidden"
            >
              <Image
                src="/images/hero_bridal.jpg"
                alt="Nikhar Premium Indian Bridal Portrait Makeover"
                fill
                priority
                className="object-cover object-[center_20%] scale-102"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 via-transparent to-transparent"></div>
            </motion.div>

            {/* Tiny Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-12 right-2 sm:right-12 lg:-right-4 bg-maroon text-cream py-3.5 px-5 rounded-xl border border-gold/25 shadow-2xl text-center flex flex-col items-center justify-center shrink-0 min-w-[100px]"
            >
              <span className="font-serif text-sm font-bold tracking-wider text-gold-light leading-none">BRIDAL</span>
              <span className="text-[8px] font-sans font-bold tracking-[0.2em] text-cream uppercase mt-1 leading-none">MAKEOVERS</span>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
