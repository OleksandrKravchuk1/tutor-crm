import { useQuery } from "@tanstack/react-query";
import { fetchPracticeSettings } from "../api/practiceSettings";
import { practiceKeys } from "../api/queryKeys";

export function usePracticeSettings() {
  return useQuery({
    queryKey: practiceKeys.settings(),
    queryFn: fetchPracticeSettings,
  });
}
