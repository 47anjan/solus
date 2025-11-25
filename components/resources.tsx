"use client";

import { motion } from "framer-motion";

import Container from "./container";
import SectionLabel from "./sectionlabel";
import Description from "./description";
import Heading from "./heading";

const resourcesData = [
  {
    title: "Articles & Guides",
    desc: "Practical tips on stress management, mindfulness, and emotional resilience.",
    btn: "Explore",
    color:
      "bg-amber-500 border-amber-500 hover:text-amber-500 hover:bg-transparent",
  },
  {
    title: "Meditation & Relaxation",
    desc: "Audio sessions for guided meditation and deep breathing exercises.",
    btn: "Explore",
    color:
      "bg-teal-500 border-teal-500 hover:text-teal-500 hover:bg-transparent",
  },
  {
    title: "Webinars & Workshops",
    desc: "Live and recorded sessions with mental health professionals.",
    btn: "Explore",
    color:
      "bg-pink-400 border-pink-400 hover:text-pink-400 hover:bg-transparent",
  },
];

const Resources = () => (
  <section className=" py-16 md:py-20 max-w-7xl mx-auto text-center">
    <Container>
      <header className="flex flex-col text-center items-center justify-center mb-16 md:mb-20">
        <SectionLabel className="mb-5 sm:mb-5">EXPLORE & LEARN</SectionLabel>
        <Heading className="mb-2 sm:mb-2">
          Resources for Your Well-being
        </Heading>
        <Description className=" max-w-xl mb-0 sm:mb-0">
          Explore expert insights, self-care guides, and tools to support your
          mental health.
        </Description>
      </header>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourcesData.map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                },
              },
            }}
            className="bg-white px-14 py-14 lg:px-[70px] lg:py-[60px] rounded-[60px] flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-2xl font-serif font-bold text-dark mb-3 text-center px-8">
              {item.title}
            </h3>
            <p className="text-stone-500  mb-8 leading-relaxed">{item.desc}</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-2.5 rounded-full text-white text-sm font-medium border ${item.color} cursor-pointer transition-colors duration-200`}
            >
              {item.btn}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
);

export default Resources;
