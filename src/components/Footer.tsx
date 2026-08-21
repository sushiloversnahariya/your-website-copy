import { Link } from "@tanstack/react-router";

import { CONTACT_PHONE, CONTACT_PHONE_RAW, SOCIAL_LINKS } from "@/data/config";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src="/logo-min.png" alt="Sushi Lovers" className="h-12 w-12 rounded-full" />
          <p className="font-display text-xl font-bold">Sushi Lovers</p>
          <p className="text-sm text-muted-foreground">
            {t("footer_location")} · {t("hours_value")}
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 text-xs font-medium transition hover:border-accent/50 hover:text-accent"
              >
                {social.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT_PHONE_RAW}`}
              className="rounded-full border border-border px-4 py-2 text-xs font-medium transition hover:border-accent/50 hover:text-accent"
            >
              {CONTACT_PHONE}
            </a>
          </div>
          <Link
            to="/accessibility"
            className="text-xs text-muted-foreground underline-offset-2 hover:text-accent hover:underline"
          >
            {t("accessibility_statement_link")}
          </Link>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sushi Lovers · {t("footer_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
