"use client";

import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";

export default function Reviews() {
  const testimonials = [
    {
      name: "Priyanshi Sharma",
      role: "Bridal Makeover Client",
      stars: 5,
      text: "Nikhar Makeovers is my absolute go-to! Their bridal makeover is lightweight, looks natural in person, and photographed beautifully all night. The draping was secure and comfortable. Highly recommended in the Indore region!",
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
      text: "Outstanding hair styling and mehndi work. The team is very patient, precise, and professional. Truly the most reliable ladies makeover studio in Indore.",
    },
  ];

  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-beige/30 relative">
      <Container>
        
        {/* Header Block with Rating */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-gold/50"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold uppercase font-sans">
              CLIENT TRUST
            </span>
            <span className="w-6 h-[1px] bg-gold/50"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon tracking-wide">
            Trusted by Our Clients
          </h2>

          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-sans text-xs sm:text-sm font-bold text-espresso/70 uppercase tracking-widest mt-1">
              4.8 ★ BASED ON GOOGLE REVIEWS
            </p>
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* ONE Large Featured Review */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream p-6 sm:p-10 rounded-2xl border border-gold/25 shadow-md text-left relative overflow-hidden"
          >
            {/* Background quote ornament */}
            <MessageSquare className="absolute -right-4 -bottom-4 w-32 h-32 text-gold/5 shrink-0 select-none pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex text-gold">
                  {[...Array(featured.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-gold uppercase bg-beige px-3 py-1 rounded-full border border-gold/15">
                  FEATURED TESTIMONIAL
                </span>
              </div>

              <p className="font-serif text-base sm:text-xl lg:text-2xl italic text-espresso leading-relaxed">
                &ldquo;{featured.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-gold/15 flex flex-col">
                <span className="font-sans text-sm sm:text-base font-bold text-maroon">
                  {featured.name}
                </span>
                <span className="font-sans text-[10px] tracking-widest text-espresso/50 uppercase font-bold mt-0.5">
                  {featured.role}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Smaller Supplementary Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-cream/70 p-6 sm:p-8 rounded-2xl border border-gold/15 shadow-sm text-left flex flex-col justify-between h-full hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex text-gold">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="font-sans text-xs sm:text-sm italic text-espresso/80 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/10 flex flex-col mt-4">
                  <span className="font-sans text-xs sm:text-sm font-bold text-maroon">
                    {review.name}
                  </span>
                  <span className="font-sans text-[9px] tracking-widest text-espresso/50 uppercase font-bold mt-0.5">
                    {review.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}
