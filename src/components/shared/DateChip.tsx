import { palette } from "@/constants/palette";
import { formatDate } from "@/features/home/utils/date";
import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

interface DateChipProps {
  date?: Date | string;
  locale?: string;
}

export function DateChip({ date = new Date(), locale = "en-US" }: DateChipProps) {
  const formattedDate = formatDate({ date, locale });

  return (
    <View className="
    flex-row items-center gap-2 self-start rounded-full bg-white px-3.5 py-1.5 
    ios:shadow-soft
    android:shadow-md
    ">
      <SymbolView
        name={{
          ios: "calendar",
          android: "calendar_today",
          web: "calendar_today",
        }}
        tintColor={palette.primary[800]}
        size={16}
      />
      <Text className="text-md font-semibold text-neutral-950">
        {formattedDate}
      </Text>
    </View>
  );
}