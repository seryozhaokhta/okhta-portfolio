<!-- components/TodayPage.vue -->

<template>
  <div class="today-page">
    <h1>{{ t('todayPage.title') }}</h1>
    <p>{{ t('todayPage.description') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.today-page {
  padding: 20px;
  background-color: var(--background-default);
  color: var(--text-color-default);
}

.dark-theme .today-page {
  background-color: var(--background-dark);
  color: var(--text-color-dark);
}
</style>
