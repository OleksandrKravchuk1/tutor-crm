import { CalendarDayDot, CalendarDayItem } from "../types/calendar";

export function isSameDay(d1: Date | string, d2: Date | string): boolean {
  const date1 = typeof d1 === "string" ? new Date(d1) : d1;
  const date2 = typeof d2 === "string" ? new Date(d2) : d2;

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isToday(d: Date | string): boolean {
  return isSameDay(d, new Date());
}

export function getStartOfWeek(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  const day = result.getDay();
  // Monday is 1, Sunday is 0 -> adjust so Monday is first day (0 offset)
  const diff = day === 0 ? -6 : 1 - day;
  result.setDate(result.getDate() + diff);
  return result;
}

export function getEndOfWeek(date: Date): Date {
  const start = getStartOfWeek(date);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return end;
}

export function getDaysOfWeek(date: Date): Date[] {
  const monday = getStartOfWeek(date);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export function formatWeekRange(
  startDate: Date,
  endDate: Date,
  locale = "en-US"
): string {
  const startMonthFormatter = new Intl.DateTimeFormat(locale, { month: "short" });
  const endMonthFormatter = new Intl.DateTimeFormat(locale, { month: "short" });
  const startMonth = startMonthFormatter.format(startDate);
  const endMonth = endMonthFormatter.format(endDate);
  const year = endDate.getFullYear();

  if (startMonth === endMonth) {
    return `${startMonth} ${startDate.getDate()} - ${endDate.getDate()}, ${year}`;
  }
  return `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}, ${year}`;
}

export function formatRelativeDate(date: Date, locale = "en-US"): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (isSameDay(date, today)) {
    return "Today";
  }
  if (isSameDay(date, tomorrow)) {
    return "Tomorrow";
  }
  if (isSameDay(date, yesterday)) {
    return "Yesterday";
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return formatter.format(date);
}

export function formatMonthYear(date: Date, locale = "en-US"): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
}

export function formatFullDate(date: Date, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function generateCalendarDays(
  baseDate: Date = new Date(),
  daysBefore = 7,
  daysAfter = 21
): CalendarDayItem[] {
  const days: CalendarDayItem[] = [];
  const start = new Date(baseDate);
  start.setDate(start.getDate() - daysBefore);

  const totalDays = daysBefore + daysAfter + 1;
  const dayNameFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short" });

  for (let i = 0; i < totalDays; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);

    const dayNumber = current.getDate();
    const dayName = dayNameFormatter.format(current);
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, "0");
    const day = String(dayNumber).padStart(2, "0");
    const fullDateString = `${year}-${month}-${day}`;

    const dayOfWeek = current.getDay();
    let dot: CalendarDayDot = "none";
    if (dayOfWeek === 4) {
      dot = "warning";
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      dot = "primary";
    }

    days.push({
      date: current,
      dayNumber,
      dayName,
      fullDateString,
      dot,
    });
  }

  return days;
}

