import { LESSON_LENGTHS } from "@/features/practice";
import { Pressable, Text, View } from "react-native";
import { LessonLengthPickerProps } from "../../types/onboarding";
import { SetupCard } from "./SetupCard";

export function LessonLengthPicker({ selected, onSelect }: LessonLengthPickerProps) {
  return (
    <SetupCard
      icon={{ ios: "clock", android: "schedule", web: "schedule" }}
      title="Standard Lesson Length"
      subtitle="Default calendar slot for new bookings"
    >
      <View className="flex-row gap-2">
        {LESSON_LENGTHS.map((minutes) => {
          const isSelected = selected === minutes;
          return (
            <Pressable
              key={minutes}
              onPress={() => onSelect(minutes)}
              className={`flex-1 items-center rounded-xl border py-2.5 active:opacity-80 ${isSelected ? "border-primary-700 bg-primary-700" : "border-neutral-100 bg-neutral-50"}`}
            >
              <Text className={`text-base font-bold ${isSelected ? "text-white" : "text-neutral-800"}`}>
                {minutes}
              </Text>
              <Text className={`text-xs ${isSelected ? "text-primary-200" : "text-neutral-500"}`}>
                mins
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SetupCard>
  );
}
