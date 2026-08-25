"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  gridClass: string;
}

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      src: "/images/gallery_makeup.jpg",
      title: "Traditional Eye Makeover",
      category: "Makeovers",
      gridClass: "md:col-span-4 md:row-span-2 min-h-[300px] md:min-h-[500px]",
    },
    {
      src: "/images/bridal_section.jpg",
      title: "Royal Bridal Styling",
      category: "Bridal",
      gridClass: "md:col-span-8 min-h-[200px] md:min-h-[238px]",
    },
    {
      src: "/images/gallery_hair.jpg",
      title: "Floral Bun Hairstyling",
      category: "Hairstyling",
      gridClass: "md:col-span-4 min-h-[200px] md:min-h-[238px]",
    },
    {
      src: "/images/gallery_mehndi.jpg",
      title: "Detailed Bridal Henna",
      category: "Traditional",
      gridClass: "md:col-span-4 min-h-[200px] md:min-h-[238px]",
    },
    {
      src: "/images/gallery_interior.jpg",
      title: "Luxury Vanity Seating",
      category: "Studio",
      gridClass: "md:col-span-8 min-h-[200px] md:min-h-[238px]",
    },
    {
      src: "/images/about_studio.jpg",
      title: "Premium Hair Lounge",
      category: "Studio",
      gridClass: "md:col-span-4 min-h-[240px] md:min-h-[360px]",
    },
    {
      src: "/images/hero_bridal.jpg",
      title: "Classic Indian Bridal Face",
      category: "Bridal",
      gridClass: "md:col-span-8 min-h-[240px] md:min-h-[360px]",
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
    <section id="gallery" className="py-16 sm:py-24 bg-cream relative">
      <Container>
        
        {/* Title */}
        <SectionHeading
          eyebrow="Our Portfolio"
          title="The Gallery of Transformations"
          description="Real looks. Real moments. Beautiful transformations. Browse through our premium makeup styling, intricate braids, and studio setup."
          className="mb-14"
        />

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedIdx(idx)}
              className={`relative group overflow-hidden rounded-2xl shadow-sm border border-gold/15 cursor-zoom-in ${
                img.gridClass
              } ${idx === 0 ? "col-span-2" : "col-span-1"} ${idx === 6 ? "col-span-2" : "col-span-1"}`}
              role="button"
              aria-label={`Open photo viewer for ${img.title}`}
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
                className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-104"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 500px"
              />

              {/* Hover overlay on desktop */}
              <div className="absolute inset-0 bg-maroon/85 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 select-none z-10 text-left">
                <div className="self-end p-2.5 bg-cream/15 rounded-full text-cream border border-gold/15">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-cream">
                  <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-gold">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-base font-bold leading-tight">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Instagram Redirection Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://www.instagram.com/nikharmakeovers/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 min-h-[48px] px-8 bg-transparent hover:bg-gold/10 text-espresso border border-gold/45 hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="View more makeovers on official Instagram profile"
          >
            <svg
              className="w-4 h-4 text-maroon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>VIEW INSTAGRAM PORTFOLIO</span>
          </a>
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
              className="relative w-full max-w-4xl h-[70vh] flex flex-col justify-center text-center"
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
                <span className="text-[10px] tracking-widest uppercase font-bold text-gold font-sans">
                  {images[selectedIdx].category}
                </span>
                <p className="font-serif text-lg font-bold">
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
