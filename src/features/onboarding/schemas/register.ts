import { z } from "zod";
import { MIN_PASSWORD_LENGTH, SUBJECT_IDS } from "../constants/onboarding";

export const subjectIdSchema = z.enum(SUBJECT_IDS);

export const registerSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name"),
  email: z.email("Enter a valid email address"),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, `Password must be at least ${MIN_PASSWORD_LENGTH} characters`),
  subject: subjectIdSchema,
  acceptedTerms: z.boolean().refine((accepted) => accepted, "Please accept the terms to continue"),
});
