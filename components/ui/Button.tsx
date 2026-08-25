import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 min-h-[46px] px-8 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-maroon hover:bg-maroon-dark text-cream border border-gold/20 shadow-md hover:shadow-lg",
    secondary: "bg-transparent hover:bg-gold/10 text-espresso border border-gold/40 hover:border-gold",
    accent: "bg-gold-gradient hover:opacity-95 text-espresso shadow-md border border-gold-dark/20",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // If it's an external link or hash link, use standard <a> or Next.js Link
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
