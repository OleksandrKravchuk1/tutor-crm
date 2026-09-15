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

export interface ScheduleCardProps {
  name?: string;
  subject?: string;
  time?: string;
  isPaid?: boolean;
  topic?: string;
  isOnline?: boolean;
  onMarkComplete?: () => void;
  onPress?: () => void;
}

export interface SessionItem extends ScheduleCardProps {
  id: string;
}
