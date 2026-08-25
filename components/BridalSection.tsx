"use client";

import Image from "next/image";
import { Sparkles, Calendar, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function BridalSection() {
  const bridalPoints = [
    {
      title: "Signature Bridal Makeup",
      desc: "Impeccable skin prep, personalized shades, and flawless HD/Airbrush makeup tailored to look timeless.",
      icon: <Sparkles className="w-5 h-5 text-gold-dark" />,
    },
    {
      title: "Traditional Hairstyle & Gajra",
      desc: "Secure braids, royal buns, and fresh jasmine flower arrangements styled for comfort and longevity.",
      icon: <Heart className="w-5 h-5 text-gold-dark" />,
    },
    {
      title: "Outfit Draping & Styling",
      desc: "Professional saree pleating and lehenga draping, with detailed placement of jewelry and hair accessories.",
      icon: <Award className="w-5 h-5 text-gold-dark" />,
    },
  ];

  return (
    <section id="bridal" className="py-14 sm:py-20 bg-maroon text-cream relative overflow-hidden">
      {/* Decorative Traditional Circular Overlay (Subtle) */}
      <div className="absolute left-[-100px] top-[-100px] w-[350px] h-[350px] border border-gold/10 rounded-full -z-1 pointer-events-none opacity-20"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Visual Portrait - Image first on mobile, right-aligned on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gold/20 order-1 lg:order-2"
          >
            <Image
              src="/images/bridal_section.jpg"
              alt="Intricate Indian Bridal Styling and Jewelry"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent"></div>
          </motion.div>

          {/* Bridal Copy Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold/50"></span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
                  The Bridal Experience
                </span>
                <span className="w-6 h-[1px] bg-gold/50"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-wide">
                Your Special Day, <br />
                <span className="text-gold italic font-normal">Beautifully Yours</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-cream/80 leading-relaxed max-w-xl">
                We believe that every bride deserves to radiate confidence. Our signature bridal मेकओवर focuses on highlighting your best features while preserving the richness of Indian bridal traditions.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-5 pt-2">
              {bridalPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2.5 bg-cream/10 rounded-xl mt-0.5 border border-gold/15 shrink-0">
                    {point.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-gold">
                      {point.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-cream/70 leading-relaxed mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width button on mobile */}
            <div className="pt-4 flex">
              <Button
                href="#contact"
                variant="accent"
                className="w-full sm:w-auto"
                ariaLabel="Book a personalized bridal makeover consultation"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <Calendar className="w-4 h-4 text-espresso" />
                  <span>Book Bridal Consultation</span>
                </span>
              </Button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
