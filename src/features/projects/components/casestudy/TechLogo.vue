<script setup lang="ts">
import { computed } from "vue";
import NextLogo from "../../../../components/icons/NextLogo.vue";
import NodeLogo from "../../../../components/icons/NodeLogo.vue";
import PostgresLogo from "../../../../components/icons/PostgresLogo.vue";
import RedisLogo from "../../../../components/icons/RedisLogo.vue";
import TypescriptLogo from "../../../../components/icons/TypescriptLogo.vue";
import TailwindLogo from "../../../../components/icons/TailwindLogo.vue";
import VercelLogo from "../../../../components/icons/VercelLogo.vue";

import type { CaseStudyTechIcon } from "../../../../content/types";

const { icon } = defineProps<{ icon: CaseStudyTechIcon }>();

const logos = {
  next: { component: NextLogo, color: "#ffffff" },
  node: { component: NodeLogo, color: "#8cc84b" },
  postgresql: { component: PostgresLogo, color: "#6aa6d6" },
  redis: { component: RedisLogo, color: "#ff4438" },
  typescript: { component: TypescriptLogo, color: "#3a8eea" },
  tailwind: { component: TailwindLogo, color: "#38bdf8" },
  vercel: { component: VercelLogo, color: "#ffffff" },
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
