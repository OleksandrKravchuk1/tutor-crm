export {
  CANCELLATION_WINDOWS,
  DEFAULT_PRACTICE_SETTINGS,
  LESSON_LENGTHS,
  MAX_RATE,
  MIN_RATE,
  paymentPolicyIdSchema,
  practiceSettingsSchema,
  RATE_STEP,
} from "@tutor-crm/shared";
export { PAYMENT_POLICIES } from "./data/practice";
export { usePracticeSettings } from "./hooks/usePracticeSettings";
export { useSavePracticeSettings } from "./hooks/useSavePracticeSettings";
export type { PaymentPolicyId, PaymentPolicyOption, PracticeSettings } from "./types/practice";
export {
  formatCancellationWindow,
  formatHourlyRate,
  formatLessonLength,
} from "./utils/format";
