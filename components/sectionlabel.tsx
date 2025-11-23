"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className }: Props) => {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        },
      }}
      className={cn(
        "text-xs font-bold tracking-widest text-green uppercase mb-7 sm:mb-9",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
export default SectionLabel;
