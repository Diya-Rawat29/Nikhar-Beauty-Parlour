"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/Container";

export default function BridalSection() {
  const steps = [
    {
      num: "01",
      title: "Consultation & Trials",
      desc: "Personalized skin check and palette alignment to match your wedding outfit and jewelry design.",
    },
    {
      num: "02",
      title: "Flawless Makeover",
      desc: "High-definition / Airbrush face base application using luxury skin preparation formulations.",
    },
    {
      num: "03",
      title: "Hair & Gajra Styling",
      desc: "Royal braided buns, fresh jasmine flower configurations, and secure pin settings.",
    },
    {
      num: "04",
      title: "Final Lehenga Draping",
      desc: "Precision pleating and dupatta settings to ensure ultimate elegance and movement comfort.",
    },
  ];

  return (
    <section id="bridal" className="py-16 sm:py-24 bg-maroon text-cream relative overflow-hidden">
      {/* Decorative gold background geometry */}
      <div className="absolute right-[-100px] top-[-100px] w-[350px] h-[350px] border border-gold/10 rounded-full -z-1 pointer-events-none opacity-25"></div>
      <div className="absolute left-[-50px] bottom-[-50px] w-[200px] h-[200px] border border-gold/5 rounded-full -z-1 pointer-events-none opacity-15"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Right Column: Editorial Bridal Portrait (Image first on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-1 lg:order-2 relative w-full aspect-[4/5] max-w-[380px] lg:max-w-none mx-auto"
          >
            {/* Elegant double gold borders to give an editorial fashion feel */}
            <div className="absolute -inset-2 border border-gold/30 rounded-2xl pointer-events-none"></div>
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-gold/20">
              <Image
                src="/images/bridal_section.jpg"
                alt="Detailed Indian Bridal makeover look and gold jewelry"
                fill
                className="object-cover scale-102"
                sizes="(max-width: 1024px) 90vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 via-transparent to-transparent"></div>
            </div>
            {/* Subtle gold design overlay */}
            <div className="absolute top-4 left-4 text-gold/40 text-xs font-serif select-none pointer-events-none">
              ❦ NIKHAR BRIDAL STUDIO
            </div>
          </motion.div>

          {/* Left Column: Bridal Details & Journey (Second on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 order-2 lg:order-1 space-y-6 lg:space-y-8 text-left"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold/50"></span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold uppercase font-sans">
                  SIGNATURE EXPERIENCE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-wide">
                Your Special Day, <br />
                <span className="text-gold italic font-normal">Beautifully Yours.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-cream/80 leading-relaxed max-w-xl font-medium">
                We believe that every bride deserves to radiate confidence. Our custom bridal styling focuses on highlight styling, premium makeup resilience, and saree drape security, ensuring you remain comfortable and stunning.
              </p>
            </div>

            {/* 4-Step Bridal Journey */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-gold/15">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3.5 text-left">
                  <span className="font-serif text-lg font-bold text-gold italic leading-none shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-cream">
                      {step.title}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-cream/70 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bridal CTA Button */}
            <div className="pt-4 flex">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 min-h-[50px] px-10 bg-gold-gradient hover:opacity-95 text-espresso shadow-lg border border-gold-dark/20 focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Request personalized bridal consulting schedule"
              >
                <span>Plan Your Bridal Look →</span>
              </a>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
