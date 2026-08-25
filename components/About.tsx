"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/Container";

export default function About() {
  const trustPoints = [
    {
      num: "01",
      title: "Professional Expertise",
      desc: "Stylists certified in premium bridal design & heavy draping.",
    },
    {
      num: "02",
      title: "Personalized Styling",
      desc: "Tailored makeup trial sessions to match your exact features.",
    },
    {
      num: "03",
      title: "Premium Experience",
      desc: "Luxury product lines ensuring comfort and flawless capture.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-cream relative overflow-hidden">
      {/* Subtle motif background overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.015] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-maroon">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 50 10 Q 60 40 50 90 Q 40 40 50 10" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Studio Portrait (Large Image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.1] rounded-2xl overflow-hidden shadow-2xl border border-gold/15"
          >
            <Image
              src="/images/about_studio.jpg"
              alt="Inside Nikhar Makeovers Premium Beauty Studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
            {/* Elegant luxury studio tag */}
            <div className="absolute bottom-4 right-4 bg-cream/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gold/15 text-[10px] font-sans font-bold tracking-widest uppercase text-maroon shadow-md">
              STUDIO INTERIOR
            </div>
          </motion.div>

          {/* Right Column: Editorial Brand Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 lg:space-y-8 text-left"
          >
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold/50"></span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold uppercase font-sans">
                  THE NIKHAR EXPERIENCE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon leading-tight tracking-wide">
                Nurturing Elegance, <br />
                Honoring Tradition
              </h2>
            </div>

            {/* Paragraph */}
            <p className="font-sans text-sm sm:text-base text-espresso/80 leading-relaxed font-medium">
              Nikhar is a premium makeover and beauty studio based in Barnagar, Ujjain. We specialize in custom-crafted bridal styling, intricate hairstyling, saree pleating, and high-end skin care treatments. Our philosophy centers on emphasizing your organic contours, ensuring you look breathtakingly elegant yet traditional.
            </p>

            {/* 3 Small Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gold/15">
              {trustPoints.map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif text-xs font-bold text-gold italic">{item.num}</span>
                    <h4 className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-espresso">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[11px] text-espresso/60 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 text-left">
              <a
                href="#services"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-maroon hover:text-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold rounded py-1 px-2 border-b border-maroon hover:border-gold"
              >
                <span>Discover Our Services →</span>
              </a>
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
