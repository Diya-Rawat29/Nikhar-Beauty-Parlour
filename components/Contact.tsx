"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const servicesList = [
    "Bridal Makeover Consultation",
    "Party / Engagement Makeover",
    "Traditional Hairstyling & Gajra",
    "Nourishing Hair Spa & Treatments",
    "Skin Glow Facial & Cleanup",
    "Traditional Saree & Lehenga Draping",
    "Bridal or Festive Mehndi",
    "Threading & Waxing",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill in your Name, Phone Number, and select a Service.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! Your makeover appointment request has been sent. We will contact you shortly to confirm your booking.");
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold/50"></span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold uppercase font-sans">
                  BOOKING INQUIRY
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon leading-tight tracking-wide">
                Ready for Your <br />
                <span className="text-gold italic font-normal">Transformation?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-espresso/70 leading-relaxed font-medium">
                Submit an appointment request below or chat with us directly to plan your custom bridal makeover trial, heavy saree draping setups, or salon care.
              </p>
            </div>

            {/* Address items */}
            <div className="space-y-5 pt-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-beige text-maroon rounded-xl shrink-0 mt-0.5 border border-gold/10">
                  <MapPin className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">
                    Our Location
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-1 leading-relaxed font-semibold">
                    Jawahar Marg, Badnagar (Barnagar),<br />
                    Madhya Pradesh - 456771
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-beige text-maroon rounded-xl shrink-0 mt-0.5 border border-gold/10">
                  <Phone className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">
                    Phone & Bookings
                  </h4>
                  <a
                    href="tel:+919425475675"
                    className="font-sans text-xs sm:text-sm text-espresso/70 mt-1 hover:text-maroon transition-colors block font-bold focus:outline-none focus:ring-2 focus:ring-gold/60 rounded"
                    aria-label="Call studio direct number"
                  >
                    +91 94254 75675
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-beige text-maroon rounded-xl shrink-0 mt-0.5 border border-gold/10">
                  <Clock className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">
                    Studio Timings
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-1 font-semibold leading-relaxed">
                    10:00 AM - 8:00 PM<br />
                    Monday to Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action on left */}
            <div className="pt-6 border-t border-gold/15">
              <a
                href="https://wa.me/919425475675?text=Hello%20Nikhar%20Makeovers,%20I'd%20like%20to%20enquire%20about%20booking%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 min-h-[48px] px-8 bg-transparent hover:bg-gold/10 text-espresso border border-gold/45 hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold w-full sm:w-auto"
                aria-label="Send WhatsApp message in new window"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Appointment Booking Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-beige/30 p-6 sm:p-10 rounded-2xl border border-gold/15 shadow-sm text-left w-full"
          >
            <h3 className="font-serif text-2xl font-bold text-maroon mb-6 text-center lg:text-left tracking-wide">
              Request Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold text-espresso/70 font-sans uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold text-espresso/70 font-sans uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    required
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Selection */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="service" className="text-[10px] font-bold text-espresso/70 font-sans uppercase tracking-wider">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12 cursor-pointer"
                  >
                    <option value="" disabled>Choose a service</option>
                    {servicesList.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="date" className="text-[10px] font-bold text-espresso/70 font-sans uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12 cursor-pointer"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-bold text-espresso/70 font-sans uppercase tracking-wider">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us if you have any style preferences or specific timing requirements."
                  className="bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full h-12 text-xs font-bold tracking-widest"
                  disabled={isSubmitting}
                  ariaLabel="Submit appointment request form"
                >
                  {isSubmitting ? "SENDING REQUEST..." : "REQUEST APPOINTMENT"}
                </Button>
              </div>

              {/* Success message banner */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 text-xs sm:text-sm font-semibold font-sans leading-relaxed text-center"
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
