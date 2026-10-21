import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { TimelineSlotItem } from "../../types/calendar";

type TimelineSlotCardProps = {
  item: TimelineSlotItem;
  onPress?: () => void;
};

export function TimelineSlotCard({ item, onPress }: TimelineSlotCardProps) {
  const { title, subtitle, rightIcon } = item;

  return (
    <Pressable
      onPress={onPress}
      className="relative overflow-hidden rounded-2xl border border-slate-100/80 bg-white py-3.5 pl-4 pr-3.5 ios:shadow-soft android:shadow-xs active:opacity-90"
    >
      <View className="absolute bottom-0 left-0 top-0 w-1.5 bg-slate-300" />

      <View className="flex-row items-center justify-between">
        <View className="flex-1 flex-row items-center gap-3 pr-2">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-blue-100/70">
            <SymbolView
              name={{ ios: "plus", android: "add", web: "add" }}
              size={18}
              tintColor="#3B82F6"
            />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-slate-900" numberOfLines={1}>
              {title}
            </Text>
            <Text className="mt-0.5 text-xs text-slate-500" numberOfLines={1}>
              {subtitle}
            </Text>
          </View>
        </View>

        {rightIcon === "chevron" ? (
          <SymbolView
            name={{
              ios: "chevron.right",
              android: "chevron_right",
              web: "chevron_right",
            }}
            size={16}
            tintColor="#94A3B8"
          />
        ) : (
          <SymbolView
            name={{
              ios: "plus.circle",
              android: "add_circle_outline",
              web: "add_circle_outline",
            }}
            size={20}
            tintColor="#94A3B8"
          />
        )}
      </View>
    </Pressable>
  );
}
