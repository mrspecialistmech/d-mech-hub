import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Grid3x3,
  Home,
  Layers,
  Lightbulb,
  Printer,
  Ruler,
  ScanLine,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import { services } from "../data/services";

// Icon map for service slugs
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>
> = {
  Layers,
  Printer,
  Grid3x3,
  Lightbulb,
  ScanLine,
  Activity,
  Ruler,
};

const whyCards = [
  {
    icon: Target,
    title: "Precision Engineering",
    desc: "Micron-level accuracy with ISO/ASME-compliant drawings verified at every step.",
    accent: "oklch(0.42 0.19 253)",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most deliveries within 3–7 business days. Rush projects accommodated within 24–48 hours.",
    accent: "oklch(0.55 0.22 253)",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    desc: "Transparent pricing with no hidden fees. Competitive rates without compromising quality.",
    accent: "oklch(0.42 0.19 253)",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Every deliverable passes multi-stage review. ISO 9001 aligned quality management process.",
    accent: "oklch(0.55 0.22 253)",
  },
];

const projects = [
  {
    id: "p1",
    title: "Industrial Pump Housing 3D Model",
    category: "3D CAD Design",
    client: "Manufacturing Co.",
    desc: "Full parametric 3D model of a centrifugal pump housing assembly with BOM, tolerance analysis, and STEP export for CNC machining.",
    color: "oklch(0.42 0.19 253)",
  },
  {
    id: "p2",
    title: "Sheet Metal Enclosure for Control Panel",
    category: "Sheet Metal Design",
    client: "Electrical Firm",
    desc: "IP65-rated sheet metal enclosure with laser-cut DXF flat patterns, PEM hardware specification, and complete fabrication drawings.",
    color: "oklch(0.35 0.15 253)",
  },
  {
    id: "p3",
    title: "Prototype for Medical Device Component",
    category: "3D Printing",
    client: "Healthcare Startup",
    desc: "SLA-printed surgical instrument prototype with medical-grade resin, Class II surface finish for clinical validation and FDA pre-submission.",
    color: "oklch(0.42 0.19 253)",
  },
  {
    id: "p4",
    title: "CFD Analysis of Ventilation System",
    category: "CFD / FEA Analysis",
    client: "HVAC Company",
    desc: "Full CFD simulation of a duct ventilation system identifying pressure drop hotspots, reducing energy consumption by 18% post-redesign.",
    color: "oklch(0.35 0.15 253)",
  },
  {
    id: "p5",
    title: "Reverse Engineered Legacy Transmission Part",
    category: "Reverse Engineering",
    client: "Automotive Supplier",
    desc: "3D scan and point-cloud-to-CAD reconstruction of a discontinued transmission bracket, accurate to ±0.05 mm with GD&T inspection report.",
    color: "oklch(0.42 0.19 253)",
  },
  {
    id: "p6",
    title: "New Product Development — Consumer Wearable",
    category: "NPD",
    client: "Consumer Electronics",
    desc: "Full NPD cycle from industrial design sketch to production-ready injection-moulded housing with DFM analysis and supplier BOM in 12 weeks.",
    color: "oklch(0.35 0.15 253)",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero Banner ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.05 0.04 253) 0%, oklch(0.12 0.08 253) 60%, oklch(0.08 0.05 253) 100%)",
        }}
        aria-label="Services page hero"
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-xs mb-6"
            style={{ color: "rgba(255,255,255,0.50)" }}
            aria-label="Breadcrumb"
          >
            <Home className="w-3.5 h-3.5" />
            <Link
              to="/"
              className="hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "oklch(0.72 0.20 253)" }}>Services</span>
          </nav>
          <h1
            className="font-display font-black mb-4 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
          >
            Mechanical Design Services
          </h1>
          <p
            className="text-base mb-8 max-w-2xl"
            style={{ color: "oklch(0.72 0.20 253)" }}
          >
            Precision Engineering &amp; CAD Design by{" "}
            <strong className="text-white">D MECH HUB</strong> (Est.&nbsp;2022)
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { n: "7", l: "Service Lines" },
              { n: "150+", l: "Projects Delivered" },
              { n: "24h", l: "Quote Response" },
            ].map((stat) => (
              <div key={stat.l} className="text-center">
                <p className="font-display font-black text-3xl text-white">
                  {stat.n}
                </p>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "white" }}
        aria-label="All services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              What We Offer
            </p>
            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              All Services
            </h2>
            <div
              className="mx-auto h-1 w-14 rounded-full"
              style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
            />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.grid.list"
          >
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon] ?? Layers;
              return (
                <Link
                  key={svc.id}
                  to="/services/$serviceSlug"
                  params={{ serviceSlug: svc.slug }}
                  data-ocid={`services.grid.item.${i + 1}`}
                  className="group block rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 no-underline"
                  style={{
                    borderColor: "oklch(var(--border))",
                    backgroundColor: "white",
                  }}
                >
                  {/* Card top accent */}
                  <div
                    className="h-1.5"
                    style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
                  />
                  <div className="p-6">
                    {/* Icon */}
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                      style={{
                        backgroundColor: "oklch(0.42 0.19 253 / 0.10)",
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "oklch(0.42 0.19 253)" }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3
                      className="font-display font-bold text-lg mb-2 transition-colors group-hover:text-primary"
                      style={{ color: "oklch(0.10 0.01 253)" }}
                    >
                      {svc.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.45 0.02 253)" }}
                    >
                      {svc.shortDescription}
                    </p>
                    {/* Top 3 features */}
                    <ul className="space-y-1.5 mb-5">
                      {svc.features.slice(0, 3).map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-xs"
                          style={{ color: "oklch(0.40 0.02 253)" }}
                        >
                          <CheckCircle
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                            style={{ color: "oklch(0.52 0.23 253)" }}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    {/* CTA */}
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                      style={{ color: "oklch(0.42 0.19 253)" }}
                      data-ocid={`services.grid.item.${i + 1}.link`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose D MECH HUB ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="Why choose us"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Our Strengths
            </p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              Why Choose D MECH HUB
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="why.cards.list"
          >
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                data-ocid={`why.card.${i + 1}`}
                className="rounded-xl p-7 flex flex-col items-start gap-4 border shadow-sm bg-white"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{ backgroundColor: "oklch(0.42 0.19 253 / 0.12)" }}
                >
                  <card.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(0.42 0.19 253)" }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-base mb-1.5"
                    style={{ color: "oklch(0.10 0.01 253)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.45 0.02 253)" }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Previous Projects ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "white" }}
        aria-label="Previous projects portfolio"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Portfolio
            </p>
            <h2
              className="font-display font-bold mb-3"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              Previous Projects
            </h2>
            <p
              className="max-w-lg mx-auto text-sm"
              style={{ color: "oklch(0.45 0.02 253)" }}
            >
              A selection of D MECH HUB projects delivered since our founding in
              2022.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="projects.list"
          >
            {projects.map((proj, i) => (
              <div
                key={proj.id}
                data-ocid={`projects.item.${i + 1}`}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                {/* Category top bar */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.08 0.04 253), oklch(0.15 0.08 253))",
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "oklch(0.72 0.20 253)" }}
                  >
                    {proj.category}
                  </span>
                  <Shield
                    className="w-4 h-4"
                    style={{ color: "oklch(0.42 0.19 253)" }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-display font-bold text-base mb-2"
                    style={{ color: "oklch(0.10 0.01 253)" }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "oklch(0.45 0.02 253)" }}
                  >
                    {proj.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock
                      className="w-3.5 h-3.5"
                      style={{ color: "oklch(0.52 0.23 253)" }}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{ color: "oklch(0.40 0.02 253)" }}
                    >
                      Client: {proj.client}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.12 253) 0%, oklch(0.22 0.18 253) 100%)",
        }}
        aria-label="Call to action"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="font-display font-black text-white mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Share your requirements and receive a detailed quote within 24
            hours. No commitment required.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              data-ocid="services.cta.primary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              data-ocid="services.cta.secondary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-all"
              style={{
                border: "2px solid rgba(255,255,255,0.35)",
                color: "white",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
