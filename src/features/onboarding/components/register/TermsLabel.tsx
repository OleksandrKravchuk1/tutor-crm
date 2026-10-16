import { Text } from "react-native";

export function TermsLabel() {
  return (
    <Text className="text-sm text-neutral-700">
      I agree to the <Text className="font-semibold text-primary-700">Terms of Service</Text> and{" "}
      <Text className="font-semibold text-primary-700">Privacy Policy</Text>.
    </Text>
  );
}
