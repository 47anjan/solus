"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./UI";
import Heading from "./heading";
import Description from "./description";

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

        <Heading>
          We Help You <br /> Prioritize Your <br /> Mental Health
        </Heading>
        <Description>
          Browse therapists, book a session, and start your healing journey with
          trusted professionals.
        </Description>
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
