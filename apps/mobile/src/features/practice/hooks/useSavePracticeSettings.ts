import { useMutation, useQueryClient } from "@tanstack/react-query";
import { savePracticeSettings } from "../api/practiceSettings";
import { practiceKeys } from "../api/queryKeys";
import { PracticeSettings } from "../types/practice";

export function useSavePracticeSettings() {
  const queryClient = useQueryClient();
  const queryKey = practiceKeys.settings();

  return useMutation({
    mutationFn: savePracticeSettings,
    // Optimistic update so toggles/steppers feel instant; rolled back on failure
    onMutate: async (settings) => {
      await queryClient.cancelQueries({ queryKey });
      const previous = queryClient.getQueryData<PracticeSettings>(queryKey);
      queryClient.setQueryData(queryKey, settings);
      return { previous };
    },
    onError: (_error, _settings, context) => {
      queryClient.setQueryData(queryKey, context?.previous);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey }),
  });
}
