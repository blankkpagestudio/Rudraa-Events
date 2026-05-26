"use client";

import { motion } from "framer-motion";

const sections = [
  {
    number: "01",
    title: "Cinematic Experiences",
    description:
      "We don’t simply organize events — we design immersive emotional experiences crafted with atmosphere, storytelling, lighting, music, and unforgettable visual moments.",
  },
  {
    number: "02",
    title: "Precision In Every Detail",
    description:
      "From guest hospitality to stage design and execution flow, every element is refined with luxury-level precision and flawless coordination.",
  },
  {
    number: "03",
    title: "Crafted Around Your Story",
    description:
      "Every celebration is designed uniquely around the personality, vision, and emotion of the people behind it — never copied, never generic.",
  },
  {
    number: "04",
    title: "Destination Luxury",
    description:
      "Whether intimate celebrations or large-scale destination events, Rudraa Events transforms spaces into timeless cinematic environments.",
  },
];

export default function WhyRudraa() {
  return (
    <section
      id="why-rudraa"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Red Glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.8fr_1.2fr]">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-32 lg:h-fit"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#A00014]">
            Why Rudraa Events
          </p>

          <h2
            className="text-[clamp(4rem,9vw,9rem)] leading-[0.85]"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            WHY
            <br />
            <span className="text-[#A00014]">
              RUDRAA
            </span>
            <br />
            EVENTS
          </h2>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-white/45">
            Luxury experiences designed with cinematic elegance,
            immersive storytelling, and unforgettable emotional impact.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="space-y-20">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group border-b border-white/10 pb-14"
            >
              {/* Number */}
              <p className="text-sm tracking-[0.4em] text-white/25">
                {item.number}
              </p>

              {/* Title */}
              <h3
                className="mt-5 text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white transition duration-500 group-hover:text-[#A00014]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
                {item.description}
              </p>

              {/* Animated Line */}
              <div className="mt-10 h-px w-0 bg-[#A00014] transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}