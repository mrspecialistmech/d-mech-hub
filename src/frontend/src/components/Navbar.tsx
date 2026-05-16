import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  ref: React.RefObject<HTMLElement | null>;
}

interface NavbarProps {
  navLinks: NavLink[];
  onScrollTo: (ref: React.RefObject<HTMLElement | null>) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onGetQuote: () => void;
}

const SERVICE_ITEMS = [
  "CAD / 3D Modeling",
  "FEA Analysis",
  "Sheet Metal Design",
  "Product Design",
  "Reverse Engineering",
  "Technical Drawing",
];

export default function Navbar({
  navLinks,
  onScrollTo,
  mobileMenuOpen,
  setMobileMenuOpen,
  onGetQuote,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const bgStyle = scrolled
    ? {
        backgroundColor: "white",
        boxShadow: "0 2px 20px rgba(0,0,0,0.10)",
        borderBottom: "1px solid #e5e7eb",
      }
    : { backgroundColor: "transparent" };

  const linkColor = scrolled
    ? "oklch(0.10 0.01 253)"
    : "rgba(255,255,255,0.88)";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={bgStyle}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              type="button"
              onClick={() => onScrollTo(navLinks[0].ref)}
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent rounded"
              aria-label="D MECH HUB - Go to top"
            >
              <img
                src="/assets/logo-dmh-new.png"
                alt="D MECH HUB"
                className="h-10 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link, i) => {
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      ref={servicesRef}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        data-ocid={`nav.link.${i + 1}`}
                        className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent flex items-center gap-1"
                        style={{ color: linkColor }}
                      >
                        {link.label}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                      {servicesOpen && (
                        <div
                          className="absolute top-full left-0 mt-1 w-52 rounded-lg shadow-lg border overflow-hidden z-50"
                          style={{
                            backgroundColor: "white",
                            borderColor: "#e5e7eb",
                          }}
                        >
                          {SERVICE_ITEMS.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                onScrollTo(link.ref);
                                setServicesOpen(false);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors"
                              style={{ color: "oklch(0.20 0.05 253)" }}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => onScrollTo(link.ref)}
                    data-ocid={`nav.link.${i + 1}`}
                    className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
                    style={{ color: linkColor }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                type="button"
                onClick={onGetQuote}
                data-ocid="nav.primary_button"
                className="font-semibold hover:opacity-90 transition-all duration-200 shadow-glow hover:shadow-lg px-5 group"
                style={{
                  backgroundColor: "oklch(0.52 0.23 253)",
                  color: "white",
                }}
              >
                Get a Quote
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-ocid="nav.toggle"
              style={{ color: scrolled ? "oklch(0.10 0.01 253)" : "white" }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm w-full h-full border-0 cursor-default"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          />
          <div
            className="absolute top-16 left-0 right-0 shadow-2xl border-b"
            style={{ backgroundColor: "white", borderColor: "#e5e7eb" }}
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => onScrollTo(link.ref)}
                  data-ocid={`nav.mobile.link.${i + 1}`}
                  className="w-full text-left px-4 py-3 text-sm font-medium rounded transition-colors hover:bg-blue-50"
                  style={{ color: "oklch(0.15 0.05 253)" }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1">
                <Button
                  type="button"
                  onClick={onGetQuote}
                  data-ocid="nav.mobile.primary_button"
                  className="w-full font-semibold"
                  style={{
                    backgroundColor: "oklch(0.52 0.23 253)",
                    color: "white",
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
