import { DailyWidgetProps } from "@/features/home/types/home";
import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

export function DailyWidget({
  sessionsCount = 4,
  description = "You have 4 sessions today.",
  onTrackPercentage = 100,
  onPress
}: DailyWidgetProps) {

  return (
    <View className='flex-row items-center justify-between rounded-3xl bg-primary-600 p-4 py-6 shadow-sm'>
      <View className='flex-1 flex-row items-center gap-3.5 pr-2'>
        <View className="h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <SymbolView
            name={{
              ios: "bolt.fill",
              android: "flash_on",
              web: "flash_on",
            }}
            tintColor="#FFFFFF"
            size={22}
          />
        </View>

        <View className="flex-1">
          <Text className="text-lg font-bold text-white">
            {sessionsCount} Sessions Scheduled
          </Text>
          <Text className="mt-0.5 text-sm text-primary-100 leading-tight">
            {description}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center gap-1.5 rounded-full bg-white/20 px-3 py-2">
        <SymbolView
          name={{
            ios: "chart.line.uptrend.xyaxis",
            android: "trending_up",
            web: "trending_up",
          }}
          tintColor="#FFFFFF"
          size={24}
        />
        <View className=''>
          <Text className="text-md font-semibold text-white leading-2">
            {onTrackPercentage}% On
          </Text>
          <Text className="text-md font-semibold text-white leading-2">
            Track
          </Text>
        </View>
      </View>
    </View>
  )
}