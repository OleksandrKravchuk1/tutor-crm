import { Stack } from "expo-router";

export default function StudentsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Students',
        headerLargeTitleEnabled: true
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}