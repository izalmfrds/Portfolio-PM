<script setup lang="ts">
import { useSlots } from "vue";

defineProps<{ title?: string }>();
const slots = useSlots();
</script>

<template>
  <section class="cs-card">
    <header v-if="title || slots.icon" class="cs-card-header">
      <span v-if="slots.icon" class="cs-card-icon"><slot name="icon" /></span>
      <h3 v-if="title" class="cs-card-title">{{ title }}</h3>
    </header>
    <div class="cs-card-body"><slot /></div>
  </section>
</template>

<style scoped lang="scss">
.cs-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  height: 100%;
  padding: var(--space-lg);
  background-color: var(--color-grayscale-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  border-radius: var(--radius-lg);

  @include mixins.mq("md") {
    padding: var(--space-xl);
  }

  &-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  &-icon {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    border-radius: var(--radius-md);
    color: var(--color-accent-400);
    background-color: color-mix(in srgb, var(--color-accent-400) 16%, transparent);

    :deep(svg) {
      width: 22px;
      height: 22px;
    }
  }

  &-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    line-height: var(--line-height-title);
    color: var(--color-text-400);
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    color: var(--color-text-300);
    font-size: var(--font-size-md);
    line-height: var(--line-height-copy);
  }
}
</style>
