import { SubjectOption } from "../types/onboarding";

export const SUBJECTS: SubjectOption[] = [
  {
    id: "stem",
    label: "STEM & Math",
    icon: { ios: "function", android: "calculate", web: "calculate" },
  },
  {
    id: "languages",
    label: "Languages",
    icon: { ios: "character.book.closed", android: "translate", web: "translate" },
  },
  {
    id: "test-prep",
    label: "Test Prep (SAT/ACT)",
    icon: { ios: "graduationcap", android: "school", web: "school" },
  },
  {
    id: "music-arts",
    label: "Music & Arts",
    icon: { ios: "paintpalette", android: "palette", web: "palette" },
  },
  {
    id: "other",
    label: "Other / Executive Coaching",
    icon: { ios: "ellipsis", android: "more_horiz", web: "more_horiz" },
    fullWidth: true,
  },
];
