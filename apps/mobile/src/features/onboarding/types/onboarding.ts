import type { PaymentPolicyId } from "@/features/practice";
import type { SubjectId } from "@tutor-crm/shared";
import { SymbolViewProps } from "expo-symbols";
import { ReactNode } from "react";

export type {
  RegisterFormValues,
  RegisterPayload,
  SubjectId,
  TutorAccount,
} from "@tutor-crm/shared";

export type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export type HeroSectionProps = {
  title?: string;
  description?: string;
};

export type FooterActionsProps = {
  onGetStarted: () => void;
  onLogin?: () => void;
  buttonText?: string;
  disclaimerText?: string;
};

export type FeatureItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: SymbolViewProps["name"];
  iconBgColor: string;
  badge: ReactNode;
};

export type OnboardingIcon = SymbolViewProps["name"];

export type OnboardingNavHeaderProps = {
  title: string;
  onBack?: () => void;
};

export type SubjectOption = {
  id: SubjectId;
  label: string;
  icon: OnboardingIcon;
  fullWidth?: boolean;
};

export type SubjectPickerProps = {
  selected: SubjectId;
  onSelect: (id: SubjectId) => void;
};

export type SetupCardProps = {
  icon: OnboardingIcon;
  title: string;
  subtitle: string;
  accessory?: ReactNode;
  children?: ReactNode;
};

export type HourlyRateCardProps = {
  rate: number;
  onChange: (rate: number) => void;
  currency: string;
  averageRange: string;
  error?: string;
};

export type LessonLengthPickerProps = {
  selected: number;
  onSelect: (minutes: number) => void;
};

export type PaymentPolicyPickerProps = {
  selected: PaymentPolicyId;
  onSelect: (id: PaymentPolicyId) => void;
};

export type CancellationWindowSelectProps = {
  selected: number;
  onSelect: (hours: number) => void;
};

export type ReminderToggleCardProps = {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
};

export type SetupProgressBarProps = {
  progress: number;
};
