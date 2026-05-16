import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Home,
  LayoutGrid,
  Settings2,
} from "lucide-react";
import { getProductBySlug } from "../data/products";

const CERT_COLORS: Record<string, string> = {
  "WHO-GMP": "oklch(0.40 0.18 253)",
  USFDA: "oklch(0.35 0.16 245)",
  MHRA: "oklch(0.38 0.17 255)",
  cGMP: "oklch(0.42 0.19 260)",
  "ASME BPE": "oklch(0.36 0.15 240)",
  ASME: "oklch(0.36 0.15 240)",
  ATEX: "oklch(0.38 0.17 250)",
  PED: "oklch(0.37 0.16 248)",
  CE: "oklch(0.39 0.18 252)",
  "ISO 9001:2015": "oklch(0.34 0.14 235)",
  "GMP Annex 1": "oklch(0.41 0.18 257)",
  "21 CFR Part 11": "oklch(0.38 0.17 262)",
  "ASME VIII": "oklch(0.36 0.15 243)",
};

function CertBadge({ cert }: { cert: string }) {
  const color = CERT_COLORS[cert] ?? "oklch(0.42 0.19 253)";
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
      style={{
        backgroundColor: `${color}18`,
        color,
        border: `1px solid ${color}35`,
      }}
    >
      <Award className="h-3 w-3" />
      {cert}
    </span>
  );
}

export default function ProductDetailPage() {
  const { productSlug } = useParams({ from: "/products/$productSlug" });
  const product = getProductBySlug(productSlug);

  if (!product) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-center"
        data-ocid="product-detail.not_found"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: "oklch(0.94 0.02 253)" }}
        >
          <LayoutGrid
            className="h-8 w-8"
            style={{ color: "oklch(0.42 0.19 253)" }}
          />
        </div>
        <h1
          className="font-display font-bold text-2xl"
          style={{ color: "oklch(0.08 0.025 253)" }}
        >
          Product Not Found
        </h1>
        <p style={{ color: "oklch(0.40 0.02 253)" }}>
          The product you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
          style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
          data-ocid="product-detail.back_button"
        >
          <ArrowLeft className="h-4 w-4" />
          View All Products
        </Link>
      </div>
    );
  }

  const specEntries = Object.entries(product.specifications);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Sticky Mini Navbar ────────────────────────────────────────── */}
      <div
        className="sticky top-16 lg:top-[72px] z-40 border-b backdrop-blur-sm"
        style={{
          backgroundColor: "oklch(0.06 0.02 253 / 0.97)",
          borderColor: "oklch(0.15 0.05 253)",
        }}
        data-ocid="product-detail.mini_nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors focus-visible:outline-none"
              style={{ color: "rgba(255,255,255,0.65)" }}
              data-ocid="product-detail.back_link"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
              data-ocid="product-detail.quote_button"
            >
              Request Quote
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Hero Banner ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.05 0.025 253) 0%, oklch(0.12 0.08 253) 60%, oklch(0.08 0.04 253) 100%)",
        }}
        aria-label="Product detail banner"
        data-ocid="product-detail.hero"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.2 253) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.2 253) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 mb-5 text-sm flex-wrap"
            aria-label="Breadcrumb"
            data-ocid="product-detail.breadcrumb"
          >
            <Link
              to="/"
              className="flex items-center gap-1 transition-colors"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight
              className="h-3 w-3"
              style={{ color: "rgba(255,255,255,0.30)" }}
            />
            <Link
              to="/products"
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Products
            </Link>
            <ChevronRight
              className="h-3 w-3"
              style={{ color: "rgba(255,255,255,0.30)" }}
            />
            <span
              className="truncate max-w-[200px]"
              style={{ color: "oklch(0.72 0.20 253)" }}
            >
              {product.name}
            </span>
          </nav>

          {/* Category badge */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              backgroundColor: "oklch(0.52 0.23 253 / 0.25)",
              color: "oklch(0.80 0.16 253)",
              border: "1px solid oklch(0.52 0.23 253 / 0.40)",
            }}
          >
            {product.category}
          </span>

          <h1
            className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight max-w-2xl"
            style={{ color: "white" }}
          >
            {product.name}
          </h1>
        </div>
      </section>

      {/* ── Overview Section ──────────────────────────────────────────── */}
      <section
        className="py-14 lg:py-18"
        style={{ backgroundColor: "white" }}
        aria-label="Product overview"
        data-ocid="product-detail.overview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left — Full description */}
            <div className="lg:col-span-2">
              <h2
                className="font-display font-bold text-xl mb-4"
                style={{ color: "oklch(0.08 0.025 253)" }}
              >
                Product Overview
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.30 0.02 253)" }}
              >
                {product.description}
              </p>
            </div>

            {/* Right — Key Facts sidebar */}
            <aside
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "oklch(0.97 0.01 253)",
                borderColor: "oklch(0.88 0.03 253)",
              }}
              aria-label="Key facts"
              data-ocid="product-detail.key_facts"
            >
              <h3
                className="font-display font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2"
                style={{ color: "oklch(0.42 0.19 253)" }}
              >
                <ClipboardList className="h-4 w-4" />
                Key Facts
              </h3>

              <dl className="space-y-4">
                <div>
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide mb-1"
                    style={{ color: "oklch(0.50 0.03 253)" }}
                  >
                    Category
                  </dt>
                  <dd
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.12 0.04 253)" }}
                  >
                    {product.category}
                  </dd>
                </div>

                <div>
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "oklch(0.50 0.03 253)" }}
                  >
                    Applications
                  </dt>
                  <dd>
                    <ul className="space-y-1.5">
                      {product.applications.map((app) => (
                        <li
                          key={app}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "oklch(0.20 0.04 253)" }}
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 mt-0.5"
                            style={{ color: "oklch(0.52 0.23 253)" }}
                          />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>

                <div>
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "oklch(0.50 0.03 253)" }}
                  >
                    Certifications
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {product.certifications.map((c) => (
                      <CertBadge key={c} cert={c} />
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Specifications Table ─────────────────────────────────────── */}
      {specEntries.length > 0 && (
        <section
          className="py-12 border-t"
          style={{
            backgroundColor: "oklch(0.97 0.005 253)",
            borderColor: "oklch(0.90 0.01 253)",
          }}
          aria-label="Specifications"
          data-ocid="product-detail.specifications"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-xl mb-6 flex items-center gap-2"
              style={{ color: "oklch(0.08 0.025 253)" }}
            >
              <Settings2
                className="h-5 w-5"
                style={{ color: "oklch(0.42 0.19 253)" }}
              />
              Technical Specifications
            </h2>

            <div
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: "oklch(0.88 0.02 253)" }}
            >
              <table
                className="w-full text-sm"
                aria-label="Specifications table"
              >
                <thead>
                  <tr style={{ backgroundColor: "oklch(0.42 0.19 253)" }}>
                    <th
                      className="text-left px-5 py-3 font-semibold text-white w-2/5"
                      scope="col"
                    >
                      Specification
                    </th>
                    <th
                      className="text-left px-5 py-3 font-semibold text-white"
                      scope="col"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specEntries.map(([key, value], i) => (
                    <tr
                      key={key}
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "white" : "oklch(0.97 0.005 253)",
                      }}
                    >
                      <td
                        className="px-5 py-3 font-medium border-r"
                        style={{
                          color: "oklch(0.20 0.06 253)",
                          borderColor: "oklch(0.90 0.01 253)",
                        }}
                      >
                        {key}
                      </td>
                      <td
                        className="px-5 py-3"
                        style={{ color: "oklch(0.30 0.03 253)" }}
                      >
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Applications Section ─────────────────────────────────────── */}
      <section
        className="py-12"
        style={{ backgroundColor: "white" }}
        aria-label="Where it's used"
        data-ocid="product-detail.applications"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold text-xl mb-6"
            style={{ color: "oklch(0.08 0.025 253)" }}
          >
            Where It's Used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.applications.map((app, idx) => (
              <div
                key={app}
                className="flex items-start gap-3 p-4 rounded-xl border"
                style={{
                  backgroundColor: "oklch(0.97 0.01 253)",
                  borderColor: "oklch(0.90 0.02 253)",
                }}
                data-ocid={`product-detail.application.${idx + 1}`}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                  style={{
                    backgroundColor: "oklch(0.42 0.19 253 / 0.12)",
                    color: "oklch(0.42 0.19 253)",
                  }}
                >
                  {idx + 1}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.20 0.04 253)" }}
                >
                  {app}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-14"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.08 0.04 253) 0%, oklch(0.15 0.10 253) 100%)",
        }}
        aria-label="Call to action"
        data-ocid="product-detail.cta"
      >
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display font-bold text-2xl lg:text-3xl mb-3"
            style={{ color: "white" }}
          >
            Interested in {product.name}?
          </h2>
          <p
            className="text-base mb-8 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Contact our engineering team for customised specifications, pricing,
            and delivery timelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-lg"
              style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
              data-ocid="product-detail.cta_quote_button"
            >
              Request a Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border"
              style={{
                color: "white",
                borderColor: "rgba(255,255,255,0.30)",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
              data-ocid="product-detail.cta_all_products_button"
            >
              <ArrowLeft className="h-4 w-4" />
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
