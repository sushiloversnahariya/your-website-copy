import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";

import { CheckoutDialog } from "@/components/CheckoutDialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { EXTRAS } from "@/data/config";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";

export function CartSheet() {
  const { t, dir } = useI18n();
  const {
    items,
    extras,
    setQty,
    remove,
    setExtraQty,
    total,
    open,
    setOpen,
    lastOrder,
    repeatLastOrder,
    extrasCount,
  } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [extrasReminder, setExtrasReminder] = useState(false);

  const proceed = () => {
    if (extrasCount === 0) {
      setExtrasReminder(true);
      return;
    }
    setCheckoutOpen(true);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side={dir === "rtl" ? "left" : "right"}
          className="flex w-full flex-col gap-0 overflow-y-auto p-4 sm:max-w-md sm:p-6"
        >
          <SheetHeader className="text-start">
            <SheetTitle className="font-display text-2xl">{t("cart")}</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="mt-10 text-center">
              <ShoppingCart className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden="true" />
              <p className="mt-4 font-semibold">{t("cart_empty")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t("cart_empty_hint")}</p>
              {lastOrder && (
                <Button
                  variant="outline"
                  className="mt-5 rounded-full"
                  onClick={repeatLastOrder}
                  type="button"
                >
                  {t("repeat_last_order")}
                </Button>
              )}
              {lastOrder && (
                <p className="mt-2 text-xs text-muted-foreground">{t("last_order_hint")}</p>
              )}
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex gap-3 rounded-xl border border-border bg-card/60 p-2.5"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-black">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-1"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-semibold">{item.name}</p>
                      <button
                        type="button"
                        aria-label={t("remove")}
                        onClick={() => remove(item.productId)}
                        className="text-muted-foreground transition hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.price}₪</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="-"
                        onClick={() => setQty(item.productId, item.qty - 1)}
                        className="grid h-8 w-8 place-items-center rounded-full border border-border"
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span className="min-w-6 text-center text-sm font-semibold">{item.qty}</span>
                      <button
                        type="button"
                        aria-label="+"
                        onClick={() => setQty(item.productId, item.qty + 1)}
                        className="grid h-8 w-8 place-items-center rounded-full border border-border"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span className="ms-auto text-sm font-bold text-accent">
                        {item.price * item.qty}₪
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 rounded-xl border border-border bg-card/40 p-3">
            <p className="text-sm font-semibold">{t("extras_title")}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t("extras_hint")}</p>
            <div className="mt-3 space-y-2">
              {EXTRAS.map((extra) => {
                const qty = extras.find((e) => e.id === extra.id)?.qty ?? 0;
                return (
                  <div key={extra.id} className="flex items-center gap-2">
                    <span className="min-w-0 flex-1 text-sm">
                      {t(extra.labelKey)}
                      {extra.grams && (
                        <span className="text-muted-foreground">
                          {" "}
                          ({extra.grams} {t("grams_short")})
                        </span>
                      )}
                      <span className="ms-2 text-xs text-accent">
                        {extra.price > 0 ? `${extra.price}₪` : t("included")}
                      </span>
                    </span>
                    <button
                      type="button"
                      aria-label="-"
                      onClick={() => setExtraQty(extra.id, qty - 1)}
                      className="grid h-8 w-8 place-items-center rounded-full border border-border"
                    >
                      <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                    <span className="min-w-6 text-center text-sm font-semibold">{qty}</span>
                    <button
                      type="button"
                      aria-label="+"
                      onClick={() => setExtraQty(extra.id, qty + 1)}
                      className="grid h-8 w-8 place-items-center rounded-full border border-border"
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {items.length > 0 && (
            <div className="sticky bottom-0 mt-6 border-t border-border bg-background pt-4">
              <div className="flex items-center justify-between text-base font-bold">
                <span>{t("subtotal")}</span>
                <span className="text-accent">{total}₪</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{t("min_order_food_only")}</p>
              <Button
                type="button"
                onClick={proceed}
                className="mt-3 w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:brightness-110"
              >
                {t("checkout")}
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {extrasReminder && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-popover p-5 shadow-glow">
            <p className="font-display text-xl font-bold">{t("extras_reminder_title")}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t("extras_reminder_text")}</p>
            <div className="mt-5 flex flex-col gap-2">
              <Button
                type="button"
                className="rounded-full"
                onClick={() => setExtrasReminder(false)}
              >
                {t("add_extras")}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setExtrasReminder(false);
                  setCheckoutOpen(true);
                }}
              >
                {t("continue_without_extras")}
              </Button>
            </div>
          </div>
        </div>
      )}

      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
}
