"use client";

import { Award, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-gold-dark" />,
      title: "Certified Artists",
      desc: "Our stylists hold certifications in traditional Indian bridal designs and advanced makeup styling.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-dark" />,
      title: "Premium Products",
      desc: "We use high-quality, skin-friendly cosmetics and organic herbal blends to ensure a flawless finish.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-dark" />,
      title: "Hygienic Environment",
      desc: "We enforce strict sanitization protocols for all brushes, styling tools, and salon chairs.",
    },
    {
      icon: <Heart className="w-6 h-6 text-gold-dark" />,
      title: "Bespoke Draping & Trials",
      desc: "We adapt styling, saree pleats, and makeup shades specifically to suit your requirements.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-cream relative">
      <Container>
        
        {/* Title */}
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Essence of Our Salon"
          description="Our commitments ensure that you receive premium beauty and makeover care in a safe, professional, and comfortable studio setting."
          className="mb-14"
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-cream p-6 rounded-2xl border border-gold/10 hover:border-gold/25 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
            >
              <div className="p-3.5 bg-gold-light rounded-xl group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso group-hover:text-maroon transition-colors tracking-wide">
                {feature.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
