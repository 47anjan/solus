"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: Props) => {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        },
      }}
      className={cn(
        "relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-serif font-medium text-dark mb-6 leading-tight max-w-4xl",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};
export default Heading;
