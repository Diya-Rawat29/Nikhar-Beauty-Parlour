"use client";

import { Star, MapPin, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";

export default function TrustStrip() {
  const items = [
    {
      icon: <Star className="w-4 h-4 text-gold fill-gold shrink-0" />,
      text: "4.8 ★ Google Rating",
      link: "https://maps.app.goo.gl/Rq7nc4vtVdPjG9Jf6",
    },
    {
      icon: <Award className="w-4 h-4 text-gold shrink-0" />,
      text: "Bridal & Occasion Makeup",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-gold shrink-0" />,
      text: "Premium Beauty Treatments",
    },
    {
      icon: <MapPin className="w-4 h-4 text-gold shrink-0" />,
      text: "Located in Barnagar, MP",
      link: "#map",
    },
  ];

  return (
    <div className="bg-beige/40 border-y border-gold/15 py-4">
      <Container>
        <div className="flex overflow-x-auto no-scrollbar scroll-smooth md:justify-center items-center gap-8 md:gap-12 py-1 px-2 whitespace-nowrap">
          {items.map((item, index) => {
            const Content = (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2.5 text-espresso/90 hover:text-maroon transition-colors group cursor-pointer"
              >
                <div className="p-1.5 bg-cream rounded-full border border-gold/10 group-hover:bg-gold/10 transition-colors">
                  {item.icon}
                </div>
                <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  {item.text}
                </span>
              </motion.div>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus:outline-none focus:ring-1 focus:ring-gold rounded-lg px-2 py-1"
              >
                {Content}
              </a>
            ) : (
              <div key={index} className="px-2 py-1">
                {Content}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
