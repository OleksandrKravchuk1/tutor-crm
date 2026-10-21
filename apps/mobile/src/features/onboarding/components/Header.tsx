import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";
import { HeaderProps } from "../types/onboarding";

export function Header({
  title = "Tutor CRM",
  subtitle = "Pocket Micro-CRM",
}: HeaderProps = {}) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <View className="h-11 w-11 items-center justify-center rounded-2xl bg-primary-700 shadow">
          <SymbolView
            name={{
              ios: "graduationcap.fill",
              android: "school",
              web: "school",
            }}
            size={22}
            tintColor="#FFFFFF"
          />
        </View>
        <View>
          <Text className="text-lg font-bold text-neutral-950">{title}</Text>
          <Text className="text-sm font-medium text-neutral-500">{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}