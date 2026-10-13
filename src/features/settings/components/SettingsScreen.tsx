import { useState } from "react";
import { ScrollView } from "react-native";
import {
  APP_VERSION,
  PRACTICE_PREFERENCES,
  PRO_FEATURES,
  TUTOR_PROFILE,
} from "../data/settings";
import { ProfileCard } from "./ProfileCard";
import { ProUpgradeCard } from "./ProUpgradeCard";
import { SettingsHeader } from "./SettingsHeader";
import { SettingsRow } from "./SettingsRow";
import { SettingsSection } from "./SettingsSection";

export function SettingsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [parentRemindersEnabled, setParentRemindersEnabled] = useState(true);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      contentContainerClassName="gap-6 px-4 pb-10 pt-4"
    >
      <SettingsHeader
        subtitle="Manage your practice tier and personal preferences"
        planName="Starter Plan"
      />

      <ProUpgradeCard
        price="$14.99/mo"
        yearlyDiscount="Save 20% yearly"
        features={PRO_FEATURES}
        onUpgrade={() => alert("Coming soon...")}
      />

      <ProfileCard
        name={TUTOR_PROFILE.name}
        headline={TUTOR_PROFILE.headline}
        activeStudents={TUTOR_PROFILE.activeStudents}
        avatarUrl={TUTOR_PROFILE.avatarUrl}
        onEdit={() => alert("Edit profile")}
      />

      <SettingsSection title="Practice Preferences">
        {PRACTICE_PREFERENCES.map((preference) => (
          <SettingsRow
            key={preference.id}
            icon={preference.icon}
            title={preference.title}
            subtitle={preference.subtitle}
            accessory={{ type: "chevron", value: preference.value }}
            onPress={() => alert(`Edit ${preference.title}`)}
          />
        ))}
      </SettingsSection>

      <SettingsSection title="Notifications & Alerts">
        <SettingsRow
          icon={{ ios: "bell.badge", android: "notifications_active", web: "notifications_active" }}
          title="Push Notifications"
          subtitle="Session alerts & payment receipts"
          accessory={{ type: "switch", value: pushEnabled, onValueChange: setPushEnabled }}
        />
        <SettingsRow
          icon={{ ios: "message", android: "sms", web: "sms" }}
          title="Auto-Reminders to Parents"
          subtitle="Sends SMS 24 hours prior to session"
          accessory={{
            type: "switch",
            value: parentRemindersEnabled,
            onValueChange: setParentRemindersEnabled,
          }}
        />
      </SettingsSection>

      <SettingsSection title="Data & Integrations">
        <SettingsRow
          icon={{ ios: "square.and.arrow.down", android: "download", web: "download" }}
          title="Export All Data (CSV/Excel)"
          subtitle="Students roster, balance ledgers, tax log"
          onPress={() => alert("Exporting data...")}
        />
        <SettingsRow
          icon={{ ios: "arrow.triangle.2.circlepath", android: "sync", web: "sync" }}
          title="Google Calendar Sync"
          subtitle="Two-way live timetable synchronization"
          accessory={{ type: "status", label: "Active" }}
          onPress={() => alert("Calendar sync settings")}
        />
      </SettingsSection>

      <SettingsSection title="Support & Account">
        <SettingsRow
          icon={{ ios: "questionmark.square", android: "help", web: "help" }}
          title="Help Center & Guides"
          accessory={{ type: "external" }}
          onPress={() => alert("Opening help center...")}
        />
        <SettingsRow
          icon={{ ios: "shield", android: "shield", web: "shield" }}
          title="Privacy Policy & Terms"
          onPress={() => alert("Privacy policy")}
        />
        <SettingsRow
          icon={{ ios: "rectangle.portrait.and.arrow.right", android: "logout", web: "logout" }}
          title="Log Out"
          destructive
          accessory={{ type: "text", value: APP_VERSION }}
          onPress={() => alert("Logging out...")}
        />
      </SettingsSection>
    </ScrollView>
  );
}
