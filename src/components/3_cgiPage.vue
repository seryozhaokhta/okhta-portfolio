<!-- components/3_cgiPage.vue -->

<template>
  <div class="cgi-page">
    <h1>{{ $t("cgi.title") }}</h1>
    <p>{{ $t("cgi.description") }}</p>
    <div class="gallery">
      <img
        class="image"
        v-for="image in images"
        :src="require('@/assets/images/3_cgiPage/' + image.src)"
        :alt="image.alt"
        :key="image.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([{ id: 1, src: "1 521.png", alt: "Image 1" }]);
</script>

<style scoped>
.cgi-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}
</style>
