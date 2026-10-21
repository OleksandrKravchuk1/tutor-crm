import type { PracticeSettings } from "@/features/practice";
import { SymbolViewProps } from "expo-symbols";
import { ReactNode } from "react";

export type SettingsIcon = SymbolViewProps["name"];

export type SettingsRowAccessory =
  | { type: "chevron"; value?: string }
  | { type: "switch"; value: boolean; onValueChange: (value: boolean) => void }
  | { type: "status"; label: string }
  | { type: "external" }
  | { type: "text"; value: string };

export type SettingsRowProps = {
  icon: SettingsIcon;
  title: string;
  subtitle?: string;
  accessory?: SettingsRowAccessory;
  destructive?: boolean;
  onPress?: () => void;
};

export type SettingsSectionProps = {
  title: string;
  children: ReactNode;
};

export type SettingsHeaderProps = {
  subtitle: string;
  planName: string;
};

export type ProUpgradeCardProps = {
  price: string;
  yearlyDiscount: string;
  features: string[];
  onUpgrade?: () => void;
};

export type ProfileCardProps = {
  name: string;
  headline: string;
  activeStudents: number;
  avatarUrl?: string;
  isOnline?: boolean;
  onEdit?: () => void;
};

export type PracticePreference = {
  id: string;
  icon: SettingsIcon;
  title: string;
  subtitle: string;
  getValue: (settings: PracticeSettings) => string;
};
