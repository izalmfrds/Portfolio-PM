<script setup lang="ts">
import { computed } from "vue";
import ClipboardList from "../../../../components/icons/ClipboardList.vue";
import PencilRuler from "../../../../components/icons/PencilRuler.vue";
import CodeIcon from "../../../../components/icons/CodeIcon.vue";
import CircleCheck from "../../../../components/icons/CircleCheck.vue";
import Rocket from "../../../../components/icons/Rocket.vue";

import type { CaseStudyStepIcon } from "../../../../content/types";

const { icon } = defineProps<{ icon: CaseStudyStepIcon }>();

const icons = {
  planning: ClipboardList,
  design: PencilRuler,
  development: CodeIcon,
  testing: CircleCheck,
  deployment: Rocket,
} as const satisfies Record<CaseStudyStepIcon, unknown>;

const component = computed(() => icons[icon]);
</script>

<template>
  <component :is="component" class="step-icon" />
</template>

<style scoped lang="scss">
.step-icon {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
