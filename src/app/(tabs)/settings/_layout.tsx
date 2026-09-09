import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Settings',
        headerLargeTitleEnabled: true
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}