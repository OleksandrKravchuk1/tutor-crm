import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { FlatList, Pressable, Text, View } from "react-native";
import { LIST_FILTER_OPTIONS } from "../constants/calendar";
import {
  ListFilterOption,
  ListSection,
  TimelineLessonItem,
} from "../types/calendar";
import { TimelineLessonCard } from "./TimelineLessonCard";

export type CalendarListViewProps = {
  sections: ListSection[];
  activeFilter: ListFilterOption;
  onFilterChange: (filter: ListFilterOption) => void;
  onItemPress?: (item: TimelineLessonItem) => void;
  onActionPress?: (item: TimelineLessonItem) => void;
  onPhonePress?: (item: TimelineLessonItem) => void;
};

export function CalendarListView({
  sections,
  activeFilter,
  onFilterChange,
  onItemPress,
  onActionPress,
  onPhonePress,
}: CalendarListViewProps) {
  return (
    <View className="flex-1">
      {/* Filter Tabs */}
      <View className="px-5 pt-3">
        <View className="flex-row items-center gap-2">
          {LIST_FILTER_OPTIONS.map((opt) => {
            const isSelected = activeFilter === opt.key;
            return (
              <Pressable
                key={opt.key}
                onPress={() => onFilterChange(opt.key)}
                className={`rounded-full px-3.5 py-1.5 ${
                  isSelected
                    ? "bg-primary-700 shadow-xs"
                    : "border border-slate-200 bg-white"
                }`}
              >
                <Text
                  className={`text-xs ${
                    isSelected
                      ? "font-bold text-white"
                      : "font-semibold text-slate-600"
                  }`}
                >
                  {opt.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Agenda Sections */}
      <View className="flex-1 px-5 pt-4">
        {sections.length > 0 ? (
          <FlatList
            data={sections}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            initialNumToRender={4}
            maxToRenderPerBatch={4}
            windowSize={5}
            renderItem={({ item: section }) => {
              return (
                <View className="mb-6">
                  {/* Sticky-like Date Header */}
                  <View className="mb-3 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-2">
                      <View className="h-2 w-2 rounded-full bg-primary-600" />
                      <Text className="text-base font-bold text-neutral-900">
                        {section.title}
                      </Text>
                    </View>
                    <View className="rounded-full bg-slate-100 px-2.5 py-0.5">
                      <Text className="text-xs font-medium text-slate-600">
                        {section.subtitle}
                      </Text>
                    </View>
                  </View>

                  {/* Lessons List in Section */}
                  <View className="gap-3">
                    {section.items.map((lesson) => (
                      <View key={lesson.id} className="flex-row items-start gap-3">
                        {/* Time Column */}
                        <View className="w-16 pt-1">
                          <Text className="text-sm font-bold text-slate-900">
                            {lesson.startTime}
                          </Text>
                          <Text className="mt-0.5 text-xs font-medium text-slate-400">
                            {lesson.endTime}
                          </Text>
                        </View>

                        {/* Lesson Card */}
                        <View className="flex-1">
                          <TimelineLessonCard
                            item={lesson}
                            onPress={() => onItemPress?.(lesson)}
                            onActionPress={() => onActionPress?.(lesson)}
                            onPhonePress={() => onPhonePress?.(lesson)}
                          />
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              );
            }}
            contentContainerStyle={{ paddingBottom: 110 }}
          />
        ) : (
          <View className="flex-1 items-center justify-center py-20">
            <View className="mb-3 h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <SymbolView
                name={{
                  ios: "tray",
                  android: "inbox",
                  web: "inbox",
                }}
                size={32}
                tintColor={palette.primary[800]}
              />
            </View>
            <Text className="text-lg font-bold text-neutral-950">
              No Lessons Found
            </Text>
            <Text className="mt-1 text-center text-sm text-neutral-500">
              {activeFilter === "unpaid"
                ? "Great news! All scheduled lessons are paid."
                : "No lessons match the selected criteria."}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
