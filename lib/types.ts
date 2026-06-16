import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  display?: string;
}

export interface Course {
  id: string;
  title: string;
  level: string;
  standards: string;
  overview: string;
  subjects: string[];
  benefits: string[];
  outcomes: string[];
  color: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: keyof typeof import("lucide-react");
}

export interface Topper {
  id: string;
  name: string;
  standard: string;
  percentage: string;
  achievement: string;
  image: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  experience: string;
  bio: string;
  image: string;
}

export interface Facility {
  title: string;
  description: string;
  icon: keyof typeof import("lucide-react");
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  type: "parent" | "student";
  quote: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  span: "tall" | "wide" | "normal";
}

export interface Faq {
  question: string;
  answer: string;
}
