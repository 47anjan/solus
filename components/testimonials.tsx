"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
    author: "Anna R., 32",
    bgColor: "bg-beige",
    textColor: "text-dark",
    authorColor: "text-stone-500",
  },
  {
    id: 2,
    quote:
      "I was struggling with anxiety, but the mindfulness program on Solus have helped me find balance. I finally feel like prioritizing my mental well-being.",
    author: "Mark S., 41",
    bgColor: "bg-dark",
    textColor: "text-white",
    authorColor: "text-stone-400",
  },
  {
    id: 3,
    quote:
      "The wellness coaching feature is a game changer. I've built sustainable habits that have improved my daily life significantly and reduced my stress levels.",
    author: "Sarah L., 29",
    bgColor: "bg-[#F0FDF4]",
    textColor: "text-green-900",
    authorColor: "text-green-700",
  },
  {
    id: 4,
    quote:
      "Finding a community that truly understands what you're going through has been invaluable. The group sessions are my safe haven every week.",
    author: "James T., 35",
    bgColor: "bg-white border border-stone-200",
    textColor: "text-dark",
    authorColor: "text-stone-500",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Calculate width of a card + gap. Default gap-6 is 24px.
      const card = container.firstElementChild as HTMLElement;
      const scrollAmount = card ? card.offsetWidth + 24 : 424;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div className="lg:w-1/3">
            <span className="text-xs block font-bold uppercase tracking-widest text-green mb-7 sm:mb-9">
              TESTIMONIALS
            </span>
            <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl  font-serif font-medium text-dark mb-6 leading-tight max-w-4xl">
              What Our Clients <br /> Are Saying
            </h2>
            <p className="text-dark-green text-base md:text-lg  mb-7 sm:mb-9 max-w-md leading-relaxed">
              Positive experiences from users who have benefited from therapy or
              wellness programs.
            </p>
            <div className="flex gap-4">
              <motion.button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-dark hover:text-white transition cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center hover:bg-green transition cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          <div
            ref={scrollRef}
            className="lg:w-2/3 flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-smooth "
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`min-w-[300px] md:min-w-[400px] ${t.bgColor} p-8 md:p-10 rounded-4xl flex flex-col justify-between shadow-sm  transition-shadow duration-300 snap-start`}
              >
                <p
                  className={`${t.textColor} font-medium text-lg leading-relaxed mb-8 opacity-90`}
                >
                  &quot;{t.quote}&quot;
                </p>
                <p className={`${t.authorColor} font-medium`}>— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
