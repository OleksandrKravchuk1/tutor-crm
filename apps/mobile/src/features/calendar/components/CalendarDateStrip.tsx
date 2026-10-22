import { useMemo, useRef, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { CalendarDateStripProps, CalendarDayItem } from "../types/calendar";
import { generateCalendarDays, isSameDay } from "../utils/date";

type DayCardProps = {
  item: CalendarDayItem;
  isSelected: boolean;
  onPress: () => void;
};

function CalendarDayCard({ item, isSelected, onPress }: DayCardProps) {
  const { dayName, dayNumber, dot = "none" } = item;

  const renderDot = () => {
    if (dot === "none") {
      return <View className="h-1.5 w-1.5 opacity-0" />;
    }

    if (isSelected) {
      return <View className="h-1.5 w-1.5 rounded-full bg-white" />;
    }

    if (dot === "warning") {
      return <View className="h-1.5 w-1.5 rounded-full bg-[#F8BA52]" />;
    }

    return <View className="h-1.5 w-1.5 rounded-full bg-primary-700" />;
  };

  return (
    <Pressable
      onPress={onPress}
      className={`h-[86px] w-[62px] items-center justify-between rounded-3xl py-3 my-3 ios:shadow-soft android:shadow-md ${
        isSelected
          ? "bg-primary-700 shadow-md shadow-indigo-500/30"
          : "border border-slate-100/80 bg-white shadow-xs"
      }`}
    >
      <Text
        className={`text-xs font-medium ${
          isSelected ? "text-indigo-100" : "text-slate-500"
        }`}
      >
        {dayName}
      </Text>

      <Text
        className={`text-xl font-bold ${
          isSelected ? "text-white" : "text-slate-900"
        }`}
      >
        {dayNumber}
      </Text>

      {renderDot()}
    </Pressable>
  );
}

export function CalendarDateStrip({
  selectedDate,
  onSelectDate,
  days,
}: CalendarDateStripProps) {
  const flatListRef = useRef<FlatList<CalendarDayItem>>(null);

  const [initialBaseDate] = useState(() => selectedDate);
  const calendarDays = useMemo(() => {
    return days ?? generateCalendarDays(initialBaseDate);
  }, [days, initialBaseDate]);

  const selectedIndex = useMemo(() => {
    const idx = calendarDays.findIndex((d) => isSameDay(d.date, selectedDate));
    return idx >= 0 ? idx : 0;
  }, [calendarDays, selectedDate]);

  const handleSelectDay = (date: Date, index: number) => {
    onSelectDate(date);
    flatListRef.current?.scrollToIndex({
      index: Math.max(0, index - 1),
      animated: true,
    });
  };

  return (
    <View className="py-2">
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={calendarDays}
        keyExtractor={(item) => item.fullDateString}
        initialScrollIndex={Math.max(0, selectedIndex - 1)}
        removeClippedSubviews={true}
        initialNumToRender={7}
        maxToRenderPerBatch={7}
        windowSize={5}
        getItemLayout={(_, index) => ({
          length: 72,
          offset: 72 * index,
          index,
        })}
        onScrollToIndexFailed={(info) => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          }, 100);
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 10,
        }}
        renderItem={({ item, index }) => {
          const isSelected = isSameDay(item.date, selectedDate);
          return (
            <CalendarDayCard
              item={item}
              isSelected={isSelected}
              onPress={() => handleSelectDay(item.date, index)}
            />
          );
        }}
      />
    </View>
  );
}
