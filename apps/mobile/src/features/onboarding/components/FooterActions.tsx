import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { Pressable, Text, View } from "react-native";
import { FooterActionsProps } from "../types/onboarding";

export function FooterActions({
  onGetStarted,
  onLogin,
  buttonText = "Get Started Free",
  disclaimerText = "By continuing, you agree to our Terms of Service and Privacy Policy. No credit card required.",
}: FooterActionsProps) {
  return (
    <View className="gap-3.5 pt-2">
      <PrimaryButton label={buttonText} onPress={onGetStarted} />

      {/* Login link */}
      <View className="flex-row items-center justify-center">
        <Text className="text-lg text-neutral-600">
          Already have an account?{" "}
        </Text>
        <Pressable onPress={onLogin} hitSlop={8}>
          <Text className="text-lg font-bold text-primary-700">Log in</Text>
        </Pressable>
      </View>

      {/* Legal disclaimer */}
      <Text className="text-center text-sm leading-relaxed text-neutral-400 px-4">
        {disclaimerText}
      </Text>
    </View>
  );
}
