import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animatoins";

// --- SVG Illustrations ---
export const AbstractFace = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" fill="#FFD700" fillOpacity="0.2" />
    <path
      d="M30 40 Q50 30 70 40"
      stroke="#1F2937"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M35 60 Q50 75 65 60"
      stroke="#1F2937"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const AbstractShapes = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="20" y="20" width="60" height="60" rx="10" fill="#F97316" />
    <circle cx="140" cy="50" r="30" fill="#14B8A6" />
    <path d="M30 140 L80 140 L55 100 Z" fill="#F472B6" />
    <path
      d="M120 120 Q160 100 180 160"
      stroke="#1F2937"
      strokeWidth="5"
      fill="none"
    />
  </svg>
);

// --- Shared Components ---

export const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-sm font-medium text-stone-600 hover:text-dark transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark transition-all group-hover:w-full"></span>
  </a>
);

export const Button: React.FC<{
  variant?: "primary" | "outline" | "light";
  children: React.ReactNode;
  className?: string;
}> = ({ variant = "primary", children, className = "" }) => {
  const base =
    "px-6 py-2.5 rounded-full text-sm font-medium inline-block cursor-pointer";
  const styles = {
    primary: "bg-black text-white",
    outline:
      "border border-stone-300 text-stone-800 hover:border-dark hover:text-dark",
    light: "bg-white text-dark shadow-sm",
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const SectionHeading: React.FC<{
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}> = ({ title, subtitle, align = "left" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeInUp}
    className={`mb-8 sm:mb-12 ${
      align === "center" ? "text-center" : "text-left"
    }`}
  >
    {subtitle && (
      <p className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-3">
        {subtitle}
      </p>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-dark leading-tight">
      {title}
    </h2>
  </motion.div>
);
