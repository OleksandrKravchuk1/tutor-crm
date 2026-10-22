import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Settings',
        headerLargeTitleEnabled: true,
        headerStyle: { backgroundColor: 'white' },
        headerLargeStyle: { backgroundColor: 'white' },
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}