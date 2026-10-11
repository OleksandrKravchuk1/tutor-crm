export type CalendarViewMode = "day" | "week" | "list";

export type CalendarHeaderProps = {
  dateText: string;
  subtitleText: string;
  viewMode: CalendarViewMode;
  onViewModeChange: (mode: CalendarViewMode) => void;
};

export type CalendarDayDot = "primary" | "warning" | "none";

export type CalendarDayItem = {
  date: Date;
  dayNumber: number;
  dayName: string;
  fullDateString: string;
  dot?: CalendarDayDot;
};

export type CalendarDateStripProps = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  days?: CalendarDayItem[];
};

export type TimelineSlotItem = {
  id: string;
  type: "slot";
  startTime: string;
  duration: string;
  title: string;
  subtitle: string;
  rightIcon: "chevron" | "plus";
};

export type TimelineLessonItem = {
  id: string;
  type: "lesson";
  date?: string; // YYYY-MM-DD
  startTime: string;
  endTime: string;
  studentName: string;
  avatarUrl?: string;
  initials?: string;
  subject: string;
  accentColor: "emerald" | "amber" | "indigo";
  avatarBadge?: {
    type: "check" | "warning" | "science";
  };
  paymentStatus: {
    label: string;
    variant: "emerald" | "amber" | "indigo";
    isPaid?: boolean;
  };
  info: {
    icon: "lesson-count" | "video" | "invoice" | "homework";
    text: string;
    isWarning?: boolean;
  };
  hasPhoneAction?: boolean;
  actionButton: {
    label: string;
    iconType?: "notes" | "start" | "collect" | "details";
    variant: "blue" | "indigo" | "amber";
  };
  isCompleted?: boolean;
};

export type TimelineItem = TimelineSlotItem | TimelineLessonItem;

export type DayScheduleGroup = {
  date: Date;
  dateString: string;
  items: TimelineItem[];
  lessonCount: number;
  slotCount: number;
};

export type WeekSchedule = {
  weekStart: Date;
  weekEnd: Date;
  days: DayScheduleGroup[];
  totalLessons: number;
  totalSlots: number;
};

export type ListFilterOption = "all" | "upcoming" | "unpaid" | "completed";

export type ListSection = {
  id: string;
  title: string;
  subtitle?: string;
  date: Date;
  items: TimelineLessonItem[];
};

