import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { SUBJECTS } from "../../data/subjects";
import { SubjectPickerProps } from "../../types/onboarding";

export function SubjectPicker({ selected, onSelect }: SubjectPickerProps) {
  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-bold text-neutral-950">Primary Subject</Text>
        <Text className="text-xs text-neutral-500">Customizable anytime</Text>
      </View>

      <View className="flex-row flex-wrap justify-between gap-y-2">
        {SUBJECTS.map((subject) => {
          const isSelected = selected === subject.id;
          return (
            <Pressable
              key={subject.id}
              onPress={() => onSelect(subject.id)}
              className={`flex-row items-center gap-2 rounded-2xl border px-3 py-3 active:opacity-80 ${subject.fullWidth ? "w-full justify-center" : "w-[49%]"} ${isSelected ? "border-primary-700 bg-primary-700" : "border-neutral-100 bg-white"}`}
            >
              <SymbolView
                name={subject.icon}
                size={16}
                tintColor={isSelected ? "#FFFFFF" : palette.neutral[700]}
              />
              <Text
                numberOfLines={1}
                className={`shrink text-sm font-semibold ${isSelected ? "text-white" : "text-neutral-800"}`}
              >
                {subject.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
