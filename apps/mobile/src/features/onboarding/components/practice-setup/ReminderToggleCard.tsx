import { AppSwitch } from "@/components/shared/AppSwitch";
import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";
import { ReminderToggleCardProps } from "../../types/onboarding";

export function ReminderToggleCard({ enabled, onChange }: ReminderToggleCardProps) {
  return (
    <View className="flex-row items-start gap-3 rounded-3xl border border-neutral-100 bg-white p-4 ios:shadow-soft android:shadow-md">
      <View className="h-10 w-10 items-center justify-center rounded-full bg-primary-100">
        <SymbolView
          name={{ ios: "bell.badge", android: "notifications_active", web: "notifications_active" }}
          size={18}
          tintColor={palette.primary[700]}
        />
      </View>

      <View className="flex-1">
        <Text className="text-sm font-bold text-neutral-950">Automated SMS / WhatsApp Reminders</Text>
        <Text className="mt-1 text-xs leading-relaxed text-neutral-600">
          Send parents an automated reminder 24 hrs before lesson. Reduces no-shows by 40%.
        </Text>
      </View>

      <AppSwitch value={enabled} onValueChange={onChange} />
    </View>
  );
}
