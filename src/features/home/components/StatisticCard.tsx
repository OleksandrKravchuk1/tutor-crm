import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";
import { StatisticCardProps } from "../types/home";

export function StatisticCard({
  title,
  mainInfo,
  subinfo,
  icon,
  iconColor = "#3323CC",
  iconBgColor = "bg-primary-100",
}: StatisticCardProps) {
  return (
    <View className="flex-1 rounded-3xl border border-neutral-100 bg-white p-4 shadow-sm">

      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-medium text-neutral-600">
          {title}
        </Text>

        <View className={`h-10 w-10 items-center justify-center rounded-full ${iconBgColor}`}>
          <SymbolView name={icon} size={20} tintColor={iconColor} />
        </View>
      </View>

      <Text className="mt-3 text-3xl font-bold tracking-tight text-neutral-950">
        {mainInfo}
      </Text>

      <View className="mt-1.5 flex-row items-center gap-1.5">
        {typeof subinfo === "string" ? (
          <Text className="text-md text-neutral-500">{subinfo}</Text>
        ) : (
          subinfo
        )}
      </View>
    </View>
  );
}
