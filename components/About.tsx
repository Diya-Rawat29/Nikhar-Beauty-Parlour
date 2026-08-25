"use client";

import Image from "next/image";
import { Star, Award, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-gold-dark" />,
      value: "15+ Years",
      label: "Experience",
    },
    {
      icon: <Heart className="w-5 h-5 text-gold-dark" />,
      value: "5,000+",
      label: "Happy Clients",
    },
    {
      icon: <Star className="w-5 h-5 text-gold-dark" />,
      value: "4.8 Stars",
      label: "Google Rating (150+ Reviews)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Subtle traditional motif background */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-maroon">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 50 10 Q 60 40 50 90 Q 40 40 50 10" />
          <path d="M 10 50 Q 40 60 90 50 Q 40 40 10 50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Premium Studio Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gold/15">
              <Image
                src="/images/about_studio.jpg"
                alt="Nikhar Luxury Beauty Studio Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100%, 50%"
              />
            </div>
            {/* Hanging decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-gold/20 rounded-full flex items-center justify-center bg-cream shadow-md -z-1">
              <div className="w-20 h-20 border border-gold/10 border-dashed rounded-full flex items-center justify-center font-serif text-maroon text-xs tracking-wider">
                Est. 2011
              </div>
            </div>
          </motion.div>

          {/* Right: Copy Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
                  The Art of Indian Beauty
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
                Nurturing Elegance, Honoring Tradition
              </h2>
            </div>

            {/* Antique decorative divider */}
            <div className="flex items-center space-x-2 py-1">
              <span className="w-12 h-[1px] bg-gold/30"></span>
              <span className="text-gold text-sm font-serif">❦</span>
              <span className="w-12 h-[1px] bg-gold/30"></span>
            </div>

            <p className="font-sans text-espresso/80 text-base leading-relaxed">
              For over a decade, **Nikhar Herbal Beauty Parlour** has been a beloved destination in Badnagar for premium ethnic beauty treatments. We believe that true beauty is a blend of heritage and personalization.
            </p>

            <p className="font-sans text-espresso/70 text-sm leading-relaxed">
              We specialize in blending age-old herbal and natural aesthetics with high-end modern salon products. From detailed bridal styling and saree draping to deep facial treatments, our mission is to create a rejuvenating and luxury beauty experience for every client who walks through our doors.
            </p>

            {/* Bullet Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <li className="flex items-start space-x-2 text-sm text-espresso/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-dark mt-0.5" />
                <span>Bespoke Bridal Customization</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-espresso/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-dark mt-0.5" />
                <span>Hygienic, Premium Studio Space</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-espresso/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-dark mt-0.5" />
                <span>Certified Makeup Artists</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-espresso/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-dark mt-0.5" />
                <span>Premium Quality Herbal Products</span>
              </li>
            </ul>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/15">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-1.5">
                    {stat.icon}
                    <span className="font-serif text-lg sm:text-xl font-bold text-maroon tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-espresso/60 uppercase font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
