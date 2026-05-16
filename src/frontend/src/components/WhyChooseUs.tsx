import { Award, Clock, DollarSign, Target } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Sub-0.01mm tolerances, fully ASME/ISO compliant deliverables. Every dimension verified against specification before delivery.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "48-hour concept models, 5-day full detailed designs. Rush delivery options for time-critical projects without quality compromise.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimized",
    description:
      "DFM-first design approach consistently saves 15–30% on manufacturing costs. We design for production, not just presentation.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "ISO 9001 certified processes with multi-stage design reviews. Independent QA checks at every milestone for zero-defect delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.08 0.03 253)" }}
      aria-label="Why Choose Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.62 0.22 253)" }}
          >
            Our Advantage
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              color: "white",
            }}
          >
            Why Choose D MECH HUB?
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Trusted by 200+ clients across 12 industries for on-time, on-spec
            engineering deliverables.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`why.item.${i + 1}`}
              className="relative p-8 rounded-xl flex gap-5"
              style={{
                backgroundColor: "oklch(0.12 0.05 253)",
                borderLeft: "3px solid oklch(0.52 0.23 253)",
              }}
            >
              <div
                className="flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.52 0.23 253 / 0.15)" }}
              >
                <item.icon
                  className="h-6 w-6"
                  style={{ color: "oklch(0.62 0.22 253)" }}
                />
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: "white" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
