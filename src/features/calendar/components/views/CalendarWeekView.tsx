import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { DayScheduleGroup, TimelineItem, WeekSchedule } from "../../types/calendar";
import { formatFullDate, isSameDay, isToday } from "../../utils/date";
import { TimelineItemRow } from "../timeline/TimelineItemRow";

export type CalendarWeekViewProps = {
  weekSchedule: WeekSchedule;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onToday: () => void;
  onItemPress?: (item: TimelineItem) => void;
  onActionPress?: (item: TimelineItem) => void;
  onPhonePress?: (item: TimelineItem) => void;
};

export function CalendarWeekView({
  weekSchedule,
  selectedDate,
  onSelectDate,
  onPrevWeek,
  onNextWeek,
  onToday,
  onItemPress,
  onActionPress,
  onPhonePress,
}: CalendarWeekViewProps) {
  // If filterDay is null, show all 7 days. If set, filter to that day.
  const [filterDay, setFilterDay] = useState<string | null>(null);

  // Reset filterDay when the week changes so we don't show an empty list
  const weekKey = weekSchedule.weekStart.toISOString();
  const [prevWeekKey, setPrevWeekKey] = useState(weekKey);
  if (prevWeekKey !== weekKey) {
    setPrevWeekKey(weekKey);
    setFilterDay(null);
  }

  const dayNameFormatter = useMemo(
    () => new Intl.DateTimeFormat("en-US", { weekday: "short" }),
    []
  );

  const displayedDays = useMemo(() => {
    if (!filterDay) {
      return weekSchedule.days;
    }
    return weekSchedule.days.filter((d) => d.dateString === filterDay);
  }, [weekSchedule.days, filterDay]);

  const handleDayPillPress = (dayGroup: DayScheduleGroup) => {
    onSelectDate(dayGroup.date);
    if (filterDay === dayGroup.dateString) {
      // Toggle off to show full week
      setFilterDay(null);
    } else {
      setFilterDay(dayGroup.dateString);
    }
  };

  return (
    <View className="flex-1">
      {/* Week Navigator & Quick Actions */}
      <View className="px-5 pt-3">
        <View className="flex-row items-center justify-between rounded-2xl bg-white p-3 shadow-xs">
          <Pressable
            onPress={onPrevWeek}
            hitSlop={8}
            className="h-9 w-9 items-center justify-center rounded-xl bg-slate-100 active:bg-slate-200"
          >
            <SymbolView
              name={{
                ios: "chevron.left",
                android: "chevron_left",
                web: "chevron_left",
              }}
              size={18}
              tintColor={palette.neutral[900]}
            />
          </Pressable>

          <Pressable
            onPress={onToday}
            className="flex-row items-center gap-1.5 rounded-full bg-primary-100 px-3.5 py-1.5 active:bg-primary-200"
          >
            <SymbolView
              name={{
                ios: "calendar",
                android: "calendar_today",
                web: "calendar_today",
              }}
              size={14}
              tintColor={palette.primary[800]}
            />
            <Text className="text-xs font-bold text-primary-800">
              Current Week
            </Text>
          </Pressable>

          <Pressable
            onPress={onNextWeek}
            hitSlop={8}
            className="h-9 w-9 items-center justify-center rounded-xl bg-slate-100 active:bg-slate-200"
          >
            <SymbolView
              name={{
                ios: "chevron.right",
                android: "chevron_right",
                web: "chevron_right",
              }}
              size={18}
              tintColor={palette.neutral[900]}
            />
          </Pressable>
        </View>

        {/* 7-Day Quick Strip */}
        <View className="mt-3 flex-row justify-between gap-1.5">
          {weekSchedule.days.map((dayGroup) => {
            const isDaySelected = filterDay === dayGroup.dateString;
            const isCurrentDate = isToday(dayGroup.date);
            const isDayHighlighted = isSameDay(dayGroup.date, selectedDate);
            const shortName = dayNameFormatter.format(dayGroup.date);
            const dayNum = dayGroup.date.getDate();

            return (
              <Pressable
                key={dayGroup.dateString}
                onPress={() => handleDayPillPress(dayGroup)}
                className={`flex-1 items-center rounded-2xl py-2.5 ${
                  isDaySelected
                    ? "bg-primary-700 shadow-sm"
                    : isDayHighlighted
                    ? "border border-primary-300 bg-primary-50"
                    : "bg-white border border-slate-100"
                }`}
              >
                <Text
                  className={`text-[11px] font-semibold ${
                    isDaySelected
                      ? "text-indigo-200"
                      : isCurrentDate
                      ? "text-primary-700 font-bold"
                      : "text-slate-400"
                  }`}
                >
                  {shortName}
                </Text>

                <Text
                  className={`mt-1 text-base font-bold ${
                    isDaySelected
                      ? "text-white"
                      : isCurrentDate
                      ? "text-primary-800"
                      : "text-slate-800"
                  }`}
                >
                  {dayNum}
                </Text>

                <View className="mt-1 h-2 items-center justify-center">
                  {dayGroup.lessonCount > 0 ? (
                    <View
                      className={`h-1.5 w-1.5 rounded-full ${
                        isDaySelected ? "bg-white" : "bg-[#58CDA7]"
                      }`}
                    />
                  ) : (
                    <View className="h-1.5 w-1.5 opacity-0" />
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Filter status banner when filtered */}
        {filterDay && (
          <View className="mt-2.5 flex-row items-center justify-between rounded-xl bg-slate-100/90 px-3.5 py-1.5">
            <Text className="text-xs font-medium text-slate-600">
              Showing single day view
            </Text>
            <Pressable onPress={() => setFilterDay(null)}>
              <Text className="text-xs font-bold text-primary-700">
                Show All Week
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* Week Days Feed */}
      <View className="flex-1 px-5 pt-3">
        <FlatList
          data={displayedDays}
          keyExtractor={(item) => item.dateString}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          initialNumToRender={3}
          maxToRenderPerBatch={4}
          windowSize={5}
          renderItem={({ item: dayGroup }) => {
            const hasItems = dayGroup.items.length > 0;
            const formattedDayTitle = formatFullDate(dayGroup.date);
            const isDayToday = isToday(dayGroup.date);

            return (
              <View className="mb-5">
                {/* Day Section Header */}
                <View className="mb-3 flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-base font-bold text-neutral-900">
                      {formattedDayTitle}
                    </Text>
                    {isDayToday && (
                      <View className="rounded-full bg-emerald-100 px-2 py-0.5">
                        <Text className="text-[10px] font-bold text-emerald-800">
                          TODAY
                        </Text>
                      </View>
                    )}
                  </View>

                  <View className="flex-row items-center gap-1.5">
                    {dayGroup.lessonCount > 0 && (
                      <View className="rounded-full bg-indigo-50 px-2.5 py-0.5">
                        <Text className="text-xs font-semibold text-primary-800">
                          {dayGroup.lessonCount} lesson{dayGroup.lessonCount === 1 ? "" : "s"}
                        </Text>
                      </View>
                    )}
                    {dayGroup.slotCount > 0 && (
                      <View className="rounded-full bg-slate-100 px-2 py-0.5">
                        <Text className="text-xs font-medium text-slate-500">
                          {dayGroup.slotCount} slot{dayGroup.slotCount === 1 ? "" : "s"}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>

                {/* Day Items */}
                {hasItems ? (
                  <View className="gap-3">
                    {dayGroup.items.map((item) => (
                      <TimelineItemRow
                        key={item.id}
                        item={item}
                        onPress={() => onItemPress?.(item)}
                        onActionPress={() => onActionPress?.(item)}
                        onPhonePress={() => onPhonePress?.(item)}
                      />
                    ))}
                  </View>
                ) : (
                  <View className="items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/60 py-6">
                    <Text className="text-xs font-medium text-slate-400">
                      No lessons or slots scheduled
                    </Text>
                  </View>
                )}
              </View>
            );
          }}
          contentContainerStyle={{ paddingBottom: 110 }}
        />
      </View>
    </View>
  );
}
