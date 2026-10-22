import { z } from "zod";
import {
  CANCELLATION_WINDOWS,
  LESSON_LENGTHS,
  MAX_RATE,
  MIN_RATE,
  PAYMENT_POLICY_IDS,
} from "./constants";

export const paymentPolicyIdSchema = z.enum(PAYMENT_POLICY_IDS);

export const practiceSettingsSchema = z.object({
  hourlyRate: z
    .number()
    .int()
    .min(MIN_RATE, `Rate must be at least $${MIN_RATE}`)
    .max(MAX_RATE, `Rate can't exceed $${MAX_RATE}`),
  lessonLength: z
    .number()
    .refine((minutes) => LESSON_LENGTHS.includes(minutes), "Pick a lesson length"),
  paymentPolicy: paymentPolicyIdSchema,
  cancellationHours: z
    .number()
    .refine((hours) => CANCELLATION_WINDOWS.includes(hours), "Pick a cancellation window"),
  remindersEnabled: z.boolean(),
});

export type PaymentPolicyId = z.infer<typeof paymentPolicyIdSchema>;
export type PracticeSettings = z.infer<typeof practiceSettingsSchema>;

export const DEFAULT_PRACTICE_SETTINGS: PracticeSettings = {
  hourlyRate: 75,
  lessonLength: 60,
  paymentPolicy: "prepaid",
  cancellationHours: 24,
  remindersEnabled: true,
};
