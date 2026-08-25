"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = [
    {
      src: "/images/gallery_hair.jpg",
      title: "Royal Gajra Hairstyling",
      category: "Hairstyling",
    },
    {
      src: "/images/gallery_makeup.jpg",
      title: "Traditional Eye Makeover",
      category: "Makeovers",
    },
    {
      src: "/images/gallery_mehndi.jpg",
      title: "Detailed Bridal Henna",
      category: "Traditional",
    },
    {
      src: "/images/gallery_interior.jpg",
      title: "Luxury Vanity Seating",
      category: "Studio",
    },
  ];

  // Disable background scrolling when lightbox is active
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  // Keyboard navigation listener (ESC, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, images.length]);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-cream relative">
      <Container>
        
        {/* Title */}
        <SectionHeading
          eyebrow="Our Portfolio"
          title="The Gallery of Transformations"
          description="A visual curation of our premium makeovers, detailed hairstyling arrangements, traditional mehndi designs, and salon aesthetics."
          className="mb-14"
        />

        {/* Gallery Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedIdx(idx)}
              className="relative group overflow-hidden rounded-2xl shadow-sm border border-gold/15 aspect-[4/5] cursor-zoom-in"
              role="button"
              aria-label={`Open photo lightbox for ${img.title}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedIdx(idx);
                }
              }}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
              />

              {/* Hover overlay - Hidden on mobile, active on md/lg desktop */}
              <div className="absolute inset-0 bg-maroon/85 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 select-none">
                <div className="self-end p-2 bg-cream/15 rounded-full text-cream">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-left text-cream">
                  <span className="text-[9px] font-sans font-semibold tracking-widest uppercase text-gold">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/95 p-4 md:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-cream hover:text-gold p-2 z-55 focus:outline-none focus:ring-2 focus:ring-gold rounded-full"
              aria-label="Close photo viewer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
              }}
              className="absolute left-4 p-3 rounded-full bg-cream/5 hover:bg-cream/15 text-cream hover:text-gold transition-colors z-55 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl h-[70vh] flex flex-col justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedIdx].src}
                  alt={images[selectedIdx].title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1024px"
                />
              </div>
              <div className="text-center text-cream mt-4 space-y-1">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-gold font-sans">
                  {images[selectedIdx].category}
                </span>
                <p className="font-serif text-base sm:text-lg font-semibold">
                  {images[selectedIdx].title}
                </p>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 p-3 rounded-full bg-cream/5 hover:bg-cream/15 text-cream hover:text-gold transition-colors z-55 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
