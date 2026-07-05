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

const executionSteps = [
  {
    number: "01",
    title: "Initiation & Planning",
    description: "Conducted requirement gathering to define project scope, timelines, and key deliverables.",
    icon: "calendar",
  },
  {
    number: "02",
    title: "Design & Development",
    description: "Coordinated stakeholders and development teams to align business needs with technical solutions.",
    icon: "team",
  },
  {
    number: "03",
    title: "Testing & QA",
    description: "Ensured system quality through rigorous testing and validation before deployment.",
    icon: "checklist",
  },
  {
    number: "04",
    title: "Deployment",
    description: "Managed deployment activities to ensure smooth transition to production.",
    icon: "deploy",
  },
  {
    number: "05",
    title: "Monitoring & Improvement",
    description: "Continuously monitored performance and implemented improvements.",
    icon: "chart",
  },
];
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

    <!-- My Contributions Section -->
    <section v-if="project.contributions && project.contributions.length" class="archive-section archive-contributions">
      <h2 class="archive-section-title">
        <svg class="archive-section-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {{ t('my-contributions') }}
      </h2>
      <ul class="archive-contributions-list">
        <li v-for="(item, idx) in project.contributions" :key="idx" class="archive-contributions-item">
          <svg class="archive-contributions-check" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#22c55e" stroke-width="2" />
            <path d="M8 12l3 3 5-6" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ item }}</span>
        </li>
      </ul>
    </section>

    <!-- Challenges, Approach & Outcomes Section -->
    <section v-if="(project.challenges && project.challenges.length) || (project.outcomes && project.outcomes.length)" class="archive-section archive-cao">
      <div class="archive-cao-grid">
        <!-- Challenges -->
        <div v-if="project.challenges && project.challenges.length" class="archive-cao-card">
          <h3 class="archive-cao-title">
            <svg class="archive-cao-icon archive-cao-icon--challenge" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            {{ t('challenges') }}
          </h3>
          <p class="archive-cao-text">{{ project.challenges[0]?.challenge }}</p>
        </div>

        <!-- Approach -->
        <div v-if="project.challenges && project.challenges.length" class="archive-cao-card">
          <h3 class="archive-cao-title">
            <svg class="archive-cao-icon archive-cao-icon--approach" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
            {{ t('approach') }}
          </h3>
          <p class="archive-cao-text">{{ project.challenges[0]?.solution }}</p>
        </div>

        <!-- Outcomes -->
        <div v-if="project.outcomes && project.outcomes.length" class="archive-cao-card">
          <h3 class="archive-cao-title">
            <svg class="archive-cao-icon archive-cao-icon--outcome" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            {{ t('outcomes') }}
          </h3>
          <ul class="archive-cao-outcomes-list">
            <li v-for="(item, idx) in project.outcomes" :key="idx" class="archive-cao-outcomes-item">
              <svg class="archive-cao-outcomes-check" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#22c55e" stroke-width="2" />
                <path d="M8 12l3 3 5-6" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Project Execution Section -->
    <section class="archive-section archive-execution">
      <h2 class="archive-section-title">
        <svg class="archive-section-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {{ t('project-execution') }}
      </h2>
      <div class="archive-execution-timeline">
        <div class="archive-execution-line"></div>
        <div
          v-for="(step, idx) in executionSteps"
          :key="idx"
          class="archive-execution-step"
        >
          <div class="archive-execution-icon-wrap">
            <!-- Initiation & Planning -->
            <svg v-if="step.icon === 'calendar'" class="archive-execution-icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <!-- Design & Development -->
            <svg v-else-if="step.icon === 'team'" class="archive-execution-icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <!-- Testing & QA -->
            <svg v-else-if="step.icon === 'checklist'" class="archive-execution-icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M9 12l2 2 4-4" />
              <line x1="9" y1="7" x2="15" y2="7" />
              <line x1="9" y1="17" x2="15" y2="17" />
            </svg>
            <!-- Deployment -->
            <svg v-else-if="step.icon === 'deploy'" class="archive-execution-icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <!-- Monitoring -->
            <svg v-else-if="step.icon === 'chart'" class="archive-execution-icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <span class="archive-execution-number">{{ step.number }}</span>
          <h4 class="archive-execution-title">{{ step.title }}</h4>
          <p class="archive-execution-desc">{{ step.description }}</p>
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
  display: flex;
  align-items: center;
  gap: var(--space-xs);
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

/* My Contributions Section */
.archive-contributions {
  background-color: var(--color-grayscale-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
}

.archive-section-title-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: var(--color-text-300);
  vertical-align: middle;
  margin-right: var(--space-xs);
}


.archive-contributions-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.archive-contributions-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-400);
  line-height: 1.5;
}

.archive-contributions-check {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Challenges, Approach & Outcomes Grid */
.archive-cao-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

@media (max-width: 768px) {
  .archive-cao-grid {
    grid-template-columns: 1fr;
  }
}

.archive-cao-card {
  background-color: var(--color-grayscale-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.archive-cao-title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--color-text-400);
}

.archive-cao-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.archive-cao-icon--challenge {
  color: var(--color-orange-400, #f97316);
}

.archive-cao-icon--approach {
  color: #eab308;
}

.archive-cao-icon--outcome {
  color: #f97316;
}

.archive-cao-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-300);
  line-height: 1.6;
}

.archive-cao-outcomes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.archive-cao-outcomes-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-400);
  line-height: 1.4;
}

.archive-cao-outcomes-check {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Project Execution Timeline */
.archive-execution {
  background-color: var(--color-grayscale-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
}

.archive-execution-timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-md);
  padding-top: var(--space-lg);
}

.archive-execution-line {
  position: absolute;
  top: calc(var(--space-lg) + 24px);
  left: calc(10% + 12px);
  right: calc(10% + 12px);
  height: 0;
  border-top: 2px dashed #22c55e;
  opacity: 0.4;
  z-index: 0;
}

.archive-execution-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-xs);
  position: relative;
  z-index: 1;
}

.archive-execution-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, #22c55e 40%, transparent);
  background-color: var(--color-grayscale-400);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.archive-execution-icon {
  width: 22px;
  height: 22px;
}

.archive-execution-number {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-text-300);
  margin-top: var(--space-xs);
}

.archive-execution-title {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-text-400);
  line-height: 1.3;
}

.archive-execution-desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-300);
  line-height: 1.5;
  max-width: 180px;
}

@media (max-width: 768px) {
  .archive-execution-timeline {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .archive-execution-line {
    display: none;
  }

  .archive-execution-desc {
    max-width: 100%;
  }
}
</style>
