import { FieldError } from "@/components/shared/FieldError";
import { useFieldContext } from "@/lib/form/context";
import { getFieldError } from "@/lib/form/getFieldError";
import { SymbolView } from "expo-symbols";
import { ReactNode } from "react";
import { Pressable, View } from "react-native";

export function CheckboxField({ label }: { label: ReactNode }) {
  const field = useFieldContext<boolean>();
  const checked = field.state.value;
  const error = getFieldError(field.state.meta);

  return (
    <View className="gap-1.5">
      <Pressable
        onPress={() => field.handleChange(!checked)}
        hitSlop={6}
        className="flex-row items-center gap-3"
      >
        <View
          className={`h-6 w-6 items-center justify-center rounded-md border-2 ${checked ? "border-primary-700 bg-primary-700" : error ? "border-rose-400 bg-white" : "border-neutral-300 bg-white"}`}
        >
          {checked && (
            <SymbolView
              name={{ ios: "checkmark", android: "check", web: "check" }}
              size={14}
              tintColor="#FFFFFF"
            />
          )}
        </View>
        <View className="flex-1">{label}</View>
      </Pressable>

      <FieldError message={error} className="ml-9" />
    </View>
  );
}
