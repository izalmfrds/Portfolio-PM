import { projectIds } from "./projects/index";

import type { TagVariant } from "../components/tagVariants";
import type { ProjectComponent } from "../features/projects/types";

export type ProjectId = (typeof projectIds)[number];

export type CaseStudyStepIcon = "planning" | "design" | "development" | "testing" | "deployment";

export type CaseStudyTechIcon =
  | "next"
  | "node"
  | "postgresql"
  | "redis"
  | "typescript"
  | "tailwind"
  | "vercel";

export interface CaseStudyMeta {
  duration?: string;
  role?: string;
  teamSize?: string;
  year?: string;
}

export interface CaseStudyTech {
  name: string;
  icon: CaseStudyTechIcon;
  featured?: boolean;
}

export interface CaseStudyStep {
  icon: CaseStudyStepIcon;
  title: string;
  description: string;
}

export interface CaseStudy {
  category?: string;
  heroImage: string;
  pdf?: string;
  meta?: CaseStudyMeta;
  overview: string;
  contributions: string[];
  tech: CaseStudyTech[];
  execution: CaseStudyStep[];
  challenges: string;
  approach: string;
  outcomes: string[];
}

export interface ProjectContent {
  title: string;
  theme: "light" | "dark";
  tags: TagVariant[];
  description?: string;
  videoBorder?: boolean;
  live?: string;
  source?: string;
  components?: ProjectComponent[];
  caseStudy?: CaseStudy;
}

export interface SkillContent {
  name: string;
  bullets: string[];
}

export interface ProjectPreview {
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
}
