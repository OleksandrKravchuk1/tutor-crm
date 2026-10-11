import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { FlatList, Text, View } from "react-native";
import { TimelineItem } from "../../types/calendar";
import { CalendarDateStrip } from "../CalendarDateStrip";
import { TimelineItemRow } from "../timeline/TimelineItemRow";

export type CalendarDayViewProps = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  items: TimelineItem[];
  onItemPress?: (item: TimelineItem) => void;
  onActionPress?: (item: TimelineItem) => void;
  onPhonePress?: (item: TimelineItem) => void;
};

export function CalendarDayView({
  selectedDate,
  onSelectDate,
  items,
  onItemPress,
  onActionPress,
  onPhonePress,
}: CalendarDayViewProps) {
  return (
    <View className="flex-1">
      {/* Date Strip */}
      <View className="mt-2">
        <CalendarDateStrip
          selectedDate={selectedDate}
          onSelectDate={onSelectDate}
        />
      </View>

      {/* Timeline items list */}
      <View className="flex-1 px-5 pt-4">
        {items.length > 0 ? (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            windowSize={5}
            renderItem={({ item }) => (
              <TimelineItemRow
                item={item}
                onPress={() => onItemPress?.(item)}
                onActionPress={() => onActionPress?.(item)}
                onPhonePress={() => onPhonePress?.(item)}
              />
            )}
            ItemSeparatorComponent={() => <View className="h-3.5" />}
            contentContainerStyle={{ paddingBottom: 110 }}
          />
        ) : (
          <View className="flex-1 items-center justify-center py-20">
            <View className="mb-3 h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <SymbolView
                name={{
                  ios: "calendar.badge.clock",
                  android: "event_available",
                  web: "event_available",
                }}
                size={32}
                tintColor={palette.primary[800]}
              />
            </View>
            <Text className="text-lg font-bold text-neutral-950">
              No Lessons Scheduled
            </Text>
            <Text className="mt-1 text-center text-sm text-neutral-500">
              There are no lessons or booking slots for this day.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
