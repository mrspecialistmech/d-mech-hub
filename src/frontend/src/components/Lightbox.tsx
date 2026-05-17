import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

interface LightboxProps {
  images: { src: string; caption: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const current = images[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <dialog
      open
      className="fixed inset-0 z-[200] flex items-center justify-center m-0 p-0 max-w-none max-h-none w-full h-full border-0"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
      data-ocid="gallery.lightbox"
      aria-label="Image viewer"
    >
      {/* Backdrop click to close */}
      <button
        type="button"
        className="absolute inset-0 w-full h-full border-0 cursor-default"
        onClick={onClose}
        aria-label="Close lightbox"
      />

      {/* Close Button */}
      <button
        type="button"
        className="absolute top-4 right-4 z-10 p-2 rounded-full text-white transition-colors"
        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
        onClick={onClose}
        data-ocid="gallery.lightbox.close_button"
        aria-label="Close"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.22)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.12)";
        }}
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white transition-colors"
          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          data-ocid="gallery.lightbox.pagination_prev"
          aria-label="Previous image"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "oklch(0.52 0.23 253 / 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(255,255,255,0.12)";
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white transition-colors"
          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          data-ocid="gallery.lightbox.pagination_next"
          aria-label="Next image"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "oklch(0.52 0.23 253 / 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(255,255,255,0.12)";
          }}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Image */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full mx-16 pointer-events-none">
        <img
          src={current.src}
          alt={current.caption}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
          style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.6)" }}
        />
        {current.caption && (
          <p
            className="mt-4 text-sm text-center px-6"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {current.caption}
          </p>
        )}
        {/* Counter */}
        {images.length > 1 && (
          <p
            className="mt-2 text-xs font-mono"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-auto">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className="w-12 h-9 rounded overflow-hidden border-2 transition-all"
              style={{
                borderColor:
                  i === currentIndex ? "oklch(0.52 0.23 253)" : "transparent",
                opacity: i === currentIndex ? 1 : 0.5,
              }}
              onClick={(e) => {
                e.stopPropagation();
                // Navigate to index by calling prev/next accordingly
                const diff = i - currentIndex;
                if (diff > 0) {
                  for (let j = 0; j < diff; j++) onNext();
                } else {
                  for (let j = 0; j < Math.abs(diff); j++) onPrev();
                }
              }}
              aria-label={`Go to image ${i + 1}`}
              data-ocid={`gallery.lightbox.thumbnail.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </dialog>
  );
}
