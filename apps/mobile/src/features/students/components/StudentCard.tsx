import { palette } from "@/constants/palette";
import { getInitials } from "@/features/home/utils/date";
import { SymbolView } from "expo-symbols";
import { Image, Pressable, Text, View } from "react-native";
import { StudentCardProps } from "../types/students";

export function StudentCard({
  name,
  subject,
  grade,
  avatarUrl,
  isActive = true,
  lastLesson,
  balanceText,
  balanceType = "prepaid",
  onPress,
}: StudentCardProps) {
  const initials = getInitials(name);

  const getBadgeStyle = () => {
    switch (balanceType) {
      case "owing":
        return {
          container: "bg-amber-50 border border-amber-100",
          dot: "bg-amber-500",
          text: "text-amber-700",
        };
      case "neutral":
        return {
          container: "bg-neutral-100",
          dot: "bg-neutral-400",
          text: "text-neutral-600",
        };
      case "prepaid":
      default:
        return {
          container: "bg-emerald-50 border border-emerald-100",
          dot: "bg-emerald-500",
          text: "text-emerald-600",
        };
    }
  };

  const badgeStyle = getBadgeStyle();

  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-between rounded-3xl border border-neutral-100 bg-white p-4 ios:shadow-soft android:shadow-md active:opacity-80"
    >
      <View className="flex-1 flex-row items-start gap-3.5 pr-2">
        {/* Avatar and active status */}
        <View className="relative">
          {avatarUrl ? (
            <Image
              source={{ uri: avatarUrl }}
              className="h-14 w-14 rounded-full"
            />
          ) : (
            <View className="h-14 w-14 items-center justify-center rounded-full bg-primary-100">
              <Text className="text-lg font-bold text-primary-700">
                {initials}
              </Text>
            </View>
          )}

          {isActive && (
            <View className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
          )}
        </View>

        {/* Name, Grade chip, Subject, Last lesson */}
        <View className="flex-1">
          <Text className="text-xl font-bold text-neutral-900" numberOfLines={1}>
            {name}
          </Text>

          {grade && (
            <View className="mt-1 self-start rounded-3xl bg-primary-100 px-3 py-1">
              <Text className="text-sm font-semibold text-blue-700">
                {grade}
              </Text>
            </View>
          )}

          <Text className="mt-1.5 text-md font-normal text-neutral-600" numberOfLines={1}>
            {subject}
          </Text>

          {lastLesson && (
            <View className="mt-2 flex-row items-center gap-1.5">
              <SymbolView
                name={{
                  ios: "clock.arrow.circlepath",
                  android: "history",
                  web: "history",
                }}
                size={16}
                tintColor={palette.neutral[500]}
              />
              <Text className="text-sm text-neutral-500">
                Last lesson:{" "}
                <Text className="font-semibold text-neutral-700">
                  {lastLesson}
                </Text>
              </Text>
            </View>
          )}
        </View>
      </View>

      <View className="items-end justify-between self-stretch py-0.5">
        <View
          className={`flex-row items-center gap-1.5 rounded-full px-2.5 py-1 ${badgeStyle.container}`}
        >
          <View className={`h-1.5 w-1.5 rounded-full ${badgeStyle.dot}`} />
          <Text className={`text-sm font-semibold ${badgeStyle.text}`}>
            {balanceText}
          </Text>
        </View>

        <View className="my-auto pr-1">
          <SymbolView
            name={{
              ios: "chevron.right",
              android: "chevron_right",
              web: "chevron_right",
            }}
            size={20}
            tintColor={palette.neutral[400]}
          />
        </View>
      </View>
    </Pressable>
  );
}
