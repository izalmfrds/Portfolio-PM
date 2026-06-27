import { ref, computed } from "vue";
import { archiveProjects, archiveOrganizations } from "../data";
import type { ArchiveProject } from "../types";

const selectedProjectId = ref<string | null>("adenco");
const expandedFolders = ref<Set<string>>(new Set(["ALTIMEDA"]));
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
        p.organization.toLowerCase().replace("_", " ").includes(q) ||
        p.tech.some((t) => t.name.toLowerCase().includes(q)),
    );
  });

  const groupedProjects = computed(() => {
    const groups: Record<string, ArchiveProject[]> = {};
    for (const org of archiveOrganizations) {
      groups[org] = filteredProjects.value.filter((p) => p.organization === org);
    }
    return groups;
  });

  const hasResults = computed(() => filteredProjects.value.length > 0);

  function selectProject(id: string) {
    selectedProjectId.value = id;
  }

  function toggleFolder(organization: string) {
    const s = new Set(expandedFolders.value);
    if (s.has(organization)) {
      s.delete(organization);
    } else {
      s.add(organization);
    }
    expandedFolders.value = s;
  }

  function isFolderExpanded(organization: string): boolean {
    return expandedFolders.value.has(organization);
  }

  function setSearch(query: string) {
    searchQuery.value = query;
    if (query.trim()) {
      // Auto-expand all folders when searching
      expandedFolders.value = new Set(archiveOrganizations);
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
