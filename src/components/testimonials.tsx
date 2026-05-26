const testimonials = [
  {
    name: "Aarav Mehta",
    review:
      "Rudraa Events transformed our wedding into a cinematic masterpiece. Every detail felt luxurious and perfectly curated.",
    stars: 5,
  },
  {
    name: "Priyanshi Shah",
    review:
      "The team handled everything flawlessly. From decor to artist management, the experience felt effortless.",
    stars: 5,
  },
  {
    name: "Rohan Kapoor",
    review:
      "Professional, elegant, and extremely creative. Our corporate launch looked world-class because of Rudraa Events.",
    stars: 5,
  },
  {
    name: "Anaya Desai",
    review:
      "The ambience, lighting, and overall execution exceeded our expectations. Guests still talk about the event.",
    stars: 5,
  },
  {
    name: "Vivaan Joshi",
    review:
      "Their attention to detail and premium event styling truly sets them apart from every other planner.",
    stars: 5,
  },
  {
    name: "Kiara Malhotra",
    review:
      "Absolutely stunning execution. Everything felt luxurious, immersive, and incredibly well coordinated.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Red Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#A00014]">
            Client Experiences
          </p>

          <h2
            className="text-[clamp(3rem,8vw,6rem)] leading-none text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Testimonials
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            Every celebration we create is designed to leave a lasting
            impression and unforgettable memories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-[#A00014]/40 hover:bg-[#A00014]/5"
            >
              
              {/* Stars */}
              <div className="mb-6 flex items-center gap-1">
                {[...Array(item.stars)].map((_, i) => (
                  <span
                    key={i}
                    className="text-lg text-[#A00014]"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-lg leading-relaxed text-white/70">
                “{item.review}”
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Name */}
              <div>
                <p className="text-lg text-white">
                  {item.name}
                </p>

                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/30">
                  Verified Client
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}