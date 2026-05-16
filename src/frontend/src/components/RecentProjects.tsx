import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";

const projects = [
  {
    id: 1,
    title: "Automotive Bracket Assembly",
    service: "CAD Modeling & FEA",
    tag: "Automotive",
    description:
      "Redesigned a critical suspension bracket for a Tier-1 OEM — reducing weight by 18% while meeting all crash-load requirements via ANSYS FEA simulation.",
    bgColor: "oklch(0.10 0.05 253)",
  },
  {
    id: 2,
    title: "Aerospace Component Redesign",
    service: "Reverse Engineering",
    tag: "Aerospace",
    description:
      "Digitized and recreated legacy airframe rib components from 3D scans to AS9100-compliant production drawings with full GD&T annotation.",
    bgColor: "oklch(0.12 0.06 253)",
  },
  {
    id: 3,
    title: "Industrial Pump Housing",
    service: "Sheet Metal Design",
    tag: "Industrial",
    description:
      "Designed a stainless steel pump enclosure for a chemical processing plant, with DFM optimization that cut fabrication costs by 25%.",
    bgColor: "oklch(0.14 0.07 253)",
  },
  {
    id: 4,
    title: "Consumer Product Enclosure",
    service: "Product Design",
    tag: "Consumer",
    description:
      "End-to-end industrial design and engineering of a handheld medical diagnostic device — ergonomics, IP54 sealing, and injection-mold tooling ready.",
    bgColor: "oklch(0.16 0.07 253)",
  },
];

const RecentProjects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "white" }}
      aria-label="Recent Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.52 0.23 253)" }}
          >
            Portfolio
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              color: "oklch(0.10 0.01 253)",
            }}
          >
            Recent Projects
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "oklch(0.45 0.02 253)" }}
          >
            A selection of our latest mechanical design work across multiple
            industries.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-ocid="projects.list"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-ocid={`projects.item.${i + 1}`}
              className="group rounded-xl overflow-hidden border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ borderColor: "#e5e7eb" }}
            >
              {/* Dark header band */}
              <div
                className="px-6 py-5 flex items-start justify-between"
                style={{ backgroundColor: project.bgColor }}
              >
                <div>
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253 / 0.20)",
                      color: "oklch(0.72 0.20 253)",
                    }}
                  >
                    {project.tag}
                  </span>
                  <h3
                    className="font-display font-bold text-lg"
                    style={{ color: "white" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-3"
                  style={{ color: "oklch(0.52 0.23 253)" }}
                >
                  {project.service}
                </p>
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "oklch(0.40 0.02 253)" }}
                >
                  {project.description}
                </p>
                <button
                  type="button"
                  data-ocid={`projects.item.${i + 1}.button`}
                  className="self-start flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/btn"
                  style={{ color: "oklch(0.52 0.23 253)" }}
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

RecentProjects.displayName = "RecentProjects";
export default RecentProjects;
