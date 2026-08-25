"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/images/gallery_hair.jpg",
      title: "Royal Bridal Bun & Flowers",
      category: "Hairstyling",
    },
    {
      src: "/images/gallery_makeup.jpg",
      title: "Shimmering Eye Artistry",
      category: "Makeup",
    },
    {
      src: "/images/gallery_mehndi.jpg",
      title: "Intricate Bridal Henna",
      category: "Traditional",
    },
    {
      src: "/images/gallery_interior.jpg",
      title: "Luxury Vanity Details",
      category: "Studio",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
              Our Visual Portfolio
            </span>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
            The Gallery of Transformations
          </h2>
          <p className="font-sans text-sm sm:text-base text-espresso/70">
            Browse through some of our premium bridal transformations, intricate hairstyles, traditional henna, and parlour aesthetics.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(img.src)}
              className="relative group overflow-hidden rounded-2xl shadow-sm border border-gold/15 aspect-square cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100%, (max-width: 1024px) 50%, 25%"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-maroon/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="self-end p-2 bg-cream/15 rounded-full text-cream">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-left text-cream">
                  <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-gold">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-cream hover:text-gold p-2 z-55"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[75vh]"
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1024px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
