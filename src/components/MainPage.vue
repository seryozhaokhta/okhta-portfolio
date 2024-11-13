<!-- MainPage.vue -->

<template>
  <main class="main">
    <IntroPage :isDarkTheme="isDarkTheme" />
    <div class="section-container">
      <div class="cell" v-for="(section, index) in sections" :key="index">
        <div class="header-container" @click.stop="navigate(section.key)">
          <h2>
            {{ t(`mainPage.sections.${section.key}.title`) }}
            <div class="icon-container" @click.stop="toggleDescription(index)">
              <img
                v-if="!section.expanded"
                class="expand-icon"
                src="@/assets/expand_more.svg"
                alt="Expand"
              />
              <img
                v-else
                class="collapse-icon"
                src="@/assets/expand_less.svg"
                alt="Collapse"
              />
            </div>
          </h2>
        </div>
        <p v-if="section.expanded" class="description">
          {{ t(`mainPage.sections.${section.key}.description`) }}
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import IntroPage from "./IntroPage.vue";

const { t } = useI18n();
const router = useRouter();
const isDarkTheme = ref(false);

const sections = ref([
  { key: "website_development", expanded: false },
  { key: "envisioning_information", expanded: false },
  { key: "cgi", expanded: false },
  { key: "educational_videos", expanded: false },
  { key: "app_drafts", expanded: false },
  { key: "about_me", expanded: false },
]);

const navigate = (key) => {
  console.log("Trying to navigate to:", key);
  router.push({ name: key });
};

const toggleDescription = (index) => {
  sections.value[index].expanded = !sections.value[index].expanded;
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
}

.section-container {
  display: grid;
  gap: 20px;
  padding: 20px;
}

.cell {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid var(--border-color-default);
  border-radius: 0;
  background: var(--background-default);
  transition: background 0.3s ease, color 0.3s ease;
}

.dark-theme .cell {
  background: var(--background-dark);
  color: var(--text-color-dark);
  border-color: var(--border-color-dark);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.icon-container {
  display: flex;
  align-items: center;
}

.description {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  line-height: 1.6;
  font-variant-ligatures: common-ligatures;
  font-feature-settings: "liga";
  overflow-wrap: break-word;
  hyphens: auto;
  text-align: balance;
}

.expand-icon,
.collapse-icon {
  width: 24px;
  height: 24px;
}

/* Стили для мобильных устройств и планшетов */
@media (max-width: 1024px) {
  .section-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Стили для десктопов */
@media (min-width: 1025px) {
  .section-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Стили для очень больших десктопов */
@media (min-width: 1440px) {
  .section-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
