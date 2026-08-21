import { ArrowDown, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/hero-poster-rotated.jpg"
        src="/sushi-hero-rotated.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card/60 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-accent backdrop-blur sm:px-4 sm:py-2 sm:text-xs">
            {t("hero_badge")}
          </span>
        </div>

        <img
          src="/logo-min.png"
          alt="Sushi Lovers"
          className="mb-5 h-20 w-20 rounded-full border border-white/20 shadow-glow sm:h-24 sm:w-24"
        />

        <h1 className="animate-float-up max-w-6xl font-display text-5xl font-bold leading-[0.98] text-white drop-shadow-2xl sm:text-7xl md:text-8xl">
          {t("hero_title").replace("?!", "")}
          <span className="gradient-text">?!</span>
          <Heart
            className="ms-1 inline-block h-7 w-7 fill-primary align-middle text-primary sm:ms-2 sm:h-10 sm:w-10 md:h-12 md:w-12"
            aria-hidden="true"
          />
        </h1>

        <p className="mt-4 max-w-xl font-display text-lg italic text-white/90 sm:mt-6 sm:text-2xl">
          {t("hero_subtitle")}
        </p>

        <div className="mt-6 grid w-full max-w-[21rem] grid-cols-3 gap-2 text-sm min-[560px]:max-w-2xl">
          {[t("hero_tag_fresh"), t("hero_tag_delivery"), t("hero_tag_wa")].map((tag) => (
            <span
              key={tag}
              className="min-w-0 rounded-2xl border border-white/20 bg-black/45 px-2 py-2 text-center text-xs font-semibold leading-tight text-white shadow-card backdrop-blur sm:rounded-full sm:px-4 sm:py-2.5 sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <Button
            size="lg"
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="group rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-glow hover:brightness-110 sm:px-10 sm:py-7 sm:text-lg"
          >
            {t("hero_cta")}
            <ArrowDown
              className="ms-2 h-4 w-4 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
