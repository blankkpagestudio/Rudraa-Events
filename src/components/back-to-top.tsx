"use client";

import { ArrowUp } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");

      if (!footer) return;

      const footerTop =
        footer.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      // Hide near footer
      if (footerTop < windowHeight - 120) {
        setVisible(false);
      } else if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-black/60 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <ArrowUp
        size={18}
        className="text-white/70"
      />
    </button>
  );
}