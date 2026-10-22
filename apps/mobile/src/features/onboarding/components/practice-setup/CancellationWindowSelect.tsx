import { palette } from "@/constants/palette";
import { CANCELLATION_WINDOWS } from "@/features/practice";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { CancellationWindowSelectProps } from "../../types/onboarding";
import { SetupCard } from "./SetupCard";

const formatWindow = (hours: number) => `${hours} hours notice required`;

export function CancellationWindowSelect({ selected, onSelect }: CancellationWindowSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SetupCard
      icon={{ ios: "calendar.badge.exclamationmark", android: "event_busy", web: "event_busy" }}
      title="Cancellation Window"
      subtitle="Late cancellations can forfeit session fee"
    >
      <View className="overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
        <Pressable
          onPress={() => setIsOpen((open) => !open)}
          className="flex-row items-center justify-between px-3.5 py-3 active:opacity-80"
        >
          <Text className="text-sm font-semibold text-neutral-900">{formatWindow(selected)}</Text>
          <SymbolView
            name={
              isOpen
                ? { ios: "chevron.up", android: "expand_less", web: "expand_less" }
                : { ios: "chevron.down", android: "expand_more", web: "expand_more" }
            }
            size={14}
            tintColor={palette.neutral[600]}
          />
        </Pressable>

        {isOpen &&
          CANCELLATION_WINDOWS.map((hours) => {
            const isSelected = hours === selected;
            return (
              <Pressable
                key={hours}
                onPress={() => {
                  onSelect(hours);
                  setIsOpen(false);
                }}
                className="flex-row items-center justify-between border-t border-neutral-100 bg-white px-3.5 py-3 active:bg-neutral-100/50"
              >
                <Text
                  className={`text-sm ${isSelected ? "font-bold text-primary-700" : "text-neutral-800"}`}
                >
                  {formatWindow(hours)}
                </Text>
                {isSelected && (
                  <SymbolView
                    name={{ ios: "checkmark", android: "check", web: "check" }}
                    size={14}
                    tintColor={palette.primary[700]}
                  />
                )}
              </Pressable>
            );
          })}
      </View>
    </SetupCard>
  );
}
