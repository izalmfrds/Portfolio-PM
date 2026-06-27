<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";
import Banner from "../../../components/Banner.vue";
import { useRouter } from "../../../composables/useRouter";
import { lenis } from "../../../composables/useScroll";

const router = useRouter();

const handleBreadcrumbClick = (path: string) => {
  if (path === "/") {
    router.push("/");
  } else if (path === "#projects") {
    router.push("/");
    queueMicrotask(() => {
      if (lenis.value) {
        setTimeout(() => {
          lenis.value!.scrollTo("#projects", { offset: -100 });
        }, 100);
      }
    });
  }
};
</script>

<template>
  <header class="archive-header">
    <nav class="archive-breadcrumb">
      <button class="archive-breadcrumb-item" @click="handleBreadcrumbClick('/')" data-sound="click" data-hoversound="hover">
        {{ t('breadcrumb-home') }}
      </button>
      <span class="archive-breadcrumb-separator">/</span>
      <button class="archive-breadcrumb-item" @click="handleBreadcrumbClick('#projects')" data-sound="click" data-hoversound="hover">
        {{ t('breadcrumb-projects') }}
      </button>
      <span class="archive-breadcrumb-separator">/</span>
      <span class="archive-breadcrumb-item archive-breadcrumb-item-current">{{ t('breadcrumb-archive') }}</span>
    </nav>
    <div class="archive-header-title">
      <Banner class="archive-header-banner" :copy="t('project-archive')" size="sm" />
      <h1 class="archive-header-copy">{{ t('archive') }}</h1>
      <p class="archive-header-desc">{{ t('archive-description') }}</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.archive-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  width: 100%;
  padding-bottom: var(--space-lg);
  border-bottom: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
}

.archive-breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;

  &-item {
    display: inline-flex;
    align-items: center;
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.2s ease;
    border-radius: var(--radius-sm);

    &:hover {
      color: var(--color-text-400);
      background-color: color-mix(in srgb, var(--color-text-400) 6%, transparent);
    }

    &-current {
      color: var(--color-text-400);
      font-weight: 600;
      cursor: default;
      pointer-events: none;

      &:hover {
        background-color: transparent;
      }
    }
  }

  &-separator {
    color: var(--color-text-300);
    font-size: var(--font-size-sm);
    user-select: none;
  }
}

.archive-header-title {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  position: relative;
  padding-top: var(--space-md);
}

.archive-header-banner {
  position: absolute;
  top: 0;
  left: -8px;
  transform: translate(0, -20%) rotate(-4deg);

  @include mixins.mq("lg") {
    left: -16px;
    transform: translate(0, -20%) rotate(-6deg);
  }
}

.archive-header-copy {
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

.archive-header-desc {
  font-size: var(--font-size-md);
  color: var(--color-text-300);
  max-width: 600px;
}
</style>
