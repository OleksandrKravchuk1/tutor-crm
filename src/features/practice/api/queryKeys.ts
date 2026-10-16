export const practiceKeys = {
  all: ["practice"] as const,
  settings: () => [...practiceKeys.all, "settings"] as const,
};
