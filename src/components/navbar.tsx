"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const topNav = [
  { name: "Experiences", href: "#experiences" },
  { name: "Signature Events", href: "#signature-events" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

const fullMenu = [
  { name: "Philosophy", href: "#philosophy" },
  { name: "Experiences", href: "#experiences" },
  { name: "Why Rudraa Events", href: "#why-rudraa" },
  { name: "Signature Events", href: "#signature-events" },
  { name: "Gallery", href: "#gallery" },
  { name: "The Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Founder Vision", href: "#vision" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">

          <div className="relative h-24 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="shrink-0 leading-none z-50">
              <h1 className="text-white text-[42px] font-extralight tracking-[0.18em] leading-none">
                RUDRAA
              </h1>

              <p className="text-white/70 text-[11px] tracking-[0.55em] mt-2 uppercase">
                EVENTS
              </p>
            </Link>

            {/* MAIN NAVBAR */}
            <nav className="absolute left-[58%] -translate-x-1/2 hidden md:flex items-center gap-6">

              {topNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/85 hover:text-white transition-all duration-300 uppercase tracking-[0.16em] text-[11px] whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}

            </nav>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white z-50 shrink-0 ml-auto"
            >
              {menuOpen ? (
                <X size={40} strokeWidth={1.5} />
              ) : (
                <Menu size={40} strokeWidth={1.5} />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="w-full h-screen overflow-hidden pt-28 px-6 flex items-center justify-center">

          <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-4">

            {fullMenu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-red-500 transition-all duration-300 uppercase tracking-[0.22em] font-extralight text-[16px] md:text-[24px] text-center"
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}