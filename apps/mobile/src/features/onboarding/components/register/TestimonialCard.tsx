import { Image, Text, View } from "react-native";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80";

export function TestimonialCard() {
  return (
    <View className="flex-row items-center gap-3 rounded-2xl border border-neutral-100 bg-white p-3.5 ios:shadow-soft android:shadow-md">
      <Image source={{ uri: AVATAR_URL }} className="h-12 w-12 rounded-full" />
      <View className="flex-1">
        <Text className="text-sm text-amber-400">★★★★★</Text>
        <Text className="text-sm italic text-neutral-800" numberOfLines={2}>
          “Saved me 5+ hours every week chasing invoices and rescheduling.”
        </Text>
        <Text className="mt-0.5 text-xs text-neutral-500">Elena R. • IB Math Tutor</Text>
      </View>
    </View>
  );
}
