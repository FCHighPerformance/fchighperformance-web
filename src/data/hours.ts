/**
 * Business hours. Index 0 = Sunday, 6 = Saturday.
 * Use 24h time. Set `closed: true` to mark a day off.
 * TODO with owner: replace these placeholders with real hours.
 */
export type DayHours =
  | { closed: true }
  | { closed?: false; open: string; close: string };

export const hours: DayHours[] = [
  { closed: true }, // Sunday. TODO confirm
  { open: "06:00", close: "20:00" }, // Monday
  { open: "06:00", close: "20:00" }, // Tuesday
  { open: "06:00", close: "20:00" }, // Wednesday
  { open: "06:00", close: "20:00" }, // Thursday
  { open: "06:00", close: "20:00" }, // Friday
  { open: "08:00", close: "14:00" }, // Saturday
];

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function formatHoursLabel(): string {
  // Compact human-readable summary. e.g. "Mon to Fri 6am to 8pm · Sat 8am to 2pm"
  return "Mon to Fri 6am to 8pm · Sat 8am to 2pm · Sun closed";
}

/**
 * Returns current open/closed state. Pure function. Call from a client
 * component that re-renders on an interval.
 */
export function getOpenStatus(now: Date = new Date()): {
  open: boolean;
  label: string;
} {
  const day = now.getDay();
  const today = hours[day];
  const hh = now.getHours();
  const mm = now.getMinutes();
  const nowMins = hh * 60 + mm;

  const toMins = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  const fmt = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "pm" : "am";
    const h12 = h % 12 || 12;
    return m === 0 ? `${h12}${period}` : `${h12}:${m.toString().padStart(2, "0")}${period}`;
  };

  if (!today.closed) {
    const openMins = toMins(today.open);
    const closeMins = toMins(today.close);
    if (nowMins >= openMins && nowMins < closeMins) {
      return { open: true, label: `Closes ${fmt(today.close)}` };
    }
    if (nowMins < openMins) {
      return { open: false, label: `Opens ${fmt(today.open)}` };
    }
  }

  // Find next open day
  for (let i = 1; i <= 7; i++) {
    const nextDay = hours[(day + i) % 7];
    if (!nextDay.closed) {
      const label =
        i === 1
          ? `Opens tomorrow ${fmt(nextDay.open)}`
          : `Opens ${DAY_NAMES[(day + i) % 7]} ${fmt(nextDay.open)}`;
      return { open: false, label };
    }
  }
  return { open: false, label: "Closed" };
}

/**
 * Schema.org openingHoursSpecification array for JSON-LD.
 */
export function getOpeningHoursSchema() {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return hours
    .map((h, i) => {
      if (h.closed) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayNames[i],
        opens: h.open,
        closes: h.close,
      };
    })
    .filter(Boolean);
}
