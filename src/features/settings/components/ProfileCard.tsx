import { getInitials } from "@/features/home/utils/date";
import { Image, Pressable, Text, View } from "react-native";
import { ProfileCardProps } from "../types/settings";

export function ProfileCard({
  name,
  headline,
  activeStudents,
  avatarUrl,
  isOnline = true,
  onEdit,
}: ProfileCardProps) {
  return (
    <View className="flex-row items-center gap-3.5 rounded-3xl border border-neutral-100 bg-white p-4 ios:shadow-soft android:shadow-md">
      <View className="relative">
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} className="h-16 w-16 rounded-full" />
        ) : (
          <View className="h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <Text className="text-xl font-bold text-primary-700">{getInitials(name)}</Text>
          </View>
        )}

        {isOnline && (
          <View className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
        )}
      </View>

      <View className="flex-1">
        <Text className="text-xl font-bold text-neutral-900" numberOfLines={1}>
          {name}
        </Text>
        <Text className="mt-0.5 text-md text-neutral-600" numberOfLines={1}>
          {headline}
        </Text>
        <Text className="mt-0.5 text-sm font-semibold text-primary-700">
          {activeStudents} active students
        </Text>
      </View>

      <Pressable
        onPress={onEdit}
        className="items-center justify-center rounded-full bg-primary-100 px-4 py-2 active:opacity-70"
      >
        <Text className="text-md font-bold text-primary-700">Edit</Text>
      </Pressable>
    </View>
  );
}
