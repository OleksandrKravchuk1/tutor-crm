import { PAYMENT_POLICIES } from "@/features/practice";
import { Pressable, Text, View } from "react-native";
import { PaymentPolicyPickerProps } from "../../types/onboarding";
import { SetupCard } from "./SetupCard";

export function PaymentPolicyPicker({ selected, onSelect }: PaymentPolicyPickerProps) {
  return (
    <SetupCard
      icon={{ ios: "doc.text", android: "receipt_long", web: "receipt_long" }}
      title="Default Payment Policy"
      subtitle="How clients are billed by default"
    >
      <View className="gap-2.5">
        {PAYMENT_POLICIES.map((policy) => {
          const isSelected = selected === policy.id;
          return (
            <Pressable
              key={policy.id}
              onPress={() => onSelect(policy.id)}
              className={`flex-row gap-3 rounded-2xl border p-3.5 active:opacity-80 ${isSelected ? "border-primary-300 bg-primary-100" : "border-neutral-100 bg-neutral-50"}`}
            >
              <View
                className={`mt-0.5 h-5 w-5 items-center justify-center rounded-full border-2 ${isSelected ? "border-primary-700" : "border-neutral-300"}`}
              >
                {isSelected && <View className="h-2.5 w-2.5 rounded-full bg-primary-700" />}
              </View>

              <View className="flex-1">
                <View className="flex-row flex-wrap items-center justify-between gap-1.5">
                  <Text className="text-sm font-bold text-neutral-950">{policy.title}</Text>
                  {policy.recommended && (
                    <View className="rounded-full bg-emerald-50 px-2 py-0.5">
                      <Text className="text-xs font-semibold text-emerald-600">Recommended</Text>
                    </View>
                  )}
                </View>
                <Text className="mt-1 text-xs leading-relaxed text-neutral-600">
                  {policy.description}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </SetupCard>
  );
}
