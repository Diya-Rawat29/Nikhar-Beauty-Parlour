import React from "react";
import { Star, MessageSquare } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  stars: number;
  text: string;
  className?: string;
}

export default function ReviewCard({
  name,
  role,
  stars = 5,
  text,
  className = "",
}: ReviewCardProps) {
  return (
    <div className={`bg-cream p-6 sm:p-8 rounded-2xl border border-gold/15 shadow-sm space-y-4 flex flex-col justify-between h-full ${className}`}>
      <div className="space-y-4">
        {/* Stars & Quote Icon */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < stars ? "fill-gold text-gold" : "text-gold/20"
                }`}
              />
            ))}
          </div>
          <MessageSquare className="w-6 h-6 text-gold/20 shrink-0" />
        </div>

        {/* Testimonial Text */}
        <p className="font-sans text-xs sm:text-sm italic text-espresso/80 leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>
      </div>

      {/* Profile */}
      <div className="pt-4 border-t border-gold/5 flex flex-col items-start">
        <span className="font-sans text-sm font-bold text-maroon">{name}</span>
        <span className="font-sans text-[10px] tracking-wider text-espresso/50 uppercase font-semibold mt-0.5">
          {role}
        </span>
      </div>
    </div>
  );
}
