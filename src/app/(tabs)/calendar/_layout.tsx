import { Stack } from "expo-router";

export default function CalendarLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Calendar',
        headerLargeTitleEnabled: true
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}