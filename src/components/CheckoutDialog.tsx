import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  EXTRAS,
  PAYMENT_METHODS,
  TIME_SLOTS,
  TIME_SLOTS_SATURDAY,
  WHATSAPP_PHONE,
  type CityId,
} from "@/data/config";
import { isSaturdayDate, todayISO } from "@/lib/hours";
import { orderTotals, useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const DETAILS_KEY = "sl_customer_details_v1";
const HISTORY_KEY = "sl_order_history_v1";

function normalizePhone(input: string) {
  const trimmed = input.trim().replace(/[^\d+]/g, "");
  const local = trimmed.startsWith("+972")
    ? `0${trimmed.slice(4)}`
    : trimmed.startsWith("972")
      ? `0${trimmed.slice(3)}`
      : trimmed;
  return /^05\d{8}$/.test(local) ? local : null;
}

function formatPhone(input: string) {
  const local = normalizePhone(input);
  return local ? `${local.slice(0, 3)}-${local.slice(3, 6)}-${local.slice(6)}` : input.trim();
}

const EMOJI = {
  heart: "❤️",
  calendar: "📅",
  clock: "⏰",
  delivery: "🚗",
  pickup: "🏗️",
  pin: "📍",
  phone: "☎️",
  person: "👤",
  order: "🍣",
  extras: "🥢",
  payment: "💳",
  total: "💰",
  notes: "📝",
};

const formatDate = (value: string) => {
  const [y, m, d] = value.split("-");
  return d && m && y ? `${d}/${m}/${y}` : value;
};

export function CheckoutDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useI18n();
  const { items, extras, total, clear, setOpen } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [method, setMethod] = useState<"delivery" | "pickup">("delivery");
  const [city, setCity] = useState<CityId>("nahariya");
  const [payment, setPayment] = useState<string>("cash");
  const [date, setDate] = useState(() => todayISO());
  const [slot, setSlot] = useState(TIME_SLOTS[0] as string);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const today = todayISO();
  const slots = isSaturdayDate(date) ? TIME_SLOTS_SATURDAY : TIME_SLOTS;
  const isFuture = date !== today;
  const phoneInvalid = phone.trim().length > 0 && !normalizePhone(phone);

  useEffect(() => {
    if (!slots.includes(slot)) setSlot(slots[0] ?? "");
  }, [slots, slot]);

  useEffect(() => {
    if (!open) return;
    try {
      const raw = localStorage.getItem(DETAILS_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== "object") return;
      if (typeof saved.name === "string") setName((v) => v || saved.name);
      if (typeof saved.phone === "string") setPhone((v) => v || saved.phone);
      if (typeof saved.address === "string") setAddress((v) => v || saved.address);
      if (saved.method === "delivery" || saved.method === "pickup") setMethod(saved.method);
      if (saved.city === "nahariya" || saved.city === "akko" || saved.city === "maalot")
        setCity(saved.city);
      if (saved.payment === "paybox" || saved.payment === "cash") setPayment(saved.payment);
    } catch {
      /* ignore */
    }
  }, [open]);

  const foodSubtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items],
  );

  const { minRequired, deliveryFee, total: grandTotal, belowMin } = useMemo(
    () => orderTotals({ method, city, foodSubtotal, orderSubtotal: total }),
    [method, city, foodSubtotal, total],
  );

  const cityLabel = (id: CityId) =>
    t(id === "nahariya" ? "city_nahariya" : id === "akko" ? "city_akko" : "city_maalot");

  const buildMessage = () => {
    const itemLines = items.map((item, i) => `${i + 1}. ${item.name} x${item.qty} = ${item.price * item.qty}₪`);
    const extraLines = extras
      .filter((e) => e.qty > 0)
      .map((e) => {
        const option = EXTRAS.find((x) => x.id === e.id);
        const price = option?.price ?? 0;
        const grams = option?.grams ? ` ${option.grams}${t("grams_short")}` : "";
        return `${option ? t(option.labelKey) : e.id}${grams} x${e.qty}${price > 0 ? ` = ${price * e.qty}₪` : ""}`;
      });
    const paymentLabel = t(payment === "paybox" ? "payment_paybox" : "payment_cash");
    const place =
      method === "delivery"
        ? `${EMOJI.delivery} ${t("delivery")}\n${EMOJI.pin} ${t("city")}: ${cityLabel(city)}\n${EMOJI.pin} ${t("address")}: ${address.trim()}`
        : `${EMOJI.pickup} ${t("pickup")}`;
    const totals =
      deliveryFee > 0
        ? `${EMOJI.total} ${t("subtotal")}: ${total}₪ | ${t("delivery_fee")}: ${deliveryFee}₪ | ${t("total")}: ${grandTotal}₪`
        : `${EMOJI.total} ${t("total")}: ${grandTotal}₪`;

    return [
      `${EMOJI.heart} *SUSHI LOVERS*`,
      isFuture ? `🔵 *${t("wa_future_order_tag")}*` : `🟢 *${t("wa_today_order_tag")}*`,
      `${EMOJI.calendar} ${t("order_date")}: ${formatDate(date)}`,
      `${EMOJI.clock} ${t("order_time_preference")}: ${slot}`,
      place,
      `${EMOJI.phone} ${t("phone")}: ${formatPhone(phone)}`,
      `${EMOJI.person} ${t("name")}: ${name.trim()}`,
      "",
      `${EMOJI.order} *${t("nav_menu")}:*`,
      ...itemLines,
      "",
      `${EMOJI.extras} *${t("extras_label")}:*`,
      ...(extraLines.length > 0 ? extraLines : ["-"]),
      "",
      `${EMOJI.payment} ${t("payment")}: ${paymentLabel}`,
      totals,
      notes.trim() ? `${EMOJI.notes} ${t("notes")}: ${notes.trim()}` : "",
    ]
      .filter((line) => line !== "")
      .join("\n");
  };

  const submit = () => {
    const nextErrors = {
      name: !name.trim(),
      phone: !phone.trim() || !normalizePhone(phone),
      address: method === "delivery" && !address.trim(),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone || nextErrors.address) {
      toast.error(t("field_required"));
      document
        .getElementById(nextErrors.name ? "name" : nextErrors.phone ? "phone" : "address")
        ?.focus();
      return;
    }
    if (!date || date < today) {
      toast.error(t("order_date_invalid"));
      return;
    }
    if (belowMin) {
      toast.error(`${t("min_order_error")}: ${minRequired}₪`);
      return;
    }

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(buildMessage())}`;

    try {
      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) ?? "[]");
      localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(
          [
            {
              id: `${Date.now()}`,
              createdAt: new Date().toISOString(),
              customer: {
                name: name.trim(),
                phone: formatPhone(phone),
                method,
                city: method === "delivery" ? cityLabel(city) : undefined,
                address: method === "delivery" ? address.trim() : undefined,
              },
              items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
              extras,
              total: grandTotal,
            },
            ...(Array.isArray(history) ? history : []),
          ].slice(0, 10),
        ),
      );
      localStorage.setItem(
        DETAILS_KEY,
        JSON.stringify({
          name: name.trim(),
          phone: formatPhone(phone),
          address: address.trim(),
          method,
          city,
          payment,
        }),
      );
    } catch {
      /* ignore */
    }

    clear();
    toast.success(t("whatsapp_send_reminder"));
    onOpenChange(false);
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sectionTitle = (label: string) => (
    <div className="flex items-center gap-2 border-b border-border pb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
      {label}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[calc(100vw-1rem)] overflow-y-auto rounded-xl p-3 sm:max-w-md sm:p-5">
        <DialogHeader>
          <DialogTitle className="text-start font-display text-2xl">{t("your_order")}</DialogTitle>
        </DialogHeader>

        <form
          noValidate
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          {sectionTitle(t("order_type_section"))}
          <div className="grid grid-cols-2 gap-2">
            {(["delivery", "pickup"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMethod(option)}
                className={cn(
                  "rounded-xl border px-3 py-2.5 text-sm font-semibold transition",
                  method === option
                    ? "border-primary bg-primary/15 text-foreground"
                    : "border-border bg-card/50",
                )}
              >
                {t(option)}
              </button>
            ))}
          </div>

          {method === "delivery" && (
            <div className="grid grid-cols-3 gap-2">
              {(["nahariya", "akko", "maalot"] as CityId[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCity(option)}
                  className={cn(
                    "rounded-xl border px-2 py-2 text-xs font-semibold transition",
                    city === option
                      ? "border-primary bg-primary/15"
                      : "border-border bg-card/50",
                  )}
                >
                  {cityLabel(option)}
                </button>
              ))}
            </div>
          )}

          {sectionTitle(t("customer_details_section"))}
          <div className="space-y-2">
            <div>
              <Label htmlFor="name">{t("name")}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={cn("mt-1", errors['name'] && "border-destructive")}
              />
            </div>
            <div>
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input
                id="phone"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={cn("mt-1", (errors['phone'] || phoneInvalid) && "border-destructive")}
              />
              <p className="mt-1 text-xs text-muted-foreground">{t("phone_hint")}</p>
              {phoneInvalid && <p className="text-xs text-destructive">{t("phone_invalid")}</p>}
            </div>
            {method === "delivery" && (
              <div>
                <Label htmlFor="address">{t("address")}</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={cn("mt-1", errors['address'] && "border-destructive")}
                />
              </div>
            )}
            <p className="text-xs text-muted-foreground">{t("checkout_privacy_note")}</p>
          </div>

          {sectionTitle(t("schedule_section"))}
          <div className="space-y-2">
            <div>
              <Label htmlFor="date">{t("order_date")}</Label>
              <Input
                id="date"
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1"
              />
              <p className="mt-1 text-xs text-muted-foreground">{t("order_date_hint")}</p>
            </div>
            <div>
              <Label>{t("order_time_preference")}</Label>
              <div className="mt-1 grid grid-cols-3 gap-2">
                {slots.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSlot(option)}
                    className={cn(
                      "rounded-xl border px-2 py-2 text-xs font-semibold transition",
                      slot === option ? "border-primary bg-primary/15" : "border-border bg-card/50",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{t("order_time_hint")}</p>
            </div>
          </div>

          {sectionTitle(t("payment_section"))}
          <div className="grid grid-cols-2 gap-2">
            {PAYMENT_METHODS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setPayment(option.id)}
                className={cn(
                  "rounded-xl border px-3 py-2.5 text-sm font-semibold transition",
                  payment === option.id
                    ? "border-primary bg-primary/15"
                    : "border-border bg-card/50",
                )}
              >
                <span className="me-1.5" aria-hidden="true">
                  {option.emoji}
                </span>
                {t(option.labelKey)}
              </button>
            ))}
          </div>

          <div>
            <Label htmlFor="notes">{t("notes")}</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-3 text-sm">
            <div className="flex justify-between">
              <span>{t("subtotal")}</span>
              <span className="font-semibold">{total}₪</span>
            </div>
            {deliveryFee > 0 && (
              <div className="mt-1 flex justify-between">
                <span>{t("delivery_fee")}</span>
                <span className="font-semibold">{deliveryFee}₪</span>
              </div>
            )}
            <div className="mt-1 flex justify-between text-base font-bold">
              <span>{t("total")}</span>
              <span className="text-accent">{grandTotal}₪</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {t("min_order")}: {minRequired}₪
            </p>
            {belowMin && <p className="text-xs text-destructive">{t("min_order_error")}</p>}
          </div>

          <p className="text-xs text-muted-foreground">{t("order_timing_notice")}</p>

          <Button
            type="submit"
            className="w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:brightness-110"
          >
            {t("place_order_wa")}
          </Button>
          <p className="text-center text-xs text-muted-foreground">{t("whatsapp_required")}</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
