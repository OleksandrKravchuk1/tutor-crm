import { Text, View } from "react-native";

export function ProofBadge() {
  return (
    <View className="my-4 items-center">
      <View className="flex-row items-center gap-1.5 rounded-full bg-white px-5 py-1.5 shadow-lg">
        <Text className="text-sm">⭐</Text>
        <Text className="text-sm font-medium text-neutral-800">
          Trusted by <Text className="font-bold">4,000+</Text> tutors & private coaches
        </Text>
      </View>
    </View>
  );
}
