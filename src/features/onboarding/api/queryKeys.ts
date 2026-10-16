export const onboardingKeys = {
  all: ["onboarding"] as const,
  account: () => [...onboardingKeys.all, "account"] as const,
};
