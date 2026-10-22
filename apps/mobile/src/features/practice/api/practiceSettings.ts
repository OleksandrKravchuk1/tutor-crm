import {
  DEFAULT_PRACTICE_SETTINGS,
  PracticeSettings,
  practiceSettingsSchema,
} from "@tutor-crm/shared";

// In-memory mock store with simulated latency until the backend is wired up
let store: PracticeSettings = DEFAULT_PRACTICE_SETTINGS;
const simulateNetwork = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchPracticeSettings(): Promise<PracticeSettings> {
  await simulateNetwork(300);
  return store;
}

export async function savePracticeSettings(settings: PracticeSettings): Promise<PracticeSettings> {
  await simulateNetwork();
  store = practiceSettingsSchema.parse(settings);
  return store;
}
