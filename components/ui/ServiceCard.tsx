import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

interface ServiceCardProps {
  name: string;
  desc: string;
  price?: string;
  icon: React.ReactNode;
  onBookClick?: () => void;
}

export default function ServiceCard({
  name,
  desc,
  price = "Price on consultation",
  icon,
  onBookClick,
}: ServiceCardProps) {
  return (
    <div className="bg-cream p-6 sm:p-8 rounded-2xl border border-gold/10 hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          {/* Icon */}
          <div className="p-3 bg-gold-light rounded-xl text-gold-dark group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
            {icon}
          </div>
          {/* Price Tag */}
          <span className="text-[11px] font-semibold font-sans px-3 py-1 bg-beige text-maroon rounded-full border border-gold/10">
            {price}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso group-hover:text-maroon transition-colors tracking-wide">
          {name}
        </h3>

        {/* Description Clamped */}
        <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed line-clamp-3">
          {desc}
        </p>
      </div>

      {/* Book Interaction CTA */}
      <div className="mt-6 pt-4 border-t border-gold/5">
        <Button
          href="#contact"
          variant="secondary"
          className="w-full !min-h-[40px] !py-2 text-[11px] !px-4 hover:bg-maroon hover:text-cream hover:border-maroon transition-all duration-300"
          ariaLabel={`Book appointment for ${name}`}
        >
          <span className="flex items-center space-x-1.5 justify-center">
            <span>Enquire / Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </div>
  );
}
