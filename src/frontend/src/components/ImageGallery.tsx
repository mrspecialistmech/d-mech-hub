import { Images, ZoomIn } from "lucide-react";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

export default function ImageGallery({
  images,
  title = "Project Gallery",
  subtitle,
  variant = "light",
}: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isDark = variant === "dark";

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0,
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : 0,
    );

  if (!images || images.length === 0) return null;

  return (
    <>
      <section
        className="py-14 lg:py-18"
        style={{
          backgroundColor: isDark
            ? "oklch(0.07 0.03 253)"
            : "oklch(0.97 0.005 253)",
        }}
        aria-label="Image gallery"
        data-ocid="gallery.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{
                  backgroundColor: isDark
                    ? "oklch(0.52 0.23 253 / 0.20)"
                    : "oklch(0.42 0.19 253 / 0.12)",
                }}
              >
                <Images
                  className="h-4 w-4"
                  style={{
                    color: isDark
                      ? "oklch(0.72 0.20 253)"
                      : "oklch(0.42 0.19 253)",
                  }}
                />
              </div>
              <h2
                className="font-display font-bold text-xl"
                style={{
                  color: isDark ? "white" : "oklch(0.08 0.025 253)",
                }}
              >
                {title}
              </h2>
            </div>
            {subtitle && (
              <p
                className="text-sm"
                style={{
                  color: isDark
                    ? "rgba(255,255,255,0.50)"
                    : "oklch(0.45 0.02 253)",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            data-ocid="gallery.list"
          >
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className="group relative overflow-hidden rounded-xl aspect-[4/3] focus-visible:outline-none focus-visible:ring-2"
                style={
                  {
                    focusRingColor: "oklch(0.52 0.23 253)",
                  } as React.CSSProperties
                }
                onClick={() => openLightbox(i)}
                data-ocid={`gallery.item.${i + 1}`}
                aria-label={`View ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "oklch(0.08 0.04 253 / 0.75)" }}
                >
                  <ZoomIn className="h-7 w-7 text-white mb-1.5" />
                  <span className="text-xs text-white font-medium px-2 text-center line-clamp-2">
                    {img.caption}
                  </span>
                </div>
                {/* Index badge */}
                <div
                  className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: "oklch(0.42 0.19 253 / 0.90)",
                    color: "white",
                  }}
                >
                  {i + 1}
                </div>
              </button>
            ))}
          </div>

          {/* View all hint */}
          <p
            className="text-center text-xs mt-5"
            style={{
              color: isDark ? "rgba(255,255,255,0.35)" : "oklch(0.55 0.02 253)",
            }}
          >
            Click any image to view full size
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
