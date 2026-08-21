import { ShieldCheck } from "lucide-react";

import { useI18n } from "@/lib/i18n";

export function TrustSection() {
  const { t } = useI18n();

  return (
    <section className="border-t border-border py-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary">
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{t("trust_title")}</h2>
        <p className="mt-2 text-sm text-accent">{t("trust_subtitle")}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("trust_body_1")}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("trust_body_2")}</p>
        <p className="mt-6 text-xs text-muted-foreground">{t("order_confidence")}</p>
      </div>
    </section>
  );
}
