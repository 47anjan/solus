"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animatoins";
import SectionLabel from "./sectionlabel";
import Heading from "./heading";
import Description from "./description";
import Image from "next/image";
import Container from "./container";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I book a therapy session?",
      a: "You can book a session directly through our 'Find A Therapist' portal. Browse profiles, check availability, and select a time that works for you.",
    },
    {
      q: "Are online sessions available?",
      a: "Yes, most of our therapists offer secure video conferencing sessions for your convenience and comfort.",
    },
    {
      q: "What's the difference between therapy and coaching?",
      a: "Therapy generally focuses on mental health diagnoses and healing past trauma, while coaching focuses on setting goals and future-oriented personal development.",
    },
    {
      q: "Do I need a subscription to access services?",
      a: "No, you can book individual sessions. However, we do offer subscription packages for those seeking regular support at a reduced rate.",
    },
    {
      q: "Can I switch therapists if I don't feel the right connection?",
      a: "Absolutely. Finding the right fit is crucial. You can switch therapists at any time through your user dashboard.",
    },
    {
      q: "Is my information and session history kept confidential?",
      a: "Yes, Solus is fully HIPAA compliant. Your privacy and confidentiality are our top priorities.",
    },
    {
      q: "How long is a typical session?",
      a: "Standard therapy sessions are 50 minutes long, though some therapists may offer longer sessions. You can find this information on each therapist's profile.",
    },
  ];

  return (
    <section className=" py-16 sm:py-20 bg-solus-cream">
      <Container>
        <div className=" lg:items-end  flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <header className="mb-12">
              <SectionLabel>NEED HELP?</SectionLabel>
              <Heading>
                Frequently <br /> Asked Questions
              </Heading>
              <Description className="mb-0 sm:mb-0">
                Find answers to common questions about our services, therapy,
                and mental well-being.
              </Description>
            </header>
            <div className="relative isolate">
              <Image
                className="w-[376px] h-auto relative z-20 mx-auto"
                src={"/happy-mind.webp"}
                width={400}
                height={700}
                alt="happy mind"
              />
              <div className="absolute bottom-0 w-full bg-[#F9E6D0] rounded-[60px] h-[385px]"></div>
            </div>
          </div>

          <motion.div
            className="lg:w-2/3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <motion.button
                    title="open"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    key={idx}
                    variants={fadeInUp}
                    className={`rounded-2xl cursor-pointer w-full p-6 transition-all duration-300 border ${
                      isOpen
                        ? "bg-white border-stone-200 shadow-lg shadow-stone-100"
                        : "bg-white border-transparent hover:border-stone-200 "
                    }`}
                  >
                    <article
                      className="w-full flex justify-between items-center text-left font-medium text-stone-800 text-base sm:text-lg group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`transition-colors duration-300 ${
                          isOpen
                            ? "text-stone-900"
                            : "text-stone-600 group-hover:text-stone-900"
                        }`}
                      >
                        {faq.q}
                      </span>

                      {/* Rotatable Icon Container */}
                      <motion.div
                        className={`ml-4 p-2 rounded-full shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? "bg-stone-900 text-white"
                            : "bg-stone-100 text-stone-600 group-hover:bg-stone-200"
                        }`}
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      >
                        {/* We only need Plus here; rotating it 45deg turns it into an X (close) */}
                        <Plus className="w-5 h-5" strokeWidth={2} />
                      </motion.div>
                    </article>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 text-start text-stone-500 leading-relaxed max-w-[90%]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
