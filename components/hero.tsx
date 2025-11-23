"use client";

import { motion } from "framer-motion";
import { Button, AbstractFace, AbstractShapes } from "./UI";
import { floatAnimation } from "@/lib/animatoins";

const Hero = () => (
  <section className="px-4 sm:px-8 py-4 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-beige rounded-[3rem] p-12 sm:p-16 md:p-20 lg:min-h-[600px] flex flex-col justify-center items-center relative overflow-hidden text-center"
    >
      {/* Decorative Abstract Elements */}
      <motion.div
        variants={floatAnimation}
        animate="animate"
        className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full opacity-60 mix-blend-multiply hidden md:block"
      ></motion.div>
      <motion.div
        variants={floatAnimation}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-green-200 rounded-full opacity-40 mix-blend-multiply hidden md:block"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute top-[15%] left-[5%]  hidden sm:block"
      >
        <div className="w-20 h-20 bg-orange-400 rounded-lg flex items-center justify-center text-4xl ">
          😊
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        className="absolute sm:bottom-[15%] bottom-[10%] left-[5%] sm:left-[10%] block"
      >
        <div className="w-16 h-16 bg-pink rounded-full flex items-center justify-center text-2xl ">
          🌸
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-[20%] right-[8%] hidden sm:block"
      >
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden ">
          <AbstractFace className="w-full h-full" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute right-[5%] bottom-0 sm:bottom-[10%] sm:right-[15%] block"
      >
        <AbstractShapes className="w-32 h-32" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-serif font-medium text-dark mb-6 leading-tight max-w-4xl"
      >
        Support for Your <br /> Mental Well-being
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 text-dark-green text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
      >
        Connect with licensed therapists, counselors, and wellness coaches to
        support your journey.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10"
      >
        <Button>Get Started</Button>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
