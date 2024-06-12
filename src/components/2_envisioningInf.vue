<!-- components/2_envisioningInf.vue -->

<template>
    <div class="envisioning-inf-page">
        <h1>{{ $t('envisioningInf.title') }}</h1>
        <p>{{ $t('envisioningInf.description') }}</p>
        <div class="posts">
            <!-- Пример поста -->
            <div class="post" v-for="post in posts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.summary }}</p>
                <a :href="post.link" target="_blank">Read more</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EnvisioningInfPage",
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: "Post 1",
                    summary: "This is a summary for Post 1.",
                    link: "http://example.com/post1"
                },
                // Добавьте другие посты здесь
            ]
        };
    }
};
</script>

<style scoped>
.envisioning-inf-page {
    /* Стили */
}

.post {
    /* Стили для поста */
}
</style>
