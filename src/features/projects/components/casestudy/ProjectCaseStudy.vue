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
import ArrowRight from "../../../../components/icons/ArrowRight.vue";
import ArrowRightLong from "../../../../components/icons/ArrowRightLong.vue";

import type { ProjectContent, ProjectPreview } from "../../../../content/types";

const { content, prevProject, nextProject } = defineProps<{
  content: ProjectContent;
  projectId: string;
  prevProject?: ProjectPreview | null;
  nextProject?: ProjectPreview | null;
}>();

const scrollToSection = (id: string) => {
  const el = document.querySelector<HTMLElement>(id);
  if (!el) return;
  if (lenis.value) {
    lenis.value.scrollTo(el, { offset: -120 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToOverview = () => scrollToSection("#cs-overview");
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
            <ArrowRight class="cs-hero-button-arrow" />
          </Button>
          <Link
            v-if="content.caseStudy.pdf"
            :href="content.caseStudy.pdf"
            external
            class="cs-hero-button"
            data-cursor="arrow-external"
          >
            <Button
              renderAs="div"
              variant="border"
              class="children-unclickable cs-hero-button-pdf"
              data-hoversound="hover"
            >
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

    <div class="cs-quick-links">
      <button
        class="cs-quick-link"
        type="button"
        data-sound="click"
        data-hoversound="hover"
        @click="scrollToSection('#cs-overview')"
      >
        <span class="cs-quick-link-icon"><FileText /></span>
        <span class="cs-quick-link-copy">
          <span class="cs-quick-link-title">{{ t("project-overview") }}</span>
          <span class="cs-quick-link-description"
            >A brief overview of the project, its objectives, challenges, and impact.</span
          >
        </span>
        <ArrowRight class="cs-quick-link-arrow" />
      </button>
      <button
        class="cs-quick-link"
        type="button"
        data-sound="click"
        data-hoversound="hover"
        @click="scrollToSection('#cs-contributions')"
      >
        <span class="cs-quick-link-icon"><UserIcon /></span>
        <span class="cs-quick-link-copy">
          <span class="cs-quick-link-title">{{ t("my-contributions") }}</span>
          <span class="cs-quick-link-description">My key responsibilities and the impact I made in this project.</span>
        </span>
        <ArrowRight class="cs-quick-link-arrow" />
      </button>
      <button
        class="cs-quick-link"
        type="button"
        data-sound="click"
        data-hoversound="hover"
        @click="scrollToSection('#cs-tech')"
      >
        <span class="cs-quick-link-icon"><CodeIcon /></span>
        <span class="cs-quick-link-copy">
          <span class="cs-quick-link-title">{{ t("tech-stack") }}</span>
          <span class="cs-quick-link-description">Technologies and tools used to build this project.</span>
        </span>
        <ArrowRight class="cs-quick-link-arrow" />
      </button>
    </div>

    <!-- Top sections -->
    <div class="cs-grid">
      <CaseStudyCard id="cs-overview" :title="t('project-overview')" class="cs-area-overview">
        <template #icon><FileText /></template>
        <p v-html="content.caseStudy.overview"></p>
      </CaseStudyCard>

      <CaseStudyCard id="cs-contributions" :title="t('my-contributions')" class="cs-area-contributions">
        <template #icon><ClipboardList /></template>
        <ul class="cs-list">
          <li v-for="item in content.caseStudy.contributions" :key="item" class="cs-list-item">
            <CircleCheck class="cs-list-icon" />
            <span v-html="item"></span>
          </li>
        </ul>
      </CaseStudyCard>

      <CaseStudyCard id="cs-tech" :title="t('tech-stack')" class="cs-area-tech">
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
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "text" "image" "meta";
  gap: var(--space-lg);
  min-height: calc(100svh - var(--height-header) - 210px);
  overflow: hidden;
  isolation: isolate;

  @include mixins.mq("md") {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);
    grid-template-areas:
      "text image"
      "meta meta";
    align-items: center;
    column-gap: clamp(24px, 5vw, 72px);
  }

  @include mixins.mq("lg") {
    min-height: calc(100svh - var(--height-header) - 150px);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }

  &::before {
    inset: 12% -18% 6% 26%;
    background:
      radial-gradient(circle at 62% 55%, color-mix(in srgb, var(--color-accent-400) 42%, transparent), transparent 42%),
      radial-gradient(circle at 44% 74%, rgba(13, 198, 255, 0.34), transparent 34%);
    filter: blur(34px);
    opacity: 0.92;
  }

  &::after {
    inset: 5% 3% 14% 36%;
    border-radius: 50%;
    border: var(--stroke-sm) solid color-mix(in srgb, var(--color-accent-400) 20%, transparent);
    opacity: 0.55;
    transform: rotate(-8deg);
  }

  &-text {
    grid-area: text;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
    max-width: 560px;
    z-index: 1;
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
    font-size: clamp(48px, 8vw, 82px);
    font-weight: 900;
    line-height: var(--line-height-title);
  }

  &-description {
    color: color-mix(in srgb, var(--color-text-400) 82%, transparent);
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

  &-button-arrow {
    width: var(--icon-size-xs);
    margin-left: var(--space-xs);
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
    min-width: 0;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      inset: 8% 1% 3% 5%;
      background: radial-gradient(
        circle at 52% 58%,
        color-mix(in srgb, var(--color-accent-400) 46%, transparent),
        transparent 58%
      );
      filter: blur(28px);
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
      width: min(100%, 820px);
      height: auto;
      max-height: 620px;
      object-fit: contain;
      border-radius: 0;
      filter: drop-shadow(0 26px 46px rgba(0, 0, 0, 0.4));
    }
  }
}

/* ---------- Meta panel ---------- */
.cs-meta {
  grid-area: meta;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-sm);
  padding: var(--space-md);
  background-color: color-mix(in srgb, var(--color-grayscale-400) 76%, transparent);
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 12%, transparent);
  border-radius: var(--radius-lg);
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-text-400) 8%, transparent);
  backdrop-filter: blur(14px);
  z-index: 2;

  @include mixins.mq("md") {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: var(--space-lg);
  }

  &-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    min-width: 0;
    padding: var(--space-xs) 0;

    @include mixins.mq("md") {
      padding: 0 var(--space-md);
      border-left: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 10%, transparent);

      &:first-child {
        border-left: 0;
        padding-left: 0;
      }
    }
  }

  &-icon {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
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

  &-text {
    min-width: 0;
  }

  &-value {
    font-size: var(--font-size-md);
    font-weight: 700;
    color: var(--color-text-400);
  }
}

.cs-quick-links {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  margin-top: calc(var(--space-md) * -1);

  @include mixins.mq("md") {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.cs-quick-link {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--space-md);
  min-height: 120px;
  padding: var(--space-lg);
  text-align: left;
  border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 10%, transparent);
  border-radius: var(--radius-lg);
  color: var(--color-text-400);
  background-color: color-mix(in srgb, var(--color-grayscale-400) 82%, transparent);
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-text-400) 7%, transparent);
  transition:
    transform 0.18s ease-in-out,
    border-color 0.18s ease-in-out,
    background-color 0.18s ease-in-out;

  @include mixins.hover {
    &:hover {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--color-accent-400) 38%, transparent);
      background-color: color-mix(in srgb, var(--color-grayscale-400) 92%, transparent);
    }
  }

  &-icon {
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: var(--radius-md);
    color: var(--color-accent-400);
    background-color: color-mix(in srgb, var(--color-accent-400) 16%, transparent);

    :deep(svg) {
      width: 25px;
      height: 25px;
    }
  }

  &-copy {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
    min-width: 0;
  }

  &-title {
    font-size: var(--font-size-xl);
    font-weight: 800;
    line-height: var(--line-height-title);
  }

  &-description {
    color: var(--color-text-300);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-copy);
  }

  &-arrow {
    width: var(--icon-size-sm);
    color: var(--color-text-300);
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
