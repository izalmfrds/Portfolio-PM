<script setup lang="ts">
import { watch, nextTick } from "vue";
import Layout from "../../../components/Layout.vue";
import Footer from "../../../components/Footer.vue";
import ArchiveHeader from "./ArchiveHeader.vue";
import ArchiveExplorer from "./ArchiveExplorer.vue";
import ArchiveDetail from "./ArchiveDetail.vue";
import { useArchiveExplorer } from "../composables/useArchiveExplorer";
import { lenis } from "../../../composables/useScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { selectedProject } = useArchiveExplorer();

// When the selected project changes, scroll to top instantly then let
// Lenis and ScrollTrigger recalculate the new page height.
watch(selectedProject, async () => {
  // Snap to top immediately — no smooth animation, no flicker
  if (lenis.value) {
    lenis.value.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }
  await nextTick();
  lenis.value?.resize();
  ScrollTrigger.refresh();
});
</script>

<template>
  <div class="archive-page">
    <Layout>
      <div class="archive-content">
        <div class="archive-layout">
          <ArchiveExplorer />
          <div class="archive-main">
            <ArchiveHeader />
            <ArchiveDetail :project="selectedProject" />
          </div>
        </div>
      </div>
      <Footer :withSocial="false" />
    </Layout>
  </div>
</template>

<style scoped lang="scss">
.archive-page {
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-background-400);
}

.archive-content {
  display: flex;
  flex-direction: column;
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xxxl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  width: 100%;
  max-width: var(--breakpoint-xxxl);
  margin: 0 auto;

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }
}

.archive-layout {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  width: 100%;

  @include mixins.mq("lg") {
    flex-direction: row;
    align-items: flex-start;
  }
}

:deep(.archive-explorer) {
  @include mixins.mq("lg") {
    position: sticky;
    top: var(--space-xl);
  }
}

.archive-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  flex: 1;
  min-width: 0;
}
</style>
