"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import SectionLabel from "./sectionlabel";
import Heading from "./heading";
import Description from "./description";
import Link from "next/link";

const Contact = () => (
  <section className="px-4 sm:px-8 pt-16 sm:pt-20">
    <header className="flex flex-col text-center items-center justify-center mb-16 md:mb-20">
      <SectionLabel className="mb-5 sm:mb-5"> GET IN TOUCH</SectionLabel>
      <Heading className="mb-2 sm:mb-2">
        {" "}
        We&apos;re Here to Support You
      </Heading>
      <Description className=" max-w-[440px] mb-0 sm:mb-0">
        Whether you have questions, need help getting started, or want to learn
        more — reach out anytime.
      </Description>
    </header>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto bg-white rounded-[3rem] p-8 md:p-16"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 space-y-8">
          <h3 className="text-2xl sm:text-3xl font-serif font-medium text-dark">
            Contact Details:
          </h3>
          <div className="space-y-4 text-dark-green sm:text-lg">
            <p>
              <span className="font-bold block mb-1 text-dark">Email:</span>{" "}
              support.com
            </p>
            <p>
              <span className="font-bold block mb-1 text-dark">Phone:</span> +1
              (123) 456-7890
            </p>
            <p>
              <span className="font-bold block mb-1 text-dark">Address:</span>{" "}
              123 Wellness Way, Calm City, CA 90210
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-dark flex items-center justify-center hover:bg-dark transition-colors duration-300 hover:text-white "
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          <p className="text-xs text-stone-500 pt-8">
            We typically respond within 12 hours.
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-serif font-medium text-dark mb-8">
            Send Us a Message
          </h3>
          <form className="space-y-6 ">
            <div className="bg-[#F7EFE7] px-4 py-3 rounded-lg border-b-3 border-stone-300 focus-within:border-dark transition">
              <label className="block text-xs font-bold text-stone-500 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent focus:outline-none text-dark placeholder-stone-400"
              />
            </div>
            <div className="bg-[#F7EFE7] px-4 py-3 rounded-lg border-b-3 border-stone-300 focus-within:border-dark transition">
              <label className="block text-xs font-bold text-stone-500 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Message"
                className="w-full bg-transparent focus:outline-none text-dark placeholder-stone-400 resize-none"
              ></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full cursor-pointer bg-dark text-white py-4 rounded-full font-medium hover:bg-dark-green transition h-[54px] justify-center  items-center flex"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
