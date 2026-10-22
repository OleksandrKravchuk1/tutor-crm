import { PaymentPolicyOption } from "../types/practice";

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
