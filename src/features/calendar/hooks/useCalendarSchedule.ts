import { useCallback, useMemo, useState } from "react";
import {
  getListSectionsForDates,
  getTimelineItemsForDate,
  getWeekScheduleForDate,
} from "../data/mockSchedule";
import {
  CalendarViewMode,
  ListFilterOption,
  ListSection,
  TimelineItem,
  WeekSchedule,
} from "../types/calendar";
import {
  formatFullDate,
  formatMonthYear,
  formatWeekRange,
} from "../utils/date";

export function useCalendarSchedule() {
  const [viewMode, setViewMode] = useState<CalendarViewMode>("day");
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [listFilter, setListFilter] = useState<ListFilterOption>("all");

  // Day items for current selected date
  const dayItems: TimelineItem[] = useMemo(() => {
    return getTimelineItemsForDate(selectedDate);
  }, [selectedDate]);

  const dayScheduledCount = useMemo(() => {
    return dayItems.filter((i) => i.type === "lesson").length;
  }, [dayItems]);

  const dayOpenSlotsCount = useMemo(() => {
    return dayItems.filter((i) => i.type === "slot").length;
  }, [dayItems]);

  // Week schedule for current selected date
  const weekSchedule: WeekSchedule = useMemo(() => {
    return getWeekScheduleForDate(selectedDate);
  }, [selectedDate]);

  // List sections for agenda view
  const listSections: ListSection[] = useMemo(() => {
    return getListSectionsForDates(selectedDate, listFilter);
  }, [selectedDate, listFilter]);

  // Computed title depending on view mode
  const headerTitle = useMemo(() => {
    if (viewMode === "day") {
      return formatFullDate(selectedDate);
    }
    if (viewMode === "week") {
      return formatWeekRange(weekSchedule.weekStart, weekSchedule.weekEnd);
    }
    return formatMonthYear(selectedDate);
  }, [viewMode, selectedDate, weekSchedule]);

  // Computed scheduled and slot count depending on view mode
  const scheduledCount = useMemo(() => {
    if (viewMode === "day") return dayScheduledCount;
    if (viewMode === "week") return weekSchedule.totalLessons;
    return listSections.reduce((acc, s) => acc + s.items.length, 0);
  }, [viewMode, dayScheduledCount, weekSchedule, listSections]);

  const openSlotsCount = useMemo(() => {
    if (viewMode === "day") return dayOpenSlotsCount;
    if (viewMode === "week") return weekSchedule.totalSlots;
    return 0;
  }, [viewMode, dayOpenSlotsCount, weekSchedule]);

  const subtitleText = useMemo(() => {
    if (viewMode === "day") {
      return `${dayScheduledCount} lessons scheduled • ${dayOpenSlotsCount} open slot${dayOpenSlotsCount === 1 ? "" : "s"}`;
    }
    if (viewMode === "week") {
      return `${weekSchedule.totalLessons} lessons this week • ${weekSchedule.totalSlots} open slots`;
    }
    const totalLessons = listSections.reduce((acc, s) => acc + s.items.length, 0);
    return `${totalLessons} upcoming lesson${totalLessons === 1 ? "" : "s"}`;
  }, [viewMode, dayScheduledCount, dayOpenSlotsCount, weekSchedule, listSections]);

  const goToPreviousWeek = useCallback(() => {
    setSelectedDate((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() - 7);
      return next;
    });
  }, []);

  const goToNextWeek = useCallback(() => {
    setSelectedDate((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() + 7);
      return next;
    });
  }, []);

  const goToToday = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  return {
    viewMode,
    setViewMode,
    selectedDate,
    setSelectedDate,
    listFilter,
    setListFilter,
    dayItems,
    weekSchedule,
    listSections,
    headerTitle,
    subtitleText,
    scheduledCount,
    openSlotsCount,
    goToPreviousWeek,
    goToNextWeek,
    goToToday,
  };
}
