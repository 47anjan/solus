"use client";

import React from "react";
import { motion } from "framer-motion";

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

export const Button: React.FC<{
  variant?: "primary" | "outline" | "light";
  children: React.ReactNode;
  className?: string;
}> = ({ variant = "primary", children, className = "" }) => {
  const base =
    "px-8 sm:px-[39px] h-11 sm:h-[52px] flex item-center justify-center rounded-full text-base sm:text-lg font-medium inline-block cursor-pointer";
  const styles = {
    primary:
      "bg-dark text-white hover:bg-transparent hover:outline hover:outline-black hover:text-dark duration-300 transition-colors",
    outline:
      "border border-stone-300 text-stone-800 hover:border-dark hover:text-dark",
    light: "bg-white text-dark shadow-sm",
  };
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
