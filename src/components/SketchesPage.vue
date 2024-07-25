<!-- components/SketchesPage.vue -->

<template>
    <div class="sketches-page">
        <h1>{{ $t('sketchesPage.title') }}</h1>
        <p>{{ $t('sketchesPage.description') }}</p>
    </div>
</template>

<script>
export default {
    name: 'SketchesPage',
};
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
