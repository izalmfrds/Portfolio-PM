<script setup lang="ts">
import { computed } from "vue";
import NextLogo from "../../../../components/icons/NextLogo.vue";
import NodeLogo from "../../../../components/icons/NodeLogo.vue";
import PostgresLogo from "../../../../components/icons/PostgresLogo.vue";
import RedisLogo from "../../../../components/icons/RedisLogo.vue";
import TypescriptLogo from "../../../../components/icons/TypescriptLogo.vue";
import TailwindLogo from "../../../../components/icons/TailwindLogo.vue";
import VercelLogo from "../../../../components/icons/VercelLogo.vue";
import GolangLogo from "../../../../components/icons/GolangLogo.vue";
import FigmaLogo from "../../../../components/icons/FigmaLogo.vue";
import DesignIcon from "../../../../components/icons/DesignIcon.vue";
import MiroLogo from "../../../../components/icons/MiroLogo.vue";
import UserIcon from "../../../../components/icons/UserIcon.vue";
import WireframeIcon from "../../../../components/icons/WireframeIcon.vue";
import PrototypeIcon from "../../../../components/icons/PrototypeIcon.vue";
import ClickupLogo from "../../../../components/icons/ClickupLogo.vue";
import AnalyticsIcon from "../../../../components/icons/AnalyticsIcon.vue";
import SearchIcon from "../../../../components/icons/SearchIcon.vue";
import SeoIcon from "../../../../components/icons/SeoIcon.vue";

import type { CaseStudyTechIcon } from "../../../../content/types";

const { icon } = defineProps<{ icon: CaseStudyTechIcon }>();

const logos = {
  next: { component: NextLogo, color: "#ffffff" },
  node: { component: NodeLogo, color: "#8cc84b" },
  postgresql: { component: PostgresLogo, color: "#6aa6d6" },
  redis: { component: RedisLogo, color: "#ff4438" },
  golang: { component: GolangLogo, color: "#00add8" },
  typescript: { component: TypescriptLogo, color: "#3a8eea" },
  tailwind: { component: TailwindLogo, color: "#38bdf8" },
  vercel: { component: VercelLogo, color: "#ffffff" },
  figma: { component: FigmaLogo, color: "#f24e1e" },
  design: { component: DesignIcon, color: "#8b5cf6" },
  miro: { component: MiroLogo, color: "#050038" },
  user: { component: UserIcon, color: "#10b981" },
  wireframe: { component: WireframeIcon, color: "#6b7280" },
  prototype: { component: PrototypeIcon, color: "#3b82f6" },
  clickup: { component: ClickupLogo, color: "#7b68ee" },
  analytics: { component: AnalyticsIcon, color: "#f97316" },
  search: { component: SearchIcon, color: "#3b82f6" },
  seo: { component: SeoIcon, color: "#22c55e" },
} as const satisfies Record<CaseStudyTechIcon, { component: unknown; color: string }>;

const logo = computed(() => logos[icon]);
</script>

<template>
  <component :is="logo.component" class="tech-logo" :style="{ color: logo.color }" />
</template>

<style scoped lang="scss">
.tech-logo {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
