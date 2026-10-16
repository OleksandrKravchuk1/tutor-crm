import { PaymentPolicyOption, PracticeSettings } from "../types/practice";

export const DEFAULT_PRACTICE_SETTINGS: PracticeSettings = {
  hourlyRate: 75,
  lessonLength: 60,
  paymentPolicy: "prepaid",
  cancellationHours: 24,
  remindersEnabled: true,
};

export const PAYMENT_POLICIES: PaymentPolicyOption[] = [
  {
    id: "prepaid",
    title: "Prepaid Packages",
    description:
      "Charge upfront for blocks (e.g. 5 or 10 lessons). Best for student retention.",
    recommended: true,
  },
  {
    id: "per-lesson",
    title: "Pay-per-lesson",
    description:
      "Issue an automated digital invoice immediately after each lesson is completed.",
  },
];
