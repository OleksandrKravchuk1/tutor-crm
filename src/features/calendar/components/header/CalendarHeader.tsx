import { Text, View } from "react-native";
import { CalendarHeaderProps } from "../../types/calendar";
import { CalendarViewModeToggle } from "./CalendarViewModeToggle";

export function CalendarHeader(props: CalendarHeaderProps) {
  const { dateText, subtitleText, viewMode, onViewModeChange } = props;

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-1 pr-3">
        <View className="flex-row items-center gap-2">
          <Text className="text-2xl font-bold text-neutral-950">
            {dateText}
          </Text>
          <View className="h-2.5 w-2.5 rounded-full bg-[#58CDA7]" />
        </View>
        {subtitleText && (
          <Text className="mt-0.5 text-md font-normal text-slate-500">
            {subtitleText}
          </Text>
        )}
      </View>

      <CalendarViewModeToggle
        viewMode={viewMode}
        onViewModeChange={onViewModeChange}
      />
    </View>
  );
}
