"use client";

import { motion } from "framer-motion";

import Container from "./container";
import { fadeInUp, staggerContainer } from "@/lib/animatoins";
import SectionLabel from "./sectionlabel";
import Heading from "./heading";
import Description from "./description";
import Image from "next/image";

const Services = () => (
  <section className=" py-16 sm:py-24 bg-white">
    <Container>
      <header className="flex flex-col text-center items-center justify-cente mb-16 md:mb-20">
        <SectionLabel className="mb-5 sm:mb-5">SERVICES</SectionLabel>
        <Heading className="mb-5 sm:mb-5">
          Your Path to <br /> Well-being
        </Heading>
        <Description className=" max-w-[476px] mb-0 sm:mb-0">
          Discover expert guidance for a healthier mind and balanced life.
        </Description>
      </header>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 md:gap-10  md:mb-10"
      >
        {/* Card 1 */}
        <motion.article
          className=" flex flex-col gap-8 px-[60px] pt-16 md:pt-[75px] pb-16 md:pb-20 rounded-[60px] relative overflow-hidden shadow-sm bg-[#F9E6D0] isolate"
          variants={fadeInUp}
        >
          <h3 className="text-4xl md:text-5xl leading-snug font-semibold">
            Mindfulness & <br /> Meditation
          </h3>
          <p className="text-lg max-w-[295px]">
            Guided meditation sessions and stress management techniques.
          </p>
          <button className=" text-lg sm:text-xl w-fit font-semibold px-8 h-[52px] flex items-center justify-center hover:text-white hover:bg-dark border-dark bg-transparent text-dark border rounded-full cursor-pointer transition-colors duration-300">
            Learn more
          </button>

          <Image
            className="absolute w-[229px] z-[-1] h-auto bottom-[74px] right-[52px]"
            width={240}
            height={340}
            alt="love bg"
            src={"/love.webp"}
          />
        </motion.article>

        {/* Card 2 */}
        <motion.article
          className="px-[60px] flex flex-col gap-8 pt-16 md:pt-[75px] pb-16 md:pb-20 rounded-[60px] relative overflow-hidden shadow-sm  isolate"
          variants={fadeInUp}
        >
          <h3 className="text-4xl md:text-5xl leading-snug font-semibold">
            One-on-One <br /> Therapy
          </h3>
          <p className="text-lg max-w-[295px]">
            Virtual and in-person therapy sessions with licensed professionals.
          </p>
          <button className=" text-lg sm:text-xl w-fit font-semibold px-8 h-[52px] flex items-center justify-center hover:text-white hover:bg-dark border-dark bg-transparent text-dark border rounded-full cursor-pointer transition-colors duration-300">
            Learn more
          </button>

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-32 h-32 bg-orange-300 rounded-tl-full opacity-80"
          ></motion.div>
        </motion.article>
      </motion.div>

      <article className="px-[60px] pt-16 md:pt-[75px] pb-16 md:pb-[78px] rounded-[60px] relative overflow-hidden shadow-sm flex flex-col gap-6 sm:gap-8 isolate">
        <h3 className="text-4xl md:text-5xl leading-snug font-semibold">
          Wellness Coaching
        </h3>
        <div className="space-y-6 text-dark-green">
          <p className="text-lg sm:text-xl max-w-[617px]">
            Personalized guidance to help you build healthier habits, manage
            stress, and achieve balance in all areas of your life.
          </p>
          <p className="text-lg sm:text-xl max-w-[617px]">
            Our wellness coaches support you in creating sustainable routines
            for mental, emotional, and physical well-being.
          </p>
        </div>
        <button className=" text-lg sm:text-xl w-fit font-semibold px-8 h-[52px] flex items-center justify-center text-white bg-dark border-dark hover:bg-transparent hover:text-dark border rounded-full cursor-pointer transition-colors duration-300">
          Learn more
        </button>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="w-fit hidden lg:block  absolute z-[-1] bottom-0 right-0"
        >
          <Image
            className=" w-[510px]  h-auto "
            width={600}
            height={600}
            alt="love bg"
            src={"/happy-bg.webp"}
          />
        </motion.div>
      </article>
    </Container>
  </section>
);

export default Services;
