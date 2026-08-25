import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <div className={`flex flex-col max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignClass} space-y-3 ${className}`}>
      {/* Eyebrow */}
      <div className="flex items-center space-x-2">
        <span className="w-6 h-[1px] bg-gold/50"></span>
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold uppercase font-sans">
          {eyebrow}
        </span>
        <span className="w-6 h-[1px] bg-gold/50"></span>
      </div>

      {/* Ornament Divider */}
      <div className="flex items-center space-x-2 py-0.5">
        <span className="w-8 h-[1px] bg-gold/30"></span>
        <span className="text-gold text-xs font-serif">❦</span>
        <span className="w-8 h-[1px] bg-gold/30"></span>
      </div>

      {/* Main Title */}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon leading-tight tracking-wide">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="font-sans text-sm sm:text-base text-espresso/70 leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
