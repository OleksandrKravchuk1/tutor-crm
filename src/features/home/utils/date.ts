/**
 * Format date to string like "Tuesday, Oct 24"
 */

export type FormatDateProps = {
  date: Date | string | number;
  locale: string;
}

export function formatDate({ date, locale }: FormatDateProps): string {
  const dateObj = typeof date === "object" ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(dateObj);
}
