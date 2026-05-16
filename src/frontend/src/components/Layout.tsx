import { Link, Outlet, useRouter } from "@tanstack/react-router";
import { ChevronRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const currentYear = new Date().getFullYear();

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const isActive = (href: string) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      {/* ── Sticky Header ─────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b shadow-elevated"
        style={{
          backgroundColor: "oklch(0.08 0.025 253)",
          borderColor: "oklch(0.15 0.05 253)",
        }}
        data-ocid="layout.header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent rounded"
              aria-label="D MECH HUB — Home"
              data-ocid="layout.logo_link"
            >
              <img
                src="/assets/logo-dmh-new.png"
                alt="D MECH HUB"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span
                className="font-display font-bold text-base leading-tight hidden sm:block"
                style={{ color: "white" }}
              >
                D MECH HUB
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-ocid={`nav.link.${i + 1}`}
                  className="px-4 py-2 text-sm font-medium rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
                  style={{
                    color: isActive(link.href)
                      ? "oklch(0.72 0.20 253)"
                      : "rgba(255,255,255,0.82)",
                    backgroundColor: isActive(link.href)
                      ? "oklch(0.55 0.22 253 / 0.15)"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href))
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href))
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                data-ocid="nav.primary_button"
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 rounded text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group"
                style={{
                  backgroundColor: "oklch(0.52 0.23 253)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.45 0.21 253)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.52 0.23 253)";
                }}
              >
                Get a Quote
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                type="button"
                className="lg:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                data-ocid="nav.toggle"
                style={{ color: "white" }}
              >
                {mobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm w-full h-full border-0 cursor-default"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
          <div
            className="absolute top-16 left-0 right-0 shadow-2xl border-b"
            style={{
              backgroundColor: "oklch(0.08 0.025 253)",
              borderColor: "oklch(0.18 0.05 253)",
            }}
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav.mobile.link.${i + 1}`}
                  className="block w-full px-4 py-3 text-sm font-medium rounded transition-colors"
                  style={{
                    color: isActive(link.href)
                      ? "oklch(0.72 0.20 253)"
                      : "rgba(255,255,255,0.82)",
                    backgroundColor: isActive(link.href)
                      ? "oklch(0.55 0.22 253 / 0.15)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.mobile.primary_button"
                  className="block w-full text-center px-4 py-2.5 rounded text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: "oklch(0.52 0.23 253)",
                    color: "white",
                  }}
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* ── Page Content ─────────────────────────────────────────────── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer
        className="relative"
        style={{ backgroundColor: "oklch(0.06 0.02 253)" }}
        aria-label="Site footer"
        data-ocid="layout.footer"
      >
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(to right, oklch(0.30 0.18 253), oklch(0.52 0.23 253), oklch(0.30 0.18 253))",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img
                  src="/assets/logo-dmh-new.png"
                  alt="D MECH HUB"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </Link>
              <p
                className="text-sm leading-relaxed max-w-xs mb-2"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                Precision engineering solutions for pharmaceutical, chemical,
                and mechanical industries. D MECH HUB &amp; D PHARCO ENGINEERING
                — your trusted partners for innovative solutions.
              </p>
              <p
                className="text-xs mb-5"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Founded 2022
              </p>
              {/* Contact snippets */}
              <div className="space-y-2">
                <a
                  href="mailto:info@dmechhub.com"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.72 0.20 253)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.50)";
                  }}
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  info@dmechhub.com
                </a>
                <div
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                  <span>India | UAE | Global Projects</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-display font-bold text-sm mb-4 tracking-wide"
                style={{ color: "white" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <li key={href}>
                    <Link
                      to={href}
                      data-ocid={`footer.link.${i + 1}`}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "oklch(0.72 0.20 253)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.50)";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="font-display font-bold text-sm mb-4 tracking-wide"
                style={{ color: "white" }}
              >
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+919999999999"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "oklch(0.72 0.20 253)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.50)";
                    }}
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    +91 99999 99999
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@dmechhub.com"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "oklch(0.72 0.20 253)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.50)";
                    }}
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    info@dmechhub.com
                  </a>
                </li>
                <li
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                  <span>India | UAE | Global Engineering Projects</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              © {currentYear} D MECH HUB &amp; D PHARCO ENGINEERING. All Rights
              Reserved. Founded 2022.
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "oklch(0.72 0.20 253 / 0.70)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.45)";
                }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
