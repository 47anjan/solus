"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Description = ({ children, className }: Props) => {
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
          transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
        },
      }}
      className={cn(
        "text-dark-green text-base md:text-lg  mb-7 sm:mb-9 max-w-md leading-relaxed",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
export default Description;
