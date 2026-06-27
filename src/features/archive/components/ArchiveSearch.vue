<script setup lang="ts">
import { ref, watch } from "vue";
import { t } from "../../../i18n/utils/translate";

const emit = defineEmits<{
  (e: "search", query: string): void;
}>();

const input = ref("");
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

watch(input, (val) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => emit("search", val), 200);
});

const handleClear = () => {
  input.value = "";
  emit("search", "");
};
</script>

<template>
  <div class="archive-search">
    <svg class="archive-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
    <input
      v-model="input"
      type="text"
      class="archive-search-input"
      :placeholder="t('search-projects')"
    />
    <button
      v-if="input"
      class="archive-search-clear"
      @click="handleClear"
      aria-label="Clear search"
    >
      ×
    </button>
  </div>
</template>

<style scoped lang="scss">
.archive-search {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-background-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: color-mix(in srgb, var(--color-text-400) 20%, transparent);
  }

  &-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: var(--color-text-300);
  }

  &-input {
    flex: 1;
    min-width: 0;
    background: none;
    border: none;
    outline: none;
    font-size: var(--font-size-sm);
    color: var(--color-text-400);
    font-family: inherit;

    &::placeholder {
      color: var(--color-text-300);
      opacity: 0.6;
    }
  }

  &-clear {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: none;
    background: color-mix(in srgb, var(--color-text-400) 10%, transparent);
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
    color: var(--color-text-300);
    transition: background-color 0.2s ease;

    &:hover {
      background: color-mix(in srgb, var(--color-text-400) 20%, transparent);
    }
  }
}
</style>
