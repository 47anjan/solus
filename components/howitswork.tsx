"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./UI";
import { fadeInUp } from "@/lib/animatoins";

const HowItWorks = () => (
  <section className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
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
          className="text-xs font-bold tracking-widest text-green uppercase mb-7 sm:mb-9"
        >
          HOW IT WORKS
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
            },
          }}
          className="text-4xl sm:text-5xl lg:text-[52px] font-serif font-bold text-dark mb-6 sm:mb-8 leading-tight"
        >
          We Help You <br /> Prioritize Your <br /> Mental Health
        </motion.h2>
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
          className="text-dark-green text-base sm:text-lg md:text-xl mb-7 sm:mb-9 max-w-md leading-relaxed"
        >
          Browse therapists, book a session, and start your healing journey with
          trusted professionals.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,

              transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
            },
          }}
        >
          <Button>Find A Therapist</Button>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="bg-dark overflow-hidden  rounded-[60px] px-12 sm:px-16 pt-16 sm:pt-[70px]"
        >
          <Image
            src={"/howitswork.png"}
            width={600}
            height={600}
            className="w-full max-w-[415px] object-contain h-auto mx-auto"
            alt="how its wrok"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
