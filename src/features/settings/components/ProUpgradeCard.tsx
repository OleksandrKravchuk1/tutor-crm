import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { ProUpgradeCardProps } from "../types/settings";

const CARD_GRADIENT = `linear-gradient(135deg, ${palette.primary[600]} 0%, ${palette.primary[800]} 100%)`;

export function ProUpgradeCard({
  price,
  yearlyDiscount,
  features,
  onUpgrade,
}: ProUpgradeCardProps) {
  return (
    <View
      className="rounded-3xl bg-primary-700 p-5 ios:shadow-soft android:shadow-md"
      style={{ experimental_backgroundImage: CARD_GRADIENT }}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-1.5 rounded-full bg-white/20 px-3 py-1">
          <SymbolView
            name={{ ios: "sparkles", android: "auto_awesome", web: "auto_awesome" }}
            size={12}
            tintColor="#FDBA74"
          />
          <Text className="text-xs font-bold tracking-wider text-white">PRO TIER</Text>
        </View>
        <Text className="text-sm font-semibold text-white/80">{yearlyDiscount}</Text>
      </View>

      <Text className="mt-4 text-2xl font-bold text-white">
        Supercharge Your Tutoring Business
      </Text>
      <Text className="mt-1.5 text-md text-white/80 leading-snug">
        Get back 5+ hours weekly with intelligent client tracking and zero student limits.
      </Text>

      <View className="mt-4 gap-2.5">
        {features.map((feature) => (
          <View key={feature} className="flex-row items-start gap-2.5">
            <SymbolView
              name={{ ios: "checkmark.circle.fill", android: "check_circle", web: "check_circle" }}
              size={18}
              tintColor="#FFFFFF"
            />
            <Text className="flex-1 text-md font-medium text-white">{feature}</Text>
          </View>
        ))}
      </View>

      <Pressable
        onPress={onUpgrade}
        className="mt-5 h-14 flex-row items-center justify-center gap-2 rounded-full bg-white active:opacity-80"
      >
        <Text className="text-lg font-bold text-primary-800">
          Upgrade to Pro — {price}
        </Text>
        <SymbolView
          name={{ ios: "arrow.right", android: "arrow_forward", web: "arrow_forward" }}
          size={18}
          tintColor={palette.primary[800]}
        />
      </Pressable>

      <View className="mt-4 flex-row items-center justify-between border-t border-white/20 pt-3">
        <View className="flex-row items-center gap-1.5">
          <SymbolView
            name={{ ios: "lock.fill", android: "lock", web: "lock" }}
            size={12}
            tintColor="rgba(255,255,255,0.8)"
          />
          <Text className="text-sm text-white/80">Cancel anytime</Text>
        </View>
        <View className="flex-row items-center gap-1.5">
          <SymbolView
            name={{ ios: "creditcard.fill", android: "credit_card", web: "credit_card" }}
            size={12}
            tintColor="rgba(255,255,255,0.8)"
          />
          <Text className="text-sm text-white/80">Apple Pay / Google Pay</Text>
        </View>
      </View>
    </View>
  );
}
