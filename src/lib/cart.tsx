import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { DELIVERY_ZONES, EXTRAS, PICKUP_MIN, type CityId } from "@/data/config";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string | null;
  qty: number;
};

export type CartExtra = { id: string; qty: number };

type StoredOrder = { items: CartItem[]; extras: CartExtra[] };

const CART_KEY = "sl_cart_v1";
const LAST_ORDER_KEY = "sl_last_order_v1";

const AVAILABLE_EXTRAS = new Set(EXTRAS.filter((e) => e.available).map((e) => e.id));

export function extrasTotal(extras: CartExtra[]) {
  return extras.reduce((sum, e) => sum + (EXTRAS.find((x) => x.id === e.id)?.price ?? 0) * e.qty, 0);
}

export function cartTotal(items: CartItem[], extras: CartExtra[]) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0) + extrasTotal(extras);
}

export function orderTotals(input: {
  method: "delivery" | "pickup";
  city: CityId;
  foodSubtotal: number;
  orderSubtotal: number;
}) {
  const { method, city, foodSubtotal, orderSubtotal } = input;
  if (method === "pickup") {
    return {
      minRequired: PICKUP_MIN,
      deliveryFee: 0,
      total: orderSubtotal,
      belowMin: foodSubtotal < PICKUP_MIN,
    };
  }
  const zone = DELIVERY_ZONES[city];
  return {
    minRequired: zone.min,
    deliveryFee: zone.fee,
    total: orderSubtotal + zone.fee,
    belowMin: foodSubtotal < zone.min,
  };
}

type CartValue = {
  items: CartItem[];
  extras: CartExtra[];
  lastOrder: StoredOrder | null;
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  setExtraQty: (id: string, qty: number) => void;
  repeatLastOrder: () => void;
  clear: () => void;
  total: number;
  count: number;
  extrasCount: number;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [extras, setExtras] = useState<CartExtra[]>([]);
  const [lastOrder, setLastOrder] = useState<StoredOrder | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredOrder;
        if (Array.isArray(parsed?.items)) setItems(parsed.items);
        if (Array.isArray(parsed?.extras))
          setExtras(parsed.extras.filter((e) => AVAILABLE_EXTRAS.has(e.id)));
      }
      const last = localStorage.getItem(LAST_ORDER_KEY);
      if (last) setLastOrder(JSON.parse(last) as StoredOrder);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify({ items, extras }));
    } catch {
      /* ignore */
    }
  }, [items, extras]);

  const value = useMemo<CartValue>(() => {
    const add = (item: Omit<CartItem, "qty">) =>
      setItems((prev) => {
        const found = prev.find((p) => p.productId === item.productId);
        if (found)
          return prev.map((p) => (p.productId === item.productId ? { ...p, qty: p.qty + 1 } : p));
        return [...prev, { ...item, qty: 1 }];
      });
    const remove = (productId: string) =>
      setItems((prev) => prev.filter((p) => p.productId !== productId));

    return {
      items,
      extras,
      lastOrder,
      add,
      remove,
      setQty: (productId, qty) => {
        if (qty <= 0) return remove(productId);
        setItems((prev) => prev.map((p) => (p.productId === productId ? { ...p, qty } : p)));
      },
      setExtraQty: (id, qty) => {
        if (!AVAILABLE_EXTRAS.has(id)) return;
        const next = Math.max(0, Math.min(20, Math.floor(qty)));
        setExtras((prev) => {
          const rest = prev.filter((e) => e.id !== id);
          return next > 0 ? [...rest, { id, qty: next }] : rest;
        });
      },
      repeatLastOrder: () => {
        if (!lastOrder) return;
        setItems(lastOrder.items);
        setExtras(lastOrder.extras);
        setOpen(true);
      },
      clear: () => {
        if (items.length > 0 || extras.length > 0) {
          const snapshot = { items, extras };
          setLastOrder(snapshot);
          try {
            localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(snapshot));
          } catch {
            /* ignore */
          }
        }
        setItems([]);
        setExtras([]);
      },
      total: cartTotal(items, extras),
      count: items.reduce((sum, i) => sum + i.qty, 0),
      extrasCount: extras.reduce((sum, e) => sum + e.qty, 0),
      open,
      setOpen,
    };
  }, [items, extras, lastOrder, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
