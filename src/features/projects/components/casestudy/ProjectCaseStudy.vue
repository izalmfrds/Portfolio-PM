<script setup lang="ts">
import Tag from "../../../../components/Tag.vue";
import Button from "../../../../components/Button.vue";
import Link from "../../../../components/Link.vue";
import { t } from "../../../../i18n/utils/translate";
import { lenis } from "../../../../composables/useScroll";

import CaseStudyCard from "./CaseStudyCard.vue";
import TechLogo from "./TechLogo.vue";
import StepIcon from "./StepIcon.vue";

import FileText from "../../../../components/icons/FileText.vue";
import CodeIcon from "../../../../components/icons/CodeIcon.vue";
import CircleCheck from "../../../../components/icons/CircleCheck.vue";
import ClipboardList from "../../../../components/icons/ClipboardList.vue";
import TriangleAlert from "../../../../components/icons/TriangleAlert.vue";
import Lightbulb from "../../../../components/icons/Lightbulb.vue";
import Trophy from "../../../../components/icons/Trophy.vue";
import Download from "../../../../components/icons/Download.vue";
import CalendarCheck from "../../../../components/icons/CalendarCheck.vue";
import UserIcon from "../../../../components/icons/UserIcon.vue";
import UsersIcon from "../../../../components/icons/UsersIcon.vue";
import CalendarIcon from "../../../../components/icons/CalendarIcon.vue";
import ArrowRightLong from "../../../../components/icons/ArrowRightLong.vue";

import type { ProjectContent, ProjectPreview } from "../../../../content/types";

const { content, prevProject, nextProject } = defineProps<{
  content: ProjectContent;
  projectId: string;
  prevProject?: ProjectPreview | null;
  nextProject?: ProjectPreview | null;
}>();

const scrollToOverview = () => {
  const el = document.querySelector<HTMLElement>("#cs-overview");
  if (!el) return;
  if (lenis.value) {
    lenis.value.scrollTo(el, { offset: -120 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div v-if="content.caseStudy" class="cs">
    <!-- Hero -->
    <div class="cs-hero">
      <div class="cs-hero-text">
        <span v-if="content.caseStudy.category" class="cs-hero-badge">{{ content.caseStudy.category }}</span>
        <h1 class="cs-hero-title">{{ content.title }}</h1>
        <p v-if="content.description" class="cs-hero-description" v-html="content.description"></p>
        <div class="cs-hero-tags">
          <Tag v-for="tag in content.tags" :key="tag" :variant="tag" />
        </div>
        <div class="cs-hero-buttons">
          <Button
            renderAs="button"
            variant="accent"
            class="cs-hero-button"
            data-hoversound="hover"
            @click="scrollToOverview"
          >
            {{ t("project-overview") }}
          </Button>
          <Link
            v-if="content.caseStudy.pdf"
            :href="content.caseStudy.pdf"
            external
            class="cs-hero-button"
            data-cursor="arrow-external"
          >
            <Button renderAs="div" variant="border" class="children-unclickable cs-hero-button-pdf" data-hoversound="hover">
              <Download class="cs-hero-button-icon" />
              {{ t("case-study-pdf") }}
            </Button>
          </Link>
        </div>
      </div>

      <div class="cs-hero-image">
        <img :src="content.caseStudy.heroImage" :alt="content.title" loading="eager" fetchpriority="high" />
      </div>

      <aside v-if="content.caseStudy.meta" class="cs-meta">
        <div v-if="content.caseStudy.meta.duration" class="cs-meta-item">
          <span class="cs-meta-icon"><CalendarCheck /></span>
          <div class="cs-meta-text">
            <p class="cs-meta-label">{{ t("duration") }}</p>
            <p class="cs-meta-value">{{ content.caseStudy.meta.duration }}</p>
          </div>
        </div>
        <div v-if="content.caseStudy.meta.role" class="cs-meta-item">
          <span class="cs-meta-icon"><UserIcon /></span>
          <div class="cs-meta-text">
            <p class="cs-meta-label">{{ t("role") }}</p>
            <p class="cs-meta-value">{{ content.caseStudy.meta.role }}</p>
          </div>
        </div>
        <div v-if="content.caseStudy.meta.teamSize" class="cs-meta-item">
          <span class="cs-meta-icon"><UsersIcon /></span>
          <div class="cs-meta-text">
            <p class="cs-meta-label">{{ t("team-size") }}</p>
            <p class="cs-meta-value">{{ content.caseStudy.meta.teamSize }}</p>
          </div>
        </div>
        <div v-if="content.caseStudy.meta.year" class="cs-meta-item">
          <span class="cs-meta-icon"><CalendarIcon /></span>
          <div class="cs-meta-text">
            <p class="cs-meta-label">{{ t("year") }}</p>
            <p class="cs-meta-value">{{ content.caseStudy.meta.year }}</p>
          </div>
        </div>
      </aside>
    </div>

    <!-- Top sections -->
    <div class="cs-grid">
      <CaseStudyCard id="cs-overview" :title="t('project-overview')" class="cs-area-overview">
        <template #icon><FileText /></template>
        <p v-html="content.caseStudy.overview"></p>
      </CaseStudyCard>

      <CaseStudyCard :title="t('my-contributions')" class="cs-area-contributions">
        <template #icon><ClipboardList /></template>
        <ul class="cs-list">
          <li v-for="item in content.caseStudy.contributions" :key="item" class="cs-list-item">
            <CircleCheck class="cs-list-icon" />
            <span v-html="item"></span>
          </li>
        </ul>
      </CaseStudyCard>

      <CaseStudyCard :title="t('tech-stack')" class="cs-area-tech">
        <template #icon><CodeIcon /></template>
        <div class="cs-tech-featured">
          <div v-for="tech in content.caseStudy.tech.filter((x) => x.featured)" :key="tech.name" class="cs-tech-tile">
            <span class="cs-tech-tile-logo"><TechLogo :icon="tech.icon" /></span>
            <span class="cs-tech-tile-name">{{ tech.name }}</span>
          </div>
        </div>
        <div class="cs-tech-pills">
          <div v-for="tech in content.caseStudy.tech.filter((x) => !x.featured)" :key="tech.name" class="cs-tech-pill">
            <span class="cs-tech-pill-logo"><TechLogo :icon="tech.icon" /></span>
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </CaseStudyCard>

      <!-- Execution timeline -->
      <CaseStudyCard :title="t('project-execution')" class="cs-area-execution">
        <template #icon><ClipboardList /></template>
        <ol class="cs-timeline">
          <li v-for="step in content.caseStudy.execution" :key="step.title" class="cs-step">
            <span class="cs-step-node"><StepIcon :icon="step.icon" /></span>
            <div class="cs-step-text">
              <p class="cs-step-title">{{ step.title }}</p>
              <p class="cs-step-description">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </CaseStudyCard>

      <div class="cs-area-side">
        <CaseStudyCard :title="t('challenges')">
          <template #icon><TriangleAlert /></template>
          <p>{{ content.caseStudy.challenges }}</p>
        </CaseStudyCard>
        <CaseStudyCard :title="t('approach')">
          <template #icon><Lightbulb /></template>
          <p>{{ content.caseStudy.approach }}</p>
        </CaseStudyCard>
      </div>

      <CaseStudyCard :title="t('outcomes')" class="cs-area-outcomes">
        <template #icon><Trophy /></template>
        <ul class="cs-list">
          <li v-for="item in content.caseStudy.outcomes" :key="item" class="cs-list-item">
            <CircleCheck class="cs-list-icon" />
            <span v-html="item"></span>
          </li>
        </ul>
      </CaseStudyCard>
    </div>

    <!-- Prev / Next nav -->
    <nav class="cs-nav">
      <Link
        v-if="prevProject"
        :to="`/project/${prevProject.slug}`"
        replace
        class="cs-nav-link cs-nav-prev"
        data-cursor="arrow"
        data-sound="click"
      >
        <ArrowRightLong class="cs-nav-arrow cs-nav-arrow-prev" />
        <span class="cs-nav-content">
          <span class="cs-nav-prefix">{{ t("previous-project") }}</span>
          <span class="cs-nav-title">{{ prevProject.title }}</span>
        </span>
      </Link>
      <span v-else></span>
      <Link
        v-if="nextProject"
        :to="`/project/${nextProject.slug}`"
        replace
        class="cs-nav-link cs-nav-next"
        data-cursor="arrow"
        data-sound="click"
      >
        <span class="cs-nav-content">
          <span class="cs-nav-prefix">{{ t("next-project") }}</span>
          <span class="cs-nav-title">{{ nextProject.title }}</span>
        </span>
        <ArrowRightLong class="cs-nav-arrow" />
      </Link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.cs {
  width: 100%;
  max-width: var(--breakpoint-xxxl);
  margin: 0 auto;
  padding: 0 var(--space-outer);
  padding-top: calc(var(--height-header) + var(--space-lg));
  padding-bottom: var(--space-xxxl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  color: var(--color-text-400);

  @include mixins.mq("md") {
    gap: var(--space-xl);
  }
}

/* ---------- Hero ---------- */
.cs-hero {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "text" "image" "meta";
  gap: var(--space-lg);

  @include mixins.mq("md") {
    grid-template-columns: 1.05fr 0.95fr;
    grid-template-areas:
      "text image"
      "meta meta";
    align-items: center;
    column-gap: var(--space-xl);
  }

  @include mixins.mq("lg") {
    grid-template-columns: minmax(0, 4fr) minmax(0, 5fr) minmax(0, 3fr);
    grid-template-areas: "text image meta";
  }

  &-text {
    grid-area: text;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
  }

  &-badge {
    padding: var(--space-xxs) var(--space-sm);
    border-radius: var(--radius-md);
    font-size: var(--font-size-xs);
    font-weight: 700;
    color: var(--color-accent-400);
    background-color: color-mix(in srgb, var(--color-accent-400) 16%, transparent);
  }

  &-title {
    font-size: var(--font-size-title-md);
    font-weight: 900;
    line-height: var(--line-height-title);

    @include mixins.mq("lg") {
      font-size: var(--font-size-title-lg);
    }
  }

  &-description {
    color: var(--color-text-300);
    font-size: var(--font-size-md);
    line-height: var(--line-height-copy);

    @include mixins.mq("lg") {
      font-size: var(--font-size-lg);
    }
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  &-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-top: var(--space-xs);
  }

  &-button {
    text-decoration: none;
  }

  &-button-pdf {
    gap: var(--space-xs);
  }

  &-button-icon {
    width: var(--icon-size-xs);
    height: var(--icon-size-xs);
  }

  &-image {
    grid-area: image;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 60% 45%,
        color-mix(in srgb, var(--color-accent-400) 22%, transparent),
        transparent 62%
      );
      filter: blur(6px);
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
      width: 100%;
      height: auto;
      max-height: 460px;
      object-fit: contain;
      border-radius: var(--radius-lg);
    }
  }
}

/* ---------- Meta panel ---------- */
.cs-meta {
  grid-area: meta;
  display: flex;
  gap: var(--space-md);
  padding: var(--space-lg);
  background-color: var(--color-grayscale-400);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
  border-radius: var(--radius-lg);
  flex-wrap: wrap;
  flex-direction: row;

  @include mixins.mq("md") {
    justify-content: space-between;
  }

  @include mixins.mq("lg") {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  &-item {
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

  &-label {
    font-size: var(--font-size-xs);
    color: var(--color-text-300);
  }

  &-value {
    font-size: var(--font-size-md);
    font-weight: 700;
    color: var(--color-text-400);
  }
}

/* ---------- Sections grid ---------- */
.cs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);

  @include mixins.mq("md") {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.mq("lg") {
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-lg);
  }
}

.cs-area-overview,
.cs-area-contributions,
.cs-area-tech,
.cs-area-execution,
.cs-area-side,
.cs-area-outcomes {
  min-width: 0;
}

.cs-area-tech {
  @include mixins.mq("md") {
    grid-column: span 2;
  }
}

@include mixins.mq("lg") {
  .cs-area-overview {
    grid-column: 1 / 5;
  }
  .cs-area-contributions {
    grid-column: 5 / 9;
  }
  .cs-area-tech {
    grid-column: 9 / 13;
  }
  .cs-area-execution {
    grid-column: 1 / 7;
  }
  .cs-area-side {
    grid-column: 7 / 10;
  }
  .cs-area-outcomes {
    grid-column: 10 / 13;
  }
}

.cs-area-side {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  @include mixins.mq("lg") {
    gap: var(--space-lg);
  }
}

/* ---------- Lists ---------- */
.cs-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  list-style: none;
}

.cs-list-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
}

.cs-list-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  color: var(--color-accent-400);
}

/* ---------- Tech stack ---------- */
.cs-tech-featured {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);

  @include mixins.mq("lg") {
    grid-template-columns: repeat(4, 1fr);
  }
}

.cs-tech-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-md) var(--space-xs);
  border-radius: var(--radius-md);
  background-color: color-mix(in srgb, var(--color-text-400) 5%, transparent);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);

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

.cs-tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.cs-tech-pill {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xxs) var(--space-sm);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  color: var(--color-text-400);
  background-color: color-mix(in srgb, var(--color-text-400) 5%, transparent);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);

  &-logo {
    width: 16px;
    height: 16px;
  }
}

/* ---------- Timeline ---------- */
.cs-timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  list-style: none;
  width: 100%;

  @include mixins.mq("lg") {
    flex-direction: row;
    gap: var(--space-xs);
  }
}

.cs-step {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  position: relative;

  @include mixins.mq("lg") {
    flex: 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-sm);
  }

  &-node {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    color: var(--color-accent-400);
    background-color: var(--color-grayscale-500);
    border: var(--stroke-md) solid color-mix(in srgb, var(--color-accent-400) 45%, transparent);
    position: relative;
    z-index: 1;

    :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }

  @include mixins.mq("lg") {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      top: 26px;
      left: 50%;
      width: 100%;
      border-top: var(--stroke-md) dashed color-mix(in srgb, var(--color-accent-400) 40%, transparent);
      z-index: 0;
    }
  }

  &-title {
    font-size: var(--font-size-md);
    font-weight: 700;
    color: var(--color-text-400);
  }

  &-description {
    font-size: var(--font-size-xs);
    color: var(--color-text-300);
    line-height: var(--line-height-copy);
  }
}

/* ---------- Prev / Next nav ---------- */
.cs-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding-top: var(--space-lg);
  border-top: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 8%, transparent);
}

.cs-nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--color-text-400);
  --icon-color: var(--color-text-400);
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  transition: background-color 0.15s ease-in-out;

  @include mixins.hover {
    &:hover {
      background-color: color-mix(in srgb, var(--color-text-400) 6%, transparent);
    }
  }
}

.cs-nav-content {
  display: flex;
  flex-direction: column;
}

.cs-nav-next {
  margin-left: auto;
  text-align: right;
}

.cs-nav-prefix {
  font-size: var(--font-size-xs);
  color: var(--color-text-300);
}

.cs-nav-title {
  font-size: var(--font-size-md);
  font-weight: 700;
}

.cs-nav-arrow {
  width: var(--icon-size-md);
  color: var(--color-text-300);

  &-prev {
    transform: rotate(180deg);
  }
}
</style>
