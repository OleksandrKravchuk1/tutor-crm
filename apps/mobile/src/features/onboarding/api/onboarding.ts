import { RegisterPayload, TutorAccount } from "../types/onboarding";

// Mock latency until the backend is wired up
const simulateNetwork = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

export async function registerTutor({
  password: _password,
  acceptedTerms: _acceptedTerms,
  ...profile
}: RegisterPayload): Promise<TutorAccount> {
  await simulateNetwork();
  return { id: `tutor_${Date.now()}`, ...profile };
}
