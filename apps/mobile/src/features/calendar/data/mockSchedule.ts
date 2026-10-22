import {
  DayScheduleGroup,
  ListFilterOption,
  ListSection,
  TimelineItem,
  TimelineLessonItem,
  WeekSchedule,
} from "../types/calendar";
import {
  formatRelativeDate,
  getDaysOfWeek,
  getEndOfWeek,
  getStartOfWeek,
} from "../utils/date";

export const DEFAULT_TIMELINE_SCHEDULE: TimelineItem[] = [
  {
    id: "slot-1",
    type: "slot",
    startTime: "02:00 PM",
    duration: "60 min",
    title: "Available for booking",
    subtitle: "Tap to assign student or break",
    rightIcon: "chevron",
  },
  {
    id: "lesson-1",
    type: "lesson",
    startTime: "03:30 PM",
    endTime: "04:30 PM",
    studentName: "Maya Lin",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    subject: "AP Calculus BC",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "lesson-count",
      text: "Lesson 8 of 10",
    },
    actionButton: {
      label: "Notes",
      iconType: "notes",
      variant: "blue",
    },
  },
  {
    id: "lesson-2",
    type: "lesson",
    startTime: "04:45 PM",
    endTime: "05:45 PM",
    studentName: "Lucas Vance",
    avatarUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    subject: "SAT Math Prep",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "video",
      text: "Link ready",
    },
    hasPhoneAction: true,
    actionButton: {
      label: "Start",
      iconType: "start",
      variant: "indigo",
    },
  },
  {
    id: "lesson-3",
    type: "lesson",
    startTime: "06:00 PM",
    endTime: "07:00 PM",
    studentName: "Emma Watson",
    avatarUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    subject: "Honors Physics",
    accentColor: "amber",
    avatarBadge: {
      type: "warning",
    },
    paymentStatus: {
      label: "Due: $75",
      variant: "amber",
      isPaid: false,
    },
    info: {
      icon: "invoice",
      text: "1 unpaid invoice",
      isWarning: true,
    },
    actionButton: {
      label: "Collect",
      iconType: "collect",
      variant: "amber",
    },
  },
  {
    id: "lesson-4",
    type: "lesson",
    startTime: "07:15 PM",
    endTime: "08:00 PM",
    studentName: "Daniel Chen",
    initials: "DC",
    subject: "AP Chemistry",
    accentColor: "indigo",
    avatarBadge: {
      type: "science",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "indigo",
      isPaid: true,
    },
    info: {
      icon: "homework",
      text: "Homework Reviewed",
    },
    actionButton: {
      label: "Details",
      iconType: "details",
      variant: "blue",
    },
  },
  {
    id: "slot-2",
    type: "slot",
    startTime: "08:15 PM",
    duration: "45 min",
    title: "Free slot",
    subtitle: "Available for walk-in or prep time",
    rightIcon: "plus",
  },
];

const TUESDAY_SCHEDULE: TimelineItem[] = [
  {
    id: "tue-slot-1",
    type: "slot",
    startTime: "01:00 PM",
    duration: "60 min",
    title: "Available for booking",
    subtitle: "Afternoon window",
    rightIcon: "plus",
  },
  {
    id: "tue-lesson-1",
    type: "lesson",
    startTime: "02:30 PM",
    endTime: "03:30 PM",
    studentName: "Liam Davies",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    subject: "Algebra II & Functions",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "lesson-count",
      text: "Lesson 4 of 8",
    },
    hasPhoneAction: true,
    actionButton: {
      label: "Notes",
      iconType: "notes",
      variant: "blue",
    },
  },
  {
    id: "tue-lesson-2",
    type: "lesson",
    startTime: "04:00 PM",
    endTime: "05:00 PM",
    studentName: "Chloe Becker",
    initials: "CB",
    subject: "AP Physics Mechanics",
    accentColor: "indigo",
    avatarBadge: {
      type: "science",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "indigo",
      isPaid: true,
    },
    info: {
      icon: "video",
      text: "Zoom room ready",
    },
    actionButton: {
      label: "Start",
      iconType: "start",
      variant: "indigo",
    },
  },
  {
    id: "tue-lesson-3",
    type: "lesson",
    startTime: "05:30 PM",
    endTime: "06:30 PM",
    studentName: "Lucas Vance",
    avatarUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    subject: "SAT Math Practice Test",
    accentColor: "amber",
    avatarBadge: {
      type: "warning",
    },
    paymentStatus: {
      label: "Due: $80",
      variant: "amber",
      isPaid: false,
    },
    info: {
      icon: "invoice",
      text: "Payment Pending",
      isWarning: true,
    },
    actionButton: {
      label: "Collect",
      iconType: "collect",
      variant: "amber",
    },
  },
];

const WEDNESDAY_SCHEDULE: TimelineItem[] = [
  {
    id: "wed-slot-1",
    type: "slot",
    startTime: "01:30 PM",
    duration: "45 min",
    title: "Office Hours",
    subtitle: "Open consultation slot",
    rightIcon: "chevron",
  },
  {
    id: "wed-lesson-1",
    type: "lesson",
    startTime: "03:00 PM",
    endTime: "04:00 PM",
    studentName: "Maya Lin",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    subject: "AP Calculus BC • Derivatives",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "lesson-count",
      text: "Lesson 9 of 10",
    },
    actionButton: {
      label: "Notes",
      iconType: "notes",
      variant: "blue",
    },
  },
  {
    id: "wed-lesson-2",
    type: "lesson",
    startTime: "04:30 PM",
    endTime: "05:30 PM",
    studentName: "Daniel Chen",
    initials: "DC",
    subject: "Organic Chemistry Basics",
    accentColor: "indigo",
    avatarBadge: {
      type: "science",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "indigo",
      isPaid: true,
    },
    info: {
      icon: "homework",
      text: "Lab notes uploaded",
    },
    actionButton: {
      label: "Details",
      iconType: "details",
      variant: "blue",
    },
  },
  {
    id: "wed-lesson-3",
    type: "lesson",
    startTime: "06:00 PM",
    endTime: "07:00 PM",
    studentName: "Olivia Reed",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    subject: "English Literature • Essay Prep",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "video",
      text: "Google Meet link ready",
    },
    hasPhoneAction: true,
    actionButton: {
      label: "Start",
      iconType: "start",
      variant: "indigo",
    },
  },
];

const THURSDAY_SCHEDULE: TimelineItem[] = [
  {
    id: "thu-slot-1",
    type: "slot",
    startTime: "02:00 PM",
    duration: "60 min",
    title: "Available for booking",
    subtitle: "Regular Thursday opening",
    rightIcon: "plus",
  },
  {
    id: "thu-lesson-1",
    type: "lesson",
    startTime: "03:30 PM",
    endTime: "04:30 PM",
    studentName: "Lucas Vance",
    avatarUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    subject: "SAT Math • Trigonometry",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "video",
      text: "Link ready",
    },
    actionButton: {
      label: "Start",
      iconType: "start",
      variant: "indigo",
    },
  },
  {
    id: "thu-lesson-2",
    type: "lesson",
    startTime: "05:00 PM",
    endTime: "06:00 PM",
    studentName: "Emma Watson",
    avatarUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    subject: "Honors Physics • Waves",
    accentColor: "amber",
    avatarBadge: {
      type: "warning",
    },
    paymentStatus: {
      label: "Due: $75",
      variant: "amber",
      isPaid: false,
    },
    info: {
      icon: "invoice",
      text: "Invoice #104 overdue",
      isWarning: true,
    },
    actionButton: {
      label: "Collect",
      iconType: "collect",
      variant: "amber",
    },
  },
];

const FRIDAY_SCHEDULE: TimelineItem[] = [
  {
    id: "fri-lesson-1",
    type: "lesson",
    startTime: "03:00 PM",
    endTime: "04:00 PM",
    studentName: "Alex Turner",
    initials: "AT",
    subject: "AP Calculus AB",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "lesson-count",
      text: "Lesson 2 of 10",
    },
    actionButton: {
      label: "Notes",
      iconType: "notes",
      variant: "blue",
    },
  },
  {
    id: "fri-slot-1",
    type: "slot",
    startTime: "04:30 PM",
    duration: "60 min",
    title: "Open Slot",
    subtitle: "Friday afternoon consultation",
    rightIcon: "plus",
  },
  {
    id: "fri-slot-2",
    type: "slot",
    startTime: "06:00 PM",
    duration: "45 min",
    title: "Open Slot",
    subtitle: "Evening window",
    rightIcon: "plus",
  },
];

const SATURDAY_SCHEDULE: TimelineItem[] = [
  {
    id: "sat-lesson-1",
    type: "lesson",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    studentName: "Maya Lin",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    subject: "AP Calculus BC • Mock Exam Review",
    accentColor: "emerald",
    avatarBadge: {
      type: "check",
    },
    paymentStatus: {
      label: "Prepaid",
      variant: "emerald",
      isPaid: true,
    },
    info: {
      icon: "homework",
      text: "Final practice set",
    },
    actionButton: {
      label: "Notes",
      iconType: "notes",
      variant: "blue",
    },
  },
];

export function getTimelineItemsForDate(date: Date): TimelineItem[] {
  const day = date.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  switch (day) {
    case 1:
      return DEFAULT_TIMELINE_SCHEDULE;
    case 2:
      return TUESDAY_SCHEDULE;
    case 3:
      return WEDNESDAY_SCHEDULE;
    case 4:
      return THURSDAY_SCHEDULE;
    case 5:
      return FRIDAY_SCHEDULE;
    case 6:
      return SATURDAY_SCHEDULE;
    case 0:
    default:
      return [];
  }
}

export function getWeekScheduleForDate(date: Date): WeekSchedule {
  const weekStart = getStartOfWeek(date);
  const weekEnd = getEndOfWeek(date);
  const daysOfCurrentWeek = getDaysOfWeek(date);

  const days: DayScheduleGroup[] = daysOfCurrentWeek.map((dayDate) => {
    const items = getTimelineItemsForDate(dayDate);
    const lessonCount = items.filter((i) => i.type === "lesson").length;
    const slotCount = items.filter((i) => i.type === "slot").length;

    const year = dayDate.getFullYear();
    const month = String(dayDate.getMonth() + 1).padStart(2, "0");
    const day = String(dayDate.getDate()).padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;

    return {
      date: dayDate,
      dateString,
      items,
      lessonCount,
      slotCount,
    };
  });

  const totalLessons = days.reduce((acc, curr) => acc + curr.lessonCount, 0);
  const totalSlots = days.reduce((acc, curr) => acc + curr.slotCount, 0);

  return {
    weekStart,
    weekEnd,
    days,
    totalLessons,
    totalSlots,
  };
}

export function getListSectionsForDates(
  baseDate: Date,
  filter: ListFilterOption = "all"
): ListSection[] {
  const sections: ListSection[] = [];
  const start = new Date(baseDate);
  start.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Generate 14 days of agenda
  for (let i = 0; i < 14; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);

    const items = getTimelineItemsForDate(current);
    let lessons = items.filter((item): item is TimelineLessonItem => item.type === "lesson");

    if (filter === "upcoming") {
      // Only show lessons from today onward
      if (current.getTime() < today.getTime()) {
        continue;
      }
    } else if (filter === "unpaid") {
      lessons = lessons.filter((l) => l.paymentStatus.isPaid === false);
    } else if (filter === "completed") {
      // Show lessons from past days (considered completed) or explicitly marked
      const isPastDay = current.getTime() < today.getTime();
      lessons = lessons.filter((l) => l.isCompleted === true || isPastDay);
    }

    if (lessons.length > 0) {
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, "0");
      const day = String(current.getDate()).padStart(2, "0");
      const dateKey = `${year}-${month}-${day}`;

      sections.push({
        id: `section-${dateKey}`,
        title: formatRelativeDate(current),
        subtitle: `${lessons.length} lesson${lessons.length === 1 ? "" : "s"} scheduled`,
        date: current,
        items: lessons,
      });
    }
  }

  return sections;
}

