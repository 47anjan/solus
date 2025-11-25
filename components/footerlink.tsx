"use client";
import { motion } from "motion/react";
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children?: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}
  >
    <Link href={href} className="group block w-fit">
      <motion.span
        variants={{
          initial: { x: 0 },
          hover: { x: 5 },
        }}
        initial="initial"
        whileHover="hover"
        className="text-lg  text-green hover:text-dark-green  transition-colors duration-200 inline-flex items-center gap-2"
      >
        {children}
      </motion.span>
    </Link>
  </motion.div>
);

export default FooterLink;
