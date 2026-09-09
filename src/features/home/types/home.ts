import { StudentCardProps } from "@/features/students/components/StudentCard";
import { SymbolViewProps } from "expo-symbols";
import { ReactNode } from "react";

export type DailyWidgetProps = {
  sessionsCount?: number;
  description?: string;
  onTrackPercentage?: number;
  onPress?: () => void;
};

export type StatisticCardProps = {
  title: string;
  mainInfo: string;
  subinfo: ReactNode;
  icon: SymbolViewProps["name"];
  iconColor?: string;
  iconBgColor?: string;
};

export interface SessionItem extends StudentCardProps {
  id: string;
}