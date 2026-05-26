"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A00014]/30 blur-[180px]"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[140px]"
      />

      {/* Grain Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="mb-8 text-xs uppercase tracking-[0.55em] text-[#d3b4b8]"
        >
         Rudraa Events
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="max-w-5xl text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-[-0.04em] text-white"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Crafting
          <br />
          Unforgettable
          <br />
          Experiences
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="mt-10 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          Premium weddings, destination celebrations, corporate experiences,
          and luxury events designed with cinematic precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="mt-14 flex flex-col gap-5 sm:flex-row"
        >
          {/* Primary */}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full border border-[#A00014] bg-[#A00014] px-10 py-4 text-sm uppercase tracking-[0.25em] text-white transition duration-500 hover:scale-[1.03]"
          >
            <span className="relative z-10">
              Plan Your Event
            </span>

            <div className="absolute inset-0 translate-y-full bg-white transition duration-500 group-hover:translate-y-0" />

            <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 transition duration-500 group-hover:opacity-100">
              Plan Your Event
            </span>
          </a>

          {/* Secondary */}
          <a
            href="#experiences"
            className="rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 text-sm uppercase tracking-[0.25em] text-white transition duration-500 hover:border-white/30 hover:bg-white/[0.06]"
          >
            Explore Experiences
          </a>
        </motion.div>
      </div>
    </section>
  );
}