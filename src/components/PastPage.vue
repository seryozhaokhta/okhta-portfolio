<!-- components/PastPage.vue -->

<template>
    <div class="past-page">
        <h1>{{ $t('pastPage.title') }}</h1>
        <p>{{ $t('pastPage.description') }}</p>
        <!-- Добавьте здесь контент страницы "past" -->
    </div>
</template>

<script>
export default {
    name: 'PastPage',
};
</script>

<style scoped>
.past-page {
    padding: 20px;
    background-color: var(--background-default);
    color: var(--text-color-default);
}

.dark-theme .past-page {
    background-color: var(--background-dark);
    color: var(--text-color-dark);
}
</style>
