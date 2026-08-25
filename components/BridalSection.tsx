"use client";

import Image from "next/image";
import { Sparkles, Calendar, Heart, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function BridalSection() {
  const bridalPoints = [
    {
      title: "Signature Bridal Makeup",
      desc: "Impeccable skin prep, custom contouring, and flawless HD/Airbrush makeup tailored to photograph beautifully.",
      icon: <Sparkles className="w-5 h-5 text-gold-dark" />,
    },
    {
      title: "Traditional Hairstyle & Gajra",
      desc: "Intricate braids, royal buns, and fresh floral assemblies pinned securely to withstand the long hours.",
      icon: <Heart className="w-5 h-5 text-gold-dark" />,
    },
    {
      title: "Jewellery & Outfit Draping",
      desc: "Perfect pinning of heavy lehenga dupattas and saree pleats, and elegant placement of matha-pattis, naths, and necklaces.",
      icon: <Award className="w-5 h-5 text-gold-dark" />,
    },
    {
      title: "Pre-Bridal Glow Packages",
      desc: "Specially timed skin brightening facials, body polishing, and hair spas starting 3-4 weeks prior for the ultimate glow.",
      icon: <Shield className="w-5 h-5 text-gold-dark" />,
    },
  ];

  return (
    <section id="bridal" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative Traditional Border Motif */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Detailed Text & List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
                  The Bridal Experience
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
                Your Special Day, Beautifully Yours
              </h2>
              <p className="font-sans text-sm sm:text-base text-espresso/70 leading-relaxed max-w-xl">
                We understand that your wedding is the most cherished event of your life. Our signature bridal experience is dedicated to crafting a look that enhances your natural elegance while capturing the grandeur of Indian bridal traditions.
              </p>
            </div>

            {/* List */}
            <div className="space-y-6 pt-2">
              {bridalPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2.5 bg-gold-light rounded-xl mt-0.5">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-espresso">
                      {point.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center space-x-2 bg-maroon hover:bg-maroon-dark text-cream px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-lg border border-gold/25"
              >
                <Calendar className="w-4 h-4 text-gold-light" />
                <span>Book Bridal Consultation</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: High-Res Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gold/15">
              <Image
                src="/images/bridal_section.jpg"
                alt="Nikhar Indian Bride Styling and Draping"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100%, 40%"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/35 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
