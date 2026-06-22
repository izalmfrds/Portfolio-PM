import type { CaseStudyTech } from "../../content/types";

export type ArchiveProjectStatus = "production" | "active-development" | "maintenance" | "completed" | "archived";

export type ArchiveCategory = "enterprise-systems" | "education" | "internal-products" | "experiments";

export interface ArchiveAchievement {
  value: string;
  label: string;
}

export interface ArchiveChallenge {
  challenge: string;
  solution: string;
}

export interface ArchiveTimelineStep {
  label: string;
  description?: string;
}

export interface ArchiveScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArchiveProjectInfo {
  role?: string;
  industry?: string;
  duration?: string;
  teamSize?: string;
  platform?: string;
}

export interface ArchiveProject {
  id: string;
  name: string;
  type: string;
  status: ArchiveProjectStatus;
  category: ArchiveCategory;
  info: ArchiveProjectInfo;
  summary: string;
  responsibilities: string[];
  tech: CaseStudyTech[];
  challenges: ArchiveChallenge[];
  achievements: ArchiveAchievement[];
  gallery: ArchiveScreenshot[];
  timeline: ArchiveTimelineStep[];
}
