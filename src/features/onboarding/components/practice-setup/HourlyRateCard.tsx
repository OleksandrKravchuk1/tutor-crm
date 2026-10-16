import { FieldError } from "@/components/shared/FieldError";
import { palette } from "@/constants/palette";
import { MAX_RATE, MIN_RATE, RATE_STEP } from "@/features/practice";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { HourlyRateCardProps } from "../../types/onboarding";
import { SetupCard } from "./SetupCard";

function StepperButton({
  icon,
  disabled,
  onPress,
}: {
  icon: "minus" | "plus";
  disabled: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={6}
      className={`h-11 w-11 items-center justify-center rounded-xl bg-white active:opacity-70 ${disabled ? "opacity-40" : ""}`}
    >
      <SymbolView
        name={{ ios: icon, android: icon === "minus" ? "remove" : "add", web: icon === "minus" ? "remove" : "add" }}
        size={18}
        tintColor={palette.neutral[950]}
      />
    </Pressable>
  );
}

export function HourlyRateCard({ rate, onChange, currency, averageRange, error }: HourlyRateCardProps) {
  return (
    <SetupCard
      icon={{ ios: "banknote", android: "payments", web: "payments" }}
      title="Default Hourly Rate"
      subtitle="Standard 60 min equivalent"
      accessory={
        <View className="flex-row items-center gap-1 rounded-xl border border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
          <Text className="text-xs font-bold text-neutral-800">{currency}</Text>
          <SymbolView
            name={{ ios: "chevron.down", android: "expand_more", web: "expand_more" }}
            size={12}
            tintColor={palette.neutral[600]}
          />
        </View>
      }
    >
      <View className="flex-row items-center justify-between rounded-2xl border border-primary-200 bg-primary-100 p-1.5">
        <StepperButton
          icon="minus"
          disabled={rate <= MIN_RATE}
          onPress={() => onChange(Math.max(MIN_RATE, rate - RATE_STEP))}
        />
        <Text className="text-3xl font-extrabold text-primary-800">
          ${rate}
          <Text className="text-sm font-medium text-neutral-500"> / hour</Text>
        </Text>
        <StepperButton
          icon="plus"
          disabled={rate >= MAX_RATE}
          onPress={() => onChange(Math.min(MAX_RATE, rate + RATE_STEP))}
        />
      </View>

      <View className="flex-row items-center justify-center gap-1.5">
        <View className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <Text className="text-xs text-neutral-600">Average in your subject: {averageRange}</Text>
      </View>

      <FieldError message={error} className="text-center" />
    </SetupCard>
  );
}
