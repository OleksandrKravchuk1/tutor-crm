import { CalendarViewMode, ListFilterOption } from "../types/calendar";

export const VIEW_MODES: CalendarViewMode[] = ["day", "week", "list"];

export const VIEW_MODE_LABELS: Record<CalendarViewMode, string> = {
  day: "Day",
  week: "Week",
  list: "List",
};

export const LIST_FILTER_OPTIONS: { key: ListFilterOption; label: string }[] = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "unpaid", label: "Unpaid" },
  { key: "completed", label: "Completed" },
];
