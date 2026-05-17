import { Link } from "@tanstack/react-router";
import { Images, LayoutGrid, Package, Wrench } from "lucide-react";
import { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import { products } from "../data/products";
import { services } from "../data/services";

type FilterType = "all" | "products" | "services";

interface GalleryItem {
  src: string;
  caption: string;
  category: string;
  type: "product" | "service";
  slug: string;
  index: number;
}

const FILTERS: { label: string; value: FilterType; icon: React.ElementType }[] =
  [
    { label: "All", value: "all", icon: LayoutGrid },
    { label: "Products", value: "products", icon: Package },
    { label: "Services", value: "services", icon: Wrench },
  ];

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allItems = useMemo<GalleryItem[]>(() => {
    const productItems = products.flatMap((p) =>
      (p.images ?? []).map((src, i) => ({
        src,
        caption: `${p.name} — View ${i + 1}`,
        category: p.category,
        type: "product" as const,
        slug: p.slug,
        index: i,
      })),
    );
    const serviceItems = services.flatMap((s) =>
      (s.images ?? []).map((src, i) => ({
        src,
        caption: `${s.name} — Project ${i + 1}`,
        category: s.name,
        type: "service" as const,
        slug: s.slug,
        index: i,
      })),
    );
    return [...productItems, ...serviceItems];
  }, []);

  const filteredItems = useMemo(() => {
    if (filter === "all") return allItems;
    return allItems.filter(
      (item) => item.type === (filter.slice(0, -1) as "product" | "service"),
    );
  }, [filter, allItems]);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredItems.length) % filteredItems.length
        : 0,
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : 0,
    );

  const lightboxImages = filteredItems.map((item) => ({
    src: item.src,
    caption: item.caption,
  }));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      {/* ── Hero ── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.05 0.025 253) 0%, oklch(0.12 0.08 253) 60%, oklch(0.08 0.04 253) 100%)",
        }}
        data-ocid="gallery.hero"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.2 253) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.2 253) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Images
              className="h-5 w-5"
              style={{ color: "oklch(0.72 0.20 253)" }}
            />
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "oklch(0.62 0.18 253)" }}
            >
              Visual Portfolio
            </p>
          </div>
          <h1
            className="font-display font-black text-white mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Project Gallery
          </h1>
          <p
            className="text-base max-w-xl"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Browse our complete portfolio of pharmaceutical equipment and
            mechanical design projects — {allItems.length} images across{" "}
            {products.length + services.length} categories.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section
        className="sticky z-30 border-b"
        style={{
          top: "64px",
          backgroundColor: "white",
          borderColor: "oklch(0.90 0.01 253)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto no-scrollbar">
            {FILTERS.map(({ label, value, icon: FilterIcon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                data-ocid={`gallery.filter.${value}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor:
                    filter === value
                      ? "oklch(0.42 0.19 253)"
                      : "oklch(0.96 0.01 253)",
                  color: filter === value ? "white" : "oklch(0.30 0.03 253)",
                }}
              >
                <FilterIcon className="h-3.5 w-3.5" />
                {label}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full font-mono"
                  style={{
                    backgroundColor:
                      filter === value
                        ? "rgba(255,255,255,0.22)"
                        : "oklch(0.88 0.02 253)",
                    color: filter === value ? "white" : "oklch(0.45 0.03 253)",
                  }}
                >
                  {value === "all"
                    ? allItems.length
                    : allItems.filter((x) => x.type === value.slice(0, -1))
                        .length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section
        className="py-10 lg:py-14"
        style={{ backgroundColor: "oklch(0.97 0.005 253)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20" data-ocid="gallery.empty_state">
              <Images
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: "oklch(0.70 0.05 253)" }}
              />
              <p style={{ color: "oklch(0.45 0.02 253)" }}>
                No images in this category.
              </p>
            </div>
          ) : (
            <div
              className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
              data-ocid="gallery.list"
            >
              {filteredItems.map((item, i) => (
                <button
                  key={`${item.type}-${item.slug}-${item.index}`}
                  type="button"
                  className="group relative w-full overflow-hidden rounded-xl break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 block"
                  onClick={() => openLightbox(i)}
                  data-ocid={`gallery.item.${i + 1}`}
                  aria-label={`View ${item.caption}`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.05 0.025 253 / 0.90) 0%, transparent 60%)",
                    }}
                  >
                    <span
                      className="inline-block px-2 py-0.5 rounded text-xs font-semibold mb-1 self-start"
                      style={{
                        backgroundColor:
                          item.type === "product"
                            ? "oklch(0.42 0.19 253)"
                            : "oklch(0.28 0.14 253)",
                        color: "white",
                      }}
                    >
                      {item.type === "product" ? "Product" : "Service"}
                    </span>
                    <p className="text-white text-xs font-medium leading-tight line-clamp-2">
                      {item.caption}
                    </p>
                    {item.type === "product" ? (
                      <Link
                        to="/products/$productSlug"
                        params={{ productSlug: item.slug }}
                        className="mt-1.5 text-xs underline transition-colors"
                        style={{ color: "oklch(0.72 0.20 253)" }}
                        onClick={(e) => e.stopPropagation()}
                        data-ocid={`gallery.item.${i + 1}.link`}
                      >
                        View Product →
                      </Link>
                    ) : (
                      <Link
                        to="/services/$serviceSlug"
                        params={{ serviceSlug: item.slug }}
                        className="mt-1.5 text-xs underline transition-colors"
                        style={{ color: "oklch(0.72 0.20 253)" }}
                        onClick={(e) => e.stopPropagation()}
                        data-ocid={`gallery.item.${i + 1}.link`}
                      >
                        View Service →
                      </Link>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-14 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.08 0.04 253) 0%, oklch(0.15 0.10 253) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl text-white mb-3">
            Interested in Our Work?
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Contact our team to discuss your project requirements and get a
            customised quote.
          </p>
          <Link
            to="/contact"
            data-ocid="gallery.cta.primary_button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
