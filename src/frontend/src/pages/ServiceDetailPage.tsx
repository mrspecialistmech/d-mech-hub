import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useParams } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  CheckCircle,
  Clock,
  FileCode,
  Grid3x3,
  HardDrive,
  Home,
  Layers,
  Lightbulb,
  MessageSquare,
  Package,
  Printer,
  Ruler,
  ScanLine,
  Settings,
  Upload,
  Wrench,
} from "lucide-react";
import { useRef, useState } from "react";
import ImageGallery from "../components/ImageGallery";
import { getServiceBySlug } from "../data/services";

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

const processSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We discuss your requirements, tolerances, and standards to fully understand the scope.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Design",
    desc: "Our engineers build the model or drawing from your inputs using industry-leading software.",
    icon: Settings,
  },
  {
    num: "03",
    title: "Review",
    desc: "You review the draft and provide feedback — we refine until the design is exactly right.",
    icon: CheckCircle,
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Final files delivered in your required formats with full documentation and revision notes.",
    icon: Package,
  },
];

const faqs = [
  {
    q: "What file formats do you accept?",
    a: "We accept STEP, IGES, DWG, DXF, PDF, STL, and native SolidWorks/CATIA files. If you have a format not listed, please get in touch — we work with most industry standards.",
  },
  {
    q: "What is the typical delivery time?",
    a: "Delivery times depend on the service and complexity. Most projects are delivered within 3–10 business days. Rush delivery within 24–48 hours is available for an additional fee.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. All projects include 2 rounds of free revisions. Additional revision rounds are available at a nominal fee. Our goal is your complete satisfaction.",
  },
  {
    q: "How do I get started?",
    a: "Upload your STEP/CAD files using the upload box below, or contact us via the contact page with your requirements, sketches, or reference drawings. We respond within 24 hours.",
  },
];

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams({ from: "/services/$serviceSlug" });
  const service = getServiceBySlug(serviceSlug);

  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);
    if (!file) {
      setFileName(null);
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setFileError("File exceeds 20 MB limit. Please upload a smaller file.");
      setFileName(null);
      e.target.value = "";
      return;
    }
    setFileName(file.name);
  };

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1
          className="font-display font-bold text-3xl"
          style={{ color: "oklch(0.42 0.19 253)" }}
        >
          Service Not Found
        </h1>
        <p style={{ color: "oklch(0.45 0.02 253)" }}>
          The service you're looking for doesn't exist.
        </p>
        <Link
          to="/services"
          data-ocid="service.back.link"
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  const Icon = iconMap[service.icon] ?? Layers;

  return (
    <div className="min-h-screen bg-background">
      {/* ── Sticky Mini Navbar ── */}
      <header
        className="sticky top-16 lg:top-[72px] z-40 border-b"
        style={{
          backgroundColor: "oklch(0.07 0.03 253)",
          borderColor: "oklch(0.16 0.06 253)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/">
            <img
              src="/assets/logo-dmh-new.png"
              alt="D MECH HUB"
              className="h-9"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/services"
              data-ocid="service.back.link"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Services
            </Link>
            <Link
              to="/contact"
              data-ocid="service.quote.button"
              className="px-5 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.05 0.04 253) 0%, oklch(0.12 0.09 253) 60%, oklch(0.07 0.05 253) 100%)",
        }}
        aria-label="Service hero"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs mb-6"
            style={{ color: "rgba(255,255,255,0.50)" }}
            aria-label="Breadcrumb"
          >
            <Home className="w-3.5 h-3.5" />
            <Link
              to="/"
              style={{ color: "rgba(255,255,255,0.50)" }}
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              to="/services"
              style={{ color: "rgba(255,255,255,0.50)" }}
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span style={{ color: "oklch(0.72 0.20 253)" }}>
              {service.name}
            </span>
          </nav>
          <div className="flex items-start gap-5">
            <div
              className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl flex-shrink-0"
              style={{ backgroundColor: "oklch(0.52 0.23 253 / 0.20)" }}
            >
              <Icon
                className="w-7 h-7"
                style={{ color: "oklch(0.72 0.20 253)" }}
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h1
                className="font-display font-black text-white mb-3"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                }}
              >
                {service.name}
              </h1>
              <p
                className="text-base max-w-2xl"
                style={{ color: "oklch(0.72 0.20 253)" }}
              >
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "white" }}
        aria-label="Service overview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Service Overview
            </p>
            <h2
              className="font-display font-bold mb-5"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              {service.name}
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.35 0.02 253)" }}
            >
              {service.description}
            </p>
          </div>

          {/* Key Facts Sidebar */}
          <div
            className="rounded-xl p-6 self-start"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.08 0.04 253) 0%, oklch(0.13 0.07 253) 100%)",
            }}
          >
            <h3 className="font-display font-bold text-white text-base mb-5">
              Key Facts
            </h3>
            {[
              {
                label: "Delivery Time",
                value: service.deliveryTime,
                icon: Clock,
              },
              {
                label: "File Formats",
                value: service.fileFormats.slice(0, 4).join(", "),
                icon: FileCode,
              },
              {
                label: "Software",
                value: service.software.slice(0, 3).join(", "),
                icon: HardDrive,
              },
              {
                label: "Standards",
                value: service.standards.slice(0, 2).join(", "),
                icon: Wrench,
              },
            ].map(({ label, value, icon: FactIcon }) => (
              <div
                key={label}
                className="flex items-start gap-3 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <FactIcon
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.62 0.18 253)" }}
                />
                <div className="min-w-0">
                  <span
                    className="block text-xs"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {label}
                  </span>
                  <span className="block text-sm font-semibold text-white break-words">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Gallery ── */}
      {service.images && service.images.length > 0 && (
        <ImageGallery
          images={service.images.map((src, i) => ({
            src,
            caption: `${service.name} — Project ${i + 1}`,
          }))}
          title="Project Gallery"
          subtitle="Sample project images for this service"
          variant="dark"
        />
      )}

      {/* ── What's Included ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="What is included"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Deliverables
            </p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              What&apos;s Included
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="service.features.list"
          >
            {service.features.map((feat, i) => (
              <div
                key={feat}
                data-ocid={`service.features.item.${i + 1}`}
                className="bg-white rounded-xl p-5 border border-border flex items-start gap-4"
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.42 0.19 253 / 0.12)" }}
                >
                  <CheckCircle
                    className="w-4.5 h-4.5"
                    style={{ color: "oklch(0.42 0.19 253)" }}
                  />
                </div>
                <p
                  className="text-sm leading-relaxed pt-1.5"
                  style={{ color: "oklch(0.25 0.02 253)" }}
                >
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "white" }}
        aria-label="Our process"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Workflow
            </p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              How We Work
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="service.process.list"
          >
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                data-ocid={`service.process.item.${i + 1}`}
                className="relative text-center rounded-xl p-7 border border-border"
              >
                <div
                  className="font-display font-black text-5xl mb-3"
                  style={{
                    color: "oklch(0.42 0.19 253 / 0.15)",
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </div>
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4"
                  style={{ backgroundColor: "oklch(0.42 0.19 253 / 0.10)" }}
                >
                  <step.icon
                    className="w-5 h-5"
                    style={{ color: "oklch(0.42 0.19 253)" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="font-display font-bold text-base mb-2"
                  style={{ color: "oklch(0.10 0.01 253)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.02 253)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Software & Standards ── */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.07 0.04 253) 0%, oklch(0.14 0.08 253) 100%)",
        }}
        aria-label="Software and standards"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.62 0.18 253)" }}
            >
              Tools &amp; Standards
            </p>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Software &amp; Standards
            </h2>
          </div>
          <div className="mb-8">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4 text-center"
              style={{ color: "oklch(0.62 0.18 253)" }}
            >
              Software
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {service.software.map((sw) => (
                <span
                  key={sw}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                  style={{
                    backgroundColor: "oklch(0.12 0.06 253)",
                    border: "1px solid oklch(0.52 0.23 253 / 0.40)",
                  }}
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4 text-center"
              style={{ color: "oklch(0.62 0.18 253)" }}
            >
              Standards
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {service.standards.map((std) => (
                <span
                  key={std}
                  className="px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{
                    backgroundColor: "oklch(0.18 0.10 253)",
                    border: "1px solid oklch(0.42 0.19 253 / 0.50)",
                    color: "oklch(0.78 0.15 253)",
                  }}
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP File Upload ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="Upload CAD file"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Quick Quote
            </p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "oklch(0.10 0.01 253)",
              }}
            >
              Upload Your 3D CAD Model
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "oklch(0.45 0.02 253)" }}
            >
              Upload a STEP file (max&nbsp;20&nbsp;MB) for a quick quote and
              feasibility assessment.
            </p>
          </div>

          {/* Upload Box */}
          <button
            type="button"
            className="rounded-xl p-8 text-center w-full cursor-pointer border-2 border-dashed transition-colors"
            style={{
              borderColor: "oklch(0.52 0.23 253 / 0.50)",
              backgroundColor: "white",
            }}
            data-ocid="service.upload.dropzone"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Upload STEP file"
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
              style={{ backgroundColor: "oklch(0.42 0.19 253 / 0.12)" }}
            >
              <Upload
                className="w-7 h-7"
                style={{ color: "oklch(0.42 0.19 253)" }}
              />
            </div>
            {fileName ? (
              <div>
                <p
                  className="font-semibold text-base mb-1"
                  style={{ color: "oklch(0.42 0.19 253)" }}
                >
                  ✓ {fileName}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.45 0.02 253)" }}
                >
                  Click to change file
                </p>
              </div>
            ) : (
              <div>
                <p
                  className="font-bold text-base mb-2"
                  style={{ color: "oklch(0.10 0.01 253)" }}
                >
                  Drag &amp; drop or click to upload
                </p>
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.45 0.02 253)" }}
                >
                  Accepts .step, .stp files up to 20&nbsp;MB
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept=".step,.stp"
              className="sr-only"
              data-ocid="service.upload_button"
              onChange={handleFileChange}
              aria-label="Upload STEP file input"
            />
          </button>

          {fileError && (
            <p
              className="mt-3 text-sm text-center"
              style={{ color: "oklch(0.55 0.22 25)" }}
              data-ocid="service.upload.error_state"
            >
              {fileError}
            </p>
          )}

          <div className="mt-4 space-y-2">
            <p
              className="text-xs text-center"
              style={{ color: "oklch(0.45 0.02 253)" }}
            >
              ✉ Files are reviewed by our team within 24 hours
            </p>
            <p
              className="text-xs text-center"
              style={{ color: "oklch(0.55 0.02 253)" }}
            >
              Note: For direct email delivery of files, a form service
              integration (e.g. Formspree) is required.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "white" }}
        aria-label="Frequently asked questions"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              FAQ
            </p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
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
                  className="text-left text-sm font-semibold"
                  style={{ color: "oklch(0.10 0.01 253)" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.35 0.02 253)" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="font-display font-black text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Get a Quote for {service.name}
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Contact us with your requirements and receive a detailed quote
            within 24 hours.
          </p>
          <Link
            to="/contact"
            data-ocid="service.cta.primary_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
