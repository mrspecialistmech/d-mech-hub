import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FlaskConical,
  Layers,
  Microscope,
  ShieldCheck,
  Star,
  Target,
  Users,
  Wrench,
} from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "4+", label: "Years of Excellence" },
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Global Clients" },
  { value: "cGMP", label: "Certified Processes" },
];

const PILLARS = [
  {
    letter: "D",
    title: "Design",
    description:
      "Creating solutions that meet exact client needs. Our expert engineers and designers understand your unique challenges to deliver functional, intuitive, and technically superior solutions.",
    color: "oklch(0.42 0.19 253)",
  },
  {
    letter: "P",
    title: "Precision",
    description:
      "State-of-the-art facilities with cutting-edge technology. We deliver unparalleled accuracy and consistency in every project — from initial design through final inspection.",
    color: "oklch(0.35 0.18 220)",
  },
  {
    letter: "E",
    title: "Excellence",
    description:
      "We strive to exceed expectations at every step. Through continuous feedback loops, rigorous R&D, and a quality-first mindset, we push boundaries to deliver outstanding results.",
    color: "oklch(0.30 0.15 253)",
  },
];

const CAPABILITIES = [
  { icon: Layers, label: "Detailed Design Engineering" },
  { icon: FlaskConical, label: "Pharmaceutical Equipment Manufacturing" },
  { icon: Cpu, label: "Chemical Plant Engineering" },
  { icon: Microscope, label: "Biotech Processing Solutions" },
  { icon: ShieldCheck, label: "Clean Room Equipment Design" },
  { icon: Award, label: "Quality Compliance (WHO-GMP, USFDA, MHRA)" },
];

const CERTIFICATIONS = ["WHO-GMP", "USFDA", "MHRA", "cGMP"];

const MECH_SERVICES = [
  { icon: Wrench, label: "3D CAD Design & Modelling" },
  { icon: Layers, label: "3D Printing & Rapid Prototyping" },
  { icon: Target, label: "Sheet Metal Design" },
  { icon: Star, label: "New Product Development" },
  { icon: Cpu, label: "Reverse Engineering" },
  { icon: Users, label: "CFD / FEA Analysis" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* 1 ── Hero Banner ──────────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: "oklch(0.08 0.025 253)" }}
        aria-label="About page hero"
        data-ocid="about.hero"
      >
        {/* background grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.55 0.22 253 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.22 253 / 0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* diagonal accent */}
        <div
          className="absolute -right-24 top-0 bottom-0 w-96 opacity-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.23 253 / 0) 0%, oklch(0.52 0.23 253 / 0.5) 100%)",
            transform: "skewX(-8deg)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-xs mb-6"
            aria-label="Breadcrumb"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            <Link
              to="/"
              className="hover:underline transition-colors"
              style={{ color: "oklch(0.72 0.20 253)" }}
              data-ocid="about.breadcrumb.home_link"
            >
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span style={{ color: "rgba(255,255,255,0.70)" }}>About</span>
          </nav>

          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
              style={{
                backgroundColor: "oklch(0.52 0.23 253 / 0.15)",
                border: "1px solid oklch(0.52 0.23 253 / 0.40)",
                color: "oklch(0.72 0.20 253)",
              }}
            >
              About Us
            </div>
            <h1
              className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-5"
              style={{ color: "white" }}
            >
              About{" "}
              <span style={{ color: "oklch(0.72 0.20 253)" }}>
                D PHARCO ENGINEERING
              </span>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              Leading Innovators in Pharmaceutical &amp; Chemical Plant
              Engineering — delivering precision-engineered solutions since
              2022.
            </p>
          </div>
        </div>
      </section>

      {/* 2 ── Company Story ────────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28 bg-background"
        aria-label="Our story"
        data-ocid="about.story"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <div>
              <div className="section-divider mb-5" />
              <h2
                className="font-display font-extrabold text-3xl lg:text-4xl mb-6"
                style={{ color: "oklch(0.08 0.025 253)" }}
              >
                Our Story
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "oklch(0.30 0.03 253)" }}
              >
                <p>
                  D PHARCO ENGINEERING is a leading player in pharma and
                  chemical plant engineering. Founded with the vision of
                  delivering precise and reliable engineering solutions, we
                  specialize in setting up formulation and production plants for
                  pharmaceutical, chemical, and biotech industries.
                </p>
                <p>
                  Our team brings deep expertise in detailed design engineering
                  and manufacturing services for processing vessels,
                  bioreactors, and clean room equipment. Every project is
                  executed with meticulous attention to quality standards —
                  ensuring compliance with WHO-GMP, USFDA, MHRA, and cGMP
                  regulations.
                </p>
                <p>
                  With a philosophy rooted in Design, Precision &amp; Excellence
                  (DPE), we consistently push the boundaries of what's
                  achievable in plant engineering. Our clients trust us as a
                  partner for complex, high-stakes manufacturing environments
                  across India, UAE, and globally.
                </p>
              </div>
            </div>

            {/* Right — Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-7 flex flex-col justify-center items-center text-center shadow-elevated"
                  style={{
                    backgroundColor:
                      i % 2 === 0
                        ? "oklch(0.42 0.19 253)"
                        : "oklch(0.08 0.025 253)",
                    color: "white",
                  }}
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <span className="font-display font-extrabold text-4xl lg:text-5xl leading-none mb-2">
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{
                      color:
                        i % 2 === 0
                          ? "rgba(255,255,255,0.80)"
                          : "oklch(0.72 0.20 253)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── DPE Pillars ──────────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="Our philosophy"
        data-ocid="about.pillars"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-5" />
            <h2
              className="font-display font-extrabold text-3xl lg:text-4xl mb-3"
              style={{ color: "oklch(0.08 0.025 253)" }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-lg font-semibold"
              style={{ color: "oklch(0.42 0.19 253)" }}
            >
              Design, Precision &amp; Excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="bg-background rounded-xl p-8 shadow-elevated relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
                style={{
                  borderTop: `4px solid ${pillar.color}`,
                }}
                data-ocid={`about.pillar.${i + 1}`}
              >
                {/* Giant background letter */}
                <span
                  className="absolute -right-2 -bottom-3 font-display font-extrabold text-9xl leading-none select-none pointer-events-none opacity-5"
                  style={{ color: pillar.color }}
                  aria-hidden="true"
                >
                  {pillar.letter}
                </span>

                {/* Letter badge */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 font-display font-extrabold text-2xl text-white shadow-elevated"
                  style={{ backgroundColor: pillar.color }}
                >
                  {pillar.letter}
                </div>

                <h3
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: "oklch(0.08 0.025 253)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.35 0.03 253)" }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── Core Capabilities ────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28 bg-background"
        aria-label="Core capabilities"
        data-ocid="about.capabilities"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left heading */}
            <div>
              <div className="section-divider mb-5" />
              <h2
                className="font-display font-extrabold text-3xl lg:text-4xl mb-5"
                style={{ color: "oklch(0.08 0.025 253)" }}
              >
                Core Capabilities
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.30 0.03 253)" }}
              >
                From initial concept through detailed engineering to final
                commissioning — our capabilities span the full lifecycle of
                pharma and chemical plant infrastructure, backed by rigorous
                quality management.
              </p>
              <Link
                to="/contact"
                data-ocid="about.capabilities.cta_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm text-white transition-all duration-200 group hover:opacity-90"
                style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
              >
                Discuss Your Project
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Right capability list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {CAPABILITIES.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.label}
                    className="flex items-start gap-3 p-4 rounded-lg border transition-all duration-200 hover:shadow-elevated"
                    style={{
                      borderColor: "oklch(0.88 0.01 253)",
                      backgroundColor: "oklch(0.98 0.003 253)",
                    }}
                    data-ocid={`about.capability.${i + 1}`}
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "oklch(0.42 0.19 253 / 0.10)" }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: "oklch(0.42 0.19 253)" }}
                      />
                    </div>
                    <span
                      className="text-sm font-medium leading-tight"
                      style={{ color: "oklch(0.15 0.04 253)" }}
                    >
                      {cap.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── D MECH HUB Partnership ───────────────────────────────────── */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.08 0.025 253)" }}
        aria-label="D MECH HUB partnership"
        data-ocid="about.mechhub"
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.55 0.22 253 / 0.4) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{
                  backgroundColor: "oklch(0.52 0.23 253 / 0.15)",
                  border: "1px solid oklch(0.52 0.23 253 / 0.40)",
                  color: "oklch(0.72 0.20 253)",
                }}
              >
                Mechanical Design Services
              </div>
              <h2
                className="font-display font-extrabold text-3xl lg:text-4xl mb-5"
                style={{ color: "white" }}
              >
                D MECH HUB —{" "}
                <span style={{ color: "oklch(0.72 0.20 253)" }}>
                  Your CAD Partner
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Founded in 2022, D MECH HUB provides specialized mechanical
                design and CAD services to industrial clients. As a sister brand
                to D PHARCO ENGINEERING, D MECH HUB bridges the gap between
                concept and manufacturing-ready documentation.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                From 3D CAD modelling and 3D printing to sheet metal design,
                CFD/FEA analysis, and new product development — D MECH HUB
                delivers precise mechanical solutions that seamlessly complement
                pharma engineering projects.
              </p>
              <Link
                to="/services"
                data-ocid="about.mechhub.services_link"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm text-white transition-all duration-200 group"
                style={{
                  backgroundColor: "oklch(0.52 0.23 253)",
                  border: "1px solid oklch(0.65 0.22 253 / 0.40)",
                }}
              >
                View D MECH HUB Services
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Service chips */}
            <div className="grid grid-cols-2 gap-4">
              {MECH_SERVICES.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.label}
                    className="flex items-center gap-3 p-4 rounded-lg border"
                    style={{
                      backgroundColor: "oklch(0.12 0.035 253)",
                      borderColor: "oklch(0.22 0.07 253)",
                    }}
                    data-ocid={`about.mechservice.${i + 1}`}
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.42 0.19 253 / 0.20)" }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: "oklch(0.72 0.20 253)" }}
                      />
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      {svc.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6 ── Quality Standards ────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="Quality standards"
        data-ocid="about.quality"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Certifications */}
            <div>
              <div className="section-divider mb-5" />
              <h2
                className="font-display font-extrabold text-3xl lg:text-4xl mb-6"
                style={{ color: "oklch(0.08 0.025 253)" }}
              >
                Our Quality Standards
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.30 0.03 253)" }}
              >
                Quality is not a feature — it is the foundation of everything we
                do. Our processes are built around globally recognised
                pharmaceutical manufacturing standards, ensuring every vessel,
                system, and plant we design or manufacture meets the strictest
                compliance requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <span key={cert} className="certification-badge">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Quality points */}
            <div className="space-y-5">
              {[
                {
                  title: "Validated Manufacturing Processes",
                  text: "Each production step follows documented SOPs and validation protocols aligned with WHO-GMP guidelines.",
                },
                {
                  title: "Regulatory Compliance by Design",
                  text: "Equipment and facilities are designed from the ground up to satisfy USFDA, MHRA, and cGMP requirements — reducing inspection risk.",
                },
                {
                  title: "Material Traceability & Documentation",
                  text: "Every material, weld, and inspection record is traceable. Full documentation packages supplied with every project.",
                },
                {
                  title: "Continuous Improvement Culture",
                  text: "Regular audits, client feedback integration, and R&D investment keep our standards ahead of evolving regulations.",
                },
              ].map((point, i) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 p-5 rounded-lg border bg-background"
                  style={{ borderColor: "oklch(0.88 0.01 253)" }}
                  data-ocid={`about.quality.${i + 1}`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm text-white"
                    style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4
                      className="font-display font-bold text-sm mb-1"
                      style={{ color: "oklch(0.08 0.025 253)" }}
                    >
                      {point.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.35 0.03 253)" }}
                    >
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 ── CTA Banner ───────────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
        aria-label="Call to action"
        data-ocid="about.cta"
      >
        {/* diagonal stripe */}
        <div
          className="absolute -left-20 top-0 bottom-0 w-64 opacity-20 pointer-events-none"
          style={{
            background: "oklch(1 0 0 / 0.15)",
            transform: "skewX(-12deg)",
          }}
        />
        <div
          className="absolute -right-20 top-0 bottom-0 w-40 opacity-10 pointer-events-none"
          style={{
            background: "oklch(1 0 0 / 0.15)",
            transform: "skewX(-12deg)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-5"
            style={{ color: "white" }}
          >
            Partner With Us
          </h2>
          <p
            className="text-lg mb-10"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Let's build your next pharmaceutical, chemical, or mechanical
            engineering project together. Our team is ready to deliver
            precision, speed, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="about.cta.contact_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-semibold text-sm transition-all duration-200 group"
              style={{
                backgroundColor: "white",
                color: "oklch(0.42 0.19 253)",
              }}
            >
              Contact Us
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/products"
              data-ocid="about.cta.products_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-semibold text-sm border-2 transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.60)",
                color: "white",
              }}
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
