const steps = [
  "Discovery",
  "Concept Creation",
  "Planning",
  "Production",
  "Execution",
  "Grand Experience",
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#A00014]">
          The Rudraa Process
        </p>

        <div className="mt-16 space-y-8">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-8 border-b border-white/10 pb-8"
            >
              <span className="text-[#A00014]">
                0{index + 1}
              </span>

              <h2
                className="text-3xl md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {step}
              </h2>
            </div>
          ))}
        </div>
      </div>

<section id="process"></section>

    </section>
  );
}