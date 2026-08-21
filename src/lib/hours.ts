import { useEffect, useState } from "react";

function jerusalemNow() {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jerusalem",
      weekday: "short",
      hour: "2-digit",
      hour12: false,
    }).formatToParts(new Date());
    return {
      hour: Number(parts.find((p) => p.type === "hour")?.value.replace(/\D/g, "")),
      isSaturday: parts.find((p) => p.type === "weekday")?.value === "Sat",
    };
  } catch {
    const now = new Date();
    return { hour: now.getHours(), isSaturday: now.getDay() === 6 };
  }
}

export function openingHour(isSaturday: boolean) {
  return isSaturday ? 14 : 10;
}

export const CLOSING_HOUR = 19;

export function todayHoursLabel() {
  const { isSaturday } = jerusalemNow();
  return `${String(openingHour(isSaturday)).padStart(2, "0")}:00-${CLOSING_HOUR}:00`;
}

export function useIsOpenNow() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const { hour, isSaturday } = jerusalemNow();
      setOpen(hour >= openingHour(isSaturday) && hour < CLOSING_HOUR);
    };
    check();
    const id = window.setInterval(check, 60000);
    return () => window.clearInterval(id);
  }, []);

  return open;
}

export function isSaturdayDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).getDay() === 6;
}

export function todayISO() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
