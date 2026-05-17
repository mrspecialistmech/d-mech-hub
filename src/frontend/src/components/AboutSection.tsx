import { CheckCircle2, Cpu, Globe, Users } from "lucide-react";
import { forwardRef } from "react";

const highlights = [
  {
    /*icon: CheckCircle2,
    text: "ISO 9001:2015 Certified Quality Management System",*/
  },
  { icon: CheckCircle2, text: "Strict ASME Y14.5 GD&T Standards Compliance" },
  { icon: Cpu, text: "SolidWorks, Inventor, AutoCAD, Creo, ANSYS Experts" },
  { icon: Globe, text: "Serving 10+ industries across 3+ countries" },
  {/* icon: Users, text: "Team of 50+ certified mechanical engineers" */},
  { icon: CheckCircle2, text: "NDA protected, secure IP handling" },
];

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "white" }}
      aria-label="About Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Our Story
            </p>
            <h2
              className="font-display font-bold mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              Who We Are
            </h2>
            <div
              className="h-1 w-14 rounded-full mb-8"
              style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
            />

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "oklch(0.35 0.02 253)" }}
            >
              Founded in 2022,{" "}
              <strong style={{ color: "oklch(0.10 0.01 253)" }}>
                D MECH HUB
              </strong>{" "}
              is a full-service mechanical design engineering company
              specializing in precision engineering solutions for industries
              worldwide. Founded with a vision to deliver world-class mechanical
              engineering solutions, we combine cutting-edge CAD tools with deep
              domain expertise across automotive, aerospace, and industrial
              sectors.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.35 0.02 253)" }}
            >
              Over the years, we have built a reputation for quality,
              reliability, and technical excellence. We partner with OEMs,
              startups, and Fortune 500 companies to bring their most complex
              mechanical challenges to life.
            </p>

            {/* Counter metrics */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2022", label: "Est." },
                { value: "20+", label: "Projects" },
                { value: "3+", label: "Countries" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="text-center p-4 rounded-lg border"
                  style={{
                    borderColor: "oklch(0.52 0.23 253 / 0.20)",
                    backgroundColor: "oklch(0.97 0.01 253)",
                  }}
                >
                  <div
                    className="font-display font-extrabold text-2xl"
                    style={{ color: "oklch(0.52 0.23 253)" }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.55 0.02 253)" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlights on dark blue panel */}
          <div>
            <div
              className="rounded-xl p-8 lg:p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.10 0.05 253), oklch(0.18 0.08 253))",
              }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <h3
                className="font-display font-bold text-xl mb-6 relative z-10"
                style={{ color: "white" }}
              >
                Why Choose D MECH HUB
              </h3>

              <ul className="space-y-4 relative z-10">
                {highlights.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: "oklch(0.62 0.22 253)" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Certification badge */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 relative z-10">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center font-display font-bold text-xs text-center"
                  style={{
                    backgroundColor: "oklch(0.52 0.23 253)",
                    color: "white",
                  }}
                >
                /*  ISO
                </div>
                <div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: "white" }}
                  >
                    ISO 9001:2015 Certified
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Quality Management System*/
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
