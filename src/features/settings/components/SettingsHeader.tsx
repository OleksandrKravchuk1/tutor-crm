import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";
import { SettingsHeaderProps } from "../types/settings";

export function SettingsHeader({ subtitle, planName }: SettingsHeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="flex-1 pr-3 text-md text-neutral-600 leading-snug">
        {subtitle}
      </Text>

      <View className="flex-row items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1.5">
        <SymbolView
          name={{
            ios: "checkmark.seal.fill",
            android: "verified",
            web: "verified",
          }}
          size={14}
          tintColor={palette.primary[700]}
        />
        <Text className="text-sm font-semibold text-primary-700">{planName}</Text>
      </View>
    </View>
  );
}
