"use client";
import { motion } from "framer-motion";

const Partners = () => (
  <section className="px-4  bg-cream border-t border-b border-stone-100">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto bg-white rounded-full py-8 px-8 sm:px-16 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 shadow-sm"
    >
      <span className="text-xl font-bold font-serif">Wealthsimple</span>
      <span className="text-xl font-bold font-mono flex items-center gap-1">
        <div className="w-5 h-5 bg-black text-white text-xs flex items-center justify-center font-serif">
          N
        </div>{" "}
        Notion
      </span>
      <span className="text-xl font-bold font-serif flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-black"></div> Medium
      </span>
      <span className="text-xl font-bold italic">braze</span>
      <span className="text-xl font-bold tracking-widest">SONOS</span>
    </motion.div>
  </section>
);

export default Partners;
