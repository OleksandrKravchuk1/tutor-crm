import { palette } from "@/constants/palette";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { OnboardingNavHeaderProps } from "../types/onboarding";

export function OnboardingNavHeader({ title, onBack }: OnboardingNavHeaderProps) {
  const handleBack = onBack ?? (() => router.back());

  return (
    <View className="flex-row items-center gap-3 px-5 py-2">
      <Pressable onPress={handleBack} hitSlop={10} className="active:opacity-60">
        <SymbolView
          name={{ ios: "arrow.left", android: "arrow_back", web: "arrow_back" }}
          size={20}
          tintColor={palette.neutral[950]}
        />
      </Pressable>

      <View className="flex-1 flex-row items-center gap-2">
        <View className="h-8 w-8 items-center justify-center rounded-xl bg-primary-700">
          <SymbolView
            name={{ ios: "graduationcap.fill", android: "school", web: "school" }}
            size={16}
            tintColor="#FFFFFF"
          />
        </View>
        <Text className="text-base font-bold text-neutral-950">Tutor CRM</Text>
      </View>

      <Text className="text-base font-bold text-neutral-950" numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}
