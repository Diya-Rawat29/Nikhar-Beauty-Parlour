"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ReviewCard from "./ui/ReviewCard";
import Button from "./ui/Button";

export default function Reviews() {
  const [mobileIdx, setMobileIdx] = useState(0);

  const testimonials = [
    {
      name: "Priyanshi Sharma",
      role: "Bridal Makeover Client",
      stars: 5,
      text: "Nikhar Makeovers is my absolute go-to! Their bridal makeover is lightweight, looks natural in person, and photographed beautifully all night. The draping was secure and comfortable. Highly recommended in the Barnagar region!",
    },
    {
      name: "Anita Rajawat",
      role: "Regular Customer",
      stars: 5,
      text: "The herbal facial treatments are incredible. Having sensitive skin, I love that they use organic options that don't cause any irritation. The salon is clean, sanitized, and very professional.",
    },
    {
      name: "Megha Jain",
      role: "Festive Styling Client",
      stars: 5,
      text: "Outstanding hair styling and mehndi work. The team is very patient, precise, and professional. Truly the most reliable ladies makeover studio in Badnagar.",
    },
  ];

  const handlePrevMobile = () => {
    setMobileIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setMobileIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-beige/25 relative">
      <Container>
        
        {/* Title */}
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Loved by Our Clients"
          description="Read real testimonials from our brides and regular salon clients."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Verified Rating Badge */}
          <div className="lg:col-span-4 flex flex-col justify-center bg-cream p-8 rounded-2xl border border-gold/25 shadow-sm text-center lg:text-left space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center justify-center lg:justify-start space-x-2">
                <span className="w-4 h-[1px] bg-gold"></span>
                <span className="text-[9px] font-sans font-bold tracking-wider text-gold uppercase">
                  Google Business Profile
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-maroon">
                Client Satisfaction
              </h3>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-2">
              <div className="flex items-center space-x-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold" />
                ))}
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-serif font-bold text-espresso">4.8</span>
                <span className="text-xs text-espresso/60 font-medium">out of 5.0</span>
              </div>
              <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                Based on verified client feedback and Google Maps local ratings.
              </p>
            </div>

            <Button
              href="https://maps.app.goo.gl/XtizRjeFomzLQs7s8"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full text-center text-[10px] tracking-widest"
              ariaLabel="View Nikhar Makeovers Google reviews in a new tab"
            >
              View on Google Maps
            </Button>
          </div>

          {/* Right Column: Responsive Testimonials List */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Desktop View: 3 cards side-by-side */}
            <div className="hidden lg:grid grid-cols-3 gap-5">
              {testimonials.map((test, idx) => (
                <ReviewCard
                  key={idx}
                  name={test.name}
                  role={test.role}
                  stars={test.stars}
                  text={test.text}
                />
              ))}
            </div>

            {/* Tablet View: 2 cards side-by-side */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
              {testimonials.slice(0, 2).map((test, idx) => (
                <ReviewCard
                  key={idx}
                  name={test.name}
                  role={test.role}
                  stars={test.stars}
                  text={test.text}
                />
              ))}
            </div>

            {/* Mobile View: Carousel (1 card at a time with slide controls) */}
            <div className="block md:hidden relative w-full space-y-4">
              <div className="relative min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ReviewCard
                      name={testimonials[mobileIdx].name}
                      role={testimonials[mobileIdx].role}
                      stars={testimonials[mobileIdx].stars}
                      text={testimonials[mobileIdx].text}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile Carousel Controls */}
              <div className="flex items-center justify-center space-x-4 pt-2">
                <button
                  onClick={handlePrevMobile}
                  className="p-2.5 rounded-full border border-gold/30 hover:bg-gold/10 text-espresso transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-sans text-[11px] font-bold text-espresso/50">
                  {mobileIdx + 1} / {testimonials.length}
                </span>
                <button
                  onClick={handleNextMobile}
                  className="p-2.5 rounded-full border border-gold/30 hover:bg-gold/10 text-espresso transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
