"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    title: "Royal Haldi Celebration",
    description:
      "A cinematic luxury haldi function crafted with timeless elegance.",
    image:
      "/images/signature/signature1.jpg",
  },
  {
    title: "Pool Party Extravaganza",
    description:
      "Vibrant poolside celebrations blending opulence with lively energy.",
    image:
      "/images/signature/signature2.jpg",
  },
  {
    title: "Grand Wedding Ceremony",
    description:
      "Elegant wedding celebrations designed with sophistication and grace.",
    image:
      "/images/signature/signature3.jpg",
  },
  {
    title: "Sangeet Spectacle",
    description:
      "Colorful pre-wedding celebrations filled with music, dance, and joy.",
    image:
      "/images/signature/signature4.jpg",
  },
];

export default function SignatureEvents() {
  return (
    <section
      id="signature-events"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-[#A00014]"
        >
          Signature Events
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[0.95]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Curated experiences crafted with cinematic precision.
        </motion.h2>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-8">
                <h3
                  className="text-3xl text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {event.title}
                </h3>

                <p className="mt-4 text-white/60">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}