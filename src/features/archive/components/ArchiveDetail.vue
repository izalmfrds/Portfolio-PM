<script setup lang="ts">
import { computed } from "vue";
import { t } from "../../../i18n/utils/translate";
import TechLogo from "../../projects/components/casestudy/TechLogo.vue";
import type { ArchiveProject, ArchiveProjectStatus } from "../types";

const props = defineProps<{
  project: ArchiveProject | null;
}>();

const statusColorMap: Record<ArchiveProjectStatus, string> = {
  production: "#22c55e",
  "active-development": "var(--color-cyan-500)",
  maintenance: "var(--color-orange-400)",
  completed: "var(--color-gray-500)",
  archived: "var(--color-gray-400)",
};

const statusLabelMap: Record<ArchiveProjectStatus, string> = {
  production: "Production",
  "active-development": "Active Development",
  maintenance: "Maintenance",
  completed: "Completed",
  archived: "Archived",
};

const statusColor = computed(() => (props.project ? statusColorMap[props.project.status] : ""));
const statusLabel = computed(() => (props.project ? statusLabelMap[props.project.status] : ""));
</script>

<template>
  <div v-if="!project" class="archive-detail-empty">
    <svg class="archive-detail-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z" />
    </svg>
    <p>{{ t("select-project") }}</p>
  </div>

  <div v-else class="archive-detail">
    <!-- Mockup Image -->
    <section class="archive-mockup">
      <div v-if="project.mockup" class="archive-mockup-img-wrap">
        <img
          :src="project.mockup"
          :alt="`${project.name} mockup`"
          class="archive-mockup-img"
        />
      </div>
      <div v-else class="archive-mockup-placeholder">
        <svg viewBox="0 0 80 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="54" rx="8" fill="currentColor" fill-opacity="0.06"/>
          <rect x="6" y="6" width="68" height="38" rx="4" fill="currentColor" fill-opacity="0.08"/>
          <rect x="28" y="48" width="24" height="3" rx="1.5" fill="currentColor" fill-opacity="0.1"/>
          <rect x="18" y="44" width="44" height="2" rx="1" fill="currentColor" fill-opacity="0.08"/>
          <circle cx="40" cy="25" r="8" fill="currentColor" fill-opacity="0.1"/>
          <path d="M36 25l3 3 5-6" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{ project.name }}</span>
      </div>
    </section>

    <!-- Header Section -->
    <section class="archive-detail-header">
      <div class="archive-detail-status" :style="{ backgroundColor: statusColor }">
        {{ statusLabel }}
      </div>
      <h1 class="archive-detail-title">{{ project.name }}</h1>
      <p class="archive-detail-type">{{ project.type }}</p>
      <p class="archive-detail-summary">{{ project.summary }}</p>
      <div class="archive-detail-tech">
        <div v-for="tech in project.tech.slice(0, 6)" :key="tech.name" class="archive-detail-tech-chip">
          <TechLogo :icon="tech.icon" />
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="archive-section archive-overview">
      <h2 class="archive-section-title">{{ t('project-overview') }}</h2>
      <div class="archive-overview-grid">
        <div v-if="project.info.role" class="archive-overview-card">
          <div class="archive-overview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div class="archive-overview-content">
            <span class="archive-overview-label">{{ t('role') }}</span>
            <span class="archive-overview-value">{{ project.info.role }}</span>
          </div>
        </div>
        <div v-if="project.info.industry" class="archive-overview-card">
          <div class="archive-overview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <div class="archive-overview-content">
            <span class="archive-overview-label">Industry</span>
            <span class="archive-overview-value">{{ project.info.industry }}</span>
          </div>
        </div>
        <div v-if="project.info.duration" class="archive-overview-card">
          <div class="archive-overview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div class="archive-overview-content">
            <span class="archive-overview-label">{{ t('duration') }}</span>
            <span class="archive-overview-value">{{ project.info.duration }}</span>
          </div>
        </div>
        <div v-if="project.info.teamSize" class="archive-overview-card">
          <div class="archive-overview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div class="archive-overview-content">
            <span class="archive-overview-label">{{ t('team-size') }}</span>
            <span class="archive-overview-value">{{ project.info.teamSize }}</span>
          </div>
        </div>
        <div v-if="project.info.platform" class="archive-overview-card">
          <div class="archive-overview-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
          <div class="archive-overview-content">
            <span class="archive-overview-label">Platform</span>
            <span class="archive-overview-value">{{ project.info.platform }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.archive-detail {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  width: 100%;
  padding-top: var(--space-lg);
}

.archive-mockup {
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  background-color: var(--color-grayscale-400);
}

.archive-mockup-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.archive-mockup-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.archive-mockup-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  aspect-ratio: 16 / 9;
  color: var(--color-text-300);

  svg {
    width: 80px;
    height: 54px;
    opacity: 0.6;
  }

  span {
    font-size: var(--font-size-sm);
    color: var(--color-text-200);
    font-weight: 500;
    opacity: 0.6;
  }
}

.archive-detail-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-xxl);
  color: var(--color-text-300);
  min-height: 400px;

  &-icon {
    width: 64px;
    height: 64px;
    opacity: 0.5;
  }

  p {
    font-size: var(--font-size-md);
  }
}

.archive-detail-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding-bottom: var(--space-lg);
}

.archive-detail-status {
  display: inline-flex;
  align-items: center;
  padding: var(--space-xs) var(--space-sm);
  border-radius: 100px;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
}

.archive-detail-title {
  font-weight: 900;
  font-size: var(--font-size-title-sm);
  color: var(--color-text-400);
  line-height: 1.2;
}

.archive-detail-type {
  font-size: var(--font-size-lg);
  color: var(--color-text-300);
  font-weight: 500;
}

.archive-detail-summary {
  font-size: var(--font-size-md);
  color: var(--color-text-300);
  line-height: 1.6;
}

.archive-detail-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);

  &-chip {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-sm);
    background-color: var(--color-grayscale-400);
    border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    color: var(--color-text-400);

    svg {
      width: 16px;
      height: 16px;
    }
  }
}

.archive-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.archive-section-title {
  font-weight: 700;
  font-size: var(--font-size-xl);
  color: var(--color-text-400);
}

.archive-overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
}

.archive-overview-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-md);
  background-color: var(--color-grayscale-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  border-radius: var(--radius-lg);
}

.archive-overview-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  color: var(--color-text-300);

  svg {
    width: 24px;
    height: 24px;
  }
}

.archive-overview-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.archive-overview-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-300);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.archive-overview-value {
  font-size: var(--font-size-sm);
  color: var(--color-text-400);
  font-weight: 500;
}

.archive-description-text {
  font-size: var(--font-size-md);
  color: var(--color-text-300);
  line-height: 1.6;
}
</style>
