import { SessionItem } from "../types/home";

export const TODAY_SESSIONS: SessionItem[] = [
  {
    id: "1",
    name: "Maya Lin",
    subject: "AP Calculus BC",
    time: "03:30 - 04:30 PM",
    isPaid: true,
    topic: "Derivatives Review",
    isOnline: true,
  },
  {
    id: "2",
    name: "Alex Johnson",
    subject: "Linear Algebra",
    time: "05:00 - 06:00 PM",
    isPaid: true,
    topic: "Eigenvalues & Vectors",
    isOnline: false,
  },
  {
    id: "3",
    name: "Sophia Martinez",
    subject: "SAT Math Prep",
    time: "06:30 - 07:30 PM",
    isPaid: false,
    topic: "Geometry & Trigonometry",
    isOnline: true,
  },
  {
    id: "4",
    name: "Lucas Chen",
    subject: "Physics AP",
    time: "08:00 - 09:00 PM",
    isPaid: true,
    topic: "Rotational Dynamics",
    isOnline: false,
  },
];
