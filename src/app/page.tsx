"use client";

import { useEffect } from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Philosophy from "../components/philosophy";
import Experiences from "../components/experiences";
import SignatureEvents from "../components/signature-events";
import Gallery from "../components/gallery";
import Process from "../components/process";
import Testimonials from "../components/testimonials";
import Vision from "../components/vision";
import Contact from "../components/contact";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
import FAQ from "../components/faq";
import SectionDivider from "../components/section-divider";
import WhyRudraa from "@/components/why-rudraa";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="overflow-x-hidden bg-black text-[#EDE8E4]">
      
      <Navbar />

      <Hero />

      <SectionDivider />

      <Philosophy />

      <SectionDivider />

      <Experiences />

      <SectionDivider />

      <WhyRudraa />

      <SectionDivider />

      <SignatureEvents />

      <Gallery />

      <SectionDivider />

      <Process />

      <SectionDivider />

      <Testimonials />

      <SectionDivider />

      <Vision />

      <SectionDivider />

      <FAQ />

      <SectionDivider />

      <Contact />

      <Footer />

      <BackToTop />
    </main>
  );
}