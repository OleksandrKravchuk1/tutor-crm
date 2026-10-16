import { FieldError } from "@/components/shared/FieldError";
import { palette } from "@/constants/palette";
import { useFieldContext } from "@/lib/form/context";
import { getFieldError } from "@/lib/form/getFieldError";
import { SymbolView, SymbolViewProps } from "expo-symbols";
import { useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";

type TextFieldProps = {
  label: string;
  hint?: string;
  icon: SymbolViewProps["name"];
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  autoComplete?: TextInputProps["autoComplete"];
};

export function TextField({
  label,
  hint,
  icon,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  autoComplete,
}: TextFieldProps) {
  const field = useFieldContext<string>();
  const error = getFieldError(field.state.meta);
  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-bold text-neutral-950">{label}</Text>
        {!!hint && <Text className="text-xs text-neutral-500">{hint}</Text>}
      </View>

      <View
        className={`h-12 flex-row items-center rounded-2xl border bg-white px-3.5 ${error ? "border-rose-400" : isFocused ? "border-primary-600" : "border-neutral-100"}`}
      >
        <SymbolView name={icon} size={18} tintColor={palette.neutral[500]} />
        <TextInput
          value={field.state.value}
          onChangeText={field.handleChange}
          placeholder={placeholder}
          placeholderTextColor={palette.neutral[400]}
          secureTextEntry={isHidden}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            field.handleBlur();
          }}
          className="ml-2.5 flex-1 text-base text-neutral-900"
        />

        {secureTextEntry && (
          <Pressable onPress={() => setIsHidden((hidden) => !hidden)} hitSlop={8}>
            <SymbolView
              name={
                isHidden
                  ? { ios: "eye", android: "visibility", web: "visibility" }
                  : { ios: "eye.slash", android: "visibility_off", web: "visibility_off" }
              }
              size={18}
              tintColor={palette.neutral[500]}
            />
          </Pressable>
        )}
      </View>

      <FieldError message={error} />
    </View>
  );
}
