const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Clients Served" },
  { value: "50+", label: "Engineers" },
];

export default function StatsBar() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "oklch(0.08 0.03 253)" }}
      aria-label="Company statistics"
    >
      {/* Top blue accent line */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(to right, oklch(0.35 0.20 253), oklch(0.52 0.23 253), oklch(0.35 0.20 253))",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-4 lg:py-2 text-center"
              data-ocid={`stats.item.${i + 1}`}
            >
              <span
                className="font-display font-extrabold leading-none"
                style={{ fontSize: "2.25rem", color: "oklch(0.72 0.20 253)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm font-medium mt-1 tracking-wide"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
