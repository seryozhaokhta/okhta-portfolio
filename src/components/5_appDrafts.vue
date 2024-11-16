<!-- components/5_appDrafts.vue -->

<template>
  <div class="app-drafts-page">
    <h1>{{ $t('appDrafts.title') }}</h1>
    <p>{{ $t('appDrafts.description') }}</p>
    <div class="widgets">
      <div v-for="widget in widgets" :key="widget.name" class="widget">
        <img
          :src="widget.icon"
          :alt="`${widget.name} icon`"
          class="widget-icon"
        />
        <h2 class="widget-title">{{ widget.name }}</h2>
        <p class="widget-description">{{ widget.description }}</p>
        <img
          :src="widget.screenshot"
          :alt="`${widget.name} screenshot`"
          class="widget-screenshot"
        />
        <p class="widget-status">
          {{ $t('appDrafts.status') }}: {{ widget.status }}
        </p>
        <ul class="widget-features">
          <li v-for="(feature, i) in widget.features" :key="i">
            {{ feature }}
          </li>
        </ul>
        <a :href="widget.demoLink" target="_blank" class="widget-demo-link">{{
          $t('appDrafts.demoLinkText', {
            defaultValue: 'Demo Link',
          })
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();
const widgets = computed(() => tm('appDrafts.widgets') || []);
</script>

<style scoped>
.app-drafts-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.widgets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  background: var(--background-default);
  color: var(--text-color-default);
  border: 1px solid var(--border-color-default);
}

.widget img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

.widget a {
  text-decoration: none;
  color: var(--link-color-default);
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.widget a:hover {
  background-color: var(--highlight-background-color);
  color: var(--highlight-text-color);
}

/* Styles for dark theme */
.dark-theme .widget {
  background: var(--background-dark);
  color: var(--text-color-dark);
  border-color: var(--border-color-dark);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.dark-theme .widget a {
  color: var(--link-color-dark);
}

.dark-theme .widget a:hover {
  background-color: var(--highlight-background-color-dark);
  color: var(--highlight-text-color-dark);
}
</style>
