import { AppSwitch } from "@/components/shared/AppSwitch";
import { StatusPill } from "@/components/shared/StatusPill";
import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { SettingsRowAccessory, SettingsRowProps } from "../types/settings";

const DESTRUCTIVE_COLOR = "#E11D48";

function RowAccessory({ accessory }: { accessory: SettingsRowAccessory }) {
  switch (accessory.type) {
    case "switch":
      return (
        <AppSwitch value={accessory.value} onValueChange={accessory.onValueChange} />
      );
    case "status":
      return (
        <View className="flex-row items-center gap-1.5">
          <StatusPill label={accessory.label} />
          <Chevron />
        </View>
      );
    case "external":
      return (
        <SymbolView
          name={{ ios: "arrow.up.right.square", android: "open_in_new", web: "open_in_new" }}
          size={18}
          tintColor={palette.neutral[500]}
        />
      );
    case "text":
      return <Text className="text-sm text-neutral-500">{accessory.value}</Text>;
    case "chevron":
    default:
      return (
        <View className="flex-row items-center gap-1.5">
          {!!accessory.value && (
            <Text className="text-md font-bold text-neutral-900">{accessory.value}</Text>
          )}
          <Chevron />
        </View>
      );
  }
}

function Chevron() {
  return (
    <SymbolView
      name={{ ios: "chevron.right", android: "chevron_right", web: "chevron_right" }}
      size={16}
      tintColor={palette.neutral[400]}
    />
  );
}

export function SettingsRow({
  icon,
  title,
  subtitle,
  accessory = { type: "chevron" },
  destructive = false,
  onPress,
}: SettingsRowProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      className="flex-row items-center gap-3.5 px-4 py-3.5 active:bg-neutral-100/50"
    >
      <View
        className={`h-10 w-10 items-center justify-center rounded-full ${destructive ? "bg-rose-50" : "bg-primary-100"}`}
      >
        <SymbolView
          name={icon}
          size={20}
          tintColor={destructive ? DESTRUCTIVE_COLOR : palette.primary[700]}
        />
      </View>

      <View className="flex-1">
        <Text
          className={`text-md font-semibold ${destructive ? "text-rose-600" : "text-neutral-900"}`}
          numberOfLines={1}
        >
          {title}
        </Text>
        {!!subtitle && (
          <Text className="mt-0.5 text-sm text-neutral-500" numberOfLines={2}>
            {subtitle}
          </Text>
        )}
      </View>

      <RowAccessory accessory={accessory} />
    </Pressable>
  );
}
