# Project Archive — Explorer Panel

## When to apply
Use this rule when building the ArchiveExplorer, ArchiveFolder, ArchiveProjectItem, or ArchiveSearch components.

## Explorer Panel Structure
```
┌─────────────────────┐
│ 🔍 Search projects... │
├─────────────────────┤
│ 📁 Enterprise Systems (3) │
│   ├── Adenco Enterprise System │
│   ├── WCC Workforce Platform   │
│   └── AIMOS                    │
│ 📁 Education (3)               │
│   ├── DIGITS                   │
│   ├── Baitul Adab Schools      │
│   └── Empatrima Quiz           │
│ 📁 Internal Products (2)       │
│   ├── Papanclip                │
│   └── PM Dashboard             │
│ 📁 Experiments (2)             │
│   ├── AI Sprint Intelligence   │
│   └── AI Delivery Insights     │
└─────────────────────┘
```

## Width
- Desktop: `320px` fixed
- Tablet/Mobile: full width

## Search Component
- Placeholder text: `"Search projects..."` (i18n key)
- Filters by: project name, category name, technology names
- Debounce input by 200ms
- Clear button (×) when input has value
- Show "No results found" empty state

## Folder Component
Each category is a collapsible folder:
- Display folder icon + category name + count `(n)`
- Smooth expand/collapse animation using CSS `max-height` transition or GSAP
- Preserve opened/closed state during search (auto-expand when match found inside)
- Default state: all folders expanded on first load

## Project Item
Each project entry shows:
- Project name (single line, truncated with ellipsis if needed)
- Active state: highlighted background using `color-mix(in srgb, var(--color-text-400) 12%, transparent)`
- Hover state: slight background highlight using `color-mix(in srgb, var(--color-text-400) 6%, transparent)`

## State Management (useArchiveExplorer composable)
```typescript
interface ArchiveExplorerState {
  selectedProjectId: string | null;
  expandedFolders: Set<string>;
  searchQuery: string;
}
```
- `selectProject(id)` — sets active project, emits event to detail panel
- `toggleFolder(category)` — expands/collapses folder
- `search(query)` — filters visible projects, auto-expands matching folders

## Interactions
- Click project → highlight active + update detail panel (smooth transition)
- Keyboard support: Arrow up/down to navigate, Enter to select
- On mobile: tapping a project scrolls the detail panel into view

## Styling
- Use `border-radius: var(--radius-xl)` for the outer container (24px)
- Background: `var(--color-grayscale-400)` to match `CaseStudyCard`
- Border: `var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent)`
- Use `--space-*` tokens for all spacing
- Scrollable with custom scrollbar styling when project list overflows
