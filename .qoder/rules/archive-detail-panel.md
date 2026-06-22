# Project Archive — Detail Panel

## When to apply
Use this rule when building the ArchiveDetail component and its child section components.

## Detail Panel Layout
The detail panel occupies `flex: 1` of the split layout. It displays all information about the currently selected project in a scrollable column of section cards.

## Sections (in order)

### 1. Project Header (`ArchiveProjectHeader`)
- **Project name** — large title using `--font-size-title-sm` (28px)
- **Project type** — subtitle, e.g. "Construction Management Platform"
- **Status badge** — colored pill badge. Possible values:
  - `Production` — green
  - `Active Development` — blue
  - `Maintenance` — yellow/orange
  - `Completed` — gray
  - `Archived` — muted

### 2. Project Information (`ArchiveProjectInfo`)
Display as a grid of info cards (2 cols on mobile, 3–5 cols on desktop):
- **Role** — e.g. "Project Manager"
- **Industry** — e.g. "Construction"
- **Duration** — e.g. "2023 - Present"
- **Team Size** — e.g. "12 Members"
- **Platform** — e.g. "Web Application"

Each card: icon + label + value, using `CaseStudyCard` visual style.

### 3. Project Summary (`ArchiveProjectSummary`)
Rich text block describing:
- Business problem
- Project objective
- Solution delivered
- Business value

### 4. Responsibilities (`ArchiveResponsibilities`)
Checklist with checkmark icons (✓):
- Requirement Analysis, Product Discovery, Sprint Planning, Stakeholder Management, etc.
- Use `List.vue` component pattern from `src/features/projects/components/`

### 5. Technology Stack (`ArchiveTechStack`)
- **Must use `cs-tech-tile` card style** (rounded card, icon + name, consistent grid)
- Reuse `TechLogo.vue` from `src/features/projects/components/casestudy/`
- Grid: 2 cols mobile → 4 cols desktop
- No pills, capsules, or badges — only rounded cards

### 6. Challenges & Solutions (`ArchiveChallenges`)
- Accordion component
- Each item: Challenge title → expand to show Solution description
- Smooth open/close animation

### 7. Key Achievements (`ArchiveAchievements`)
- Metric cards displayed in a grid (2 cols mobile → 4 cols desktop)
- Each card: large number + label, e.g. `95% On-Time Delivery`
- Use `CaseStudyCard` visual style

### 8. Screenshots Gallery (`ArchiveGallery`)
- **Carousel** with Previous/Next buttons, swipe, and keyboard navigation
- **Lightbox** on click: fullscreen preview, zoom, close button
- Lazy-load images

### 9. Timeline (`ArchiveTimeline`)
- Vertical timeline (mobile) → Horizontal (desktop)
- Steps: Research → Discovery → Planning → Development → Testing → Launch
- Each step: dot node + label
- Reuse the visual pattern from `cs-timeline` in `ProjectCaseStudy.vue`

## Empty State
When no project is selected, display:
- Centered icon + message: "Select a project to view details"
- Muted text color `var(--color-text-300)`

## Transitions
- When switching projects, fade out old content → fade in new content (200ms)
- Use GSAP for smooth transitions if needed

## Container Styling
- `border-radius: var(--radius-xl)` (24px) for the overall detail container
- Inner sections use `CaseStudyCard` for consistent card styling
- Scrollable: `overflow-y: auto` with max-height on desktop split layout
