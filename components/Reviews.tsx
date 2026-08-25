"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      name: "Priyanshi Sharma",
      role: "Bridal Client",
      stars: 5,
      text: "Nikhar Herbal is my absolute go-to for family weddings! Their bridal makeup is lightweight, radiant, and stayed completely flawless all night. The dupatta pinning and lehenga draping were secure and extremely comfortable. Highly recommended in the Ujjain region!",
    },
    {
      name: "Anita Rajawat",
      role: "Regular Customer",
      stars: 5,
      text: "The gold glow facial and cleanup are incredible here. I have sensitive skin, so I love that they use natural herbal options that don't cause any irritation. The staff is polite, and the hygiene standards are top-notch.",
    },
    {
      name: "Megha Jain",
      role: "Festive Styling Client",
      stars: 5,
      text: "Amazing hair styling and mehndi work. I got my karwa chauth mehndi done here, and the design was so intricate and dark. They are very patient, clean, and professional. Truly the best ladies parlour in Barnagar.",
    },
  ];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-beige/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Google Rating Highlight Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center bg-cream p-8 rounded-2xl border border-gold/20 shadow-md space-y-6 text-center lg:text-left"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center lg:justify-start space-x-2">
                <span className="w-4 h-[1px] bg-gold"></span>
                <span className="text-[10px] font-semibold tracking-wider text-gold uppercase">
                  Trusted by Clients
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon">
                Google Reviews Rating
              </h2>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-gold text-gold" />
                ))}
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-serif font-bold text-espresso">4.8</span>
                <span className="text-sm text-espresso/60">out of 5.0</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-espresso/80">
                Based on 150+ Verified Google Reviews
              </span>
            </div>

            <a
              href="https://maps.app.goo.gl/XtizRjeFomzLQs7s8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-gold/10 text-maroon border border-maroon/30 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-center transition-all duration-300"
            >
              View on Google Maps
            </a>
          </motion.div>

          {/* Right Column: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 flex flex-col justify-between"
          >
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
                Client Testimonials
              </span>
            </div>

            {/* Carousel Content */}
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <MessageSquare className="w-10 h-10 text-gold-light" />
                  <p className="font-serif text-lg sm:text-xl italic text-espresso/90 leading-relaxed font-medium">
                    &ldquo;{testimonials[currentIdx].text}&rdquo;
                  </p>
                  
                  <div className="flex items-center space-x-3 pt-4">
                    <div className="flex flex-col">
                      <span className="font-sans text-sm font-bold text-maroon">
                        {testimonials[currentIdx].name}
                      </span>
                      <span className="font-sans text-[11px] tracking-wider text-espresso/50 uppercase font-semibold">
                        {testimonials[currentIdx].role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-gold/30 hover:bg-gold/10 text-espresso transition-colors focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-gold/30 hover:bg-gold/10 text-espresso transition-colors focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
