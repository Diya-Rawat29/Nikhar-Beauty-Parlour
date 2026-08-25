"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    "Bridal Makeup Consultation",
    "Party / Engagement Makeup",
    "Traditional Hair Styling / Gajra",
    "Nourishing Hair Spa / Keratin",
    "Skin Glow Facial / Cleanup",
    "Traditional Saree / Lehenga Draping",
    "Bridal or Festive Mehndi",
    "Threading / Waxing",
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
    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! Your appointment request has been sent. We will contact you shortly to confirm.");
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
                Let&apos;s Create Your Perfect Look
              </h2>
              <p className="font-sans text-sm sm:text-base text-espresso/70 leading-relaxed">
                Contact us to request an appointment, plan a bridal consultation, or customize package bookings. Walk-ins are subject to stylist availability.
              </p>
            </div>

            {/* Address cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-gold-light rounded-xl text-gold-dark mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-espresso uppercase tracking-wider">
                    Our Location
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-0.5">
                    Jawahar Marg, Badnagar (Barnagar),<br />
                    Madhya Pradesh - 456771
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-gold-light rounded-xl text-gold-dark mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-espresso uppercase tracking-wider">
                    Phone Number
                  </h3>
                  <a
                    href="tel:+919425475675"
                    className="font-sans text-xs sm:text-sm text-espresso/70 mt-0.5 hover:text-maroon transition-colors block"
                  >
                    +91 94254 75675
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-gold-light rounded-xl text-gold-dark mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-espresso uppercase tracking-wider">
                    Studio Timings
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-0.5">
                    10:00 AM - 8:00 PM<br />
                    Monday to Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-gold/15 flex flex-wrap gap-4">
              <a
                href="tel:+919425475675"
                className="bg-maroon hover:bg-maroon-dark text-cream px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center space-x-2 shadow-md border border-gold/20"
              >
                <Phone className="w-4 h-4 text-gold-light" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919425475675?text=Hello%20Nikhar%20Herbal%20Beauty%20Parlour,%20I'd%20like%20to%20book%20a%20salon%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-cream px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center space-x-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-beige/30 p-8 rounded-2xl border border-gold/15 shadow-md"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-maroon mb-6 text-center lg:text-left">
              Request An Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-espresso/70 font-sans uppercase">
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
                    className="bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold font-sans"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="phone" className="text-xs font-semibold text-espresso/70 font-sans uppercase">
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
                    className="bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Selection */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="service" className="text-xs font-semibold text-espresso/70 font-sans uppercase">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold font-sans"
                  >
                    <option value="" disabled>Choose a service</option>
                    {servicesList.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="date" className="text-xs font-semibold text-espresso/70 font-sans uppercase">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold font-sans"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-espresso/70 font-sans uppercase">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us if you have any special requirements, timings, or details."
                  className="bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold font-sans resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-maroon hover:bg-maroon-dark disabled:bg-maroon/50 text-cream py-3.5 rounded-xl text-xs font-semibold uppercase tracking-widest shadow-md border border-gold/20 transition-all cursor-pointer"
              >
                {isSubmitting ? "Sending Request..." : "Request Appointment"}
              </button>

              {/* Success message banner */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 text-xs sm:text-sm font-medium font-sans leading-relaxed text-center"
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
