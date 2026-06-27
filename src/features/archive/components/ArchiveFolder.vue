<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import ArchiveProjectItem from "./ArchiveProjectItem.vue";
import type { ArchiveProject, ArchiveOrganization } from "../types";

defineProps<{
  category: ArchiveOrganization;
  projects: ArchiveProject[];
  expanded: boolean;
  selectedProjectId: string | null;
}>();

const emit = defineEmits<{
  (e: "toggle", organization: string): void;
  (e: "select", id: string): void;
}>();

const getOrganizationLabel = (org: ArchiveOrganization): string => {
  const labels: Record<ArchiveOrganization, string> = {
    "ALTIMEDA": t("organization-altemeda"),
    "MY_TEAM_PRODUCT": t("organization-my-team-product"),
    "TELKOM_FOUNDATION": t("organization-telkom-foundation"),
    "PERSONAL_PROJECTS": t("organization-personal-projects"),
  };
  return labels[org] || org;
};
</script>

<template>
  <div class="archive-folder">
    <button
      class="archive-folder-header"
      @click="emit('toggle', category)"
      data-cursor="circle-white"
    >
      <svg
        :class="['archive-folder-chevron', { 'archive-folder-chevron-open': expanded }]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
      <svg class="archive-folder-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
      </svg>
      <span class="archive-folder-name">{{ getOrganizationLabel(category) }}</span>
      <span class="archive-folder-count">({{ projects.length }})</span>
    </button>
    <div v-if="expanded" class="archive-folder-children">
      <ArchiveProjectItem
        v-for="project in [...projects].sort((a, b) => a.name.localeCompare(b.name))"
        :key="project.id"
        :project="project"
        :is-active="selectedProjectId === project.id"
        @select="emit('select', $event)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.archive-folder {
  display: flex;
  flex-direction: column;

  &-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text-400);
    text-align: left;
    border-radius: var(--radius-md);
    transition: background-color 0.15s ease;

    &:hover {
      background-color: color-mix(in srgb, var(--color-text-400) 6%, transparent);
    }
  }

  &-chevron {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--color-text-300);
    transition: transform 0.2s ease;

    &-open {
      transform: rotate(90deg);
    }
  }

  &-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: var(--color-orange-400);
  }

  &-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-count {
    flex-shrink: 0;
    font-weight: 400;
    font-size: var(--font-size-xs);
    color: var(--color-text-300);
  }

  &-children {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding-left: var(--space-lg);
    margin-top: var(--space-xs);
  }
}
</style>
