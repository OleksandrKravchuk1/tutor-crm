import { Children, Fragment } from "react";
import { Text, View } from "react-native";
import { SettingsSectionProps } from "../types/settings";

export function SettingsSection({ title, children }: SettingsSectionProps) {
  const rows = Children.toArray(children);

  return (
    <View>
      <Text className="mb-2.5 text-xl font-bold text-neutral-950">{title}</Text>
      {/* Shadow lives on the outer view: overflow-hidden would clip it on iOS */}
      <View className="rounded-3xl bg-white ios:shadow-soft android:shadow-md">
        <View className="overflow-hidden rounded-3xl border border-neutral-100">
          {rows.map((row, index) => (
            <Fragment key={index}>
              {index > 0 && <View className="ml-[70px] h-px bg-neutral-100" />}
              {row}
            </Fragment>
          ))}
        </View>
      </View>
    </View>
  );
}
