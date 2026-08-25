"use client";

import { useState } from "react";
import { Scissors, Sparkles, Smile, Star, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ui/ServiceCard";

export default function Services() {
  const [activeTab, setActiveTab] = useState("makeup");

  const categories = [
    { id: "makeup", label: "Makeovers" },
    { id: "hair", label: "Hairstyling" },
    { id: "skin", label: "Skin & Beauty" },
    { id: "traditional", label: "Traditional" },
  ];

  const serviceData = {
    makeup: [
      {
        name: "Bridal Makeover",
        desc: "High-definition / Airbrush bridal makeup tailored to your skin tone, wedding attire, and photography needs.",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Party Makeover",
        desc: "Polished party makeup styled to coordinate with your outfit, ideal for family functions and gatherings.",
        icon: <Star className="w-5 h-5" />,
      },
      {
        name: "Engagement Makeover",
        desc: "Soft, luminous glow makeup designed specifically to look fresh and photogenic under event lighting.",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Festive Makeover",
        desc: "Quick, elegant makeup for festivals and cultural events, focusing on glowing skin and classic eyeliner.",
        icon: <Sparkles className="w-5 h-5" />,
      },
    ],
    hair: [
      {
        name: "Bridal Hairstyling",
        desc: "Intricate traditional braids, flower bun settings (gajra arrangement), or elegant modern styles pinned securely.",
        icon: <Scissors className="w-5 h-5" />,
      },
      {
        name: "Hair Spa Treatment",
        desc: "Deep conditioning steam spa and herbal oil therapy to repair damage, restore shine, and smooth texture.",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Smoothing & Straightening",
        desc: "Professional rebonding or keratin smoothing for straight, manageable, and frizz-free hair.",
        icon: <Scissors className="w-5 h-5" />,
      },
      {
        name: "Creative Haircuts",
        desc: "Bespoke styling and professional haircuts designed to complement your facial structure.",
        icon: <Scissors className="w-5 h-5" />,
      },
    ],
    skin: [
      {
        name: "Luxury Herbal Facials",
        desc: "Premium natural and gold facials using safe herbal formulas to deeply cleanse, hydrate, and brighten the skin.",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Skin Glow Treatments",
        desc: "Tan removal and nourishing vitamin cleanup routines for a fresh, healthy, and luminous complexion.",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Premium Waxing",
        desc: "Gentle chocolate or honey waxing services for arms, legs, and body, prioritizing hygiene.",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Eyebrow & Threading",
        desc: "Precise eyebrow shaping and upper lip threading to define and clean your facial features.",
        icon: <Sparkles className="w-5 h-5" />,
      },
    ],
    traditional: [
      {
        name: "Bridal Mehndi",
        desc: "Intricate hand and feet henna patterns featuring custom mandalas and traditional floral bridal designs.",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        name: "Saree & Lehenga Draping",
        desc: "Comfortable and secure traditional or modern draping (Gujarati, Bengali, South Indian, or Lehenga style).",
        icon: <Star className="w-5 h-5" />,
      },
      {
        name: "Festive Henna",
        desc: "Minimalist Arabic mehndi or classic simple henna designs on palms for festivals and rituals.",
        icon: <Smile className="w-5 h-5" />,
      },
      {
        name: "Pre-Bridal Grooming",
        desc: "Complete head-to-toe beauty preparation package including facial, waxing, spa, and threading.",
        icon: <BookOpen className="w-5 h-5" />,
      },
    ],
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-beige/30 relative">
      <Container>
        
        {/* Title */}
        <SectionHeading
          eyebrow="Our Studio Services"
          title="Bespoke Makeovers & Beauty Care"
          description="Explore our specialized services. We use premium, skin-safe products and custom styling techniques to ensure you look your absolute best."
          className="mb-12"
        />

        {/* Tab Buttons Container - Horizontally scrollable on mobile, centered on desktop */}
        <div className="flex border-b border-gold/15 mb-10 w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex space-x-2 md:space-x-4 pb-2 px-1 mx-auto whitespace-nowrap min-w-max">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-maroon text-cream border-maroon shadow-md"
                    : "bg-cream text-espresso/80 border-gold/25 hover:border-gold"
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Tab Content Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
            >
              {serviceData[activeTab as keyof typeof serviceData].map((service, idx) => (
                <div key={idx}>
                  <ServiceCard
                    name={service.name}
                    desc={service.desc}
                    icon={service.icon}
                    price="Price on consultation"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </Container>
    </section>
  );
}
