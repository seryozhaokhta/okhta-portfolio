<!-- App.vue -->

<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <AppHeader @theme-toggled="isDarkTheme = !isDarkTheme" />
    <router-view :isDarkTheme="isDarkTheme" />
    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const isDarkTheme = ref(false);
    return { isDarkTheme };
  },
};
</script>

<style>
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

main {
  flex: 1;
}
</style>