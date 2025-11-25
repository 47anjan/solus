"use client";

import { motion } from "framer-motion";
import Container from "./container";
import Image from "next/image";
import { Button } from "./UI";

import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import FooterLink from "./footerlink";

const Footer = () => (
  <footer className="pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-16">
    <Container className="flex  flex-col md:flex-row gap-12">
      <article className="min-h-[516px] bg-white rounded-[50px] flex flex-1 flex-col justify-between h-full pt-14 pb-10 sm:pb-14 md:pb-16  px-12 md:px-[60px]">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-10 text-dark ">
            Solus
          </h2>
          <nav className=" flex-col text-lg  gap-4 grid grid-cols-2 sm:grid-cols-3 mb-10">
            <div className="flex flex-col gap-5">
              <FooterLink href="#">About</FooterLink>

              <FooterLink href="#">Services</FooterLink>

              <FooterLink href="#">Therapists</FooterLink>

              <FooterLink href="#">Resources</FooterLink>

              <FooterLink href="#">Contact</FooterLink>
            </div>

            <div className="flex flex-col gap-5">
              <FooterLink href="#">
                <Instagram size={20} /> Instagram
              </FooterLink>
              <FooterLink href="#">
                <Facebook size={20} /> Facebook
              </FooterLink>
              <FooterLink href="#">
                <Youtube size={20} /> YouTube
              </FooterLink>
              <FooterLink href="#">
                <Linkedin size={20} /> LinkedIn
              </FooterLink>
            </div>

            <div className="flex flex-col gap-5">
              <FooterLink href="#">Terms Of Use</FooterLink>

              <FooterLink href="#">Privacy Policy</FooterLink>
            </div>
          </nav>
        </div>
        <div className="mt-auto pt-12 text-sm text-stone-400">
          © [2035] Solus. All rights reserved.
        </div>
      </article>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className=" bg-dark rounded-[50px]  px-12 md:px-[60px] pt-[70px] md:pt-[75px] pb-16 md:pb-[70px]  relative overflow-hidden flex flex-col justify-end text-white flex-1"
      >
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl leading-snug font-serif font-medium mb-14 max-w-md">
            Find <br /> Support, <br /> Guidance, <br /> and Balance.
          </h2>
          <Button
            variant="light"
            className="hover:bg-cream cursor-pointer text-dark"
          >
            Find Support Now
          </Button>
        </div>

        <Image
          className="absolute top-9 right-0"
          width={228}
          height={244}
          alt="flowers"
          src={"/flowers.webp"}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-30 opacity-80"
        >
          <div className="w-16 h-16 text-teal-500 text-6xl">✿</div>
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-40 opacity-80"
        >
          <div className="w-12 h-12 text-orange-400 text-5xl">❀</div>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-0 right-0 translate-x-1/2  w-64 h-64 bg-orange-100 rounded-full opacity-10 blur-2xl"
        ></motion.div>
      </motion.div>
    </Container>
  </footer>
);

export default Footer;
