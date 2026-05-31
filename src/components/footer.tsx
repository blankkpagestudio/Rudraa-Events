"use client";

import {
  ArrowUp,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

const links = [
  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "Signature",
    href: "#signature-events",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Red Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Back To Top */}
        <div className="mb-20 flex justify-center">
          <a
            href="#hero"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.25em] text-white/60 transition duration-500 hover:border-[#A00014] hover:bg-[#A00014]/10 hover:text-white"
          >
            <ArrowUp
              size={16}
              className="transition duration-500 group-hover:-translate-y-1"
            />

            Back To Top
          </a>
        </div>

        {/* Main Footer */}
        <div className="grid gap-16 border-b border-white/10 pb-14 md:grid-cols-2">

          {/* Left */}
          <div>
            <h2
              className="text-[clamp(4rem,10vw,8rem)] leading-none text-[#A00014]"
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              RUDRAA
            </h2>

            <p className="mt-2 text-xl uppercase tracking-[0.45em] text-white/40">
              EVENTS
            </p>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/50">
              Crafting unforgettable experiences with timeless elegance,
              cinematic precision, and immersive celebration design.
            </p>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rudraa_events/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#A00014] hover:bg-[#A00014]/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[18px] w-[18px] text-white/70"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 11.37a4 4 0 1 1-7.91 1.17 4 4 0 0 1 7.91-1.17z" />
                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8160621014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#A00014] hover:bg-[#A00014]/10"
              >
                <MessageCircle
                  size={18}
                  className="text-white/70"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:contact.rudraaevents@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#A00014] hover:bg-[#A00014]/10"
              >
                <Mail
                  size={18}
                  className="text-white/70"
                />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-10 md:justify-self-end">

            {/* Navigation */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                Navigation
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/60 transition duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                Contact
              </p>

              <div className="mt-6 space-y-5">

                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin
                    size={16}
                    className="text-white/40"
                  />

                  <p className="text-white/60">
                    Vadodara, Gujarat, India
                  </p>
                </div>

                {/* Email */}
                <div>
                  <a
                    href="mailto:contact.rudraaevents@gmail.com"
                    className="text-white/60 transition duration-300 hover:text-white"
                  >
                    contact.rudraaevents@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <a
                    href="tel:+919265993857"
                    className="text-white/60 transition duration-300 hover:text-white"
                  >
                    +91 92659 93857
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Combined Footer */}
        <div className="pt-10">

          <div className="flex flex-col gap-14">

            {/* Studio Credits */}
            <div className="flex flex-col gap-5">

              <p className="text-xs uppercase tracking-[0.35em] text-white/30">
                Website Designed & Developed By
              </p>

              <h3
                className="text-4xl text-[#A00014]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Blankk Page Studio
              </h3>

              <div className="grid gap-4 text-sm text-white/50 md:grid-cols-3">

                {/* Email */}
                <a
                  href="mailto:blankkpage.studio@gmail.com"
                  className="transition duration-300 hover:text-white"
                >
                  blankkpage.studio@gmail.com
                </a>

                {/* Website */}
                <a
                  href="https://blankkpagestudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-white"
                >
                  blankkpagestudio.com
                </a>

                {/* Location */}
                <p>
                  Nashik, Maharashtra
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">

              <p className="text-sm text-white/30">
                © 2026 Rudraa Events. All rights reserved.
              </p>

              <p className="text-sm text-white/20">
                Designed with cinematic elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
