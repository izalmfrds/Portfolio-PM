<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import ArchiveProjectItem from "./ArchiveProjectItem.vue";
import type { ArchiveProject, ArchiveCategory } from "../types";

defineProps<{
  category: ArchiveCategory;
  projects: ArchiveProject[];
  expanded: boolean;
  selectedProjectId: string | null;
}>();

const emit = defineEmits<{
  (e: "toggle", category: string): void;
  (e: "select", id: string): void;
}>();

const categoryLabels: Record<ArchiveCategory, string> = {
  "enterprise-systems": t("category-enterprise-systems"),
  education: t("category-education"),
  "internal-products": t("category-internal-products"),
  experiments: t("category-experiments"),
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
      <span class="archive-folder-name">{{ categoryLabels[category] }}</span>
      <span class="archive-folder-count">({{ projects.length }})</span>
    </button>
    <div v-if="expanded" class="archive-folder-children">
      <ArchiveProjectItem
        v-for="project in projects"
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
    gap: var(--space-xs);
    width: 100%;
    padding: var(--space-xs) var(--space-sm);
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text-400);
    text-align: left;
    border-radius: var(--radius-sm);
    transition: background-color 0.15s ease;

    &:hover {
      background-color: color-mix(in srgb, var(--color-text-400) 6%, transparent);
    }
  }

  &-chevron {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    color: var(--color-text-300);
    transition: transform 0.2s ease;

    &-open {
      transform: rotate(90deg);
    }
  }

  &-icon {
    width: 16px;
    height: 16px;
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
    gap: 2px;
  }
}
</style>
