<script setup lang="ts">
import Layout from "../../../components/Layout.vue";
import Footer from "../../../components/Footer.vue";
import ArchiveHeader from "./ArchiveHeader.vue";
import ArchiveExplorer from "./ArchiveExplorer.vue";
import ArchiveDetail from "./ArchiveDetail.vue";
import { useArchiveExplorer } from "../composables/useArchiveExplorer";

const { selectedProject } = useArchiveExplorer();
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

.archive-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  flex: 1;
  min-width: 0;
}
</style>
