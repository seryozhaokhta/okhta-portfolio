<!-- components/2_envisioningInf.vue -->

<template>
    <div class="envisioning-inf-page">
        <h1>{{ t('envisioningInf.title') }}</h1>
        <p>{{ t('envisioningInf.description') }}</p>
        <div class="posts">
            <div class="post" v-for="post in posts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.summary }}</p>
                <a :href="post.link" target="_blank">Read more</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();
const posts = computed(() => tm('envisioningInf.posts'));
</script>

<style scoped>
.envisioning-inf-page {
    border: 1px solid #ffffff00;
}

.post {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.post h2 {
    margin-top: 0;
}

.post p {
    margin: 10px 0;
}

.post a {
    color: #007bff;
    text-decoration: none;
}

.post a:hover {
    text-decoration: underline;
}
</style>
