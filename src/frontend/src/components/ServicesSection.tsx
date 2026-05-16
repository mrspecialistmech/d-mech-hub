import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Cpu,
  FileText,
  Layers,
  Lightbulb,
  Package,
  PenTool,
  Printer,
  RefreshCw,
} from "lucide-react";
import { forwardRef } from "react";

const services = [
  {
    id: 1,
    slug: "cad-3d-modeling",
    title: "CAD / 3D Modeling",
    description:
      "Precise 3D models and detailed engineering drawings using SolidWorks, CATIA, and AutoCAD. From simple parts to complex assemblies.",
    icon: Cpu,
    image: "/assets/generated/service-cad-modeling.dim_600x400.jpg",
  },
  {
    id: 2,
    slug: "fea-analysis",
    title: "Structural Analysis & FEA",
    description:
      "Advanced finite element analysis to validate designs under real-world loads, stresses, and thermal conditions.",
    icon: Layers,
    image: "/assets/generated/service-fea-analysis.dim_600x400.jpg",
  },
  {
    id: 3,
    slug: "sheet-metal",
    title: "Sheet Metal Design",
    description:
      "Expert sheet metal component design with DFM guidelines, flat pattern development, and tooling documentation.",
    icon: Package,
    image: null,
  },
  {
    id: 4,
    slug: "product-design",
    title: "Product Design & Development",
    description:
      "End-to-end product development from concept ideation to production-ready designs.",
    icon: PenTool,
    image: "/assets/generated/service-product-design.dim_600x400.jpg",
  },
  {
    id: 5,
    slug: "reverse-engineering",
    title: "Reverse Engineering",
    description:
      "Digitize physical components using 3D scanning and recreate precise CAD models for legacy parts.",
    icon: RefreshCw,
    image: "/assets/generated/service-reverse-engineering.dim_600x400.jpg",
  },
  {
    id: 6,
    slug: "drafting",
    title: "Drafting & Documentation",
    description:
      "Professional 2D drafting, GD&T annotations, BOMs, and complete technical documentation per ASME/ISO.",
    icon: FileText,
    image: "/assets/generated/service-drafting.dim_600x400.jpg",
  },
  {
    id: 7,
    slug: "3d-printing",
    title: "3D Printing & Prototyping",
    description:
      "Rapid prototyping using FDM, SLA, and SLS technologies. From functional prototypes to presentation models.",
    icon: Printer,
    image: "/assets/generated/service-3d-printing.dim_600x400.jpg",
  },
  {
    id: 8,
    slug: "npd",
    title: "New Product Development",
    description:
      "Full NPD cycle from ideation, concept design, engineering validation through to production launch.",
    icon: Lightbulb,
    image: "/assets/generated/service-npd.dim_600x400.jpg",
  },
];

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="services"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "white" }}
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.52 0.23 253)" }}
          >
            What We Do
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              color: "oklch(0.10 0.01 253)",
            }}
          >
            Our Services
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "oklch(0.45 0.02 253)" }}
          >
            Comprehensive mechanical engineering solutions tailored to your
            project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="services.list"
        >
          {services.map((service, i) => (
            <Link
              key={service.id}
              to="/services/$serviceSlug"
              params={{ serviceSlug: service.slug }}
              data-ocid={`services.item.${i + 1}`}
              className="group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-transparent flex flex-col no-underline"
              style={{ borderColor: "#e5e7eb" }}
            >
              {/* Image / Icon */}
              {service.image ? (
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="aspect-[3/2] flex items-center justify-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.10 0.05 253), oklch(0.18 0.08 253))",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <service.icon
                    className="h-14 w-14 relative z-10"
                    style={{ color: "oklch(0.72 0.20 253)" }}
                    strokeWidth={1.25}
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-display font-bold text-base mb-2 transition-colors"
                  style={{ color: "oklch(0.10 0.01 253)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4 flex-1"
                  style={{ color: "oklch(0.45 0.02 253)" }}
                >
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center text-xs font-semibold"
                  style={{ color: "oklch(0.52 0.23 253)" }}
                  data-ocid={`services.item.${i + 1}.button`}
                >
                  Learn More
                  <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";
export default ServicesSection;
