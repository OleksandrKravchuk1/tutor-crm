import { Text, View } from "react-native";
import { TimelineItem } from "../../types/calendar";
import { TimelineLessonCard } from "./TimelineLessonCard";
import { TimelineSlotCard } from "./TimelineSlotCard";

type TimelineItemRowProps = {
  item: TimelineItem;
  onPress?: () => void;
  onActionPress?: () => void;
  onPhonePress?: () => void;
};

export function TimelineItemRow({
  item,
  onPress,
  onActionPress,
  onPhonePress,
}: TimelineItemRowProps) {
  const isLesson = item.type === "lesson";
  const subTimeText = isLesson ? item.endTime : item.duration;

  return (
    <View className="flex-row items-start gap-3">
      {/* Time Column */}
      <View className="w-16 pt-1">
        <Text className="text-sm font-bold text-slate-900">
          {item.startTime}
        </Text>
        <Text className="mt-0.5 text-xs font-medium text-slate-400">
          {subTimeText}
        </Text>
      </View>

      {/* Card Column */}
      <View className="flex-1">
        {isLesson ? (
          <TimelineLessonCard
            item={item}
            onPress={onPress}
            onActionPress={onActionPress}
            onPhonePress={onPhonePress}
          />
        ) : (
          <TimelineSlotCard item={item} onPress={onPress} />
        )}
      </View>
    </View>
  );
}
