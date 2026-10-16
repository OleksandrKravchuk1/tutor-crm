import { FieldError } from "@/components/shared/FieldError";
import {
  DEFAULT_PRACTICE_SETTINGS,
  practiceSettingsSchema,
  useSavePracticeSettings,
} from "@/features/practice";
import { getFieldError, useAppForm } from "@/lib/form";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingNavHeader } from "../OnboardingNavHeader";
import { CancellationWindowSelect } from "./CancellationWindowSelect";
import { HourlyRateCard } from "./HourlyRateCard";
import { LessonLengthPicker } from "./LessonLengthPicker";
import { PaymentPolicyPicker } from "./PaymentPolicyPicker";
import { ReminderToggleCard } from "./ReminderToggleCard";
import { SetupProgressBar } from "./SetupProgressBar";

export function PracticeSetupScreen() {
  const savePracticeSettings = useSavePracticeSettings();

  const form = useAppForm({
    defaultValues: DEFAULT_PRACTICE_SETTINGS,
    validators: { onChange: practiceSettingsSchema },
    onSubmit: async ({ value }) => {
      await savePracticeSettings.mutateAsync(value);
      router.replace("/(tabs)/home");
    },
  });

  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={["top", "bottom"]}>
      <OnboardingNavHeader title="Coaching Setup" />

      <ScrollView
        contentContainerClassName="gap-4 px-5 pb-6 pt-3"
        showsVerticalScrollIndicator={false}
      >
        <SetupProgressBar progress={0.66} />

        <View className="mt-1">
          <Text className="text-[26px] font-extrabold tracking-tight text-neutral-950">
            Set up your coaching rates
          </Text>
          <Text className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">
            Customize your default billing and lesson duration. You can adjust this anytime for
            specific students.
          </Text>
        </View>

        <form.AppField name="hourlyRate">
          {(field) => (
            <HourlyRateCard
              rate={field.state.value}
              onChange={field.handleChange}
              error={getFieldError(field.state.meta)}
              currency="USD ($)"
              averageRange="$65-$85/hr"
            />
          )}
        </form.AppField>

        <form.AppField name="lessonLength">
          {(field) => (
            <LessonLengthPicker selected={field.state.value} onSelect={field.handleChange} />
          )}
        </form.AppField>

        <form.AppField name="paymentPolicy">
          {(field) => (
            <PaymentPolicyPicker selected={field.state.value} onSelect={field.handleChange} />
          )}
        </form.AppField>

        <form.AppField name="cancellationHours">
          {(field) => (
            <CancellationWindowSelect selected={field.state.value} onSelect={field.handleChange} />
          )}
        </form.AppField>

        <form.AppField name="remindersEnabled">
          {(field) => (
            <ReminderToggleCard enabled={field.state.value} onChange={field.handleChange} />
          )}
        </form.AppField>

        <FieldError
          message={
            savePracticeSettings.isError
              ? savePracticeSettings.error.message ||
                "Couldn't save your settings. Please try again."
              : undefined
          }
          className="px-1"
        />
      </ScrollView>

      <View className="flex-row gap-3 border-t border-neutral-100 bg-white px-5 pb-2 pt-3">
        <Pressable
          onPress={() => router.back()}
          className="items-center justify-center rounded-3xl border border-neutral-200 bg-white px-6 py-4 active:opacity-80"
        >
          <Text className="text-base font-bold text-neutral-800">Back</Text>
        </Pressable>

        <form.AppForm>
          <form.SubmitButton label="Save & Continue" loadingLabel="Saving…" className="flex-1" />
        </form.AppForm>
      </View>
    </SafeAreaView>
  );
}
