<!-- components/SketchesPage.vue -->

<template>
  <div class="sketches-page">
    <h1>{{ t("sketchesPage.title") }}</h1>
    <p>{{ t("sketchesPage.description") }}</p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.sketches-page {
  padding: 20px;
  background-color: var(--background-default);
  color: var(--text-color-default);
}

.dark-theme .sketches-page {
  background-color: var(--background-dark);
  color: var(--text-color-dark);
}
</style>
