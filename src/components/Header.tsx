import { Menu as MenuIcon, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LANGS } from "@/data/translations";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useIsOpenNow } from "@/lib/hours";

const NAV = [
  { id: "menu", key: "nav_menu" },
  { id: "reviews", key: "nav_reviews" },
  { id: "gallery", key: "nav_gallery" },
  { id: "contacts", key: "nav_contacts" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openNow = useIsOpenNow();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all",
        scrolled ? "border-b border-border bg-background/90 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[70px] max-w-7xl items-center gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src="/logo-min.png" alt="Sushi Lovers" className="h-9 w-9 rounded-full" />
          <span className="font-display text-lg font-bold tracking-tight">Sushi&nbsp;Lovers</span>
        </a>

        <nav className="ms-6 hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="text-sm font-medium text-foreground/80 transition hover:text-accent"
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        <span
          className={cn(
            "ms-auto hidden rounded-full border px-3 py-1 text-xs font-semibold sm:inline-flex",
            openNow
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
              : "border-border bg-muted text-muted-foreground",
          )}
        >
          {t(openNow ? "open_now" : "closed_now")}
        </span>

        <div className="ms-auto flex items-center gap-1.5 sm:ms-3">
          <div className="flex items-center gap-0.5 rounded-full border border-border bg-card/60 p-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                aria-label={l.label}
                onClick={() => setLang(l.code)}
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full text-base transition",
                  lang === l.code ? "bg-primary/20 ring-1 ring-primary/50" : "hover:bg-muted",
                )}
              >
                <span aria-hidden="true">{l.flag}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("cart")}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 transition hover:border-primary hover:text-primary"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -end-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[0.65rem] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label={t("nav_menu")}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/97 px-4 pb-4 pt-2 backdrop-blur md:hidden">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="block w-full py-2.5 text-start text-sm font-medium text-foreground/85"
            >
              {t(item.key)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
