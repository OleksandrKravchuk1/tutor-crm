import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  FeaturePreviewCard,
  FooterActions,
  Header,
  HeroSection,
  ProofBadge,
} from "@/features/onboarding";

export default function OnboardingWelcomeScreen() {
  const handleGetStarted = () => {
    router.replace("/(tabs)/home");
  };

  const handleLogin = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-50">
      <ScrollView
        contentContainerClassName="px-5 py-3 justify-between flex-grow"
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* Header */}
          <Header />

          {/* Social Proof Badge */}
          <ProofBadge />

          {/* Feature Showcase Card */}
          <FeaturePreviewCard />

          {/* Value Proposition Copy */}
          <HeroSection />
        </View>

        {/* Footer Actions */}
        <FooterActions
          buttonText="Get Started Free"
          onGetStarted={handleGetStarted}
          onLogin={handleLogin}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
