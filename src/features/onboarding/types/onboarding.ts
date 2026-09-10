import { SymbolViewProps } from "expo-symbols";
import { ReactNode } from "react";

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