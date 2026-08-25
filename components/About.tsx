"use client";

import Image from "next/image";
import { Star, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  const pillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-gold-dark" />,
      title: "Bridal Specialization",
      desc: "Customized makeover designs tailored for traditional Indian weddings.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-dark" />,
      title: "Premium Products",
      desc: "Top-tier skin-friendly cosmetics and organic herbal therapies.",
    },
    {
      icon: <Heart className="w-5 h-5 text-gold-dark" />,
      title: "Client-focused Care",
      desc: "Bespoke styling trials and warm, hygienic hospitality.",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-cream relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-[0.015] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-maroon">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 50 10 Q 60 40 50 90 Q 40 40 50 10" />
          <path d="M 10 50 Q 40 60 90 50 Q 40 40 10 50" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Image - Placed first on mobile via grid ordering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.1] rounded-2xl overflow-hidden shadow-xl border border-gold/15"
          >
            <Image
              src="/images/about_studio.jpg"
              alt="Inside Nikhar Makeovers Beauty Salon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
            {/* EST label */}
            <div className="absolute bottom-4 right-4 bg-cream/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gold/15 text-[10px] font-sans font-bold tracking-widest uppercase text-maroon shadow-md">
              Beauty Studio
            </div>
          </motion.div>

          {/* Copy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <SectionHeading
              eyebrow="The Art of Indian Beauty"
              title="Nurturing Elegance, Honoring Tradition"
              align="left"
            />

            <p className="font-sans text-sm sm:text-base text-espresso/80 leading-relaxed">
              **Nikhar Makeovers & Beauty Studio** is a premier destination in the Ujjain region, providing exceptional makeover services for brides and beauty enthusiasts. We believe that styling should celebrate your natural contours while keeping traditions alive.
            </p>

            <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed">
              We specialize in custom bridal makeovers, heavy lehenga and saree draping, and professional hair design. Combining premium global cosmetics with time-tested herbal treatments, we ensure that you radiate confidence on your special day.
            </p>

            {/* Trust Pillars */}
            <div className="space-y-4 pt-4 border-t border-gold/10">
              <h4 className="font-serif text-base font-bold text-espresso tracking-wide">
                Our Trust Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-maroon">
                      {pillar.icon}
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-espresso">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-espresso/60 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Verified Review highlights */}
            <div className="pt-4 flex items-center space-x-2.5">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-sans text-xs text-espresso/70 font-semibold">
                Rated 4.8 Stars (Google Business listing)
              </span>
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
