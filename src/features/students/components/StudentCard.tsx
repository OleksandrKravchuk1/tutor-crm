import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

export interface StudentCardProps {
  name?: string;
  subject?: string;
  time?: string;
  isPaid?: boolean;
  topic?: string;
  isOnline?: boolean;
  onMarkComplete?: () => void;
  onPress?: () => void;
}

export function StudentCard({
  name = "Maya Lin",
  subject = "AP Calculus BC",
  time = "03:30 - 04:30 PM",
  isPaid = true,
  topic = "Derivatives Review",
  isOnline = true,
  onMarkComplete,
  onPress,
}: StudentCardProps) {
  const initials = name
    ? name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "ST";

  return (
    <Pressable
      onPress={onPress}
      className={`rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm ${
        onPress ? "active:opacity-75" : ""
      }`}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1 flex-row items-center gap-3 pr-2">
          <View className="relative">
            <View className="h-12 w-12 items-center justify-center rounded-full bg-primary-100">
              <Text className="text-base font-bold text-primary-700">
                {initials}
              </Text>
            </View>
            {isOnline && (
              <View className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            )}
          </View>

          <View className="flex-1">
            <Text
              className="text-lg font-bold text-neutral-950"
              numberOfLines={1}
            >
              {name}
            </Text>
            <View className="mt-1 self-start rounded-md bg-primary-100 px-2.5 py-0.5">
              <Text className="text-xs font-semibold text-primary-700">
                {subject}
              </Text>
            </View>
          </View>
        </View>

        <View className="items-end gap-1.5">
          <View className="flex-row items-center gap-1.5">
            <SymbolView
              name={{
                ios: "clock",
                android: "schedule",
                web: "schedule",
              }}
              size={15}
              tintColor="#38485D"
            />
            <Text className="text-sm font-bold text-neutral-900">{time}</Text>
          </View>

          {isPaid && (
            <View className="flex-row items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5">
              <SymbolView
                name={{
                  ios: "checkmark.circle.fill",
                  android: "check_circle",
                  web: "check_circle",
                }}
                size={13}
                tintColor="#10B981"
              />
              <Text className="text-xs font-semibold text-emerald-600">
                Paid
              </Text>
            </View>
          )}
        </View>
      </View>

      <View className="mt-4 flex-row items-center justify-between rounded-2xl bg-neutral-100/70 p-2 pl-3.5">
        <View className="flex-1 flex-row items-center gap-2 pr-2">
          <SymbolView
            name={{
              ios: "checkmark.circle",
              android: "check_circle_outline",
              web: "check_circle_outline",
            }}
            size={18}
            tintColor="#68788F"
          />
          <Text
            className="text-sm font-medium text-neutral-600"
            numberOfLines={1}
          >
            {topic}
          </Text>
        </View>

        <Pressable
          onPress={onMarkComplete}
          className="flex-row items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2.5 active:opacity-80"
        >
          <SymbolView
            name={{
              ios: "checkmark",
              android: "check",
              web: "check",
            }}
            size={14}
            tintColor="#FFFFFF"
          />
          <Text className="text-sm font-semibold text-white">
            Mark Complete
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

