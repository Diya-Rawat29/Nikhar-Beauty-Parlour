"use client";

import { Award, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-gold" />,
      title: "Personalized Beauty",
      desc: "Custom makeup trials specifically configured to complement your skin tone and event lighting.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Professional Expertise",
      desc: "Stylists certified in advanced hair techniques, bridal makeup, and saree pleating styling.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: "Premium Products",
      desc: "Top-tier, skin-friendly global cosmetics and organic herbal blends ensuring a clean finish.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "Traditional + Modern",
      desc: "Blending rich Indian heritage styling with modern, contemporary beauty aesthetics.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream relative border-t border-gold/10">
      <Container>
        
        {/* Title */}
        <SectionHeading
          eyebrow="Our Commitment"
          title="Why Women Choose Nikhar"
          description="We prioritize safety, comfort, and professional execution to deliver a luxury makeover experience in Indore."
          className="mb-16"
        />

        {/* Benefits Row/Grid - No heavy card frames, just clean alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-start text-left space-y-3.5"
            >
              {/* Minimal Circle Icon */}
              <div className="p-3 bg-beige/50 text-gold-dark rounded-xl border border-gold/10 shrink-0">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso tracking-wide">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
