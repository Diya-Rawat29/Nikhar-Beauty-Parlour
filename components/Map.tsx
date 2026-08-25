"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Map() {
  // Encoded URL query for standard Google Maps iframe
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m17!1s0x3963a17ddf406be7:0xfa633c888d1affe0!2sNikhar+herbal+beauty+parlour!3m8!1m3!1d3672.363451704651!2d75.6755305!3d23.0104237!3m2!1i1024!2i768!4f13.1!4m2!3d23.0104237!4d75.6755305";

  return (
    <section id="map" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
              Visit Our Studio
            </span>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
            Find Us on the Map
          </h2>
          <p className="font-sans text-sm sm:text-base text-espresso/70">
            Conveniently located on Jawahar Marg in Barnagar. Use the interactive map below to plan your route.
          </p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-gold/25 h-[450px]"
        >
          <iframe
            src={mapIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nikhar Herbal Beauty Parlour Location Map"
            className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700 ease-out"
          ></iframe>

          {/* Location Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 bg-cream/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gold/20 z-10 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-maroon text-cream rounded-lg mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-sm font-bold text-maroon">
                  Nikhar Herbal Beauty Parlour
                </h4>
                <p className="font-sans text-xs text-espresso/80 mt-0.5">
                  Jawahar Marg, Badnagar (Barnagar),<br />
                  Madhya Pradesh 456771
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/XtizRjeFomzLQs7s8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-maroon hover:bg-maroon-dark text-cream py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-2 border border-gold/15 transition-all shadow"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-light" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
