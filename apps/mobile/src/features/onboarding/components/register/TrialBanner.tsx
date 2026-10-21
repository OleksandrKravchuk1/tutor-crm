import { StatusPill } from "@/components/shared/StatusPill";
import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

export function TrialBanner() {
  return (
    <View className="flex-row items-center gap-3 rounded-2xl border border-primary-200 bg-primary-100 p-3.5">
      <View className="h-10 w-10 items-center justify-center rounded-full bg-primary-200">
        <SymbolView
          name={{ ios: "checkmark.seal.fill", android: "verified", web: "verified" }}
          size={20}
          tintColor="#4D44E3"
        />
      </View>

      <View className="flex-1">
        <Text className="text-base font-bold text-neutral-950">14-Day Free Trial</Text>
        <Text className="text-sm text-neutral-600">Instant setup • No card required</Text>
      </View>

      <StatusPill label="Active" />
    </View>
  );
}
