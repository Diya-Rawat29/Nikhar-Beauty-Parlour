"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, X, Sparkles, Star, Calendar, Scissors, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

interface ServiceItem {
  name: string;
  desc: string;
  icon: React.ReactNode;
  price: string;
}

interface CategoryData {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  gridClass: string;
  services: ServiceItem[];
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<CategoryData | null>(null);

  // Esc key closes the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCategory) {
        setActiveCategory(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCategory]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCategory]);

  const categories: CategoryData[] = [
    {
      id: "bridal",
      num: "01",
      title: "Bridal",
      shortDesc: "Complete high-definition bridal makeovers, hairstyle settings, and saree pleating.",
      longDesc: "Our bridal makeovers are custom tailored for traditional and contemporary weddings. We use premium skin preparation and luxury products to create a natural, flawless look.",
      image: "/images/bridal_section.jpg",
      gridClass: "md:col-span-7 md:row-span-2 min-h-[360px] md:min-h-[500px]",
      services: [
        {
          name: "Signature Bridal Makeover",
          desc: "Flawless HD or Airbrush bridal makeup tailored specifically for your wedding attire and professional photography.",
          icon: <Sparkles className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Pre-Bridal Grooming",
          desc: "Head-to-toe beauty preparation including body scrub, luxury facials, hair treatments, waxing, and threading.",
          icon: <Smile className="w-4 h-4" />,
          price: "Enquire for packages",
        },
        {
          name: "Bridal Mehndi",
          desc: "Intricate, dark-staining traditional mandalas and floral bridal henna designs for hands and feet.",
          icon: <Star className="w-4 h-4" />,
          price: "Price on consultation",
        },
      ],
    },
    {
      id: "makeup",
      num: "02",
      title: "Makeup",
      shortDesc: "Sophisticated party, engagement, and festive makeover artistry.",
      longDesc: "Luminous, light-weight occasion makeup designed to stand out under ambient and studio lighting.",
      image: "/images/gallery_makeup.jpg",
      gridClass: "md:col-span-5 min-h-[220px] md:min-h-[238px]",
      services: [
        {
          name: "Engagement Makeover",
          desc: "Luminous, romantic look designed specifically to coordinates with heavy occasion wear.",
          icon: <Smile className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Party / Guest Makeover",
          desc: "Sophisticated party look styled for family celebrations, receptions, and gatherings.",
          icon: <Star className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Festive Makeover",
          desc: "Fresh, classic look emphasizing clear skin, defined eyes, and traditional bindi styling.",
          icon: <Sparkles className="w-4 h-4" />,
          price: "Price on consultation",
        },
      ],
    },
    {
      id: "hair",
      num: "03",
      title: "Hair",
      shortDesc: "Royal braids, designer flower bun settings, and hair therapy treatments.",
      longDesc: "Professional hairstyling, customized gajra arrangements, and premium straightening or nourishing repair spas.",
      image: "/images/gallery_hair.jpg",
      gridClass: "md:col-span-5 min-h-[220px] md:min-h-[238px]",
      services: [
        {
          name: "Bridal Hairstyling & Gajra",
          desc: "Intricate traditional braids, royal flower buns, or modern styled pins arranged securely.",
          icon: <Scissors className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Luxury Hair Spa",
          desc: "Deep oil conditioning steam treatment to repair texture, lock shine, and remove dryness.",
          icon: <Sparkles className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Keratin & Straightening",
          desc: "Professional rebonding or smoothing treatments for frizz-free, manageable, and silky tresses.",
          icon: <Scissors className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Creative Cut & Blowdry",
          desc: "Haircut tailored to your facial structure, finished with a voluminous premium blowdry styling.",
          icon: <Scissors className="w-4 h-4" />,
          price: "Price on consultation",
        },
      ],
    },
    {
      id: "skin",
      num: "04",
      title: "Skin & Beauty",
      shortDesc: "Luxury herbal facials, precise threading shape, and hygienic waxing packages.",
      longDesc: "Gentle organic treatments and grooming routines prioritizing clean skin, hygiene, and visible radiance.",
      image: "/images/about_studio.jpg",
      gridClass: "md:col-span-12 min-h-[260px] md:min-h-[300px]",
      services: [
        {
          name: "Luxury Herbal Facials",
          desc: "Nourishing Gold, Fruit, or Herbal facials using organic ingredients for safe skin brightening.",
          icon: <Smile className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Skin Glow Cleanup",
          desc: "Deep pore cleaning and tan-removal treatments to reveal a fresh, clean complexion.",
          icon: <Sparkles className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Hygienic Waxing",
          desc: "Sanitized honey or chocolate waxing services for full arms and legs.",
          icon: <Smile className="w-4 h-4" />,
          price: "Price on consultation",
        },
        {
          name: "Eyebrow Threading & Shaping",
          desc: "Precise facial threading to define brows and clean upper lip lines.",
          icon: <Star className="w-4 h-4" />,
          price: "Price on consultation",
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-beige/35 relative">
      <Container>
        
        {/* Section Title */}
        <SectionHeading
          eyebrow="Signature Services"
          title="Bespoke Makeovers & Beauty Care"
          description="Click on any category block below to explore detailed service lists, consultation packages, and customized pricing."
          className="mb-14"
        />

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setActiveCategory(cat)}
              className={`group relative overflow-hidden rounded-2xl border border-gold/15 shadow-md cursor-pointer ${cat.gridClass}`}
              role="button"
              aria-haspopup="dialog"
              aria-label={`Open services list for ${cat.title}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveCategory(cat);
                }
              }}
            >
              {/* Image background with scale hover */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={`Nikhar ${cat.title} Services Detail`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-104"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                {/* Dark premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-transparent transition-opacity duration-300"></div>
              </div>

              {/* Card content content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-cream text-left space-y-2 pointer-events-none select-none">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm font-bold text-gold-light italic">
                    {cat.num}
                  </span>
                  <div className="p-2 rounded-full bg-cream/10 border border-gold/20 text-cream md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold tracking-wide text-cream">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-cream/80 max-w-md leading-relaxed">
                  {cat.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>

      {/* Services List Lightbox Modal */}
      <AnimatePresence>
        {activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" role="dialog" aria-modal="true">
            
            {/* Backdrop click close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-espresso/70 backdrop-blur-sm"
              onClick={() => setActiveCategory(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-cream rounded-2xl shadow-2xl border border-gold/25 overflow-hidden flex flex-col max-h-[85vh] z-10 text-left"
            >
              
              {/* Modal Header */}
              <div className="relative bg-maroon text-cream p-6 sm:p-8 border-b border-gold/15 shrink-0 flex justify-between items-start">
                <div className="space-y-2 max-w-[85%]">
                  <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-gold uppercase">
                    Category {activeCategory.num} • Services
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                    {activeCategory.title} Makeovers
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-cream/70 leading-relaxed font-medium">
                    {activeCategory.longDesc}
                  </p>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="p-2 text-cream/80 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-full"
                  aria-label="Close services list"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Services List */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-cream">
                {activeCategory.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-5 border-b border-gold/10 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start space-x-3.5 text-left">
                      <div className="p-2.5 bg-beige text-maroon rounded-xl shrink-0 mt-0.5 border border-gold/10">
                        {service.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-espresso">
                          {service.name}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed max-w-md font-medium">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    {/* Price tag */}
                    <div className="self-end sm:self-start bg-gold-light/40 border border-gold/20 text-maroon font-bold text-[10px] sm:text-xs font-sans tracking-wide uppercase px-3 py-1 rounded-full whitespace-nowrap">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-beige/40 border-t border-gold/15 shrink-0 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="font-sans text-xs text-espresso/60 font-semibold text-center sm:text-left">
                  Need a customized trial pack or wedding styling rates?
                </span>
                <Button
                  href="#contact"
                  onClick={() => setActiveCategory(null)}
                  variant="primary"
                  className="w-full sm:w-auto !min-h-[40px] !py-2.5 text-[10px] tracking-widest"
                  ariaLabel="Book appointment for selected services"
                >
                  <span className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gold-light" />
                    <span>BOOK ENQUIRY NOW</span>
                  </span>
                </Button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
