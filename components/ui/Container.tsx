import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div
      id={id}
      className={`w-full max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
