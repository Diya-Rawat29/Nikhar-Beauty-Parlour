"use client";

import { useState } from "react";
import { Scissors, Sparkles, Smile, Star, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [activeTab, setActiveTab] = useState("makeup");

  const categories = [
    { id: "makeup", label: "Makeup" },
    { id: "hair", label: "Hair Care" },
    { id: "skin", label: "Skin & Beauty" },
    { id: "traditional", label: "Traditional" },
  ];

  const serviceData = {
    makeup: [
      {
        name: "Bridal Makeup",
        desc: "Exquisite bridal makeup artistry combining premium global brands with traditional Indian highlights for your special day.",
        price: "Starting from ₹12,000",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Party Makeup",
        desc: "Sophisticated and trendy party makeup tailored to suit your attire, lighting, and personal preference.",
        price: "Starting from ₹3,500",
        icon: <Star className="w-5 h-5" />,
      },
      {
        name: "Engagement Makeup",
        desc: "Elegant and soft makeup to give you a radiant and photogenic glow for your ring ceremony.",
        price: "Starting from ₹6,000",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Reception Makeup",
        desc: "Stunning evening glamour makeup featuring polished skin finishes and dramatic eye styles.",
        price: "Starting from ₹8,000",
        icon: <Sparkles className="w-5 h-5" />,
      },
    ],
    hair: [
      {
        name: "Bridal Hairstyling",
        desc: "Intricate traditional braids, floral buns (gajra arrangement), or elegant modern waves decorated with jewels.",
        price: "Starting from ₹2,500",
        icon: <Scissors className="w-5 h-5" />,
      },
      {
        name: "Hair Spa & Nourishment",
        desc: "Deep conditioning steam treatments and herbal oil massages to restore shine, volume, and hair strength.",
        price: "Starting from ₹1,200",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Hair Treatment & Smoothing",
        desc: "Professional rebonding, keratin smoothing, and structural therapy for straight, frizz-free hair.",
        price: "Starting from ₹4,500",
        icon: <Scissors className="w-5 h-5" />,
      },
      {
        name: "Designer Haircut & Styling",
        desc: "Custom haircuts, blow-drys, and heated styling tailored to complement your facial structure.",
        price: "Starting from ₹800",
        icon: <Scissors className="w-5 h-5" />,
      },
    ],
    skin: [
      {
        name: "Luxury Facials",
        desc: "Premium skin rejuvenating facials (Gold, Diamond, Pearl, Herbal) to deeply cleanse and illuminate the skin.",
        price: "Starting from ₹1,500",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Herbal Cleanup",
        desc: "Gentle exfoliation, deep pore cleaning, and a soothing herbal face pack for instant freshness.",
        price: "Starting from ₹800",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Skin Glow & Brightening",
        desc: "Specialized tan removal, Vitamin-C infusions, and organic polishing treatments for a radiant complexion.",
        price: "Starting from ₹2,000",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Premium Waxing & Threading",
        desc: "Gentle facial threading, eyebrow shaping, and full-body chocolate or honey waxing services.",
        price: "Starting from ₹200",
        icon: <Sparkles className="w-5 h-5" />,
      },
    ],
    traditional: [
      {
        name: "Bridal Mehndi (Henna)",
        desc: "Bespoke full-hand and feet bridal henna featuring intricate patterns, mandalas, and personalized details.",
        price: "Starting from ₹3,000",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Saree & Lehenga Draping",
        desc: "Flawless traditional and modern draping styles (Gujarati, Bengali, South Indian, Lehenga style) ensuring comfort.",
        price: "Starting from ₹800",
        icon: <Star className="w-5 h-5" />,
      },
      {
        name: "Festive Mehndi",
        desc: "Elegant and minimal Arabic or traditional henna designs on palms for festivals and ceremonies.",
        price: "Starting from ₹500",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Pre-Bridal Grooming Bundle",
        desc: "Complete head-to-toe beauty packages including waxing, facials, spa, threading, and body polish.",
        price: "Starting from ₹7,500",
        icon: <BookOpen className="w-5 h-5" />,
      },
    ],
  };

  return (
    <section id="services" className="py-20 bg-beige/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
              Our Beauty Offerings
            </span>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
            Curated Luxury Services
          </h2>
          <p className="font-sans text-sm sm:text-base text-espresso/70">
            Select a category to explore our professional beauty treatments. Every service is tailored with premium products to ensure your absolute comfort and radiance.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-maroon text-cream border-maroon shadow-md"
                  : "bg-cream text-espresso/80 border-gold/25 hover:border-gold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {serviceData[activeTab as keyof typeof serviceData].map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="bg-cream p-6 rounded-2xl shadow-sm border border-gold/10 hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      {/* Icon */}
                      <div className="p-3 bg-gold-light rounded-xl text-gold-dark group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                        {service.icon}
                      </div>
                      {/* Price Badge */}
                      <span className="text-xs font-semibold font-sans px-3 py-1 bg-beige text-maroon rounded-full">
                        {service.price}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso group-hover:text-maroon transition-colors">
                      {service.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gold/5 flex items-center justify-between text-xs font-semibold font-sans tracking-wider uppercase text-gold-dark hover:text-maroon transition-colors cursor-pointer">
                    <a href="#contact" className="flex items-center space-x-1.5">
                      <span>Book this service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
