<!-- App.vue -->

<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <AppHeader @theme-toggled="toggleTheme" />
    <div class="content">
      <router-view :isDarkTheme="isDarkTheme" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const isDarkTheme = ref(localStorage.getItem('theme') === 'dark');

    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
    };

    watch(isDarkTheme, (newVal) => {
      document.body.className = newVal ? 'dark-theme' : '';
    });

    return { isDarkTheme, toggleTheme };
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 70px;
}

.content {
  flex: 1;
}
</style>
