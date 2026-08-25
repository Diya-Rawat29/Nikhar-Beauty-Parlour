"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Map() {
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m17!1s0x3963a17ddf406be7:0xfa633c888d1affe0!2sNikhar+herbal+beauty+parlour!3m8!1m3!1d3672.363451704651!2d75.6755305!3d23.0104237!3m2!1i1024!2i768!4f13.1!4m2!3d23.0104237!4d75.6755305";

  return (
    <section id="map" className="py-14 sm:py-20 bg-cream relative">
      <Container>
        
        {/* Title */}
        <SectionHeading
          eyebrow="Visit Our Studio"
          title="Find Us in Barnagar"
          description="We are located on Jawahar Marg. Use the map below to locate us or get turn-by-turn navigation directions."
          className="mb-12"
        />

        {/* Map Container - Height is 300px on mobile and 450px on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-md border border-gold/25 h-[300px] md:h-[450px]"
        >
          <iframe
            src={mapIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nikhar Makeovers Location Map"
            className="grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
          ></iframe>

          {/* Location Overlay Card - hidden on very small mobile to save space, visible from sm up */}
          <div className="hidden sm:block absolute bottom-6 right-6 w-80 bg-cream/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gold/25 z-10 space-y-4">
            <div className="flex items-start space-x-3 text-left">
              <div className="p-2 bg-maroon text-cream rounded-lg mt-0.5 shrink-0">
                <MapPin className="w-4 h-4 text-gold-light" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-maroon">
                  Nikhar Makeovers
                </h4>
                <p className="font-sans text-xs text-espresso/80 mt-0.5 leading-relaxed">
                  Jawahar Marg, Badnagar (Barnagar),<br />
                  Madhya Pradesh 456771
                </p>
              </div>
            </div>

            <Button
              href="https://maps.app.goo.gl/XtizRjeFomzLQs7s8"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full !min-h-[40px] !py-2 text-[10px]"
              ariaLabel="Navigate to Nikhar Makeovers on Google Maps"
            >
              <span className="flex items-center space-x-2 justify-center">
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Get Directions</span>
              </span>
            </Button>
          </div>
        </motion.div>

        {/* Mobile Directions Button (only shown on small screens when overlay is hidden) */}
        <div className="block sm:hidden mt-4">
          <Button
            href="https://maps.app.goo.gl/XtizRjeFomzLQs7s8"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full text-center"
            ariaLabel="Navigate to Nikhar Makeovers on Google Maps"
          >
            <span className="flex items-center space-x-2 justify-center">
              <Navigation className="w-3.5 h-3.5 text-gold" />
              <span>Get Directions</span>
            </span>
          </Button>
        </div>

      </Container>
    </section>
  );
}
