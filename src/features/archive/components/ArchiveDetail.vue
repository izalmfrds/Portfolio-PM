<script setup lang="ts">
import { computed } from "vue";
import { t } from "../../../i18n/utils/translate";
import CaseStudyCard from "../../projects/components/casestudy/CaseStudyCard.vue";
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
    <!-- Project Header -->
    <div class="archive-detail-header">
      <h2 class="archive-detail-name">{{ project.name }}</h2>
      <p class="archive-detail-type">{{ project.type }}</p>
      <span class="archive-detail-status" :style="{ backgroundColor: statusColor }">
        {{ statusLabel }}
      </span>
    </div>

    <!-- Project Info -->
    <CaseStudyCard :title="t('project-overview')">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
        </svg>
      </template>
      <div class="archive-info-grid">
        <div v-if="project.info.role" class="archive-info-item">
          <span class="archive-info-label">{{ t('role') }}</span>
          <span class="archive-info-value">{{ project.info.role }}</span>
        </div>
        <div v-if="project.info.industry" class="archive-info-item">
          <span class="archive-info-label">Industry</span>
          <span class="archive-info-value">{{ project.info.industry }}</span>
        </div>
        <div v-if="project.info.duration" class="archive-info-item">
          <span class="archive-info-label">{{ t('duration') }}</span>
          <span class="archive-info-value">{{ project.info.duration }}</span>
        </div>
        <div v-if="project.info.teamSize" class="archive-info-item">
          <span class="archive-info-label">{{ t('team-size') }}</span>
          <span class="archive-info-value">{{ project.info.teamSize }}</span>
        </div>
        <div v-if="project.info.platform" class="archive-info-item">
          <span class="archive-info-label">Platform</span>
          <span class="archive-info-value">{{ project.info.platform }}</span>
        </div>
      </div>
    </CaseStudyCard>

    <!-- Summary -->
    <CaseStudyCard :title="t('description')">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      </template>
      <p class="archive-summary-text">{{ project.summary }}</p>
    </CaseStudyCard>

    <!-- Responsibilities -->
    <CaseStudyCard v-if="project.responsibilities.length" :title="t('my-contributions')">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
        </svg>
      </template>
      <ul class="archive-responsibilities">
        <li v-for="resp in project.responsibilities" :key="resp" class="archive-responsibility">
          <svg class="archive-responsibility-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m5 12 5 5L20 7" />
          </svg>
          {{ resp }}
        </li>
      </ul>
    </CaseStudyCard>

    <!-- Tech Stack -->
    <CaseStudyCard v-if="project.tech.length" :title="t('tech-stack')">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px">
          <path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" />
        </svg>
      </template>
      <div class="archive-tech-grid">
        <div v-for="tech in project.tech" :key="tech.name" class="archive-tech-tile">
          <span class="archive-tech-tile-logo"><TechLogo :icon="tech.icon" /></span>
          <span class="archive-tech-tile-name">{{ tech.name }}</span>
        </div>
      </div>
    </CaseStudyCard>

    <!-- Challenges & Solutions -->
    <CaseStudyCard v-if="project.challenges.length" :title="t('challenges-solutions')">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" />
        </svg>
      </template>
      <div v-for="(item, i) in project.challenges" :key="i" class="archive-challenge">
        <p class="archive-challenge-title">{{ item.challenge }}</p>
        <p class="archive-challenge-solution">{{ item.solution }}</p>
      </div>
    </CaseStudyCard>

    <!-- Achievements -->
    <CaseStudyCard v-if="project.achievements.length" :title="t('key-achievements')">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </template>
      <div class="archive-achievements-grid">
        <div v-for="achievement in project.achievements" :key="achievement.label" class="archive-achievement">
          <span class="archive-achievement-value">{{ achievement.value }}</span>
          <span class="archive-achievement-label">{{ achievement.label }}</span>
        </div>
      </div>
    </CaseStudyCard>

    <!-- Timeline -->
    <CaseStudyCard v-if="project.timeline.length" :title="t('timeline')">
      <template #icon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:22px;height:22px">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      </template>
      <div class="archive-timeline">
        <div v-for="step in project.timeline" :key="step.label" class="archive-timeline-step">
          <span class="archive-timeline-dot"></span>
          <span class="archive-timeline-label">{{ step.label }}</span>
        </div>
      </div>
    </CaseStudyCard>
  </div>
</template>

<style scoped lang="scss">
.archive-detail {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  flex: 1;
  min-width: 0;
  animation: archive-detail-fadein 0.2s ease;

  @keyframes archive-detail-fadein {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  &-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    color: var(--color-text-300);
    font-size: var(--font-size-md);
    min-height: 400px;

    &-icon {
      width: 48px;
      height: 48px;
      opacity: 0.4;
    }
  }

  &-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-lg);
    background-color: var(--color-grayscale-400);
    border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
    border-radius: var(--radius-xl);
  }

  &-name {
    font-size: var(--font-size-title-sm);
    font-weight: 900;
    color: var(--color-text-400);

    @include mixins.mq("md") {
      font-size: var(--font-size-title-md);
    }
  }

  &-type {
    font-size: var(--font-size-md);
    color: var(--color-text-300);
  }

  &-status {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: var(--space-xxs) var(--space-sm);
    border-radius: 100px;
    font-size: var(--font-size-xs);
    font-weight: 700;
    color: var(--color-white-400);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: var(--space-xs);
  }
}

.archive-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);

  @include mixins.mq("md") {
    grid-template-columns: repeat(3, 1fr);
  }

  @include mixins.mq("lg") {
    grid-template-columns: repeat(5, 1fr);
  }
}

.archive-info-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  background-color: color-mix(in srgb, var(--color-text-400) 4%, transparent);
}

.archive-info-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-300);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.archive-info-value {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-400);
}

.archive-summary-text {
  font-size: var(--font-size-md);
  line-height: var(--line-height-copy);
  color: var(--color-text-300);
}

.archive-responsibilities {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  list-style: none;
}

.archive-responsibility {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-300);

  &-check {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: #22c55e;
  }
}

.archive-tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);

  @include mixins.mq("lg") {
    grid-template-columns: repeat(4, 1fr);
  }
}

.archive-tech-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-md) var(--space-xs);
  border-radius: var(--radius-md);
  background-color: color-mix(in srgb, var(--color-text-400) 5%, transparent);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: color-mix(in srgb, var(--color-text-400) 10%, transparent);
    border-color: color-mix(in srgb, var(--color-text-400) 18%, transparent);
    transform: translateY(-2px);
  }

  &-logo {
    width: 28px;
    height: 28px;
  }

  &-name {
    font-size: var(--font-size-xs);
    color: var(--color-text-300);
    text-align: center;
  }
}

.archive-challenge {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding-bottom: var(--space-sm);
  border-bottom: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 6%, transparent);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &-title {
    font-weight: 700;
    color: var(--color-text-400);
    font-size: var(--font-size-sm);
  }

  &-solution {
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
    line-height: var(--line-height-copy);
  }
}

.archive-achievements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);

  @include mixins.mq("md") {
    grid-template-columns: repeat(4, 1fr);
  }
}

.archive-achievement {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  background-color: color-mix(in srgb, var(--color-text-400) 4%, transparent);

  &-value {
    font-weight: 900;
    font-size: var(--font-size-title-sm);
    color: var(--color-text-400);
  }

  &-label {
    font-size: var(--font-size-xs);
    color: var(--color-text-300);
    text-align: center;
  }
}

.archive-timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  @include mixins.mq("md") {
    flex-direction: row;
    gap: var(--space-xs);
  }
}

.archive-timeline-step {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex: 1;

  @include mixins.mq("md") {
    flex-direction: column;
    text-align: center;
  }
}

.archive-timeline-dot {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--color-orange-400);
  border: 2px solid var(--color-grayscale-400);
  box-shadow: 0 0 0 2px var(--color-orange-400);
}

.archive-timeline-label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text-400);
}
</style>
