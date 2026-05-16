import { Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  onScrollTo: (ref: React.RefObject<HTMLElement | null>) => void;
  servicesRef: React.RefObject<HTMLElement | null>;
  industriesRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

const currentYear = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";

export default function Footer({
  onScrollTo,
  servicesRef,
  industriesRef,
  projectsRef,
  contactRef,
}: FooterProps) {
  return (
    <footer
      className="relative"
      style={{ backgroundColor: "oklch(0.06 0.02 253)" }}
      aria-label="Site footer"
    >
      {/* Top blue line */}
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
            <img
              src="/assets/logo-dmh-new.png"
              alt="D MECH HUB"
              className="h-10 w-auto object-contain mb-4"
            />
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Full-service mechanical design engineering company. Precision
              engineering solutions for industries worldwide since 2022.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-ocid="footer.link"
                className="h-9 w-9 rounded-lg flex items-center justify-center border transition-all duration-200"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(255,255,255,0.10)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "oklch(0.52 0.23 253 / 0.50)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.10)";
                }}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                data-ocid="footer.link"
                className="h-9 w-9 rounded-lg flex items-center justify-center border transition-all duration-200"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(255,255,255,0.10)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "oklch(0.52 0.23 253 / 0.50)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.10)";
                }}
              >
                <Twitter className="h-4 w-4" />
              </a>
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
              {[
                { label: "Services", ref: servicesRef },
                { label: "Industries", ref: industriesRef },
                { label: "Portfolio", ref: projectsRef },
                { label: "Contact Us", ref: contactRef },
              ].map(({ label, ref: r }, i) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => onScrollTo(r)}
                    data-ocid={`footer.link.${i + 1}`}
                    className="text-sm text-left transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "oklch(0.72 0.20 253)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "rgba(255,255,255,0.50)";
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-display font-bold text-sm mb-4 tracking-wide"
              style={{ color: "white" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "CAD / 3D Modeling",
                "FEA Analysis",
                "Sheet Metal Design",
                "Product Design",
                "Reverse Engineering",
                "Documentation",
              ].map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.40)" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {currentYear} D MECH HUB. All Rights Reserved.
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
  );
}
