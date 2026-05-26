"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    name: "Baby Shower",
    image:
      "/images/gallery/gallery1.jpg",
  },
  {
    name: "Wedding",
    image:
      "/images/gallery/gallery2.jpg",
  },
  {
    name: "Destination Wedding",
    image:
      "/images/gallery/gallery3.jpg",
  },
  {
    name: "Grand Wedding",
    image:
      "/images/gallery/gallery4.jpg",
  },
  {
    name: "Ring Ceremony",
    image:
      "/images/gallery/gallery5.jpg",
  },
  {
    name: "Destination Wedding Ceremony",
    image:
      "/images/gallery/gallery6.jpg",
  },
  {
    name: "Wedding Ceremony",
    image:
      "/images/gallery/gallery7.jpg",
  },
  {
    name: "Reception",
    image:
      "/images/gallery/gallery8.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-[#A00014]"
        >
          Gallery
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[0.95]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Moments captured through unforgettable celebrations.
        </motion.h2>

        {/* Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}