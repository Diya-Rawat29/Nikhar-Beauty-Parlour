"use client";

import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Map() {
  const mapIframeUrl = "https://maps.google.com/maps?q=12-Kha,%20Dampura,%20Harsola,%20Indore,%20Madhya%20Pradesh%20453441&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="map" className="py-16 sm:py-24 bg-cream relative border-t border-gold/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Address and timings (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 lg:space-y-8 text-left"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold/50"></span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold uppercase font-sans">
                  STUDIO LOCATION
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon tracking-wide">
                Find Us in Indore
              </h2>
              <p className="font-sans text-sm sm:text-base text-espresso/70 leading-relaxed font-medium">
                We are located in Harsola, Indore. Visit our studio to experience premium Indian bridal makeovers and beauty care.
              </p>
            </div>

            {/* Direct Details Grid */}
            <div className="space-y-5">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">Address</h4>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-1 leading-relaxed font-semibold">
                    12-Kha, Dampura, Harsola, Indore,<br />
                    Madhya Pradesh - 453441
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">Studio Hours</h4>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-1 font-semibold">
                    10:00 AM - 8:00 PM (Open 7 Days)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">Contact Phone</h4>
                  <a
                    href="tel:+918827417126"
                    className="font-sans text-xs sm:text-sm text-espresso/70 mt-1 block font-bold hover:text-maroon transition-colors"
                  >
                    +91 88274 17126
                  </a>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-2">
              <Button
                href="https://maps.app.goo.gl/Rq7nc4vtVdPjG9Jf6"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full sm:w-auto text-xs font-bold tracking-widest !min-h-[48px]"
                ariaLabel="Navigate to Nikhar Makeovers on Google Maps"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <Navigation className="w-4 h-4 text-gold" />
                  <span>GET DIRECTIONS ON MAP</span>
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Google Maps embed (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-lg border border-gold/25 h-[300px] sm:h-[340px] md:h-[450px] w-full"
          >
            <iframe
              src={mapIframeUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nikhar Makeovers Studio Location Map"
              className="grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
            ></iframe>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
