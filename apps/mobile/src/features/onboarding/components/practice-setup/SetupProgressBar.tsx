import { View } from "react-native";
import { SetupProgressBarProps } from "../../types/onboarding";

export function SetupProgressBar({ progress }: SetupProgressBarProps) {
  const percent = Math.min(Math.max(progress, 0), 1) * 100;

  return (
    <View className="h-2 overflow-hidden rounded-full bg-primary-200">
      <View className="h-full rounded-full bg-primary-700" style={{ width: `${percent}%` }} />
    </View>
  );
}
