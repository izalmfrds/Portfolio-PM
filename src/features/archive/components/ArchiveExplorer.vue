<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import ArchiveSearch from "./ArchiveSearch.vue";
import ArchiveFolder from "./ArchiveFolder.vue";
import { archiveCategories } from "../data";
import { useArchiveExplorer } from "../composables/useArchiveExplorer";

const {
  selectedProjectId,
  groupedProjects,
  hasResults,
  selectProject,
  toggleFolder,
  isFolderExpanded,
  setSearch,
} = useArchiveExplorer();
</script>

<template>
  <nav class="archive-explorer">
    <ArchiveSearch @search="setSearch" />
    <div class="archive-explorer-tree">
      <ArchiveFolder
        v-for="cat in archiveCategories"
        :key="cat"
        :category="cat"
        :projects="groupedProjects[cat] || []"
        :expanded="isFolderExpanded(cat)"
        :selected-project-id="selectedProjectId"
        @toggle="toggleFolder"
        @select="selectProject"
      />
    </div>
    <p v-if="!hasResults" class="archive-explorer-empty">{{ t("no-results") }}</p>
  </nav>
</template>

<style scoped lang="scss">
.archive-explorer {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-md);
  background-color: var(--color-grayscale-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  border-radius: var(--radius-xl);
  overflow-y: auto;

  @include mixins.mq("lg") {
    width: 320px;
    flex-shrink: 0;
    max-height: calc(100vh - 200px);
    position: sticky;
    top: calc(var(--height-header) + var(--space-lg));
  }

  &-tree {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
  }

  &-empty {
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
    padding: var(--space-lg) var(--space-sm);
  }
}
</style>
