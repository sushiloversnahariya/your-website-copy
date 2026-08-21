import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GALLERY_IMAGES } from "@/data/config";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const step = useCallback((delta: number) => {
    setIndex((cur) => (cur + delta + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (paused || lightbox) return;
    const id = window.setInterval(() => step(1), 6000);
    return () => window.clearInterval(id);
  }, [paused, lightbox, step]);

  return (
    <section id="gallery" className="relative scroll-mt-20 border-t border-border py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="section-title">{t("gallery_title")}</h2>
        </div>

        <div
          className="relative mx-auto aspect-4/3 max-w-4xl overflow-hidden rounded-2xl border border-accent/30 bg-black shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] sm:aspect-16/10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            setPaused(true);
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(delta) > 40) step(delta < 0 ? 1 : -1);
            touchX.current = null;
            window.setTimeout(() => setPaused(false), 1200);
          }}
        >
          {GALLERY_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              tabIndex={i === index ? 0 : -1}
              aria-label={`${t("gallery_open_photo")} ${i + 1}`}
              onClick={() => i === index && setLightbox(true)}
              className={cn(
                "absolute inset-0 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-ring",
                i === index ? "pointer-events-auto" : "pointer-events-none",
              )}
            >
              <img
                src={src}
                alt={`Sushi Lovers ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className={cn(
                  "h-full w-full select-none object-cover transition-all duration-700 ease-out",
                  i === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
                )}
              />
            </button>
          ))}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          <button
            type="button"
            aria-label={t("gallery_prev_photo")}
            onClick={() => step(-1)}
            className="absolute start-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-lg backdrop-blur transition hover:bg-primary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={t("gallery_next_photo")}
            onClick={() => step(1)}
            className="absolute end-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-lg backdrop-blur transition hover:bg-primary"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={`dot-${src}`}
                type="button"
                aria-label={`${t("gallery_go_to_photo")} ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white/80",
                )}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-4 flex max-w-4xl gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GALLERY_IMAGES.map((src, i) => (
            <button
              key={`thumb-${src}`}
              type="button"
              aria-label={`${t("gallery_preview_photo")} ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-16 w-16 shrink-0 overflow-hidden rounded-lg border bg-black transition sm:h-20 sm:w-24",
                i === index
                  ? "border-primary shadow-glow"
                  : "border-border opacity-70 hover:opacity-100",
              )}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={lightbox} onOpenChange={setLightbox}>
        <DialogContent className="w-[calc(100vw-1rem)] overflow-hidden rounded-xl bg-black p-0 sm:max-w-5xl">
          <img
            src={GALLERY_IMAGES[index]}
            alt={`Sushi Lovers ${index + 1}`}
            className="max-h-[88vh] w-full object-contain"
            decoding="async"
          />
          <button
            type="button"
            aria-label={t("gallery_prev_photo")}
            onClick={() => step(-1)}
            className="absolute start-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-primary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={t("gallery_next_photo")}
            onClick={() => step(1)}
            className="absolute end-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-primary"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
