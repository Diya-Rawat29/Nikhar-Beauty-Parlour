"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
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
    "Traditional Hairstyling / Gajra",
    "Nourishing Hair Spa / Keratin",
    "Skin Glow Facial / Cleanup",
    "Traditional Saree / Lehenga Draping",
    "Bridal or Festive Mehndi",
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
      setSubmitMessage("Thank you! Your makeover appointment request has been sent. We will contact you shortly to confirm.");
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
    <section id="contact" className="py-14 sm:py-20 bg-cream relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Studio Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Book Appointment"
                title="Let's Create Your Perfect Look"
                align="left"
              />
              <p className="font-sans text-sm sm:text-base text-espresso/70 leading-relaxed">
                Contact us to request an appointment, plan a bridal consultation, or customize package bookings. Walk-ins are subject to stylist availability.
              </p>
            </div>

            {/* Address items */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4 text-left">
                <div className="p-2.5 bg-gold-light rounded-xl text-gold-dark mt-0.5 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">
                    Our Location
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-0.5 leading-relaxed">
                    Jawahar Marg, Badnagar (Barnagar),<br />
                    Madhya Pradesh - 456771
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="p-2.5 bg-gold-light rounded-xl text-gold-dark mt-0.5 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">
                    Phone Number
                  </h4>
                  <a
                    href="tel:+919425475675"
                    className="font-sans text-xs sm:text-sm text-espresso/70 mt-0.5 hover:text-maroon transition-colors block font-semibold focus:outline-none focus:ring-2 focus:ring-gold/60 rounded"
                    aria-label="Call studio phone number"
                  >
                    +91 94254 75675
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="p-2.5 bg-gold-light rounded-xl text-gold-dark mt-0.5 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">
                    Studio Timings
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mt-0.5">
                    10:00 AM - 8:00 PM<br />
                    Monday to Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-gold/15 flex flex-wrap gap-4">
              <Button
                href="tel:+919425475675"
                variant="primary"
                className="w-full sm:w-auto"
                ariaLabel="Call Nikhar Makeovers now"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <Phone className="w-4 h-4 text-gold-light" />
                  <span>Call Now</span>
                </span>
              </Button>
              
              <Button
                href="https://wa.me/919425475675?text=Hello%20Nikhar%20Makeovers,%20I'd%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full sm:w-auto"
                ariaLabel="Send WhatsApp message in a new tab"
              >
                <span className="flex items-center space-x-2 justify-center">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>WhatsApp Chat</span>
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Appointment Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-beige/30 p-6 sm:p-8 rounded-2xl border border-gold/15 shadow-sm text-left"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-maroon mb-6 text-center lg:text-left">
              Request Appointment
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
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12"
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
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12"
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
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12"
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
                    className="bg-cream border border-gold/20 rounded-xl px-4 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans h-12"
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
                  placeholder="Tell us if you have any special requirements or timing details."
                  className="bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 font-sans resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full h-12"
                  disabled={isSubmitting}
                  ariaLabel="Submit appointment booking form"
                >
                  {isSubmitting ? "Sending Request..." : "Request Appointment"}
                </Button>
              </div>

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
      </Container>
    </section>
  );
}
