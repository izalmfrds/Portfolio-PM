<script setup lang="ts">
import type { ArchiveProject } from "../types";

defineProps<{
  project: ArchiveProject;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: "select", id: string): void;
}>();
</script>

<template>
  <button
    :class="['archive-project-item', { 'archive-project-item-active': isActive }]"
    @click="emit('select', project.id)"
    data-cursor="circle-white"
  >
    <span class="archive-project-item-name">{{ project.name }}</span>
  </button>
</template>

<style scoped lang="scss">
.archive-project-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--space-xs) var(--space-sm);
  padding-left: var(--space-xl);
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: var(--font-size-sm);
  color: var(--color-text-300);
  text-align: left;
  border-radius: var(--radius-sm);
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: color-mix(in srgb, var(--color-text-400) 6%, transparent);
    color: var(--color-text-400);
  }

  &-active {
    background-color: color-mix(in srgb, var(--color-text-400) 12%, transparent);
    color: var(--color-text-400);
    font-weight: 600;
  }

  &-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
