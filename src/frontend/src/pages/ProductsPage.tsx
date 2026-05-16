import { Link } from "@tanstack/react-router";
import { Award, ChevronRight, Home, Package } from "lucide-react";
import { products } from "../data/products";
import type { Product } from "../types";

const CATEGORY_COLORS: Record<string, string> = {
  "Mixing & Storage": "oklch(0.42 0.19 253)",
  "Reaction Systems": "oklch(0.38 0.18 240)",
  "Processing Equipment": "oklch(0.35 0.17 260)",
  "Drying Systems": "oklch(0.40 0.16 230)",
  "Filtration Systems": "oklch(0.44 0.20 250)",
  "Separation Equipment": "oklch(0.37 0.17 245)",
  "Blending Equipment": "oklch(0.41 0.18 255)",
  "Filling & Packaging": "oklch(0.36 0.16 265)",
};

const QUALITY_BADGES = [
  { label: "WHO-GMP", desc: "World Health Organization GMP Certified" },
  { label: "USFDA", desc: "US Food & Drug Administration Compliant" },
  { label: "MHRA", desc: "Medicines & Healthcare products Regulatory Agency" },
  { label: "cGMP", desc: "Current Good Manufacturing Practice" },
  { label: "ISO 9001:2015", desc: "Quality Management Systems" },
  { label: "ASME BPE", desc: "Bioprocessing Equipment Standard" },
];

function ProductCard({ product }: { product: Product }) {
  const catColor = CATEGORY_COLORS[product.category] ?? "oklch(0.42 0.19 253)";
  return (
    <article
      className="group flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "white",
        borderColor: "oklch(0.88 0.01 253)",
        boxShadow: "0 2px 8px rgba(0,40,120,0.06)",
      }}
      data-ocid={`products.card.${product.id}`}
    >
      {/* Blue accent top border */}
      <div
        className="h-1 w-full flex-shrink-0 transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: catColor }}
      />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category badge */}
        <span
          className="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3"
          style={{
            backgroundColor: `${catColor}18`,
            color: catColor,
            border: `1px solid ${catColor}30`,
          }}
        >
          {product.category}
        </span>

        {/* Product name */}
        <h3
          className="font-display font-bold text-base leading-snug mb-2 line-clamp-2"
          style={{ color: "oklch(0.08 0.025 253)" }}
        >
          {product.name}
        </h3>

        {/* Short description */}
        <p
          className="text-sm leading-relaxed line-clamp-3 flex-1 mb-4"
          style={{ color: "oklch(0.40 0.02 253)" }}
        >
          {product.description}
        </p>

        {/* Certification badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.certifications.slice(0, 3).map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
              style={{
                backgroundColor: "oklch(0.94 0.02 253)",
                color: "oklch(0.30 0.10 253)",
              }}
            >
              <Award className="h-2.5 w-2.5" />
              {cert}
            </span>
          ))}
          {product.certifications.length > 3 && (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
              style={{
                backgroundColor: "oklch(0.94 0.02 253)",
                color: "oklch(0.40 0.08 253)",
              }}
            >
              +{product.certifications.length - 3} more
            </span>
          )}
        </div>

        {/* View Details link */}
        <Link
          to="/products/$productSlug"
          params={{ productSlug: product.slug }}
          className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
          style={{
            backgroundColor: catColor,
            color: "white",
          }}
          data-ocid={`products.view_button.${product.id}`}
        >
          View Details
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Page Hero Banner ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.05 0.025 253) 0%, oklch(0.12 0.08 253) 50%, oklch(0.08 0.04 253) 100%)",
        }}
        aria-label="Products page banner"
        data-ocid="products.hero"
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.2 253) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.2 253) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Blue glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 mb-5 text-sm"
            aria-label="Breadcrumb"
            data-ocid="products.breadcrumb"
          >
            <Link
              to="/"
              className="flex items-center gap-1 transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight
              className="h-3.5 w-3.5"
              style={{ color: "rgba(255,255,255,0.30)" }}
            />
            <span style={{ color: "oklch(0.72 0.20 253)" }}>Products</span>
          </nav>

          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.52 0.23 253 / 0.25)" }}
            >
              <Package
                className="h-6 w-6"
                style={{ color: "oklch(0.72 0.20 253)" }}
              />
            </div>
            <div>
              <h1
                className="font-display font-bold text-3xl lg:text-4xl mb-2"
                style={{ color: "white" }}
              >
                Our Equipment Range
              </h1>
              <p
                className="text-base max-w-xl"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Pharmaceutical &amp; Chemical Plant Engineering Equipment —
                engineered to WHO-GMP, USFDA &amp; international standards.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { value: "13+", label: "Product Lines" },
              { value: "100+", label: "Configurations" },
              { value: "WHO-GMP", label: "Certified" },
            ].map((s) => (
              <div key={s.label}>
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "oklch(0.72 0.20 253)" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-sm ml-1.5"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────────── */}
      <section
        className="py-14 lg:py-18"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="Products grid"
        data-ocid="products.grid"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Badges ────────────────────────────────────────────── */}
      <section
        className="py-12 border-t"
        style={{
          backgroundColor: "white",
          borderColor: "oklch(0.90 0.01 253)",
        }}
        aria-label="Quality certifications"
        data-ocid="products.quality_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold text-center text-sm uppercase tracking-widest mb-8"
            style={{ color: "oklch(0.42 0.19 253)" }}
          >
            Quality &amp; Compliance Standards
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {QUALITY_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center gap-1.5 px-5 py-3.5 rounded-xl border transition-shadow hover:shadow-md"
                style={{
                  borderColor: "oklch(0.88 0.04 253)",
                  backgroundColor: "oklch(0.97 0.01 253)",
                }}
                title={b.desc}
              >
                <Award
                  className="h-5 w-5"
                  style={{ color: "oklch(0.42 0.19 253)" }}
                />
                <span
                  className="font-display font-bold text-sm"
                  style={{ color: "oklch(0.15 0.05 253)" }}
                >
                  {b.label}
                </span>
                <span
                  className="text-xs text-center max-w-[130px] leading-tight"
                  style={{ color: "oklch(0.45 0.03 253)" }}
                >
                  {b.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
