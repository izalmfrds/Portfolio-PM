# Project Archive — Content Model & Data

## When to apply
Use this rule when defining TypeScript types, data files, or i18n keys for the Project Archive.

## Archive Project Type

Extend the existing content types in `src/content/types.ts` or create archive-specific types in `src/features/archive/types.ts`:

```typescript
export type ArchiveProjectStatus =
  | "production"
  | "active-development"
  | "maintenance"
  | "completed"
  | "archived";

export type ArchiveCategory =
  | "enterprise-systems"
  | "education"
  | "internal-products"
  | "experiments";

export interface ArchiveAchievement {
  value: string;       // e.g. "95%", "500+", "4"
  label: string;       // e.g. "On-Time Delivery", "Users"
}

export interface ArchiveChallenge {
  challenge: string;
  solution: string;
}

export interface ArchiveTimelineStep {
  label: string;       // e.g. "Research", "Discovery", "Planning"
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
  id: string;                              // unique slug
  name: string;                            // display name
  type: string;                            // e.g. "Construction Management Platform"
  status: ArchiveProjectStatus;
  category: ArchiveCategory;
  info: ArchiveProjectInfo;
  summary: string;                         // rich description
  responsibilities: string[];
  tech: CaseStudyTech[];                   // reuse existing type
  challenges: ArchiveChallenge[];
  achievements: ArchiveAchievement[];
  gallery: ArchiveScreenshot[];
  timeline: ArchiveTimelineStep[];
}
```

## Data File Structure
Place archive project data in `src/features/archive/data.ts`:
```typescript
import type { ArchiveProject } from "./types";

export const archiveProjects: ArchiveProject[] = [
  {
    id: "adenco",
    name: "Adenco Enterprise System",
    type: "Construction Management Platform",
    status: "production",
    category: "enterprise-systems",
    // ...
  },
  // ... more projects
];

export const archiveCategories: ArchiveCategory[] = [
  "enterprise-systems",
  "education",
  "internal-products",
  "experiments",
];
```

## i18n Keys
Add translations to `src/i18n/messages/namespaces/common/`:
```json
{
  "project-archive": "Project Archive",
  "archive-description": "Explore all projects, case studies, products, and experiments.",
  "search-projects": "Search projects...",
  "no-results": "No results found",
  "select-project": "Select a project to view details",
  "status-production": "Production",
  "status-active-development": "Active Development",
  "status-maintenance": "Maintenance",
  "status-completed": "Completed",
  "status-archived": "Archived",
  "category-enterprise-systems": "Enterprise Systems",
  "category-education": "Education",
  "category-internal-products": "Internal Products",
  "category-experiments": "Experiments",
  "challenges-solutions": "Challenges & Solutions",
  "key-achievements": "Key Achievements",
  "screenshots": "Screenshots",
  "timeline": "Timeline"
}
```

Both `en.json` and `de.json` must be updated (German translations in `de/`).

## Statistics (Archive Header)
Compute dynamically from `archiveProjects`:
- Total projects count
- Category count
- Years of experience (derived from earliest project year to current year)

## Integration with Existing Content
- Archive projects may reference existing `ProjectId` entries from `src/content/projects/` for projects that already have case studies
- For new archive-only projects (Experiments, Internal Products), define data directly in the archive data file
- Reuse `CaseStudyTechIcon` type for tech stack icons — extend it if new technologies are needed
