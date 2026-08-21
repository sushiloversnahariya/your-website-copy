import { ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL, REVIEWS } from "@/data/config";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ReviewsSection() {
  const { t } = useI18n();
  const [reviews, setReviews] = useState(REVIEWS);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setReviews([...REVIEWS].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section id="reviews" className="scroll-mt-20 border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="section-title">{t("reviews_title")}</h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1" aria-label="5 out of 5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <span className="text-lg font-semibold text-accent">5.0</span>
            <span className="text-sm text-muted-foreground">(80 {t("reviews_rating")})</span>
          </div>
          <p className="mx-auto mt-3 max-w-md text-xs text-muted-foreground">
            {t("reviews_curated_note")}
          </p>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {reviews.map((review) => {
            const full = t(review.textKey);
            const isLong = full.length > 220;
            const isOpen = expanded[review.id];
            const text = isLong && !isOpen ? `${full.slice(0, 220).trimEnd()}...` : full;

            return (
              <article
                key={review.id}
                className="flex min-h-48 w-[82vw] shrink-0 snap-center flex-col rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-4 shadow-card ring-1 ring-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow sm:w-auto sm:shrink"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-sm font-bold text-primary">
                    {review.name.slice(0, 1).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{review.name}</div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-muted-foreground underline-offset-2 hover:text-accent hover:underline"
                    >
                      <span className="font-bold text-[#4285f4]">G</span> {t("google_review")}
                    </a>
                  </div>
                </div>

                <div
                  className="mb-2 flex items-center gap-0.5"
                  aria-label={`${review.rating} out of 5`}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3.5 w-3.5",
                        i <= review.rating ? "fill-accent text-accent" : "text-muted-foreground",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="flex-1 whitespace-pre-line text-sm leading-relaxed text-foreground/85">
                  {text}
                </p>

                {isLong && (
                  <button
                    type="button"
                    onClick={() => setExpanded((prev) => ({ ...prev, [review.id]: !isOpen }))}
                    className="mt-2 self-start text-xs text-accent hover:underline"
                  >
                    {t(isOpen ? "show_less" : "read_more")}
                  </button>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-accent/50"
          >
            {t("all_reviews_google")} <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-accent-foreground"
          >
            {t("view_review")} <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
