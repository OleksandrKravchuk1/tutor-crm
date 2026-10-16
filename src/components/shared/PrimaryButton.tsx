import { SymbolView } from "expo-symbols";
import { ActivityIndicator, Pressable, Text } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  showArrow?: boolean;
  className?: string;
};

export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  loading = false,
  loadingLabel,
  showArrow = true,
  className = "",
}: PrimaryButtonProps) {
  const isInactive = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isInactive}
      className={`flex-row items-center justify-center gap-2 rounded-3xl py-4 shadow-md active:opacity-90 ${disabled ? "bg-primary-300" : "bg-primary-700"} ${className}`}
    >
      <Text className="text-lg font-bold text-white">
        {loading && loadingLabel ? loadingLabel : label}
      </Text>
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        showArrow && (
          <SymbolView
            name={{ ios: "arrow.right", android: "arrow_forward", web: "arrow_forward" }}
            size={16}
            tintColor="#FFFFFF"
          />
        )
      )}
    </Pressable>
  );
}
