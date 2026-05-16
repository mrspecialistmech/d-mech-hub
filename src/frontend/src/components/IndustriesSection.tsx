import { Car, Cog, Flame, Plane, ShoppingBag, Stethoscope } from "lucide-react";
import { forwardRef } from "react";

const industries = [
  {
    icon: Car,
    name: "Automotive",
    description:
      "Powertrain, chassis, and body component design for OEM and Tier-1 suppliers.",
  },
  {
    icon: Plane,
    name: "Aerospace",
    description:
      "Lightweight structural components and flight-grade assemblies meeting AS9100 standards.",
  },
  {
    icon: Flame,
    name: "Oil & Gas",
    description:
      "Pressure vessels, pipeline fittings, and offshore equipment to ASME BPVC standards.",
  },
  {
    icon: ShoppingBag,
    name: "Consumer Products",
    description:
      "Ergonomic, manufacturable designs for durable goods and household appliances.",
  },
  {
    icon: Stethoscope,
    name: "Medical Devices",
    description:
      "Precision medical equipment and implant design compliant with FDA and ISO 13485.",
  },
  {
    icon: Cog,
    name: "Industrial Equipment",
    description:
      "Custom machinery, conveyors, and automation systems for factory-floor operations.",
  },
];

const IndustriesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="industries"
      className="py-20 lg:py-28 relative"
      style={{ backgroundColor: "oklch(0.08 0.03 253)" }}
      aria-label="Industries We Serve"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.62 0.22 253)" }}
          >
            Sectors
          </p>
          <h2
            className="font-display font-bold mb-4 text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
          >
            Industries We Serve
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Deep domain expertise across critical sectors where engineering
            precision is non-negotiable.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="industries.list"
        >
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              data-ocid={`industries.item.${i + 1}`}
              className="group rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 border flex gap-5 items-start"
              style={{
                backgroundColor: "oklch(0.12 0.05 253)",
                borderColor: "oklch(0.20 0.07 253)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.52 0.23 253 / 0.50)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.20 0.07 253)";
              }}
            >
              {/* Icon */}
              <div
                className="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "oklch(0.52 0.23 253 / 0.12)",
                  border: "1.5px solid oklch(0.52 0.23 253 / 0.25)",
                }}
              >
                <industry.icon
                  className="h-6 w-6"
                  style={{ color: "oklch(0.72 0.20 253)" }}
                  strokeWidth={1.75}
                />
              </div>

              <div>
                <h3
                  className="font-display font-bold text-base mb-1.5"
                  style={{ color: "white" }}
                >
                  {industry.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

IndustriesSection.displayName = "IndustriesSection";
export default IndustriesSection;
