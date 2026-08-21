import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/data/config";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Заявление о доступности — Sushi Lovers Нагария" },
      {
        name: "description",
        content:
          "Заявление о доступности сайта Sushi Lovers Нагария: принятые меры, известные ограничения и контакты для обращений.",
      },
      { property: "og:title", content: "Заявление о доступности — Sushi Lovers" },
      {
        property: "og:description",
        content: "Как мы делаем сайт Sushi Lovers доступным и как сообщить о проблеме.",
      },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          {t("accessibility_title")}
        </h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>{t("accessibility_intro")}</p>
          <p>{t("accessibility_measures")}</p>
          <p>{t("accessibility_limits")}</p>
          <p>
            {t("accessibility_contact")}{" "}
            <a href={`tel:${CONTACT_PHONE_RAW}`} className="text-accent hover:underline">
              {CONTACT_PHONE}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-accent/50 hover:text-accent"
        >
          {t("back_home")}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
