import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";
import { SetupCardProps } from "../../types/onboarding";

export function SetupCard({ icon, title, subtitle, accessory, children }: SetupCardProps) {
  return (
    <View className="gap-4 rounded-3xl border border-neutral-100 bg-white p-4 ios:shadow-soft android:shadow-md">
      <View className="flex-row items-start gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-primary-100">
          <SymbolView name={icon} size={18} tintColor={palette.primary[700]} />
        </View>
        <View className="flex-1">
          <Text className="text-base font-bold text-neutral-950">{title}</Text>
          <Text className="mt-0.5 text-sm text-neutral-500">{subtitle}</Text>
        </View>
        {accessory}
      </View>

      {children}
    </View>
  );
}
