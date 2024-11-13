<!-- components/1_webDev.vue -->

<template>
  <div class="web-dev-page">
    <h1>{{ $t("webDev.title") }}</h1>
    <p>{{ $t("webDev.description") }}</p>
    <div class="projects">
      <div class="project" v-for="(project, id) in webDevProjects" :key="id">
        <h2>{{ $t(`webDev.projects.${id}.title`) }}</h2>
        <p>{{ $t(`webDev.projects.${id}.description`) }}</p>
        <img :src="getImageSrc(project.screenshot)" alt="Screenshot" />
        <img :src="getImageSrc(project.animation)" alt="Animation" />
        <a :href="'https://' + project.link" target="_blank">{{
          $t("webDev.learnMore")
        }}</a>
        <div class="tags">
          <span class="tag" v-for="tag in project.tags" :key="tag">{{
            $t(`tags.${tag}`)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const webDevProjects = computed(() => tm("webDev.projects"));

const projectImages = {
  "project1_preview.jpg": require("@/assets/images/1_webDev/project1_preview.jpg"),
  "project1_animation.gif": require("@/assets/images/1_webDev/project1_animation.gif"),
};

const getImageSrc = (imagePath) => {
  // Ищем изображение в объекте projectImages,
  // если не находим - возвращаем исходный путь
  return projectImages[imagePath.split("/").pop()] || imagePath;
};
</script>

<style scoped>
.web-dev-page {
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project {
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

.project img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

.project a {
  text-decoration: none;
  color: var(--link-color-default);
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.project a:hover {
  background-color: var(--highlight-background-color);
  color: var(--highlight-text-color);
}

.tags .tag {
  display: inline-block;
  background-color: #efefef;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 0.8em;
  transition: background-color 0.3s ease;
}

/* Styles for dark theme */
.dark-theme .project {
  background: var(--background-dark);
  color: var(--text-color-dark);
  border-color: var(--border-color-dark);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.dark-theme .project a {
  color: var(--link-color-dark);
}

.dark-theme .project a:hover {
  background-color: var(--highlight-background-color-dark);
  color: var(--highlight-text-color-dark);
}

.dark-theme .tags .tag {
  background-color: var(--background-dark);
  color: var(--text-color-dark);
}
</style>
