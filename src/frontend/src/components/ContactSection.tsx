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
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { forwardRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitEnquiry } from "../hooks/useQueries";

const SERVICE_TYPES = [
  "CAD / 3D Modeling",
  "Structural Analysis & FEA",
  "Sheet Metal Design",
  "Product Design & Development",
  "Reverse Engineering",
  "Drafting & Documentation",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98211 44621",
    href: "tel:+919821144621",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dmechhub.in",
    href: "mailto:info@dmechhub.in",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Plot 42, Industrial Area, Pune – 411019, India",
    href: null,
  },
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
};

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync: submitEnquiry, isPending } = useSubmitEnquiry();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.serviceType || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await submitEnquiry(form);
      setSubmitted(true);
      setForm(initialForm);
      toast.success(
        "Your enquiry has been sent! We'll get back to you within 24 hours.",
      );
    } catch (err) {
      console.error(err);
      toast.error("Failed to send enquiry. Please try again.");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.10 0.06 253)" }}
      aria-label="Contact Us"
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.72 0.20 253)" }}
          >
            Start a Project
          </p>
          <h2
            className="font-display font-bold mb-4 text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
          >
            Get In Touch
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Tell us about your project and we'll send you a detailed proposal
            within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2">
            <h3
              className="font-display font-bold text-lg mb-6"
              style={{ color: "white" }}
            >
              Contact Information
            </h3>

            <div className="space-y-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: "oklch(0.52 0.23 253 / 0.15)",
                      border: "1.5px solid oklch(0.52 0.23 253 / 0.30)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "oklch(0.72 0.20 253)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: "oklch(0.62 0.22 253)" }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm transition-colors"
                        style={{ color: "rgba(255,255,255,0.80)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        className="text-sm"
                        style={{ color: "rgba(255,255,255,0.70)" }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div
              className="rounded-lg p-5 border"
              style={{
                backgroundColor: "oklch(0.14 0.06 253)",
                borderColor: "oklch(0.22 0.08 253)",
              }}
            >
              <h4
                className="font-semibold text-sm mb-3"
                style={{ color: "white" }}
              >
                Business Hours
              </h4>
              <div
                className="space-y-1.5 text-sm"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span
                    className="font-medium"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    9:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span
                    className="font-medium"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    10:00 AM – 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span style={{ color: "rgba(255,255,255,0.40)" }}>
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-16 px-8 rounded-xl border text-center"
                data-ocid="contact.success_state"
                style={{
                  borderColor: "oklch(0.52 0.23 253 / 0.30)",
                  backgroundColor: "oklch(0.14 0.06 253)",
                }}
              >
                <CheckCircle2
                  className="h-14 w-14 mb-4"
                  style={{ color: "oklch(0.62 0.22 253)" }}
                />
                <h3
                  className="font-display font-bold text-xl mb-2"
                  style={{ color: "white" }}
                >
                  Enquiry Received!
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  Thank you for reaching out. Our engineering team will review
                  your requirements and get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  style={{
                    borderColor: "oklch(0.52 0.23 253 / 0.40)",
                    color: "white",
                    backgroundColor: "transparent",
                  }}
                >
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                data-ocid="contact.panel"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Full Name{" "}
                      <span style={{ color: "oklch(0.577 0.245 27)" }}>*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      autoComplete="name"
                      data-ocid="contact.input"
                      className="bg-white text-foreground border-border"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="company"
                      className="text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Acme Engineering Ltd."
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      autoComplete="organization"
                      data-ocid="contact.input"
                      className="bg-white text-foreground border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Email Address{" "}
                      <span style={{ color: "oklch(0.577 0.245 27)" }}>*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      autoComplete="email"
                      data-ocid="contact.input"
                      className="bg-white text-foreground border-border"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      autoComplete="tel"
                      data-ocid="contact.input"
                      className="bg-white text-foreground border-border"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="serviceType"
                    className="text-xs font-semibold"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    Service Required{" "}
                    <span style={{ color: "oklch(0.577 0.245 27)" }}>*</span>
                  </Label>
                  <Select
                    value={form.serviceType}
                    onValueChange={(v) => handleChange("serviceType", v)}
                  >
                    <SelectTrigger
                      data-ocid="contact.select"
                      id="serviceType"
                      className="bg-white text-foreground"
                    >
                      <SelectValue placeholder="Select a service…" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_TYPES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-xs font-semibold"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    Project Details{" "}
                    <span style={{ color: "oklch(0.577 0.245 27)" }}>*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your project requirements, timeline, and any relevant specifications…"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={5}
                    data-ocid="contact.textarea"
                    className="bg-white text-foreground border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full font-semibold py-5 text-base group transition-all duration-200 hover:scale-[1.01] hover:opacity-90"
                  style={{
                    backgroundColor: "oklch(0.52 0.23 253)",
                    color: "white",
                  }}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>

                <p
                  className="text-xs text-center"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  We typically respond within 24 business hours. All information
                  is kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;
