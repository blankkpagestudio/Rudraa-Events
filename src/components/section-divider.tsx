export default function SectionDivider() {
  return (
    <div className="relative h-32 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A00014]/10 blur-[120px]" />

      {/* Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0003] to-transparent opacity-70" />
    </div>
  );
}