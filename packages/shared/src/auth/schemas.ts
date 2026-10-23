import { z } from "zod";
import { MIN_PASSWORD_LENGTH, SUBJECT_IDS } from "./constants";

export const subjectIdSchema = z.enum(SUBJECT_IDS);

export const registerSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name"),
  email: z.string().trim().toLowerCase().pipe(z.email("Enter a valid email address")),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, `Password must be at least ${MIN_PASSWORD_LENGTH} characters`),
  subject: subjectIdSchema,
  acceptedTerms: z.boolean().refine((accepted) => accepted, "Please accept the terms to continue"),
});

export type SubjectId = z.infer<typeof subjectIdSchema>;
/** Raw form values, before Zod transforms such as trimming */
export type RegisterFormValues = z.input<typeof registerSchema>;
/** Validated payload sent to POST /auth/register */
export type RegisterPayload = z.output<typeof registerSchema>;

/** Public account returned by the API (never includes the password) */
export type TutorAccount = Omit<RegisterPayload, "password" | "acceptedTerms"> & {
  id: string;
};
