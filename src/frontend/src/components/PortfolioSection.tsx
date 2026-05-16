import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { forwardRef } from "react";
import type { Project } from "../hooks/useQueries";
import { useGetAllProjects } from "../hooks/useQueries";

const fallbackProjects: Project[] = [
  {
    title: "Automotive Suspension Assembly",
    description:
      "Full suspension system design for a mid-range SUV, including FEA validation and tolerance stack-up analysis for mass production.",
    imageUrl: "",
    category: "Automotive",
  },
  {
    title: "Aerospace Bracket Redesign",
    description:
      "Topology-optimized aluminum bracket reducing weight by 38% while maintaining structural integrity per AS9100 standards.",
    imageUrl: "",
    category: "Aerospace",
  },
  {
    title: "Industrial Conveyor System",
    description:
      "Custom heavy-duty conveyor design for a steel plant handling 500 TPH throughput with automated tensioning system.",
    imageUrl: "",
    category: "Industrial",
  },
  {
    title: "Medical Device Enclosure",
    description:
      "Precision injection-moulded enclosure for a portable cardiac monitor with EMI shielding and IP54 protection.",
    imageUrl: "",
    category: "Medical",
  },
  {
    title: "Oil & Gas Pipe Manifold",
    description:
      "High-pressure pipe manifold assembly rated to 5000 PSI, designed and analyzed per ASME B31.3 process piping code.",
    imageUrl: "",
    category: "Oil & Gas",
  },
  {
    title: "Consumer Appliance Redesign",
    description:
      "Cost-reduction redesign of a premium kitchen appliance line — 22% material savings without compromising durability.",
    imageUrl: "",
    category: "Consumer",
  },
];

function getCategoryColor(category: string) {
  const map: Record<string, { bg: string; text: string }> = {
    Automotive: {
      bg: "oklch(0.72 0.19 52 / 0.12)",
      text: "oklch(0.55 0.18 52)",
    },
    Aerospace: {
      bg: "oklch(0.18 0.06 245 / 0.12)",
      text: "oklch(0.38 0.09 245)",
    },
    Industrial: {
      bg: "oklch(0.45 0.05 240 / 0.12)",
      text: "oklch(0.35 0.04 240)",
    },
    Medical: { bg: "oklch(0.55 0.12 155 / 0.12)", text: "oklch(0.42 0.1 155)" },
    "Oil & Gas": {
      bg: "oklch(0.72 0.19 52 / 0.15)",
      text: "oklch(0.50 0.17 52)",
    },
    Consumer: {
      bg: "oklch(0.55 0.12 280 / 0.12)",
      text: "oklch(0.42 0.1 280)",
    },
  };
  return (
    map[category] ?? {
      bg: "oklch(0.88 0.01 240)",
      text: "oklch(0.45 0.02 240)",
    }
  );
}

const categoryBgColors = [
  "from-[oklch(0.12_0.06_245)] to-[oklch(0.22_0.05_245)]",
  "from-[oklch(0.14_0.05_260)] to-[oklch(0.24_0.04_245)]",
  "from-[oklch(0.16_0.05_230)] to-[oklch(0.26_0.04_240)]",
];

const PortfolioSection = forwardRef<HTMLElement>((_, ref) => {
  const { data: backendProjects, isLoading, isError } = useGetAllProjects();

  const projects =
    backendProjects && backendProjects.length > 0
      ? backendProjects.slice(0, 6)
      : fallbackProjects;

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "white" }}
      aria-label="Our Portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.72 0.19 52)" }}
          >
            Case Studies
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              color: "oklch(0.12 0.06 245)",
            }}
          >
            Our Work
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.19 52)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "oklch(0.48 0.02 240)" }}
          >
            A selection of projects demonstrating our engineering capabilities
            across industries.
          </p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="portfolio.loading_state"
          >
            {Array.from({ length: 6 }, (_, i) => i).map((i) => (
              <div
                key={`skeleton-${i}`}
                className="rounded-lg overflow-hidden shadow-card"
              >
                <Skeleton className="aspect-[3/2] w-full" />
                <div className="p-5">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div
            className="text-center py-12 rounded-lg border"
            data-ocid="portfolio.error_state"
            style={{
              borderColor: "oklch(0.88 0.01 240)",
              backgroundColor: "oklch(0.97 0.005 240)",
            }}
          >
            <p style={{ color: "oklch(0.48 0.02 240)" }}>
              Unable to load projects at this time.
            </p>
          </div>
        )}

        {/* Projects grid */}
        {!isLoading && !isError && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="portfolio.list"
          >
            {projects.map((project, i) => {
              const color = getCategoryColor(project.category);
              const gradient = categoryBgColors[i % categoryBgColors.length];
              return (
                <div
                  key={`${project.title}-${project.category}`}
                  data-ocid={`portfolio.item.${i + 1}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-amber/20"
                >
                  {/* Image / Placeholder */}
                  {project.imageUrl ? (
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className={`aspect-[3/2] relative overflow-hidden bg-gradient-to-br ${gradient}`}
                    >
                      {/* Engineering grid */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      {/* Category label */}
                      <div className="absolute inset-0 flex items-end p-5">
                        <span
                          className="font-display font-bold text-2xl opacity-20"
                          style={{ color: "white" }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    <span
                      className="inline-block text-xs font-bold px-2.5 py-1 rounded mb-3"
                      style={{
                        backgroundColor: color.bg,
                        color: color.text,
                      }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="font-display font-bold text-base mb-2 group-hover:text-amber transition-colors"
                      style={{ color: "oklch(0.12 0.06 245)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed line-clamp-3"
                      style={{ color: "oklch(0.48 0.02 240)" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && projects.length === 0 && (
          <div
            className="text-center py-16 rounded-lg border"
            data-ocid="portfolio.empty_state"
            style={{
              borderColor: "oklch(0.88 0.01 240)",
              backgroundColor: "oklch(0.97 0.005 240)",
            }}
          >
            <p
              className="font-medium mb-2"
              style={{ color: "oklch(0.35 0.02 240)" }}
            >
              No projects yet
            </p>
            <p className="text-sm" style={{ color: "oklch(0.55 0.02 240)" }}>
              Check back soon — we're adding case studies.
            </p>
          </div>
        )}
      </div>
    </section>
  );
});

PortfolioSection.displayName = "PortfolioSection";
export default PortfolioSection;
