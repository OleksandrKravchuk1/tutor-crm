import type { PaymentPolicyId } from "@tutor-crm/shared";

export type { PaymentPolicyId, PracticeSettings } from "@tutor-crm/shared";

export type PaymentPolicyOption = {
  id: PaymentPolicyId;
  title: string;
  description: string;
  recommended?: boolean;
};
