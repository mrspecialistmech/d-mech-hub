import { Skeleton } from "@/components/ui/skeleton";
import { Quote, Star } from "lucide-react";
import { forwardRef } from "react";
import type { Testimonial } from "../hooks/useQueries";
import { useGetAllTestimonials } from "../hooks/useQueries";

const fallbackTestimonials: Testimonial[] = [
  {
    clientName: "Rajesh Mehta",
    testimonialText:
      "D MECH HUB delivered exceptional FEA analysis for our pressure vessel redesign. Their attention to detail and turnaround time saved our project weeks of delay.",
    company: "Bharat Heavy Electricals Ltd.",
    rating: 5n,
  },
  {
    clientName: "Sarah Thompson",
    testimonialText:
      "We've partnered with D MECH HUB for three automotive programs. Their CAD accuracy and ASME compliance is consistently outstanding. A true extension of our engineering team.",
    company: "Thompson Automotive Group, USA",
    rating: 5n,
  },
  {
    clientName: "Michael van der Berg",
    testimonialText:
      "Their reverse engineering team reconstructed legacy aircraft components with sub-micron accuracy. Delivered complete production packages in record time.",
    company: "AeroParts Europe GmbH",
    rating: 5n,
  },
];

function StarRating({ rating }: { rating: bigint }) {
  const count = Number(rating);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <Star
          key={`star-${i}`}
          className="h-4 w-4"
          style={{
            color: i < count ? "oklch(0.52 0.23 253)" : "oklch(0.85 0.01 253)",
            fill: i < count ? "oklch(0.52 0.23 253)" : "none",
          }}
        />
      ))}
    </div>
  );
}

const TestimonialsSection = forwardRef<HTMLElement>((_, ref) => {
  const {
    data: backendTestimonials,
    isLoading,
    isError,
  } = useGetAllTestimonials();

  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials
      : fallbackTestimonials;

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.97 0.01 253)" }}
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.52 0.23 253)" }}
          >
            Client Voices
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              color: "oklch(0.10 0.01 253)",
            }}
          >
            What Our Clients Say
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-14 rounded-full"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          />
        </div>

        {/* Loading */}
        {isLoading && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="testimonials.loading_state"
          >
            {Array.from({ length: 3 }, (_, i) => i).map((i) => (
              <div
                key={`tskel-${i}`}
                className="bg-white rounded-lg p-6 shadow-card"
              >
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-3 w-24" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div
            className="text-center py-12"
            data-ocid="testimonials.error_state"
          >
            <p style={{ color: "oklch(0.45 0.02 253)" }}>
              Unable to load testimonials.
            </p>
          </div>
        )}

        {/* Testimonials grid */}
        {!isLoading && !isError && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {testimonials.map((t, i) => (
              <div
                key={`${t.clientName}-${t.company}`}
                data-ocid={`testimonials.item.${i + 1}`}
                className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              >
                {/* Quote icon */}
                <div
                  className="h-8 w-8 rounded mb-4"
                  style={{ backgroundColor: "oklch(0.52 0.23 253 / 0.10)" }}
                >
                  <Quote
                    className="h-8 w-8 p-1.5"
                    style={{ color: "oklch(0.52 0.23 253)" }}
                  />
                </div>

                {/* Star rating */}
                <StarRating rating={t.rating} />

                {/* Text */}
                <p
                  className="text-sm leading-relaxed mt-4 mb-5 flex-1 italic"
                  style={{ color: "oklch(0.35 0.02 253)" }}
                >
                  "{t.testimonialText}"
                </p>

                {/* Author */}
                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "oklch(0.92 0.01 253)" }}
                >
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "oklch(0.10 0.01 253)" }}
                  >
                    {t.clientName}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.55 0.02 253)" }}
                  >
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && testimonials.length === 0 && (
          <div
            className="text-center py-16 rounded-lg border"
            data-ocid="testimonials.empty_state"
            style={{
              borderColor: "oklch(0.90 0.01 253)",
              backgroundColor: "white",
            }}
          >
            <p style={{ color: "oklch(0.55 0.02 253)" }}>
              No testimonials yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
export default TestimonialsSection;
