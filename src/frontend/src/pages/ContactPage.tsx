import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  HelpCircle,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  Send,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

const SERVICE_OPTIONS = [
  "3D CAD Design",
  "3D Printing",
  "Sheet Metal Design",
  "New Product Development",
  "Reverse Engineering",
  "CFD / FEA Analysis",
  "GD&T Documentation",
  "Pharma Equipment",
  "General Inquiry",
];

const FAQ_ITEMS = [
  {
    q: "How quickly do you respond?",
    a: "We respond to all enquiries within 24 business hours. For urgent projects, mention it in your message and we will prioritize accordingly.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept STEP, IGES, DWG, DXF, PDF, STL, and common image formats (JPG, PNG). Maximum file size is 10 MB per file.",
  },
  {
    q: "Do you offer international services?",
    a: "Yes, we work with clients globally across India, UAE, the UK, and beyond. All project communication is conducted in English.",
  },
  {
    q: "What's the minimum project size?",
    a: "We work with projects of all sizes — from a single part drawing to a full plant engineering engagement. No project is too small.",
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm(emptyForm);
    setFiles([]);
  };

  return (
    <div>
      {/* ── Hero Banner ──────────────────────────────────────────────── */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{ backgroundColor: "oklch(0.07 0.025 253)" }}
        data-ocid="contact.page"
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Blue glow */}
        <div
          className="absolute right-0 top-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 mb-6"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="text-xs font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
              data-ocid="contact.breadcrumb_home"
            >
              Home
            </Link>
            <ChevronRight
              className="h-3 w-3"
              style={{ color: "rgba(255,255,255,0.30)" }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: "oklch(0.72 0.20 253)" }}
            >
              Contact
            </span>
          </nav>

          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.72 0.20 253)" }}
          >
            Contact Us
          </p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: "white",
              lineHeight: 1.15,
            }}
          >
            Get in Touch
          </h1>
          <div
            className="mb-4 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
          <p
            className="max-w-xl text-base lg:text-lg"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Contact us for inquiries, quotes, and project discussions. Our
            engineering team is ready to help.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form ───────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="Contact form"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* LEFT — Contact Information */}
            <div className="lg:col-span-2">
              <h2
                className="font-display font-bold text-2xl mb-2"
                style={{ color: "oklch(0.08 0.025 253)" }}
              >
                Contact Information
              </h2>
              <div
                className="h-0.5 w-10 mb-8 rounded-full"
                style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
              />

              <div className="space-y-6 mb-8">
                {/* Company name */}
                <div className="flex items-start gap-4">
                  <div
                    className="h-11 w-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253 / 0.10)",
                      border: "1.5px solid oklch(0.52 0.23 253 / 0.25)",
                    }}
                  >
                    <Building2
                      className="h-5 w-5"
                      style={{ color: "oklch(0.42 0.19 253)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.55 0.22 253)" }}
                    >
                      Company
                    </div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.08 0.025 253)" }}
                    >
                      D PHARCO ENGINEERING / D MECH HUB
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="h-11 w-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253 / 0.10)",
                      border: "1.5px solid oklch(0.52 0.23 253 / 0.25)",
                    }}
                  >
                    <MapPin
                      className="h-5 w-5"
                      style={{ color: "oklch(0.42 0.19 253)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.55 0.22 253)" }}
                    >
                      Address
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.25 0.03 253)" }}
                    >
                      Plot No. XX, Industrial Area,
                      <br />
                      [City], [State] – [PIN], India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="h-11 w-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253 / 0.10)",
                      border: "1.5px solid oklch(0.52 0.23 253 / 0.25)",
                    }}
                  >
                    <Phone
                      className="h-5 w-5"
                      style={{ color: "oklch(0.42 0.19 253)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.55 0.22 253)" }}
                    >
                      Phone
                    </div>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="text-sm font-medium transition-colors"
                      style={{ color: "oklch(0.25 0.03 253)" }}
                    >
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="h-11 w-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253 / 0.10)",
                      border: "1.5px solid oklch(0.52 0.23 253 / 0.25)",
                    }}
                  >
                    <Mail
                      className="h-5 w-5"
                      style={{ color: "oklch(0.42 0.19 253)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.55 0.22 253)" }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:info@dmechhub.com"
                      className="text-sm font-medium transition-colors"
                      style={{ color: "oklch(0.42 0.19 253)" }}
                    >
                      info@dmechhub.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div
                    className="h-11 w-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253 / 0.10)",
                      border: "1.5px solid oklch(0.52 0.23 253 / 0.25)",
                    }}
                  >
                    <Clock
                      className="h-5 w-5"
                      style={{ color: "oklch(0.42 0.19 253)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "oklch(0.55 0.22 253)" }}
                    >
                      Working Hours
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "oklch(0.25 0.03 253)" }}
                    >
                      Mon–Sat: 9:00 AM – 6:00 PM
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.55 0.08 253)" }}
                    >
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider + D MECH HUB tagline */}
              <div
                className="rounded-xl p-5 border"
                style={{
                  backgroundColor: "oklch(0.07 0.025 253)",
                  borderColor: "oklch(0.15 0.05 253)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "oklch(0.72 0.20 253)" }}
                >
                  D MECH HUB
                </p>
                <h3
                  className="font-display font-bold text-base mb-1"
                  style={{ color: "white" }}
                >
                  Mechanical Design Services
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Est. 2022
                </p>
                <div
                  className="my-3 h-px"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  From concept to production — 3D CAD design, 3D printing,
                  reverse engineering, FEA/CFD analysis, and GD&amp;T
                  documentation for industrial and manufacturing clients
                  worldwide.
                </p>
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-20 px-8 rounded-2xl border text-center"
                  data-ocid="contact.success_state"
                  style={{
                    borderColor: "oklch(0.52 0.23 253 / 0.30)",
                    backgroundColor: "oklch(0.07 0.025 253)",
                  }}
                >
                  <CheckCircle2
                    className="h-16 w-16 mb-5"
                    style={{ color: "oklch(0.62 0.22 253)" }}
                  />
                  <h3
                    className="font-display font-bold text-2xl mb-2"
                    style={{ color: "white" }}
                  >
                    Message Received!
                  </h3>
                  <p
                    className="text-sm mb-8 max-w-sm"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    Thank you for reaching out. Our team will review your
                    requirements and respond within 24 business hours.
                  </p>
                  <p
                    className="text-xs mb-6 px-4 py-2.5 rounded-lg"
                    style={{
                      color: "rgba(255,255,255,0.40)",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Note: Email integration requires a third-party service
                    (e.g., Formspree or EmailJS) to deliver messages to your
                    inbox.
                  </p>
                  <Button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    style={{
                      borderColor: "oklch(0.52 0.23 253 / 0.40)",
                      color: "white",
                      backgroundColor: "transparent",
                    }}
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div
                  className="rounded-2xl border p-7 lg:p-9 shadow-elevated"
                  style={{
                    backgroundColor: "oklch(1 0 0)",
                    borderColor: "oklch(0.88 0.01 253)",
                  }}
                >
                  <h2
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: "oklch(0.08 0.025 253)" }}
                  >
                    Send Us a Message
                  </h2>
                  <p
                    className="text-sm mb-7"
                    style={{ color: "oklch(0.45 0.04 253)" }}
                  >
                    Fields marked{" "}
                    <span style={{ color: "oklch(0.577 0.245 27)" }}>*</span>{" "}
                    are required.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                    data-ocid="contact.panel"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-name"
                          className="text-xs font-semibold text-foreground"
                        >
                          Full Name{" "}
                          <span style={{ color: "oklch(0.577 0.245 27)" }}>
                            *
                          </span>
                        </Label>
                        <Input
                          id="contact-name"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          required
                          autoComplete="name"
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-email"
                          className="text-xs font-semibold text-foreground"
                        >
                          Email Address{" "}
                          <span style={{ color: "oklch(0.577 0.245 27)" }}>
                            *
                          </span>
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          required
                          autoComplete="email"
                          data-ocid="contact.input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-phone"
                          className="text-xs font-semibold text-foreground"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          autoComplete="tel"
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-company"
                          className="text-xs font-semibold text-foreground"
                        >
                          Company Name
                        </Label>
                        <Input
                          id="contact-company"
                          placeholder="Acme Engineering Ltd."
                          value={form.company}
                          onChange={(e) => set("company", e.target.value)}
                          autoComplete="organization"
                          data-ocid="contact.input"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-service"
                        className="text-xs font-semibold text-foreground"
                      >
                        Service Interest
                      </Label>
                      <Select
                        value={form.service}
                        onValueChange={(v) => set("service", v)}
                      >
                        <SelectTrigger
                          id="contact-service"
                          data-ocid="contact.select"
                        >
                          <SelectValue placeholder="Select a service…" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-message"
                        className="text-xs font-semibold text-foreground"
                      >
                        Message{" "}
                        <span style={{ color: "oklch(0.577 0.245 27)" }}>
                          *
                        </span>
                      </Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Describe your project requirements, timeline, and any relevant specifications…"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        required
                        rows={5}
                        className="resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>

                    {/* File Upload */}
                    <div
                      className="rounded-xl border-2 border-dashed p-5"
                      style={{ borderColor: "oklch(0.70 0.10 253 / 0.40)" }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Paperclip
                          className="h-4 w-4"
                          style={{ color: "oklch(0.42 0.19 253)" }}
                        />
                        <h3
                          className="text-sm font-semibold"
                          style={{ color: "oklch(0.08 0.025 253)" }}
                        >
                          Attach Files for Discussion
                        </h3>
                      </div>
                      <p
                        className="text-xs mb-4"
                        style={{ color: "oklch(0.45 0.04 253)" }}
                      >
                        Add your image, PDF document, or DWG file to help us
                        understand your project better.
                      </p>

                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                        style={{
                          backgroundColor: "oklch(0.52 0.23 253 / 0.08)",
                          border: "1.5px solid oklch(0.52 0.23 253 / 0.30)",
                          color: "oklch(0.42 0.19 253)",
                        }}
                        data-ocid="contact.upload_button"
                      >
                        <Paperclip className="h-4 w-4" />
                        Choose Files
                      </button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,.pdf,.dwg,.dxf"
                        multiple
                        onChange={handleFiles}
                        className="hidden"
                        aria-label="Attach files"
                      />

                      {files.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {files.map((file, i) => (
                            <li
                              key={`${file.name}-${i}`}
                              className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg"
                              style={{
                                backgroundColor: "oklch(0.92 0.01 253)",
                              }}
                              data-ocid={`contact.file.item.${i + 1}`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <FileText
                                  className="h-4 w-4 shrink-0"
                                  style={{ color: "oklch(0.42 0.19 253)" }}
                                />
                                <span
                                  className="text-xs truncate"
                                  style={{ color: "oklch(0.25 0.03 253)" }}
                                >
                                  {file.name}
                                </span>
                                <span
                                  className="text-xs shrink-0"
                                  style={{ color: "oklch(0.55 0.08 253)" }}
                                >
                                  ({(file.size / 1024 / 1024).toFixed(1)} MB)
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="rounded p-0.5 transition-colors"
                                style={{ color: "oklch(0.55 0.08 253)" }}
                                aria-label={`Remove ${file.name}`}
                                data-ocid={`contact.file.delete_button.${i + 1}`}
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}

                      <p
                        className="text-xs mt-3"
                        style={{ color: "oklch(0.60 0.04 253)" }}
                      >
                        Supported: Images, PDF, DWG, DXF (max 10 MB per file)
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full font-semibold py-5 text-sm group transition-all duration-200"
                      style={{
                        backgroundColor: "oklch(0.42 0.19 253)",
                        color: "white",
                      }}
                      data-ocid="contact.submit_button"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <p
                      className="text-xs text-center"
                      style={{ color: "oklch(0.60 0.04 253)" }}
                    >
                      We typically respond within 24 business hours. All
                      information is kept strictly confidential.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ──────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(0.07 0.025 253)" }}
        aria-label="Location map"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "oklch(0.72 0.20 253)" }}
            >
              Our Location
            </p>
            <h2
              className="font-display font-bold text-2xl"
              style={{ color: "white" }}
            >
              Find Us
            </h2>
          </div>

          <div
            className="w-full rounded-xl overflow-hidden border flex items-center justify-center"
            style={{
              height: "360px",
              backgroundColor: "oklch(0.12 0.04 253)",
              borderColor: "oklch(0.20 0.06 253)",
            }}
            data-ocid="contact.map_placeholder"
          >
            <div className="text-center">
              <Globe
                className="h-14 w-14 mx-auto mb-4 opacity-30"
                style={{ color: "oklch(0.72 0.20 253)" }}
              />
              <p
                className="font-display font-semibold text-base"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                Map — Location Coming Soon
              </p>
              <p
                className="text-xs mt-1.5"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                India | UAE | Global Engineering Projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
        aria-label="Frequently asked questions"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "oklch(0.52 0.23 253)" }}
            >
              Support
            </p>
            <h2
              className="font-display font-bold mb-3"
              style={{
                color: "oklch(0.08 0.025 253)",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              }}
            >
              Common Questions
            </h2>
            <div
              className="mx-auto h-1 w-12 rounded-full"
              style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
            />
          </div>

          <div className="space-y-3" data-ocid="contact.faq.list">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.q}
                className="rounded-xl border overflow-hidden transition-shadow duration-200"
                style={{
                  borderColor:
                    openFaq === i
                      ? "oklch(0.52 0.23 253 / 0.40)"
                      : "oklch(0.88 0.01 253)",
                  backgroundColor: "oklch(1 0 0)",
                  boxShadow:
                    openFaq === i
                      ? "0 4px 20px oklch(0.52 0.23 253 / 0.08)"
                      : "none",
                }}
                data-ocid={`contact.faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  data-ocid={`contact.faq.toggle.${i + 1}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      className="h-5 w-5 shrink-0"
                      style={{ color: "oklch(0.52 0.23 253)" }}
                    />
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "oklch(0.08 0.025 253)" }}
                    >
                      {item.q}
                    </span>
                  </div>
                  <ChevronRight
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                    style={{
                      color: "oklch(0.52 0.23 253)",
                      transform:
                        openFaq === i ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div
                    className="px-5 pb-5 pt-0"
                    style={{ borderTop: "1px solid oklch(0.92 0.01 253)" }}
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.35 0.04 253)" }}
                    >
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA below FAQ */}
          <div
            className="mt-12 rounded-xl p-8 text-center"
            style={{ backgroundColor: "oklch(0.42 0.19 253)" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Still have questions?
            </p>
            <h3
              className="font-display font-bold text-xl mb-4"
              style={{ color: "white" }}
            >
              Our team is here to help
            </h3>
            <a
              href="mailto:info@dmechhub.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: "white",
                color: "oklch(0.42 0.19 253)",
              }}
              data-ocid="contact.cta.email_button"
            >
              <Mail className="h-4 w-4" />
              info@dmechhub.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
