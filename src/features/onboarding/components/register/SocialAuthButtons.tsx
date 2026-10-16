import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

export function SocialAuthButtons({
  onGoogle,
  onApple,
}: {
  onGoogle?: () => void;
  onApple?: () => void;
}) {
  return (
    <View className="gap-3">
      <Pressable
        onPress={onGoogle}
        className="flex-row items-center justify-center gap-2.5 rounded-2xl border border-neutral-100 bg-white py-3.5 ios:shadow-soft android:shadow-md active:opacity-80"
      >
        <Text className="text-lg font-extrabold text-[#4285F4]">G</Text>
        <Text className="text-base font-semibold text-neutral-900">Continue with Google</Text>
      </Pressable>

      <Pressable
        onPress={onApple}
        className="flex-row items-center justify-center gap-2.5 rounded-2xl bg-neutral-900 py-3.5 active:opacity-80"
      >
        <SymbolView
          name={{ ios: "apple.logo", android: "phone_iphone", web: "phone_iphone" }}
          size={18}
          tintColor="#FFFFFF"
        />
        <Text className="text-base font-semibold text-white">Continue with Apple</Text>
      </Pressable>

      <View className="flex-row items-center gap-3 py-2">
        <View className="h-px flex-1 bg-neutral-200" />
        <Text className="text-xs font-semibold tracking-wider text-neutral-500">
          OR REGISTER WITH EMAIL
        </Text>
        <View className="h-px flex-1 bg-neutral-200" />
      </View>
    </View>
  );
}
