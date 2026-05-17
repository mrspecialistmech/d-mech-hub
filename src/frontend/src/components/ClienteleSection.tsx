import useEmblaCarousel from "embla-carousel-react";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect } from "react";

const WHATSAPP_NUMBER = "+918591343467";

const clients = [
  {
    name: "Balaji Industries",
    industry: "Pharma & Food Equipments",
    /*initials: "BI",*/
    color: "#1565C0",
  },
  {
    name: "IEP Process Solution",
    industry: "Oil & Gas",
    /*initials: "ME",*/
    color: "#1B5E20",
  },
  {
    name: "Om Sai Pharma Equipments",
    industry: "Automotive",
    /*initials: "BA",*/
    color: "#E65100",
  },
  {
    name: "IQ3 Connect",
    industry: "Design & Training Services",
    /* initials: "LT",*/
    color: "#880E4F",
  },
  {
    name: "ISRO Vendor",
    industry: "Aerospace & Defence",
    initials: "IS",
    color: "#4A148C",
  },
  {
    name: "Godrej Aerospace",
    industry: "Aerospace",
    initials: "GA",
    color: "#1A237E",
  },
  {
    name: "Thermax Ltd",
    industry: "Energy & Environment",
    initials: "TX",
    color: "#BF360C",
  },
  {
    name: "Kirloskar Group",
    industry: "Industrial Equipment",
    initials: "KG",
    color: "#01579B",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-4 w-4 fill-current"
      aria-hidden="true"
    >
      <path d="M16 2C8.28 2 2 8.28 2 16c0 2.45.65 4.74 1.78 6.72L2 30l7.44-1.74A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.27 0-4.38-.63-6.18-1.71l-.44-.26-4.41 1.03 1.06-4.28-.28-.46A11.5 11.5 0 1 1 16 27.5zm6.31-8.63c-.35-.17-2.05-1.01-2.37-1.13-.32-.12-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.41.26-.76.09-.35-.17-1.49-.55-2.84-1.75-1.05-.94-1.76-2.1-1.96-2.45-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.17-.21.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.17-.78-1.87-1.07-2.56-.28-.67-.57-.58-.78-.59h-.66c-.23 0-.6.09-.91.44-.31.35-1.2 1.17-1.2 2.85 0 1.68 1.22 3.3 1.39 3.53.17.23 2.4 3.66 5.82 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.08-.14-.31-.23-.66-.4z" />
    </svg>
  );
}

export default function ClienteleSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(timer);
  }, [emblaApi]);

  const waMessage = encodeURIComponent(
    "Hello D MECH HUB, I found you on your website. I'd like to discuss a project.",
  );

  return (
    <section
      id="clients"
      className="py-20"
      style={{ backgroundColor: "oklch(0.10 0.06 253)" }}
      data-ocid="clientele.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{
              backgroundColor: "oklch(0.52 0.23 253 / 0.15)",
              borderColor: "oklch(0.62 0.22 253 / 0.35)",
              color: "oklch(0.80 0.15 253)",
            }}
          >
            <Building2 className="h-3.5 w-3.5" />
            Trusted By Industry Leaders
          </div>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Our <span style={{ color: "oklch(0.72 0.20 253)" }}>Clientele</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            We've partnered with some of India's most respected industrial and
            engineering organisations.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {clients.map((client, i) => (
                <div
                  key={client.name}
                  className="shrink-0 px-3"
                  style={{ flexBasis: "280px" }}
                  data-ocid={`clientele.item.${i + 1}`}
                >
                  <div
                    className="rounded-2xl p-6 flex flex-col items-center text-center gap-4 border transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "oklch(0.14 0.06 253)",
                      borderColor: "oklch(0.22 0.08 253)",
                      minWidth: "220px",
                    }}
                  >
                    {/* Logo placeholder */}
                    <div
                      className="h-16 w-16 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shadow-lg"
                      style={{ backgroundColor: client.color }}
                    >
                      {client.initials}
                    </div>

                    <div>
                      <p className="font-semibold text-white font-display text-base leading-tight">
                        {client.name}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "oklch(0.65 0.10 253)" }}
                      >
                        {client.industry}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            data-ocid="clientele.prev_button"
            aria-label="Previous client"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: "oklch(0.18 0.07 253)",
              borderColor: "oklch(0.30 0.10 253)",
              color: "white",
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            data-ocid="clientele.next_button"
            aria-label="Next client"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: "oklch(0.18 0.07 253)",
              borderColor: "oklch(0.30 0.10 253)",
              color: "white",
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Direct WhatsApp CTA at bottom */}
        <div className="mt-14 text-center">
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            Want to join our growing list of clients?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="clientele.main_whatsapp_button"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg"
            style={{ backgroundColor: "#25D366", color: "white" }}
          >
            <WhatsAppIcon />
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
