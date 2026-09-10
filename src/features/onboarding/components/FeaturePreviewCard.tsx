import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";
import { FeatureItem } from "../types/onboarding";

const FEATURES: FeatureItem[] = [
  {
    id: "rosters",
    title: "Effortless Student Rosters",
    subtitle: "Profiles, lesson goals & packages",
    iconBgColor: "bg-primary-700",
    icon: {
      ios: "person.2.fill",
      android: "groups",
      web: "groups",
    },
    badge: (
      <View className="h-10 w-10 items-center justify-center rounded-full bg-primary-200">
        <SymbolView
          name={{
            ios: "checkmark.circle.fill",
            android: "check_circle",
            web: "check_circle",
          }}
          size={20}
          tintColor="#4D44E3"
        />
      </View>
    ),
  },
  {
    id: "balances",
    title: "Track Lesson Balances",
    subtitle: "Auto-log prepaid credits & invoices",
    iconBgColor: "bg-[#00B074]",
    icon: {
      ios: "creditcard.fill",
      android: "account_balance_wallet",
      web: "account_balance_wallet",
    },
    badge: (
      <View className="items-center rounded-3xl bg-[#D4F7E7] px-6 py-1">
        <Text className="text-sm font-black text-[#00A36C]">$480</Text>
        <Text className="text-sm font-bold text-[#00A36C]">Paid</Text>
      </View>
    ),
  },
  {
    id: "calendar",
    title: "1-Tap Calendar Sync",
    subtitle: "Instant Google & Apple Calendar links",
    iconBgColor: "bg-[#4338CA]",
    icon: {
      ios: "calendar",
      android: "calendar_today",
      web: "calendar_today",
    },
    badge: (
      <View className="rounded-full bg-primary-200 px-3 py-1.5">
        <Text className="text-sm font-bold text-primary-700">Synced</Text>
      </View>
    ),
  },
];

export function FeaturePreviewCard() {
  return (
    <View className="rounded-3xl bg-white px-3 py-6 shadow-sm gap-2.5">
      {FEATURES.map((item) => (
        <View
          key={item.id}
          className="flex-row items-center justify-between rounded-2xl bg-white p-3.5 shadow-lg"
        >
          <View className="flex-1 flex-row items-center gap-3 pr-2">
            <View
              className={`h-11 w-11 items-center justify-center rounded-full shadow-xs ${item.iconBgColor}`}
            >
              <SymbolView name={item.icon} size={20} tintColor="#FFFFFF" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-neutral-950">
                {item.title}
              </Text>
              <Text
                className="mt-0.5 text-sm text-neutral-500"
                numberOfLines={1}
              >
                {item.subtitle}
              </Text>
            </View>
          </View>

          {item.badge}
        </View>
      ))}
    </View>
  );
}
