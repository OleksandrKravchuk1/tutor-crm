import { SymbolView } from "expo-symbols";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCalendarSchedule } from "../hooks/useCalendarSchedule";
import { CalendarViewMode, TimelineItem, TimelineLessonItem } from "../types/calendar";
import { CalendarDayView } from "./views/CalendarDayView";
import { CalendarHeader } from "./header/CalendarHeader";
import { CalendarListView } from "./views/CalendarListView";
import { CalendarWeekView } from "./views/CalendarWeekView";

const VIEW_MODE_ORDER: Record<CalendarViewMode, number> = {
  day: 0,
  week: 1,
  list: 2,
};

export function CalendarScreen() {
  const {
    viewMode,
    setViewMode,
    selectedDate,
    setSelectedDate,
    listFilter,
    setListFilter,
    dayItems,
    weekSchedule,
    listSections,
    headerTitle,
    subtitleText,
    goToPreviousWeek,
    goToNextWeek,
    goToToday,
  } = useCalendarSchedule();

  const [visitedModes, setVisitedModes] = useState<Record<CalendarViewMode, boolean>>({
    day: true,
    week: viewMode === "week",
    list: viewMode === "list",
  });

  const [prevTrackedMode, setPrevTrackedMode] = useState(viewMode);
  if (prevTrackedMode !== viewMode) {
    setPrevTrackedMode(viewMode);
    if (!visitedModes[viewMode]) {
      setVisitedModes((prev) => ({ ...prev, [viewMode]: true }));
    }
  }

  const [animOpacity] = useState(() => new Animated.Value(1));
  const [animTranslateX] = useState(() => new Animated.Value(0));
  const prevModeRef = useRef<CalendarViewMode>(viewMode);
  const isFirstMountRef = useRef(true);
  const animRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      return;
    }

    const prevIndex = VIEW_MODE_ORDER[prevModeRef.current];
    const nextIndex = VIEW_MODE_ORDER[viewMode];
    prevModeRef.current = viewMode;

    const direction = nextIndex >= prevIndex ? 1 : -1;

    animRef.current?.stop();

    animOpacity.setValue(0);
    animTranslateX.setValue(direction * 16);

    const anim = Animated.parallel([
      Animated.timing(animOpacity, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.spring(animTranslateX, {
        toValue: 0,
        stiffness: 350,
        damping: 28,
        mass: 0.8,
        useNativeDriver: true,
      }),
    ]);

    animRef.current = anim;
    anim.start();

    return () => {
      anim.stop();
    };
  }, [viewMode, animOpacity, animTranslateX]);

  const handleItemPress = (item: TimelineItem | TimelineLessonItem) => {
    console.log("Pressed item", item.id);
  };

  const handleActionPress = (item: TimelineItem | TimelineLessonItem) => {
    if (item.type === "lesson") {
      console.log("Action on", item.actionButton.label, item.studentName);
    }
  };

  const handlePhonePress = (item: TimelineItem | TimelineLessonItem) => {
    if (item.type === "lesson") {
      console.log("Phone pressed for", item.studentName);
    }
  };

  const handleAddLesson = () => {
    console.log("Add Lesson pressed");
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]} className="flex-1 bg-[#F9FAFB]">
      <View className="px-5 pt-4">
        <CalendarHeader
          dateText={headerTitle}
          subtitleText={subtitleText}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </View>

      <View className="flex-1 overflow-hidden">
        <Animated.View
          style={{
            flex: 1,
            opacity: animOpacity,
            transform: [{ translateX: animTranslateX }],
          }}
        >
          {/* Day View: kept alive to avoid destroying and recreating native views */}
          <View
            style={{
              flex: 1,
              display: viewMode === "day" ? "flex" : "none",
            }}
          >
            <CalendarDayView
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              items={dayItems}
              onItemPress={handleItemPress}
              onActionPress={handleActionPress}
              onPhonePress={handlePhonePress}
            />
          </View>

          {/* Week View: lazily mounted, then kept alive */}
          {visitedModes.week && (
            <View
              style={{
                flex: 1,
                display: viewMode === "week" ? "flex" : "none",
              }}
            >
              <CalendarWeekView
                weekSchedule={weekSchedule}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
                onPrevWeek={goToPreviousWeek}
                onNextWeek={goToNextWeek}
                onToday={goToToday}
                onItemPress={handleItemPress}
                onActionPress={handleActionPress}
                onPhonePress={handlePhonePress}
              />
            </View>
          )}

          {/* List View: lazily mounted, then kept alive */}
          {visitedModes.list && (
            <View
              style={{
                flex: 1,
                display: viewMode === "list" ? "flex" : "none",
              }}
            >
              <CalendarListView
                sections={listSections}
                activeFilter={listFilter}
                onFilterChange={setListFilter}
                onItemPress={handleItemPress}
                onActionPress={handleActionPress}
                onPhonePress={handlePhonePress}
              />
            </View>
          )}
        </Animated.View>
      </View>

      {/* Floating Add Lesson Button */}
      <Pressable
        onPress={handleAddLesson}
        className="absolute bottom-6 right-5 flex-row items-center gap-2 rounded-full bg-primary-700 px-5 py-3.5 shadow-lg shadow-indigo-500/40 active:opacity-90"
      >
        <SymbolView
          name={{
            ios: "plus.circle.fill",
            android: "add_circle",
            web: "add_circle",
          }}
          size={20}
          tintColor="#FFFFFF"
        />
        <Text className="text-sm font-bold text-white">Add Lesson</Text>
      </Pressable>
    </SafeAreaView>
  );
}
