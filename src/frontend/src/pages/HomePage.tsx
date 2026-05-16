import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { products } from "../data/products";
import { services } from "../data/services";

// ── Data ─────────────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    word: "Design",
    title: "Engineering Solutions Built to Precision",
    subtitle:
      "Specialised in pharmaceutical & chemical plant engineering — from concept to commissioned plant.",
  },
  {
    word: "Precision",
    title: "State-of-the-Art Manufacturing Equipment",
    subtitle:
      "Custom process equipment engineered to WHO-GMP, USFDA & MHRA standards for your production line.",
  },
  {
    word: "Excellence",
    title: "Exceeding Expectations Every Time",
    subtitle:
      "cGMP-compliant design, rigorous quality control, and on-time delivery guaranteed.",
  },
];

const STATS = [
  { value: "4+", label: "Years Experience", sub: "Since 2022" },
  { value: "100+", label: "Projects Delivered", sub: "Pharma & Mech" },
  { value: "50+", label: "Clients Served", sub: "India · UAE · Global" },
  {
    value: "4",
    label: "Quality Standards",
    sub: "WHO-GMP · USFDA · MHRA · cGMP",
  },
];

const PILLARS = [
  {
    letter: "D",
    title: "Design",
    desc: "Intelligent engineering from first principles — precise layouts, process flow, and plant design.",
  },
  {
    letter: "P",
    title: "Precision",
    desc: "Zero tolerance for deviation. Every vessel, reactor, and system built to exact specification.",
  },
  {
    letter: "E",
    title: "Excellence",
    desc: "GMP-validated processes, certified materials, and customer satisfaction at the core.",
  },
];

const INDUSTRIES = [
  {
    title: "Pharmaceutical",
    desc: "GMP-compliant vessels, dryers, and processing equipment for drug manufacturing plants.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="4"
          width="32"
          height="40"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 18h16M16 26h10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="30" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M27 30h6M30 27v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Chemical",
    desc: "Reactors, pressure vessels, and piping systems for bulk chemical and specialty chemical producers.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M18 8v14L8 36a4 4 0 0 0 3.4 6h25.2A4 4 0 0 0 40 36L30 22V8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M16 8h16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="33" r="2" fill="currentColor" />
        <circle cx="28" cy="37" r="1.5" fill="currentColor" />
        <circle cx="25" cy="29" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Biotechnology",
    desc: "Bioreactors, fermenters, and aseptic processing solutions for biotech and life-science applications.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M14 14c4 4 16 4 20 8s-4 12-8 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M34 14c-4 4-16 4-20 8s4 12 8 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Food & Beverage",
    desc: "Hygienic process tanks, blenders, and filling systems meeting food-grade safety standards.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M12 10c0 8 24 8 24 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M10 10l4 28h20l4-28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 22h12M17 30h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 6v8M24 4v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const CERT_ITEMS = [
  {
    label: "WHO-GMP",
    detail: "World Health Organisation Good Manufacturing Practice",
  },
  { label: "USFDA", detail: "US Food & Drug Administration Compliance" },
  {
    label: "MHRA",
    detail: "Medicines & Healthcare products Regulatory Agency",
  },
  { label: "cGMP", detail: "Current Good Manufacturing Practice" },
];

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rajesh Sharma",
    role: "Plant Manager",
    company: "PharmaGen India Ltd.",
    text: "D PHARCO ENGINEERING delivered our sterile mixing vessel project on time and to spec. Their understanding of GMP requirements is outstanding — zero audit findings.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Ahmed Al Rashidi",
    role: "Project Director",
    company: "Gulf Chem Solutions UAE",
    text: "The reactor design was flawless. D MECH HUB's 3D CAD team handled every revision promptly and the final fabrication drawings were punch-list free.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Menon",
    role: "VP Engineering",
    company: "BioTech Formulations Pvt. Ltd.",
    text: "From NPD concept to production-ready prototype in six weeks. Their rapid prototyping and reverse engineering capabilities saved us enormous time and cost.",
    rating: 5,
  },
];

const FEATURED_SERVICES = services.slice(0, 4);
const FEATURED_PRODUCTS = products.slice(0, 6);

// ── Helpers ───────────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {["1", "2", "3", "4", "5"].map((star, i) => (
        <svg
          key={star}
          viewBox="0 0 16 16"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          className="w-3.5 h-3.5 text-yellow-400"
          aria-hidden="true"
        >
          <path d="M8 1.5l1.8 3.6L14 5.9l-3 2.9.7 4.1L8 10.8l-3.7 2.1.7-4.1-3-2.9 4.2-.8z" />
        </svg>
      ))}
    </div>
  );
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide"
      style={{
        backgroundColor: "oklch(0.42 0.19 253 / 0.12)",
        color: "oklch(0.42 0.19 253)",
      }}
    >
      {label}
    </span>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  useEffect(() => {
    document.title =
      "D MECH HUB & D PHARCO ENGINEERING — Precision Engineering Solutions";
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO CAROUSEL (CSS-only)
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "min(90vh, 680px)" }}
        aria-label="Hero carousel"
        data-ocid="home.hero"
      >
        {/* Slide track */}
        <div className="hero-carousel-track">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.word}
              className="hero-slide"
              style={{
                animationDelay: `${i * -12}s`,
                backgroundImage:
                  "url('/assets/generated/hero-pharma-plant.dim_1600x700.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden={i !== 0}
            >
              <div
                className="hero-overlay absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.05 0.02 253 / 0.93) 0%, oklch(0.12 0.06 253 / 0.82) 60%, oklch(0.08 0.04 253 / 0.90) 100%)",
                }}
              />
              <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
                <span
                  className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full border self-start"
                  style={{
                    color: "oklch(0.75 0.18 253)",
                    borderColor: "oklch(0.55 0.22 253 / 0.40)",
                    backgroundColor: "oklch(0.42 0.19 253 / 0.15)",
                  }}
                >
                  {slide.word}
                </span>
                <h1
                  className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-3xl mb-6"
                  style={{ color: "white" }}
                >
                  {slide.title}
                </h1>
                <p
                  className="text-base sm:text-lg max-w-2xl mb-8 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    data-ocid="home.hero_cta"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-200 group"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253)",
                      color: "white",
                    }}
                  >
                    Get a Quote
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/products"
                    data-ocid="home.hero_products_link"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all duration-200"
                    style={{
                      borderColor: "rgba(255,255,255,0.30)",
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div
          className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20"
          aria-hidden="true"
        >
          {HERO_SLIDES.map((slide, i) => (
            <span
              key={`dot-${slide.word}`}
              className="hero-dot"
              style={{ animationDelay: `${i * -12}s` }}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. STATS BAR
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-10"
        style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
        aria-label="Key statistics"
        data-ocid="home.stats"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                data-ocid={`home.stats.item.${i + 1}`}
              >
                <div
                  className="font-display font-bold text-3xl sm:text-4xl mb-1"
                  style={{ color: "white" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-semibold text-sm uppercase tracking-wide mb-0.5"
                  style={{ color: "rgba(255,255,255,0.90)" }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. PRODUCT HIGHLIGHTS
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20 bg-background"
        aria-label="Equipment range"
        data-ocid="home.products"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-2 block">
              D PHARCO ENGINEERING
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              Our Equipment Range
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Custom-engineered pharmaceutical and chemical process equipment
              built to WHO-GMP, USFDA, and MHRA standards.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="home.products.list"
          >
            {FEATURED_PRODUCTS.map((product, i) => (
              <article
                key={product.id}
                className="group border rounded-lg p-5 bg-card hover:shadow-elevated transition-all duration-300 flex flex-col"
                data-ocid={`home.products.item.${i + 1}`}
              >
                <div className="mb-3">
                  <CategoryBadge label={product.category} />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-blue-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.certifications.slice(0, 3).map((cert) => (
                    <span key={cert} className="certification-badge">
                      {cert}
                    </span>
                  ))}
                </div>
                <Link
                  to="/products/$productSlug"
                  params={{ productSlug: product.slug }}
                  data-ocid={`home.products.item.${i + 1}.link`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-accent hover:underline transition-colors mt-auto"
                >
                  View Details
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              data-ocid="home.products.view_all_button"
              className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-sm border-2 transition-all duration-200"
              style={{
                borderColor: "oklch(0.42 0.19 253)",
                color: "oklch(0.42 0.19 253)",
              }}
            >
              View All Products
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. ABOUT / DPE PILLARS
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "oklch(0.04 0.015 253)" }}
        aria-label="About D PHARCO ENGINEERING"
        data-ocid="home.about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-3 block"
                style={{ color: "oklch(0.72 0.20 253)" }}
              >
                Since 2022
              </span>
              <h2
                className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 leading-tight"
                style={{ color: "white" }}
              >
                About D PHARCO ENGINEERING
              </h2>
              <div className="section-divider mb-6" />
              <p
                className="text-sm sm:text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                D PHARCO ENGINEERING is a specialist precision engineering
                company established in 2022, delivering world-class
                pharmaceutical and chemical plant solutions. Our expertise spans
                entire plant lifecycle — from initial design and equipment
                procurement to commissioning and validation.
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                We are certified to WHO-GMP, USFDA, MHRA, and cGMP standards,
                serving pharmaceutical, chemical, biotechnology, and food &
                beverage industries across India, UAE, and international
                markets.
              </p>
              <Link
                to="/about"
                data-ocid="home.about.learn_more_link"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded font-semibold text-sm transition-all duration-200"
                style={{
                  backgroundColor: "oklch(0.52 0.23 253)",
                  color: "white",
                }}
              >
                Learn About Us
              </Link>
            </div>

            {/* Right: Pillars */}
            <div className="grid grid-cols-1 gap-4">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 p-5 rounded-lg border"
                  style={{
                    backgroundColor: "oklch(0.08 0.025 253)",
                    borderColor: "oklch(0.16 0.05 253)",
                  }}
                  data-ocid={`home.about.pillar.${i + 1}`}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center font-display font-bold text-lg"
                    style={{
                      backgroundColor: "oklch(0.42 0.19 253)",
                      color: "white",
                    }}
                  >
                    {pillar.letter}
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-base mb-1.5"
                      style={{ color: "white" }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. QUALITY STANDARDS
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20 bg-muted/30"
        aria-label="Quality standards"
        data-ocid="home.quality"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3 block">
            Compliance & Certifications
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            Our Quality Standards
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base mb-10">
            Every piece of equipment we design and build is manufactured and
            validated to meet the world's most demanding pharmaceutical and
            chemical industry standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CERT_ITEMS.map((cert, i) => (
              <div
                key={cert.label}
                className="text-center px-6 py-4 rounded-lg border bg-card"
                style={{ minWidth: "160px" }}
                data-ocid={`home.quality.cert.${i + 1}`}
              >
                <span
                  className="font-display font-bold text-xl block mb-1"
                  style={{ color: "oklch(0.42 0.19 253)" }}
                >
                  {cert.label}
                </span>
                <p className="text-xs text-muted-foreground leading-tight">
                  {cert.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. INDUSTRIES SERVED
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20 bg-background"
        aria-label="Industries served"
        data-ocid="home.industries"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3 block">
              Sectors We Serve
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              Industries Served
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, i) => (
              <div
                key={industry.title}
                className="group p-6 rounded-lg border bg-card hover:shadow-elevated transition-all duration-300 text-center"
                data-ocid={`home.industries.item.${i + 1}`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200"
                  style={{
                    backgroundColor: "oklch(0.42 0.19 253 / 0.10)",
                    color: "oklch(0.42 0.19 253)",
                  }}
                >
                  {industry.icon}
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-blue-accent transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. SERVICES PREVIEW (D MECH HUB)
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "oklch(0.04 0.015 253)" }}
        aria-label="Mechanical design services"
        data-ocid="home.services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "oklch(0.72 0.20 253)" }}
            >
              D MECH HUB
            </span>
            <h2
              className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight"
              style={{ color: "white" }}
            >
              Mechanical Design Services
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p
              className="max-w-2xl mx-auto text-sm sm:text-base"
              style={{ color: "rgba(255,255,255,0.58)" }}
            >
              Precision CAD design, 3D printing, and engineering services —
              delivered fast and to production-ready standards by D MECH HUB.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            data-ocid="home.services.list"
          >
            {FEATURED_SERVICES.map((service, i) => (
              <article
                key={service.id}
                className="group p-5 rounded-lg border flex flex-col transition-all duration-300 hover:shadow-elevated"
                style={{
                  backgroundColor: "oklch(0.08 0.025 253)",
                  borderColor: "oklch(0.14 0.04 253)",
                }}
                data-ocid={`home.services.item.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-3 flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.42 0.19 253 / 0.18)" }}
                  aria-hidden="true"
                >
                  <ServiceIconSVG name={service.icon} />
                </div>
                <h3
                  className="font-display font-bold text-sm mb-2 group-hover:text-blue-accent transition-colors"
                  style={{ color: "white" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-xs leading-relaxed flex-1 mb-4"
                  style={{ color: "rgba(255,255,255,0.52)" }}
                >
                  {service.shortDescription}
                </p>
                <Link
                  to="/services/$serviceSlug"
                  params={{ serviceSlug: service.slug }}
                  data-ocid={`home.services.item.${i + 1}.link`}
                  className="text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                  style={{ color: "oklch(0.72 0.20 253)" }}
                >
                  Learn More
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3 h-3"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              data-ocid="home.services.view_all_button"
              className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-sm border transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.30)",
                color: "rgba(255,255,255,0.88)",
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. TESTIMONIALS
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-20 bg-muted/30"
        aria-label="Client testimonials"
        data-ocid="home.testimonials"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3 block">
              What Clients Say
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              Client Testimonials
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                key={t.id}
                className="bg-card border rounded-lg p-6 flex flex-col shadow-sm hover:shadow-elevated transition-all duration-300"
                data-ocid={`home.testimonials.item.${i + 1}`}
              >
                <StarRating rating={t.rating} />
                <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-5 flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer>
                  <span className="font-display font-bold text-sm text-foreground block">
                    {t.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. CTA BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-16 lg:py-20 overflow-hidden"
        style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
        aria-label="Call to action"
        data-ocid="home.cta"
      >
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.55 0.22 253 / 0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight"
            style={{ color: "white" }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="text-base sm:text-lg mb-8"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Contact us for a customized engineering solution — pharma equipment
            design, mechanical CAD, or full plant engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              data-ocid="home.cta.quote_button"
              className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-sm transition-all duration-200"
              style={{
                backgroundColor: "white",
                color: "oklch(0.42 0.19 253)",
              }}
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              data-ocid="home.cta.products_button"
              className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-sm border-2 transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.55)",
                color: "white",
              }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Service icon helper (SVG-only, no lucide dep needed for these 4) ──────────
function ServiceIconSVG({ name }: { name: string }) {
  const iconColor = "oklch(0.72 0.20 253)";
  switch (name) {
    case "Layers":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "Printer":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M6 9V2h12v7" />
          <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      );
    case "Grid3x3":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      );
    case "Lightbulb":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" strokeLinecap="round" />
        </svg>
      );
  }
}
