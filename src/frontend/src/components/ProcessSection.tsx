import {
  Box,
  CheckCheck,
  ClipboardList,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { forwardRef } from "react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirements Analysis",
    description:
      "Deep-dive consultation to understand your technical specifications, constraints, and project goals.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Concept Design",
    description:
      "Multiple concept sketches and preliminary CAD models to explore design space before committing.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Detailed Engineering",
    description:
      "Detailed 3D modeling, FEA simulation, and design optimization to ensure structural integrity.",
  },
  {
    number: "04",
    icon: Box,
    title: "Prototyping & Validation",
    description:
      "Rapid prototype development and testing to validate form, fit, and function before production.",
  },
  {
    number: "05",
    icon: CheckCheck,
    title: "Final Delivery",
    description:
      "Complete production documentation package — drawings, BOMs, specs — ready for manufacturing.",
  },
];

const ProcessSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="process"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "white" }}
      aria-label="Our Process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.52 0.23 253)" }}
          >
            Methodology
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              color: "oklch(0.10 0.01 253)",
            }}
          >
            Our Process
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "oklch(0.45 0.02 253)" }}
          >
            A structured, transparent workflow that delivers predictable results
            on time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 z-0"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.52 0.23 253 / 0.35) 10%, oklch(0.52 0.23 253 / 0.35) 90%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center lg:items-center"
                data-ocid={`process.item.${i + 1}`}
              >
                {/* Number badge + icon */}
                <div className="relative mb-4">
                  <div
                    className="h-14 w-14 rounded-full flex items-center justify-center border-2 relative z-10"
                    style={{
                      backgroundColor: "oklch(0.97 0.01 253)",
                      borderColor: "oklch(0.52 0.23 253)",
                    }}
                  >
                    <step.icon
                      className="h-6 w-6"
                      style={{ color: "oklch(0.52 0.23 253)" }}
                      strokeWidth={1.75}
                    />
                  </div>
                  {/* Step number */}
                  <span
                    className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253)",
                      color: "white",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  className="font-display font-bold text-sm mb-2"
                  style={{ color: "oklch(0.10 0.01 253)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.50 0.02 253)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProcessSection.displayName = "ProcessSection";
export default ProcessSection;
