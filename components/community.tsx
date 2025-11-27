"use client";

import { motion } from "framer-motion";
import { Button } from "./UI";
import SectionLabel from "./sectionlabel";
import Heading from "./heading";
import Description from "./description";
import Container from "./container";

const Community = () => (
  <section className=" py-8 ">
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className=" bg-white rounded-[3rem] p-14 md:p-16 flex flex-col md:flex-row md:items-center gap-12 relative overflow-hidden border border-stone-100 shadow-sm"
      >
        <header className="md:w-1/2 relative z-10">
          <SectionLabel>COMMUNITY</SectionLabel>
          <Heading>
            You&apos;re Not Alone <br /> on This Journey
          </Heading>
          <Description>
            Connect with others, share experiences, and find encouragement in a
            safe, supportive space.
          </Description>
          <Button>Join The Community</Button>
        </header>
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          {/* Abstract Illustration Cluster */}
          <div className="relative w-full h-64 md:h-80">
            <div className="absolute top-0 right-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 text-solus-dark"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                </svg>
              </motion.div>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 12 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="absolute bottom-10 right-0 w-32 h-32 bg-orange-500 rounded-xl flex items-center justify-center text-5xl text-solus-dark"
            >
              :)
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.4 }}
              className="absolute top-20 left-0 w-40 h-24 bg-teal-300 rounded-full -rotate-12 flex items-center justify-center overflow-hidden"
            >
              <span className="text-2xl opacity-50 font-serif">~ ~ ~</span>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.6 }}
              className="absolute bottom-0 left-20 w-24 h-24 bg-pink-300 rounded-full flex items-center justify-center text-4xl"
            >
              😊
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
              className="absolute bottom-0 right-40 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-2xl text-white font-bold"
            >
              !
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.7 }}
              className="flex gap-2 absolute bottom-[45%] right-[33%] mb-4  justify-center opacity-80"
            >
              <motion.div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center shadow-sm">
                💭
              </motion.div>
              <motion.div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center shadow-sm">
                ⚡
              </motion.div>
              <motion.div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center shadow-sm">
                🌧️
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  </section>
);

export default Community;
