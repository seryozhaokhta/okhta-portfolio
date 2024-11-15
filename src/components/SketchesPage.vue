<!-- src/components/SketchesPage.vue -->

<template>
  <div class="sketches-page">
    <h1>{{ t("sketchesPage.title") }}</h1>
    <p>{{ t("sketchesPage.description") }}</p>
    <div class="sketches-grid">
      <div
        v-for="(sketch, index) in sketches"
        :key="sketch.id"
        class="sketch-card"
      >
        <h2>{{ t("sketchesPage.sketchNumber", { number: index + 1 }) }}</h2>
        <div class="sketch-iframe-container">
          <iframe
            :src="sketch.embedUrl"
            class="sketch-iframe"
            allowfullscreen
            title="Sketch"
          ></iframe>
        </div>
        <a :href="sketch.url" target="_blank" rel="noopener">
          {{ t("sketchesPage.viewOnOpenProcessing") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const sketches = ref([]);

// Функция для получения скетчей (добавление вручную)
const fetchSketches = () => {
  sketches.value = [
    {
      id: 1950042,
      embedUrl: "https://www.openprocessing.org/sketch/1950042/embed/",
      url: "https://www.openprocessing.org/sketch/1950042/",
    },
  ];
};

onMounted(() => {
  fetchSketches();
});
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

.sketches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.sketch-card {
  background-color: var(--background-default);
  border: 1px solid var(--border-color-default);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.sketch-card:hover {
  transform: translateY(-5px);
}

.dark-theme .sketch-card {
  background-color: var(--background-dark);
  border-color: var(--border-color-dark);
}

.sketch-card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.sketch-iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 10px;
}

.sketch-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.sketch-card a {
  display: inline-block;
  color: var(--link-color-default);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.sketch-card a:hover {
  color: var(--link-color-hover);
}

.dark-theme .sketch-card a {
  color: var(--link-color-dark);
}

.dark-theme .sketch-card a:hover {
  color: var(--link-color-hover-dark);
}
</style>
