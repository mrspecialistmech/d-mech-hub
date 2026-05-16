import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  CheckCircle,
  Cpu,
  Download,
  FileText,
  Home,
  List,
  RefreshCw,
} from "lucide-react";

const serviceData: Record<
  string,
  { title: string; subtitle: string; description: string[] }
> = {
  "cad-3d-modeling": {
    title: "CAD / 3D Modeling",
    subtitle: "Precision modeling from concept to production-ready files",
    description: [
      "Our CAD/3D Modeling service delivers parametric, feature-rich 3D models built to your exact specifications. We work from your sketches, reference images, PDF drawings, or verbal briefs to create fully editable, production-grade models.",
      "Using industry-leading tools like SolidWorks, CATIA V5, and AutoCAD, our engineers produce models that are DFM-ready, dimensionally accurate, and compliant with ASME Y14.5 and ISO 2768 standards. Every model is delivered with full documentation.",
    ],
  },
  "fea-analysis": {
    title: "Structural Analysis & FEA",
    subtitle: "Validate your designs before manufacturing",
    description: [
      "Our FEA service uses ANSYS and SolidWorks Simulation to subject your designs to virtual real-world conditions — static loads, fatigue cycles, thermal gradients, and dynamic forces — before a single part is manufactured.",
      "We deliver detailed stress contour maps, safety factor reports, and design recommendations. Our analysis has helped clients reduce prototype iterations by 60% and catch critical failure modes early in development.",
    ],
  },
  "sheet-metal": {
    title: "Sheet Metal Design",
    subtitle: "DFM-optimized sheet metal components",
    description: [
      "We design sheet metal components with manufacturing in mind from day one. Our engineers apply DFM principles covering bend radii, hole-to-edge distances, bend reliefs, and material grain direction to ensure clean, cost-effective fabrication.",
      "Deliverables include fully unfolded flat patterns, detailed shop drawings with GD&T, laser/plasma cut programs, and complete tooling documentation. We support mild steel, stainless, aluminum, and specialty alloys.",
    ],
  },
  "product-design": {
    title: "Product Design & Development",
    subtitle: "From concept to market-ready product",
    description: [
      "We guide products from initial napkin-sketch concepts through industrial design, engineering validation, and manufacturing hand-off. Our cross-functional approach combines aesthetic sensibility with structural rigor.",
      "Clients receive design-for-assembly analysis, material selection guidance, regulatory compliance review, and production-ready CAD packages. We've brought over 80 products to market across consumer, medical, and industrial sectors.",
    ],
  },
  "reverse-engineering": {
    title: "Reverse Engineering",
    subtitle: "Digitize and recreate legacy components",
    description: [
      "We reconstruct precise CAD models from physical parts using 3D scanning, coordinate measuring, and manual measurement techniques. This is ideal for legacy components where original drawings are unavailable or outdated.",
      "Output includes parametric 3D models in SolidWorks/CATIA, detailed engineering drawings, and material analysis reports. Our reverse-engineered models are dimensionally accurate to ±0.05mm and fully editable for future modifications.",
    ],
  },
  drafting: {
    title: "Drafting & Documentation",
    subtitle: "ASME/ISO-compliant technical drawings",
    description: [
      "Our drafting team produces professional 2D engineering drawings, GD&T-annotated detail sheets, assembly drawings, and complete documentation packages that comply with ASME Y14.5-2018, ISO 2768, and customer-specific standards.",
      "We handle conversion of 3D CAD to 2D production drawings, revision management, BOM generation, and drawing tree structuring. All drawings undergo multi-stage review before delivery to ensure zero defects.",
    ],
  },
  "3d-printing": {
    title: "3D Printing & Prototyping",
    subtitle: "Rapid prototypes in 24–48 hours",
    description: [
      "We produce functional prototypes and presentation models using FDM, SLA, and SLS technologies. Our in-house 3D printing capability allows us to turn CAD models into physical parts within 24–48 hours for rapid design iteration.",
      "We support a wide range of engineering-grade materials including PLA, ABS, PETG, TPU, Nylon, and resin. Post-processing options include sanding, priming, painting, and vacuum forming for production-quality finish.",
    ],
  },
  npd: {
    title: "New Product Development",
    subtitle: "Full NPD cycle from ideation to production",
    description: [
      "We manage the complete New Product Development cycle from idea validation and concept generation through detailed engineering, testing, and production launch. Our structured NPD process minimizes risk and accelerates time-to-market.",
      "Our team integrates mechanical design, industrial design, DFM/DFA analysis, supplier sourcing, and regulatory compliance into a single managed workflow. We've supported NPD cycles from 3 months to multi-year programs across 12 industry sectors.",
    ],
  },
};

const sampleProjects: Record<
  string,
  { title: string; tag: string; description: string }[]
> = {
  "cad-3d-modeling": [
    {
      title: "Hydraulic Manifold Assembly",
      tag: "Oil & Gas",
      description:
        "Complex 47-component hydraulic manifold modeled in SolidWorks with full BOM, yielding 22% weight reduction over legacy design.",
    },
    {
      title: "Aerospace Bracket Family",
      tag: "Aerospace",
      description:
        "Family of 12 interchangeable structural brackets for aircraft interior, fully parametric with shared design table.",
    },
  ],
  "fea-analysis": [
    {
      title: "Pressure Vessel Analysis",
      tag: "Oil & Gas",
      description:
        "ASME Section VIII fatigue and burst analysis for a 250-bar pressure vessel, identifying and resolving a critical stress concentration.",
    },
    {
      title: "Automotive Subframe Validation",
      tag: "Automotive",
      description:
        "Full dynamic FEA under pothole and cornering loads, reducing prototype test cycles from 6 to 2 rounds.",
    },
  ],
  "3d-printing": [
    {
      title: "Medical Device Prototype",
      tag: "Medical",
      description:
        "SLA-printed surgical instrument prototype with Class II surface finish for clinical validation trials.",
    },
    {
      title: "Consumer Product Concept Models",
      tag: "Consumer",
      description:
        "8 FDM concept models produced in 48 hours for a packaging design review, enabling real-time stakeholder feedback.",
    },
  ],
  npd: [
    {
      title: "Industrial IoT Enclosure",
      tag: "Industrial",
      description:
        "Full NPD from concept to tooling-ready design for an IP67-rated IoT sensor enclosure, completed in 14 weeks.",
    },
    {
      title: "Ergonomic Power Tool",
      tag: "Consumer",
      description:
        "New product development including ergonomic studies, structural FEA, and DFM review for a cordless drill redesign.",
    },
  ],
};

const defaultProjects = [
  {
    title: "Precision Gear Assembly",
    tag: "Industrial",
    description:
      "High-precision gear train for an industrial conveyor system, reducing backlash by 35% over the original design.",
  },
  {
    title: "Stainless Steel Chassis",
    tag: "Automotive",
    description:
      "Lightweight stainless chassis for a specialty vehicle, 18% lighter than the predecessor while meeting all load specs.",
  },
];

const features = [
  {
    icon: Cpu,
    title: "Parametric 3D Models",
    desc: "Fully editable, feature-based models",
  },
  {
    icon: FileText,
    title: "Engineering Drawings",
    desc: "ASME/ISO-compliant detail drawings",
  },
  {
    icon: List,
    title: "BOM & Assembly Guide",
    desc: "Complete bill of materials",
  },
  {
    icon: CheckCircle,
    title: "DFM Review",
    desc: "Design-for-manufacturing analysis",
  },
  {
    icon: RefreshCw,
    title: "Revision Rounds",
    desc: "2 free revision rounds included",
  },
  {
    icon: Download,
    title: "Source Files",
    desc: "Native + neutral format delivery",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Requirements Briefing",
    desc: "We start by understanding your exact technical needs, tolerances, and standards.",
  },
  {
    num: "02",
    title: "Concept Modeling",
    desc: "Initial 3D model or concept built from your drawings, sketches, or verbal description.",
  },
  {
    num: "03",
    title: "Review & Revisions",
    desc: "You review, we refine until the design perfectly matches your requirements.",
  },
  {
    num: "04",
    title: "Final Delivery",
    desc: "Complete design package delivered in your required formats with full documentation.",
  },
];

const techs = [
  "SolidWorks",
  "CATIA V5",
  "AutoCAD",
  "ANSYS",
  "MATLAB",
  "GD&T (ASME Y14.5)",
];

const faqs = [
  {
    q: "What file formats do you deliver?",
    a: "We deliver STEP, IGES, DXF, PDF, and native SolidWorks/CATIA files as required. Additional formats available on request at no extra charge.",
  },
  {
    q: "How long does a typical project take?",
    a: "Simple parts: 2–3 days. Complex assemblies: 5–10 days. Rush delivery available within 24–48 hours for an additional fee.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we sign NDAs before any project briefing to protect your intellectual property. Confidentiality is treated with the utmost seriousness.",
  },
  {
    q: "What information do you need to start?",
    a: "Sketches, reference images, PDF drawings, or a brief describing dimensions and function. The more detail you provide, the faster we can begin.",
  },
];

export default function ServiceDetailPage() {
  const { serviceSlug: slug } = useParams({ from: "/services/$serviceSlug" });
  const navigate = useNavigate();
  const data = serviceData[slug] ?? serviceData["cad-3d-modeling"];
  const projects = sampleProjects[slug] ?? defaultProjects;

  const scrollToQuote = () => {
    navigate({ to: "/" }).then(() => {
      setTimeout(() => {
        const el = document.getElementById("contact");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      {/* ── Sticky Mini Navbar ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "oklch(0.08 0.03 253)",
          borderBottom: "1px solid oklch(0.20 0.08 253)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <img
              src="/assets/logo-dmh-new.png"
              alt="D MECH HUB"
              style={{ height: 40 }}
            />
          </Link>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link
              to="/"
              data-ocid="service.back.link"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              ← Back to Home
            </Link>
            <button
              type="button"
              onClick={scrollToQuote}
              data-ocid="service.quote.button"
              style={{
                backgroundColor: "oklch(0.52 0.23 253)",
                color: "white",
                padding: "0.5rem 1.25rem",
                borderRadius: 6,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      {/* ── A. Hero Banner ── */}
      <section
        style={{
          position: "relative",
          height: 420,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="Service hero"
      >
        <img
          src="/assets/generated/service-page-cad-banner.dim_1200x500.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, oklch(0.05 0.04 253 / 0.95) 0%, oklch(0.10 0.06 253 / 0.80) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            width: "100%",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.25rem",
              fontSize: 13,
              color: "rgba(255,255,255,0.60)",
            }}
          >
            <Home style={{ width: 14, height: 14 }} />
            <Link
              to="/"
              style={{
                color: "rgba(255,255,255,0.60)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span style={{ color: "oklch(0.72 0.20 253)" }}>{data.title}</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "0.75rem",
              fontFamily: "Bricolage Grotesque, sans-serif",
              lineHeight: 1.15,
            }}
          >
            {data.title}
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "oklch(0.72 0.20 253)",
              marginBottom: "2rem",
            }}
          >
            {data.subtitle}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={scrollToQuote}
              data-ocid="service.hero.primary_button"
              style={{
                backgroundColor: "oklch(0.52 0.23 253)",
                color: "white",
                padding: "0.75rem 1.75rem",
                borderRadius: 6,
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              Get a Free Quote
            </button>
            <Link
              to="/"
              data-ocid="service.hero.secondary_button"
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "0.75rem 1.75rem",
                borderRadius: 6,
                border: "2px solid rgba(255,255,255,0.40)",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── B. Overview ── */}
      <section
        style={{ backgroundColor: "white", padding: "5rem 0" }}
        aria-label="Service overview"
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="lg:grid-cols-[1fr_340px] lg:grid"
        >
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.23 253)",
                marginBottom: "0.75rem",
              }}
            >
              Service Overview
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "oklch(0.10 0.01 253)",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              {data.title}
            </h2>
            {data.description.map((p) => (
              <p
                key={p.slice(0, 30)}
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "oklch(0.35 0.02 253)",
                  marginBottom: "1.25rem",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Key Facts Card */}
          <div
            style={{
              backgroundColor: "oklch(0.10 0.05 253)",
              borderRadius: 12,
              padding: "2rem",
              color: "white",
              alignSelf: "start",
            }}
          >
            <h3
              style={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                marginBottom: "1.25rem",
                color: "white",
              }}
            >
              Key Facts
            </h3>
            {[
              { label: "Delivery Time", value: "3–7 business days" },
              { label: "File Formats", value: "STEP, IGES, DXF, PDF" },
              { label: "Software", value: "SolidWorks, CATIA, AutoCAD" },
              { label: "Standards", value: "ASME Y14.5, ISO 2768" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.50)" }}>
                  {label}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "white",
                    textAlign: "right",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. Features Grid ── */}
      <section
        style={{ backgroundColor: "#f8f9fa", padding: "5rem 0" }}
        aria-label="What is included"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.23 253)",
                marginBottom: "0.5rem",
              }}
            >
              Deliverables
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "oklch(0.10 0.01 253)",
              }}
            >
              What&apos;s Included
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                data-ocid={`service.features.item.${i + 1}`}
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: "1.5rem",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    backgroundColor: "oklch(0.52 0.23 253 / 0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <f.icon
                    style={{
                      width: 20,
                      height: 20,
                      color: "oklch(0.52 0.23 253)",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "oklch(0.10 0.01 253)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {f.title}
                  </p>
                  <p style={{ fontSize: 13, color: "oklch(0.45 0.02 253)" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D. Process ── */}
      <section
        style={{ backgroundColor: "white", padding: "5rem 0" }}
        aria-label="Our process"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.23 253)",
                marginBottom: "0.5rem",
              }}
            >
              Workflow
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "oklch(0.10 0.01 253)",
              }}
            >
              How We Work
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                data-ocid={`service.process.item.${i + 1}`}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    color: "oklch(0.52 0.23 253 / 0.15)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "oklch(0.10 0.01 253)",
                    marginBottom: "0.5rem",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "oklch(0.45 0.02 253)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. Technologies ── */}
      <section
        style={{
          backgroundColor: "oklch(0.08 0.03 253)",
          padding: "5rem 0",
        }}
        aria-label="Software and standards"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.62 0.22 253)",
                marginBottom: "0.5rem",
              }}
            >
              Tools & Standards
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "white",
              }}
            >
              Software & Standards
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {techs.map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: "oklch(0.12 0.05 253)",
                  border: "1px solid oklch(0.52 0.23 253 / 0.40)",
                  borderRadius: 8,
                  padding: "0.625rem 1.25rem",
                  color: "white",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── F. Sample Projects ── */}
      <section
        style={{ backgroundColor: "white", padding: "5rem 0" }}
        aria-label="Related work"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.23 253)",
                marginBottom: "0.5rem",
              }}
            >
              Portfolio
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "oklch(0.10 0.01 253)",
              }}
            >
              Related Work
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((proj, i) => (
              <div
                key={proj.title}
                data-ocid={`service.projects.item.${i + 1}`}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "2rem",
                  borderTop: "3px solid oklch(0.52 0.23 253)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "oklch(0.52 0.23 253)",
                    backgroundColor: "oklch(0.52 0.23 253 / 0.08)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: 20,
                    marginBottom: "0.75rem",
                  }}
                >
                  {proj.tag}
                </span>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "oklch(0.10 0.01 253)",
                    marginBottom: "0.5rem",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "oklch(0.45 0.02 253)",
                    lineHeight: 1.6,
                  }}
                >
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── G. FAQ ── */}
      <section
        style={{ backgroundColor: "#f8f9fa", padding: "5rem 0" }}
        aria-label="Frequently asked questions"
      >
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.23 253)",
                marginBottom: "0.5rem",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "oklch(0.10 0.01 253)",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible data-ocid="service.faq.panel">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger
                  data-ocid={`service.faq.item.${i + 1}`}
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "oklch(0.10 0.01 253)",
                  }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    fontSize: 14,
                    color: "oklch(0.35 0.02 253)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── H. CTA Banner ── */}
      <section
        style={{
          backgroundColor: "oklch(0.18 0.15 253)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
        aria-label="Call to action"
      >
        <h2
          style={{
            fontFamily: "Bricolage Grotesque, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "white",
            marginBottom: "0.75rem",
          }}
        >
          Ready to Start Your Project?
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.65)",
            marginBottom: "2rem",
          }}
        >
          Get a detailed quote within 24 hours. No commitment required.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={scrollToQuote}
            data-ocid="service.cta.primary_button"
            style={{
              backgroundColor: "oklch(0.52 0.23 253)",
              color: "white",
              padding: "0.875rem 2rem",
              borderRadius: 6,
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Request a Free Quote
          </button>
          <Link
            to="/"
            data-ocid="service.cta.secondary_button"
            style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "0.875rem 2rem",
              borderRadius: 6,
              border: "2px solid rgba(255,255,255,0.35)",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* ── Footer credit ── */}
      <footer
        style={{
          backgroundColor: "oklch(0.06 0.02 253)",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} D MECH HUB. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
