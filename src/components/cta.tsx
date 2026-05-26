export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-40 text-center">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#A00014]/10 via-black to-black" />

      <div className="relative z-10 mx-auto max-w-5xl">
        
        <h2
          className="text-[clamp(3rem,7vw,7rem)] leading-[1]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Your Story Deserves More Than Just An Event.
        </h2>

        <button className="mt-10 rounded-full bg-[#A00014] px-8 py-4 uppercase tracking-[0.15em] transition hover:bg-[#ff1e3c]">
          Start Your Experience
        </button>
      </div>
    </section>
  );
}