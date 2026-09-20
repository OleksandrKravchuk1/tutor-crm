import { Pressable, ScrollView, Text, View } from "react-native";
import { FILTERS } from "../data/students";
import { FilterChipsProps, FilterOption } from "../types/students";

const getBadgeColors = (item: FilterOption, isSelected: boolean) => {
  if (isSelected) {
    return { bg: "rgba(255, 255, 255, 0.25)", text: "#FFFFFF" };
  }
  switch (item.id) {
    case "active":
      return { bg: "#DBEAFE", text: "#1D4ED8" };
    case "owing":
      return { bg: "#FEF3C7", text: "#B45309" };
    case "inactive":
      return { bg: "#F3F4F6", text: "#4B5563" };
    default:
      return { bg: "#F3F4F6", text: "#374151" };
  }
};

export function FilterChips({ selected, onSelect }: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexDirection: "row", gap: 10, paddingVertical: 4 }}
    >
      {FILTERS.map((item) => {
        const isSelected = selected === item.id;
        const badgeColors = getBadgeColors(item, isSelected);
        return (
          <Pressable
            key={item.id}
            onPress={() => onSelect(item.id)}
            className={`
              flex-row items-center gap-2 rounded-full px-5 py-4 
              ios:shadow-soft 
              android:shadow-md ${isSelected
                ? "bg-primary-700"
                : "border border-neutral-100 bg-white"
              }`}
          >
            <Text
              className={`text-sm font-semibold ${isSelected ? "text-white" : "text-neutral-600"
                }`}
            >
              {item.label}
            </Text>
            <View
              className="items-center justify-center rounded-full px-2 py-0.5"
              style={{ backgroundColor: badgeColors.bg }}
            >
              <Text
                className="text-xs font-bold"
                style={{ color: badgeColors.text }}
              >
                {item.count}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}