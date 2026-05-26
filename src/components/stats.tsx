const stats = [
  ["150+", "Events Crafted"],
  ["500K+", "Guests Hosted"],
  ["20+", "Destination Celebrations"],
  ["8+", "Years of Excellence"],
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative px-6 py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        
        {stats.map(([number, label]) => (
          <div
            key={label}
            className="border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
          >
            <h2
              className="text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {number}
            </h2>

            <p className="mt-4 text-white/60">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}