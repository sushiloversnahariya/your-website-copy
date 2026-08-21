import { Check, Heart, Plus, Utensils } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { CATEGORIES, PRODUCTS, type Product } from "@/data/menu-data";
import { resolveImage } from "@/data/config";
import { useCart } from "@/lib/cart";
import { localized, localizedList, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const FAVORITES_KEY = "sl_favorites_v1";

function readFavorites(): string[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function ProductImage({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_center,rgba(242,44,34,0.18),rgba(0,0,0,0.95)_62%)] text-white/45">
        <div className="text-center">
          <Utensils className="mx-auto h-8 w-8" aria-hidden="true" />
          <span className="mt-2 block text-xs font-medium">Sushi Lovers</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full bg-black object-contain p-2 transition duration-500"
    />
  );
}

export function MenuSection() {
  const { t, lang } = useI18n();
  const { add } = useCart();
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [justAdded, setJustAdded] = useState<string | null>(null);

  useMemo(() => {
    if (typeof window !== "undefined") setFavorites(readFavorites());
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const categories = useMemo(
    () => [...CATEGORIES].sort((a, b) => a.position - b.position),
    [],
  );

  const visibleCategories = useMemo(
    () => (activeCat ? categories.filter((c) => c.id === activeCat) : categories),
    [categories, activeCat],
  );

  const addProduct = (product: Product) => {
    const name = localized(product, "name", lang);
    add({
      productId: product.id,
      slug: product.slug,
      name,
      price: Number(product.price),
      image: resolveImage(product.slug, product.image_url),
    });
    setJustAdded(product.id);
    window.setTimeout(() => setJustAdded((cur) => (cur === product.id ? null : cur)), 1100);
  };

  return (
    <section id="menu" className="relative scroll-mt-20 py-16 pb-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">★ {t("nav_menu")}</span>
          <h2 className="mt-3 section-title">{t("menu_heading")}</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="sticky top-[70px] z-30 -mx-4 mt-10 border-y border-border bg-background/92 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:justify-center [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setActiveCat(null)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
                activeCat === null
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border bg-card/60 hover:border-accent/50",
              )}
            >
              {t("menu_all")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCat(cat.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
                  activeCat === cat.id
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border bg-card/60 hover:border-accent/50",
                )}
              >
                {localized(cat, "name", lang)}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setOnlyFavorites((v) => !v)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
                onlyFavorites
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-border bg-card/60 hover:border-accent/50",
              )}
            >
              <Heart
                className={cn("me-1.5 inline h-3.5 w-3.5", onlyFavorites && "fill-accent")}
                aria-hidden="true"
              />
              {t("filter_favorites")}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">{t("menu_notice_images")}</p>
        <p className="mt-1 text-center text-xs text-muted-foreground">{t("menu_notice_allergy")}</p>

        <div className="mt-10 space-y-14">
          {visibleCategories.map((cat) => {
            let products = PRODUCTS.filter((p) => p.category_id === cat.id).sort(
              (a, b) => a.position - b.position,
            );
            if (onlyFavorites) products = products.filter((p) => favorites.includes(p.id));
            if (products.length === 0) return null;

            return (
              <div key={cat.id}>
                <div className="mb-6 flex flex-wrap items-baseline justify-center gap-3">
                  <h3 className="font-display text-3xl font-bold sm:text-4xl">
                    {localized(cat, "name", lang)}
                  </h3>
                  {localized(cat, "note", lang) && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                      {localized(cat, "note", lang)}
                    </span>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => {
                    const name = localized(product, "name", lang);
                    const description = localized(product, "description", lang);
                    const setItems = localizedList(product, "set_items", lang);
                    const isFavorite = favorites.includes(product.id);

                    return (
                      <article
                        key={product.id}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
                      >
                        <div className="relative aspect-4/3 overflow-hidden bg-black">
                          <ProductImage
                            src={resolveImage(product.slug, product.image_url)}
                            alt={name}
                          />
                          <button
                            type="button"
                            aria-label={t(isFavorite ? "favorite_remove" : "favorite_add")}
                            onClick={() => toggleFavorite(product.id)}
                            className="absolute end-2 top-2 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur transition hover:border-accent"
                          >
                            <Heart
                              className={cn("h-4 w-4", isFavorite && "fill-accent text-accent")}
                              aria-hidden="true"
                            />
                          </button>
                          {!product.available && (
                            <div className="absolute inset-0 grid place-items-center bg-black/70">
                              <span className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                {t("temporarily_out_of_stock")}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-1 flex-col p-4">
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="font-display text-xl font-bold leading-tight">{name}</h4>
                            <span className="whitespace-nowrap text-lg font-bold text-accent">
                              {product.price}₪
                            </span>
                          </div>

                          {description && (
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {description}
                            </p>
                          )}

                          {setItems.length > 0 && (
                            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                              {setItems.map((item) => (
                                <li key={item}>• {item}</li>
                              ))}
                            </ul>
                          )}

                          <Button
                            type="button"
                            disabled={!product.available}
                            onClick={() => addProduct(product)}
                            className="mt-4 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:brightness-110"
                          >
                            {justAdded === product.id ? (
                              <>
                                <Check className="me-2 h-4 w-4" aria-hidden="true" />
                                {t("added")}
                              </>
                            ) : (
                              <>
                                <Plus className="me-2 h-4 w-4" aria-hidden="true" />
                                {t("add_to_cart")}
                              </>
                            )}
                          </Button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
