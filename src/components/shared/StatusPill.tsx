import { Text, View } from "react-native";

export function StatusPill({ label }: { label: string }) {
  return (
    <View className="flex-row items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1">
      <View className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      <Text className="text-sm font-semibold text-emerald-600">{label}</Text>
    </View>
  );
}
