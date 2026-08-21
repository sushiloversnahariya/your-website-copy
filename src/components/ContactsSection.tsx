import { Clock, Mail, MapPin, Phone, Truck } from "lucide-react";
import { toast } from "sonner";

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_RAW,
  DELIVERY_ZONES,
  GOOGLE_MAPS_URL,
  PICKUP_MIN,
} from "@/data/config";
import { useI18n } from "@/lib/i18n";
import { useIsOpenNow } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function ContactsSection() {
  const { t } = useI18n();
  const openNow = useIsOpenNow();

  const rows = [
    {
      icon: Phone,
      label: t("contacts_phone"),
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE_RAW}`,
      copy: CONTACT_PHONE_RAW,
    },
    {
      icon: MapPin,
      label: t("contacts_address"),
      value: t("address_value"),
      href: GOOGLE_MAPS_URL,
      copy: t("address_value"),
    },
    {
      icon: Mail,
      label: t("contacts_email"),
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      copy: CONTACT_EMAIL,
    },
  ];

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(t("copied_to_clipboard"));
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contacts" className="scroll-mt-20 border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">{t("contacts_title")}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                  <row.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {row.label}
                  </div>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block truncate text-sm font-semibold hover:text-accent"
                  >
                    {row.value}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copy(row.copy)}
                className="mt-3 text-xs text-accent hover:underline"
              >
                {t("details")}
              </button>
            </div>
          ))}

          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t("hours_label")}
                </div>
                <div className="text-sm font-semibold">{t("hours_value")}</div>
              </div>
            </div>
            <span
              className={cn(
                "mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold",
                openNow
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                  : "border-border bg-muted text-muted-foreground",
              )}
            >
              {t(openNow ? "open_now" : "closed_now")}
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 shadow-card sm:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                <Truck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("min_order")}
              </div>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex justify-between gap-4">
                <span>{t("city_nahariya")}</span>
                <span className="font-semibold text-accent">
                  {DELIVERY_ZONES.nahariya.min}₪ · {t("delivery_fee")} {DELIVERY_ZONES.nahariya.fee}₪
                </span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t("city_akko")}</span>
                <span className="font-semibold text-accent">
                  {DELIVERY_ZONES.akko.min}₪ · {t("delivery_fee")} {DELIVERY_ZONES.akko.fee}₪
                </span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t("city_maalot")}</span>
                <span className="font-semibold text-accent">
                  {DELIVERY_ZONES.maalot.min}₪ · {t("delivery_fee")} {DELIVERY_ZONES.maalot.fee}₪
                </span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{t("pickup")}</span>
                <span className="font-semibold text-accent">{PICKUP_MIN}₪</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">{t("min_order_food_only")}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-accent-foreground"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {t("view_on_map")}
          </a>
        </div>
      </div>
    </section>
  );
}
