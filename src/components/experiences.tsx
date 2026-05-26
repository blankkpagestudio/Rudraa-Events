"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Luxury Weddings",
    description:
      "Designed with timeless elegance and cinematic grandeur.",
  },
  {
    title: "Destination Events",
    description:
      "Immersive celebrations crafted across extraordinary locations.",
  },
  {
    title: "Corporate Experiences",
    description:
      "Luxury business events elevated through precision and atmosphere.",
  },
  {
    title: "Celebrity Shows",
    description:
      "Large-scale productions curated with energy, glamour, and impact.",
  },
  {
    title: "Private Celebrations",
    description:
      "Exclusive moments transformed into unforgettable experiences.",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-[#A00014]"
        >
          Signature Experiences
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[0.95]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Experiences designed to feel unforgettable.
        </motion.h2>

        {/* Experience Items */}
        <div className="mt-24 space-y-10">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border-b border-white/10 pb-10 transition duration-500 hover:border-[#A00014]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-0 top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[100px]" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                
                {/* Title */}
                <h3
                  className="text-[clamp(2.5rem,6vw,6rem)] leading-none text-white/80 transition duration-500 group-hover:text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="max-w-md text-sm md:text-base text-white/50 transition duration-500 group-hover:text-white/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}