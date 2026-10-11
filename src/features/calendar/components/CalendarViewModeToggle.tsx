import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  Text,
  View,
} from "react-native";
import { VIEW_MODE_LABELS, VIEW_MODES } from "../constants/calendar";
import { CalendarViewMode } from "../types/calendar";

const TAB_WIDTH = 58;
const PADDING = 4;

const TAB_INDEX_MAP: Record<CalendarViewMode, number> = {
  day: 0,
  week: 1,
  list: 2,
};

export type CalendarViewModeToggleProps = {
  viewMode: CalendarViewMode;
  onViewModeChange: (mode: CalendarViewMode) => void;
};

export function CalendarViewModeToggle({
  viewMode,
  onViewModeChange,
}: CalendarViewModeToggleProps) {
  const targetIndex = TAB_INDEX_MAP[viewMode] ?? 0;
  const initialOffset = PADDING + targetIndex * TAB_WIDTH;

  const [translateX] = useState(() => new Animated.Value(initialOffset));
  const animRef = useRef<Animated.CompositeAnimation | null>(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    const toValue = PADDING + targetIndex * TAB_WIDTH;

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      translateX.setValue(toValue);
      return;
    }

    // Stop any existing in-flight animation to prevent bridge queue buildup
    animRef.current?.stop();

    const anim = Animated.spring(translateX, {
      toValue,
      stiffness: 350,
      damping: 28,
      mass: 0.8,
      useNativeDriver: true,
    });

    animRef.current = anim;
    anim.start();

    return () => {
      anim.stop();
    };
  }, [targetIndex, translateX]);

  return (
    <View
      style={{ width: TAB_WIDTH * 3 + PADDING * 2 }}
      className="relative flex-row items-center rounded-full bg-[#DCE9FF] p-1"
    >
      {/* Sliding Pill Indicator running entirely on Native Thread */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: PADDING,
          bottom: PADDING,
          width: TAB_WIDTH,
          transform: [{ translateX }],
        }}
        className="rounded-full bg-white shadow-xs"
      />

      {VIEW_MODES.map((mode) => {
        const isSelected = viewMode === mode;
        const label = VIEW_MODE_LABELS[mode];

        return (
          <Pressable
            key={mode}
            onPress={() => onViewModeChange(mode)}
            style={{ width: TAB_WIDTH }}
            className="z-10 items-center justify-center py-2"
          >
            <Text
              className={`text-sm ${
                isSelected
                  ? "font-bold text-primary-800"
                  : "font-medium text-slate-500"
              }`}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
