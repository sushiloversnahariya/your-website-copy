import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { LANGS, TRANSLATIONS, type Lang } from "@/data/translations";
import { LOCALE_OVERRIDES } from "@/data/menu-data";

const STORAGE_KEY = "sl_lang_v1";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && LANGS.some((l) => l.code === stored)) setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const dir: "ltr" | "rtl" = lang === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      dir,
      setLang: (next: Lang) => {
        setLangState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* ignore */
        }
      },
      t: (key: string) => TRANSLATIONS[key]?.[lang] ?? TRANSLATIONS[key]?.ru ?? key,
    }),
    [lang, dir],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

type LocalizableField = "name" | "note" | "description";

export function localized(
  entity: { slug?: string } & Record<string, unknown>,
  field: LocalizableField,
  lang: Lang,
): string {
  if (typeof entity.slug === "string") {
    const override = LOCALE_OVERRIDES[lang]?.[entity.slug]?.[field];
    if (typeof override === "string" && override.length > 0) return override;
  }
  const direct = entity[`${field}_${lang}`];
  if (typeof direct === "string" && direct.length > 0) return direct;
  const fallback = entity[`${field}_ru`];
  return typeof fallback === "string" ? fallback : "";
}

export function localizedList(
  entity: { slug?: string } & Record<string, unknown>,
  field: "set_items",
  lang: Lang,
): string[] {
  if (typeof entity.slug === "string") {
    const override = LOCALE_OVERRIDES[lang]?.[entity.slug]?.set_items;
    if (Array.isArray(override)) return override;
  }
  const direct = entity[`${field}_${lang}`];
  if (Array.isArray(direct)) return direct as string[];
  const fallback = entity[`${field}_ru`];
  return Array.isArray(fallback) ? (fallback as string[]) : [];
}
