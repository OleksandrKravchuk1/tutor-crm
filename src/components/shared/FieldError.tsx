import { Text } from "react-native";

export function FieldError({ message, className = "" }: { message?: string; className?: string }) {
  if (!message) return null;
  return <Text className={`text-xs font-medium text-rose-600 ${className}`}>{message}</Text>;
}
