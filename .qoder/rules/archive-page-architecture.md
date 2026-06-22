# Project Archive — Page Architecture

## When to apply
Use this rule when creating or modifying the Project Archive page, its routing, or its top-level layout.

## Overview
The Project Archive is a full-page section that displays **all** projects in a structured explorer + detail split layout, inspired by Obsidian Vault / VS Code Explorer / GitHub repository trees.

## File Structure
Place all archive-related files under:
```
src/features/archive/
├── components/
│   ├── ArchiveHeader.vue          — Section badge, description, statistics
│   ├── ArchiveExplorer.vue        — Left panel: search + folder tree
│   ├── ArchiveDetail.vue          — Right panel: full project info
│   ├── ArchiveFolder.vue          — Recursive folder component
│   ├── ArchiveProjectItem.vue     — Individual project entry in the tree
│   ├── ArchiveSearch.vue          — Search input component
│   ├── sections/
│   │   ├── ArchiveProjectHeader.vue     — Project name, type, status badge
│   │   ├── ArchiveProjectInfo.vue       — Role, industry, duration, team size, platform
│   │   ├── ArchiveProjectSummary.vue    — Business problem, objective, solution, value
│   │   ├── ArchiveResponsibilities.vue  — Checklist of responsibilities
│   │   ├── ArchiveTechStack.vue         — Tech stack badges (use cs-tech-tile style)
│   │   ├── ArchiveChallenges.vue        — Accordion of challenges & solutions
│   │   ├── ArchiveAchievements.vue      — Metric cards
│   │   ├── ArchiveGallery.vue           — Carousel + lightbox screenshots
│   │   └── ArchiveTimeline.vue          — Visual project timeline
│   └── ArchivePage.vue            — Root page component
├── composables/
│   ├── useArchiveSearch.ts        — Search/filter logic
│   └── useArchiveExplorer.ts      — Folder state, selection, expand/collapse
├── types.ts                       — Archive-specific TypeScript interfaces
└── data.ts                        — Archive project registry
```

## Layout
- **Desktop (≥1024px):** Split layout — Explorer (320px fixed) | Detail (flex: 1)
- **Tablet (≥840px, <1024px):** Stacked — Explorer on top, Detail below
- **Mobile (<840px):** Single column — Accordion folder list → Detail

## Routing
The archive lives as a section within the portfolio SPA. Use the existing `useRouter` composable (`src/composables/useRouter.ts`) for navigation. The archive route should be `/archive` or integrated as a scroll section, depending on overall navigation strategy.

## Page Sections Order
1. Archive Header (badge, title, description, stats)
2. Explorer + Detail split layout
3. Empty state when no project is selected

## Information Architecture — Project Categories
Projects are grouped into categories:
- **Enterprise Systems** — Adenco, WCC, AIMOS
- **Education** — DIGITS, Baitul Adab Schools, Empatrima Quiz
- **Internal Products** — Papanclip, PM Dashboard
- **Experiments** — AI Sprint Intelligence, AI Delivery Insights

## Key Principles
- Reuse existing design tokens from `src/assets/styles/variables.scss` and `colors.scss`
- Reuse existing components where possible (`CaseStudyCard`, `TechLogo`, etc.)
- Follow existing Vue 3 `<script setup lang="ts">` patterns with scoped SCSS
- All content must support i18n — add keys to `src/i18n/messages/namespaces/` for both `en` and `de`
- Use `@include mixins.mq()` for responsive breakpoints
