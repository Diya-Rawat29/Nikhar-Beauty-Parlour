"use client";

import { Award, ShieldCheck, Heart, Sparkles, Smile, Hourglass } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-gold-dark" />,
      title: "Certified Experts",
      desc: "Our makeup artists and stylists hold certifications in traditional Indian bridal designs and modern skin therapies.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-dark" />,
      title: "Premium & Herbal Products",
      desc: "We exclusively use safe, premium, skin-friendly herbal blends and top-tier global cosmetic brands for flawless results.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-dark" />,
      title: "Impeccable Hygiene",
      desc: "Strict sanitization protocols for all styling tools, workstations, and treatments to ensure a safe and healthy space.",
    },
    {
      icon: <Heart className="w-6 h-6 text-gold-dark" />,
      title: "Bespoke Consultations",
      desc: "We take time to listen, customize draping, adjust makeup undertones, and select hair ornaments tailored to you.",
    },
    {
      icon: <Hourglass className="w-6 h-6 text-gold-dark" />,
      title: "Over a Decade of Trust",
      desc: "Serving clients in Barnagar since 2011, establishing a household name for weddings and festive transformations.",
    },
    {
      icon: <Smile className="w-6 h-6 text-gold-dark" />,
      title: "Warm & Caring Vibe",
      desc: "Relax in our comfortable, welcoming luxury space. We treat every client like family.",
    },
  ];

  return (
    <section className="py-20 bg-beige/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
              Why Choose Nikhar
            </span>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
            The Secrets of Our Craft
          </h2>
          <p className="font-sans text-sm sm:text-base text-espresso/70">
            Discover the qualities that make us the preferred luxury beauty destination in the Barnagar region.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream p-8 rounded-2xl border border-gold/10 hover:border-gold/25 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
            >
              <div className="p-4 bg-gold-light rounded-2xl group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-maroon transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
