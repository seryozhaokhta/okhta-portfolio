<!-- components/4_educationalVideos.vue -->
 
<template>
    <div class="educational-videos-page">
        <h1>{{ t('educationalVideos.title') }}</h1>
        <p>{{ t('educationalVideos.description') }}</p>
        <div class="videos" v-if="videos.length">
            <div class="video" v-for="video in videos" :key="video.id">
                <a :href="video.youtubeLink" target="_blank">
                    <img :src="require(`@/assets/images/4_educationalVideos/${video.imageName}`)" :alt="video.title"
                        class="preview" @load="imageLoaded(video.id)">
                </a>
                <div class="video-info">
                    <h2>
                        <a :href="video.youtubeLink" target="_blank">{{ video.title }}</a>
                    </h2>
                    <p>{{ video.description }}</p>
                </div>
            </div>
        </div>
        <p v-else>{{ t('educationalVideos.noVideos') }}</p>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const loadVideos = () => {
    const videos = tm('educationalVideos.videos');
    return videos.map(video => ({
        ...video,
        imageName: video.id === 'video1' ? 'Sumer.jpg' : 'Babylon.jpg',
        imageLoaded: false
    }));
};

const imageLoaded = (videoId) => {
    const video = videos.value.find(v => v.id === videoId);
    if (video) video.imageLoaded = true;
};

const videos = computed(() => loadVideos());

onMounted(() => {
});
</script>

<style scoped>
.videos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.video {
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
}

.preview {
    border-radius: 25px;
    width: 50%;
    height: auto;
}

.video-info {
    padding: 10px;
}

.video-info h2 {
    margin-top: 0;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
