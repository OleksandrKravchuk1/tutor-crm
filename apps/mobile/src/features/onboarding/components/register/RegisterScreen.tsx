import { FieldError } from "@/components/shared/FieldError";
import { useAppForm } from "@/lib/form";
import { MIN_PASSWORD_LENGTH, registerSchema } from "@tutor-crm/shared";
import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRegisterTutor } from "../../hooks/useRegisterTutor";
import { RegisterFormValues } from "../../types/onboarding";
import { OnboardingNavHeader } from "../OnboardingNavHeader";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { SubjectPicker } from "./SubjectPicker";
import { TermsLabel } from "./TermsLabel";
import { TestimonialCard } from "./TestimonialCard";
import { TrialBanner } from "./TrialBanner";

const defaultValues: RegisterFormValues = {
  fullName: "",
  email: "",
  password: "",
  subject: "stem",
  acceptedTerms: false,
};

export function RegisterScreen() {
  const registerTutor = useRegisterTutor();

  const form = useAppForm({
    defaultValues,
    validators: { onChange: registerSchema },
    onSubmit: async ({ value }) => {
      await registerTutor.mutateAsync(registerSchema.parse(value));
      router.push("/(onboarding)/practice-setup");
    },
  });

  return (
    <SafeAreaView className="flex-1 bg-neutral-50">
      <OnboardingNavHeader title="Create Account" />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerClassName="gap-5 px-5 pb-10 pt-3"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TrialBanner />

          <View>
            <Text className="text-[26px] font-extrabold tracking-tight text-neutral-950">
              Create your Tutor Account
            </Text>
            <Text className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">
              Join 4,200+ coaches organizing sessions, rosters & payments.
            </Text>
          </View>

          <SocialAuthButtons
            onGoogle={() => alert("Google sign-in coming soon")}
            onApple={() => alert("Apple sign-in coming soon")}
          />

          <form.AppField name="fullName">
            {(field) => (
              <field.TextField
                label="Full Name"
                hint="Required"
                icon={{ ios: "person.text.rectangle", android: "badge", web: "badge" }}
                placeholder="e.g. Sarah Jenkins, M.Ed."
                autoCapitalize="words"
                autoComplete="name"
              />
            )}
          </form.AppField>

          <form.AppField name="email">
            {(field) => (
              <field.TextField
                label="Email Address"
                hint="Work or personal"
                icon={{ ios: "envelope", android: "mail", web: "mail" }}
                placeholder="sarah@jenkinstutoring.com"
                keyboardType="email-address"
                autoComplete="email"
              />
            )}
          </form.AppField>

          <form.AppField name="password">
            {(field) => (
              <field.TextField
                label="Password"
                hint={`At least ${MIN_PASSWORD_LENGTH} characters`}
                icon={{ ios: "lock", android: "lock", web: "lock" }}
                placeholder="••••••••••••"
                secureTextEntry
                autoComplete="new-password"
              />
            )}
          </form.AppField>

          <form.AppField name="subject">
            {(field) => <SubjectPicker selected={field.state.value} onSelect={field.handleChange} />}
          </form.AppField>

          <form.AppField name="acceptedTerms">
            {(field) => <field.CheckboxField label={<TermsLabel />} />}
          </form.AppField>

          <View className="gap-3.5">
            <FieldError
              message={
                registerTutor.isError
                  ? registerTutor.error.message || "Something went wrong. Please try again."
                  : undefined
              }
              className="text-center text-sm"
            />

            <form.AppForm>
              <form.SubmitButton
                label="Create Account & Continue"
                loadingLabel="Creating Account…"
              />
            </form.AppForm>

            <View className="flex-row items-center justify-center">
              <Text className="text-base text-neutral-600">Already registered? </Text>
              <Pressable onPress={() => router.replace("/(tabs)/home")} hitSlop={8}>
                <Text className="text-base font-bold text-primary-700">Sign In</Text>
              </Pressable>
            </View>
          </View>

          <TestimonialCard />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
