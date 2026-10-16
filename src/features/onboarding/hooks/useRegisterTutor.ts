import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerTutor } from "../api/onboarding";
import { onboardingKeys } from "../api/queryKeys";

export function useRegisterTutor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerTutor,
    onSuccess: (account) => {
      queryClient.setQueryData(onboardingKeys.account(), account);
    },
  });
}
