<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import Banner from "../../../components/Banner.vue";
import { useRouter } from "../../../composables/useRouter";
import { lenis } from "../../../composables/useScroll";

const router = useRouter();

const handleBack = () => {
  // Navigate back to home page
  router.push("/");

  // After navigation, scroll to projects section
  queueMicrotask(() => {
    if (lenis.value) {
      setTimeout(() => {
        lenis.value!.scrollTo("#projects", { offset: -100 });
      }, 100);
    }
  });
};
</script>

<template>
  <header class="archive-header">
    <button class="archive-back-button" @click="handleBack" data-sound="click" data-hoversound="hover">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </svg>
      <span>{{ t('back-to-projects') }}</span>
    </button>
    <div class="archive-header-title">
      <Banner class="archive-header-banner" :copy="t('project-archive')" size="md" />
      <h1 class="archive-header-copy">{{ t('archive') }}</h1>
      <p class="archive-header-desc">{{ t('archive-description') }}</p>
    </div>
    <!-- <div class="archive-header-stats">
      <div class="archive-stat">
        <span class="archive-stat-value">{{ totalProjects }}</span>
        <span class="archive-stat-label">{{ t('projects') }}</span>
      </div>
      <div class="archive-stat">
        <span class="archive-stat-value">{{ totalCategories }}</span>
        <span class="archive-stat-label">Categories</span>
      </div>
      <div class="archive-stat">
        <span class="archive-stat-value">{{ yearsExperience }}</span>
        <span class="archive-stat-label">Years</span>
      </div>
    </div> -->
  </header>
</template>

<style scoped lang="scss">
.archive-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  width: 100%;

  &-title {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    position: relative;
    padding-top: var(--space-md);
  }

  &-banner {
    position: absolute;
    top: 0;
    left: -8px;
    transform: translate(0, -20%) rotate(-4deg);

    @include mixins.mq("lg") {
      left: -16px;
      transform: translate(0, -20%) rotate(-6deg);
    }
  }

  &-copy {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-desc {
    font-size: var(--font-size-md);
    color: var(--color-text-300);
    max-width: 600px;
  }
}

.archive-back-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 20%, transparent);
  border-radius: 100px;
  background-color: var(--color-grayscale-400);
  color: var(--color-text-400);
  font-family: inherit;
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: color-mix(in srgb, var(--color-text-400) 10%, transparent);
    border-color: color-mix(in srgb, var(--color-text-400) 30%, transparent);
    
    svg {
      transform: translateX(-3px);
    }
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
