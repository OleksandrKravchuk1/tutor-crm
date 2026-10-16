import {
  formatCancellationWindow,
  formatHourlyRate,
  formatLessonLength,
} from "@/features/practice";
import { PracticePreference } from "../types/settings";

export const APP_VERSION = "v2.4.1";

export const PRO_FEATURES = [
  "Unlimited active students & lesson logs",
  "Automated payment reminders & SMS alerts",
  "Financial & tax reports with CSV/PDF export",
  "Custom student homework portal",
];

export const TUTOR_PROFILE = {
  name: "Sarah Jenkins, M.Ed.",
  headline: "High School STEM & Test Prep",
  activeStudents: 14,
  avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
};

export const PRACTICE_PREFERENCES: PracticePreference[] = [
  {
    id: "hourly-rate",
    icon: { ios: "banknote", android: "payments", web: "payments" },
    title: "Hourly Rate Default",
    subtitle: "Standard 1-on-1 tutoring charge",
    getValue: (settings) => formatHourlyRate(settings.hourlyRate),
  },
  {
    id: "lesson-duration",
    icon: { ios: "clock", android: "schedule", web: "schedule" },
    title: "Lesson Duration",
    subtitle: "Default calendar booking block",
    getValue: (settings) => formatLessonLength(settings.lessonLength),
  },
  {
    id: "cancellation-window",
    icon: { ios: "calendar.badge.exclamationmark", android: "event_busy", web: "event_busy" },
    title: "Cancellation Window",
    subtitle: "Minimum advance reschedule time",
    getValue: (settings) => formatCancellationWindow(settings.cancellationHours),
  },
];
