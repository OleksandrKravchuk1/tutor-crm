export type AddStudentButtonProps = {
  onPress?: () => void;
}

export type StudentFilter = 'all' | 'active' | 'inactive' | 'owing';

export type FilterOption = {
  id: StudentFilter;
  label: string;
  count: number;
  badgeBg?: string;
  badgeTextColor?: string;
}

export type FilterChipsProps = {
  selected: StudentFilter;
  onSelect: (filter: StudentFilter) => void;
}

export type StudentCardProps = {
  id?: string;
  name: string;
  subject: string;
  grade?: string;
  avatarUrl?: string;
  isActive?: boolean;
  lastLesson?: string;
  balanceText: string;
  balanceType?: "prepaid" | "owing" | "neutral";
  onPress?: () => void;
}

export type StudentItem = StudentCardProps & {
  id: string;
}