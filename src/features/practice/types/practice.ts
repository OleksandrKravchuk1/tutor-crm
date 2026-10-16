import { z } from "zod";
import { paymentPolicyIdSchema, practiceSettingsSchema } from "../schemas/practiceSettings";

export type PaymentPolicyId = z.infer<typeof paymentPolicyIdSchema>;
export type PracticeSettings = z.infer<typeof practiceSettingsSchema>;

export type PaymentPolicyOption = {
  id: PaymentPolicyId;
  title: string;
  description: string;
  recommended?: boolean;
};
