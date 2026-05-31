"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mb-6 text-center text-sm uppercase tracking-[0.4em] text-[#A00014]"
        >
          Contact & Enquiry
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center text-[clamp(2.8rem,7vw,7rem)] leading-[0.95]"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Let’s craft your next unforgettable experience.
        </motion.h2>

        {/* Main Glass Container */}
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
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
        >
          {/* Glow */}
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#A00014]/10 blur-[140px]" />

          {/* Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-6 p-4 sm:gap-8 sm:p-6 md:gap-12 md:p-10">
            
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-between">
              
              <div>
                <h3
                  className="text-[1.8rem] leading-[0.95] text-white sm:text-[2.5rem] md:text-5xl"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  Premium
                  <br />
                  Event Concierge
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">
                  From luxury weddings to destination experiences,
                  Rudraa Events creates cinematic celebrations
                  crafted with precision and timeless elegance.
                </p>

                {/* Badge */}
                <div className="mt-6 inline-flex items-center rounded-full border border-[#A00014]/30 bg-[#A00014]/10 px-3 py-2 backdrop-blur-xl sm:px-5 sm:py-3">
                  <span className="h-2 w-2 rounded-full bg-[#ff304f]" />

                  <span className="ml-2 text-[0.55rem] uppercase tracking-[0.18em] text-white/70 sm:ml-3 sm:text-xs md:text-sm">
                    Limited Bookings For 2026
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-5">
                
                {/* Call */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:h-12 sm:w-12">
                    <Phone
                      size={16}
                      className="text-white/70"
                    />
                  </div>

                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
                      Call
                    </p>

                    <p className="mt-1 text-xs text-white/70 sm:text-sm md:text-base">
                      +91 8160621014
                      Shivam Chandratre
                      
                      +91 8002972645
                      Sanjana Chandratre
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:h-12 sm:w-12">
                    <Mail
                      size={16}
                      className="text-white/70"
                    />
                  </div>

                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
                      Email
                    </p>

                    <p className="mt-1 break-all text-xs text-white/70 sm:text-sm md:text-base">
                      contact.rudraaevents@gmail.com
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:h-12 sm:w-12">
                    <MessageCircle
                      size={16}
                      className="text-white/70"
                    />
                  </div>

                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-xs text-white/70 sm:text-sm md:text-base">
                      Quick concierge assistance
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:h-12 sm:w-12">
                    <MapPin
                      size={16}
                      className="text-white/70"
                    />
                  </div>

                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
                      Location
                    </p>

                    <p className="mt-1 text-xs text-white/70 sm:text-sm md:text-base">
                      Vadodara, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <form className="space-y-4">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              />

              <input
                type="text"
                placeholder="Type of Event"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              />

              <input
                type="text"
                placeholder="Estimated Date"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              />

              <input
                type="text"
                placeholder="Event Location (Optional)"
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              />

              <select
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              >
                <option value="">
                  Estimated Budget
                </option>

                <option>
                  ₹2L – ₹5L
                </option>

                <option>
                  ₹5L – ₹10L
                </option>

                <option>
                  ₹10L – ₹25L
                </option>

                <option>
                  ₹25L+
                </option>
              </select>

              <select
                className="w-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              >
                <option value="">
                  Preferred Contact Method
                </option>

                <option>
                  Call
                </option>

                <option>
                  WhatsApp
                </option>

                <option>
                  Email
                </option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your vision..."
                className="w-full resize-none border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A00014] focus:bg-black/50 sm:px-6 sm:py-5 sm:text-base"
              />

              <p className="text-[0.65rem] leading-relaxed text-white/35 sm:text-xs md:text-sm">
                Your information remains completely confidential
                and will only be used to curate your experience.
              </p>

              <button
                type="submit"
                className="group relative overflow-hidden rounded-full border border-[#A00014] bg-[#A00014] px-5 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-white transition duration-500 hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-xs md:px-10 md:text-sm"
              >
                <span className="relative z-10">
                  Send Enquiry
                </span>

                <div className="absolute inset-0 translate-y-full bg-white transition duration-500 group-hover:translate-y-0" />

                <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 transition duration-500 group-hover:opacity-100">
                  Send Enquiry
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
