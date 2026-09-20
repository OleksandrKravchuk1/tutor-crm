import { palette } from "@/constants/palette";
import { SymbolView } from "expo-symbols";
import { Pressable, TextInput, View } from "react-native";

export function SearchInput({
  value,
  onChangeText,
  placeholder = "Search student name, subject, or class...",
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) {
  return (
    <View className='
      h-12 flex-1 flex-row items-center rounded-2xl bg-white px-3.5
      ios:shadow-soft
      android:shadow-md
    '>
      <SymbolView
        name={{
          ios: "magnifyingglass",
          android: "search",
          web: "search",
        }}
        size={18}
        tintColor={palette.neutral[500]}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={palette.neutral[500]}
        className="ml-2.5 flex-1 text-lg text-neutral-900"
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />

      {value.length > 0 && (
        <Pressable onPress={() => onChangeText("")} hitSlop={8}>
          <SymbolView
            name={{
              ios: "xmark.circle.fill",
              android: "cancel",
              web: "cancel",
            }}
            size={16}
            tintColor={palette.neutral[400]}
          />
        </Pressable>
      )}
    </View>
  )
}