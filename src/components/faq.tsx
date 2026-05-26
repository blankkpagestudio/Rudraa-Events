"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of events does Rudraa Events specialize in?",
    answer:
      "We specialize in luxury weddings, destination celebrations, celebrity shows, private parties, and premium corporate experiences.",
  },
  {
    question: "Do you provide destination event planning?",
    answer:
      "Yes. Rudraa Events curates complete destination experiences including planning, decor, hospitality, logistics, and production.",
  },
  {
    question: "Can the event experience be fully customized?",
    answer:
      "Absolutely. Every Rudraa experience is crafted uniquely around your vision, style, and expectations.",
  },
  {
    question: "How early should we book Rudraa Events?",
    answer:
      "For large-scale luxury experiences, we recommend booking at least 4–8 months in advance.",
  },
  {
    question: "Does Rudraa Events handle celebrity and entertainment bookings?",
    answer:
      "Yes. We manage entertainment experiences, artist coordination, celebrity appearances, and large-scale productions.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A00014]/20 blur-[180px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-[#A00014]"
        >
          FAQ
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl text-[clamp(3rem,7vw,7rem)] leading-[0.95]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Everything you may want to know.
        </motion.h2>

        {/* FAQ Items */}
        <div className="mt-20 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group border-b border-white/10"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 py-8 text-left"
                >
                  <h3
                    className="text-xl md:text-3xl text-white transition duration-300 group-hover:text-white/80"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {faq.question}
                  </h3>

                  {/* Icon */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                  >
                    {isOpen ? (
                      <Minus
                        size={18}
                        className="text-white/70"
                      />
                    ) : (
                      <Plus
                        size={18}
                        className="text-white/70"
                      />
                    )}
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          delay: 0.1,
                          duration: 0.3,
                        }}
                        className="max-w-3xl pb-8 pr-12 text-base leading-relaxed text-white/60"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}