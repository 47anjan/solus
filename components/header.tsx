"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="text-sm font-medium text-stone-600 hover:text-dark transition-colors relative group font-sans"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark transition-all group-hover:w-full"></span>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Therapists",
    "Resources",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 px-4 sm:px-8 max-w-7xl mx-auto flex justify-between items-center relative z-50"
    >
      {/* Desktop Nav Left */}
      <div className="hidden md:flex gap-8">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
      </div>

      {/* Logo - Visible on Mobile & Desktop */}
      <motion.div className="text-2xl sm:text-3xl font-serif font-bold text-dark tracking-tight cursor-pointer relative z-50">
        Solus
      </motion.div>

      {/* Desktop Nav Right */}
      <div className="hidden md:flex gap-8">
        <NavLink href="#">Therapists</NavLink>
        <NavLink href="#">Resources</NavLink>
        <NavLink href="#">Contact</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-dark relative z-50 p-2 rounded-full hover:bg-stone-100 transition-colors"
        aria-label="Toggle Menu"
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center md:hidden overflow-hidden"
          >
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-[-5%] right-[-10%] w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute bottom-[-5%] left-[-10%] w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30"
            />

            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-6 relative z-10"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  variants={linkVariants}
                  whileHover={{ scale: 1.09 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif font-medium text-dark hover:text-green transition-colors"
                >
                  {link}
                </motion.a>
              ))}
              <motion.div variants={linkVariants} className="pt-8">
                <button
                  className="bg-dark text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg cursor-pointer hover:bg-green"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
