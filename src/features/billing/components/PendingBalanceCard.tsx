import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { PendingBalanceCardProps } from "../types/billing";

export function PendingBalanceCard({
  amount,
  overdueCount,
  description,
  onReview,
}: PendingBalanceCardProps) {
  return (
    <View className="
    flex-row items-center justify-between w-full h-20 bg-white rounded-2xl px-4 mt-3
    ios:shadow-soft
    android:shadow-md
    ">
      <View className="h-14 w-14 items-center justify-center rounded-full bg-primary-100">
        <SymbolView
          name={{
            ios: "banknote.fill",
            android: "account_balance_wallet",
            web: "account_balance_wallet",
          }}
          size={26}
          tintColor={palette.primary[700]}
        />
      </View>

      <View className="flex-1 ml-4">
        <Text className="text-2xl text-neutral-900 font-bold">
          ${amount} Pending
        </Text>
        <Text className="text-md text-neutral-600 font-medium">
          {overdueCount} {description}
        </Text>
      </View>

      <Pressable
        onPress={onReview}
        className="
        items-center justify-center h-14 w-24 rounded-3xl bg-primary-100
        active:opacity-70
        "
      >
        <Text className="text-primary-700 text-md font-bold">Review</Text>
      </Pressable>
    </View>
  );
}
