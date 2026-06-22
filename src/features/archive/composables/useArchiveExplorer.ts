import { ref, computed } from "vue";
import { archiveProjects, archiveCategories } from "../data";
import type { ArchiveProject } from "../types";

const selectedProjectId = ref<string | null>(null);
const expandedFolders = ref<Set<string>>(new Set(archiveCategories));
const searchQuery = ref("");

export function useArchiveExplorer() {
  const selectedProject = computed<ArchiveProject | null>(() => {
    if (!selectedProjectId.value) return null;
    return archiveProjects.find((p) => p.id === selectedProjectId.value) ?? null;
  });

  const filteredProjects = computed(() => {
    const q = searchQuery.value.toLowerCase().trim();
    if (!q) return archiveProjects;
    return archiveProjects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().replace("-", " ").includes(q) ||
        p.tech.some((t) => t.name.toLowerCase().includes(q)),
    );
  });

  const groupedProjects = computed(() => {
    const groups: Record<string, ArchiveProject[]> = {};
    for (const cat of archiveCategories) {
      groups[cat] = filteredProjects.value.filter((p) => p.category === cat);
    }
    return groups;
  });

  const hasResults = computed(() => filteredProjects.value.length > 0);

  function selectProject(id: string) {
    selectedProjectId.value = id;
  }

  function toggleFolder(category: string) {
    const s = new Set(expandedFolders.value);
    if (s.has(category)) {
      s.delete(category);
    } else {
      s.add(category);
    }
    expandedFolders.value = s;
  }

  function isFolderExpanded(category: string): boolean {
    return expandedFolders.value.has(category);
  }

  function setSearch(query: string) {
    searchQuery.value = query;
    if (query.trim()) {
      // Auto-expand all folders when searching
      expandedFolders.value = new Set(archiveCategories);
    }
  }

  return {
    selectedProjectId,
    selectedProject,
    searchQuery,
    filteredProjects,
    groupedProjects,
    hasResults,
    selectProject,
    toggleFolder,
    isFolderExpanded,
    setSearch,
  };
}
