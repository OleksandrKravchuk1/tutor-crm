import { FilterOption, StudentItem } from "../types/students";

export const FILTERS: FilterOption[] = [
  { id: "all", label: "All", count: 18 },
  { 
    id: "active", 
    label: "Active", 
    count: 14, 
    badgeBg: "bg-blue-100", 
    badgeTextColor: "text-blue-700" 
  },
  { 
    id: "owing", 
    label: "Owing", 
    count: 3, 
    badgeBg: "bg-amber-100", 
    badgeTextColor: "text-amber-700" 
  },
  { 
    id: "inactive", 
    label: "Inactive", 
    count: 1, 
    badgeBg: "bg-neutral-100", 
    badgeTextColor: "text-neutral-600" 
  },
];

export const STUDENTS_DATA: StudentItem[] = [
  {
    id: "1",
    name: "Maya Lin",
    subject: "AP Calculus BC",
    grade: "G12",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    isActive: true,
    lastLesson: "Yesterday",
    balanceText: "+4 Lessons Prepaid",
    balanceType: "prepaid",
  },
  {
    id: "2",
    name: "Alex Chen",
    subject: "Physics Honors",
    grade: "G11",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    isActive: true,
    lastLesson: "2 days ago",
    balanceText: "-$60 Overdue",
    balanceType: "owing",
  },
  {
    id: "3",
    name: "Sofia Rodriguez",
    subject: "Spanish Literature",
    grade: "G10",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    isActive: true,
    lastLesson: "3 days ago",
    balanceText: "+1 Lesson Prepaid",
    balanceType: "prepaid",
  },
  {
    id: "4",
    name: "Liam Johnson",
    subject: "Chemistry AP",
    grade: "G12",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    isActive: false,
    lastLesson: "1 week ago",
    balanceText: "-$120 Overdue",
    balanceType: "owing",
  },
  {
    id: "5",
    name: "Emma Watson",
    subject: "English Literature",
    grade: "G9",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    isActive: false,
    lastLesson: "2 weeks ago",
    balanceText: "0 Lessons Left",
    balanceType: "neutral",
  },
];