import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Play,
  Shield,
  Wrench,
} from "lucide-react";
import { forwardRef, useCallback, useEffect, useState } from "react";

interface HeroSectionProps {
  onGetQuote: () => void;
  onViewWork: () => void;
}

const slides = [
  {
    image: "/assets/generated/hero-slide-1.dim_1400x700.jpg",
    badge: "ISO Certified Engineering Services",
    headline: "Precision Mechanical",
    highlight: "Design Services",
    sub: "From concept to production-ready engineering — CAD/CAM, FEA, Product Design & More. Trusted by 200+ clients across 10+ global industries.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "View Our Work",
  },
  {
    image: "/assets/generated/hero-slide-2.dim_1400x700.jpg",
    badge: "Advanced CAD/CAM Solutions",
    headline: "3D Modeling &",
    highlight: "Product Design",
    sub: "Industry-leading 3D CAD modeling, simulation, and FEA analysis delivered by expert engineers using CATIA, SolidWorks & NX.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Our Services",
  },
  {
    image: "/assets/generated/hero-slide-3.dim_1400x700.jpg",
    badge: "Trusted Since 2022",
    headline: "Engineering Excellence",
    highlight: "From D MECH HUB",
    sub: "Delivering precision components and tooling designs for aerospace, automotive, and heavy industry clients worldwide.",
    primaryCta: "Start a Project",
    secondaryCta: "View Portfolio",
  },
];

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ onGetQuote, onViewWork }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
      (index: number) => emblaApi?.scrollTo(index),
      [emblaApi],
    );

    useEffect(() => {
      if (!emblaApi) return;
      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on("select", onSelect);
      onSelect();
      return () => {
        emblaApi.off("select", onSelect);
      };
    }, [emblaApi]);

    // Autoplay
    useEffect(() => {
      if (!emblaApi) return;
      const timer = setInterval(() => emblaApi.scrollNext(), 5000);
      return () => clearInterval(timer);
    }, [emblaApi]);

    return (
      <section
        ref={ref}
        id="home"
        className="relative min-h-screen overflow-hidden pt-16"
        aria-label="Hero section"
      >
        {/* Embla Carousel Viewport */}
        <div ref={emblaRef} className="overflow-hidden h-full">
          <div className="flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.badge}
                className="relative min-w-full min-h-screen flex items-center justify-center shrink-0"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 hero-overlay" />

                {/* Blue radial accent */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.52 0.23 253 / 0.25) 0%, transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                  <div className="max-w-3xl">
                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
                      style={{
                        backgroundColor: "oklch(0.52 0.23 253 / 0.15)",
                        borderColor: "oklch(0.62 0.22 253 / 0.45)",
                        color: "oklch(0.80 0.15 253)",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: "oklch(0.72 0.20 253)" }}
                      />
                      {slide.badge}
                    </div>

                    {/* Headline */}
                    <h1
                      className="font-display font-bold text-white leading-tight mb-6"
                      style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
                    >
                      {slide.headline}
                      <br />
                      <span style={{ color: "oklch(0.72 0.20 253)" }}>
                        {slide.highlight}
                      </span>
                    </h1>

                    {/* Sub-headline */}
                    <p
                      className="text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl"
                      style={{ color: "rgba(255,255,255,0.78)" }}
                    >
                      {slide.sub}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        onClick={onGetQuote}
                        data-ocid="hero.primary_button"
                        className="font-semibold text-base px-8 py-6 shadow-glow group transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
                        style={{
                          backgroundColor: "oklch(0.52 0.23 253)",
                          color: "white",
                        }}
                      >
                        {slide.primaryCta}
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        onClick={onViewWork}
                        data-ocid="hero.secondary_button"
                        className="font-semibold text-base px-8 py-6 group border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                        style={{
                          color: "white",
                          borderColor: "rgba(255,255,255,0.3)",
                        }}
                      >
                        <Play className="mr-2 h-5 w-5" />
                        {slide.secondaryCta}
                      </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center gap-6 mt-12">
                      {[
                        { icon: Shield, text: "ISO 9001 Certified" },
                        { icon: Award, text: "Founded in 2022" },
                        { icon: Wrench, text: "ASME Standards" },
                      ].map(({ icon: Icon, text }) => (
                        <div
                          key={text}
                          className="flex items-center gap-2"
                          style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{ color: "oklch(0.72 0.20 253)" }}
                          />
                          <span className="text-sm font-medium">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom gradient fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, white)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={scrollPrev}
          data-ocid="hero.prev_button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full flex items-center justify-center border border-white/30 bg-black/30 text-white hover:bg-black/60 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          data-ocid="hero.next_button"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full flex items-center justify-center border border-white/30 bg-black/30 text-white hover:bg-black/60 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              type="button"
              key={slide.badge}
              onClick={() => scrollTo(i)}
              data-ocid={`hero.dot.${i + 1}`}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              style={{
                width: selectedIndex === i ? "2rem" : "0.5rem",
                backgroundColor:
                  selectedIndex === i
                    ? "oklch(0.72 0.20 253)"
                    : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs text-white tracking-widest uppercase">
            Scroll
          </span>
          <div
            className="h-8 w-px"
            style={{
              background: "linear-gradient(to bottom, white, transparent)",
            }}
          />
        </div>
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";
export default HeroSection;
