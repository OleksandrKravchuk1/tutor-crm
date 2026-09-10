import { Text, View } from "react-native";
import { HeroSectionProps } from "../types/onboarding";

export function HeroSection({
  title = "Coaching & Tutoring,\nSimplified",
  description = "Manage students, lesson packages, payments, and schedules all in one intuitive pocket CRM.",
}: HeroSectionProps) {
  return (
    <View className="my-5 items-center">
      <Text className="text-center text-[28px] font-extrabold tracking-tight text-neutral-950 leading-tight">
        {title}
      </Text>

      <Text className="mt-3 text-center text-[15px] leading-relaxed text-neutral-600 px-3">
        {description}
      </Text>
    </View>
  );
}
