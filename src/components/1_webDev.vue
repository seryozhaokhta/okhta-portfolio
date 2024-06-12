<!-- components/1_webDev.vue -->

<template>
    <div class="web-dev-page">
        <h1>{{ $t('webDev.title') }}</h1>
        <p>{{ $t('webDev.description') }}</p>
        <div class="projects">
            <div class="project" v-for="project in projects" :key="project.id">
                <h2>{{ $t(`webDev.projects.${project.id}.title`) }}</h2>
                <p>{{ $t(`webDev.projects.${project.id}.description`) }}</p>
                <img :src="project.screenshot" alt="Screenshot" />
                <img :src="project.animation" alt="Animation" />
                <a :href="'https://' + project.link" target="_blank">{{ $t('webDev.learnMore') }}</a>
                <div class="tags">
                    <span class="tag" v-for="tag in project.tags" :key="tag">{{ $t(`tags.${tag}`) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WebDevPage",
    data() {
        return {
            projects: [
                {
                    id: "project1",
                    title: "webDev.projects.project1.title",
                    description: "webDev.projects.project1.description",
                    screenshot: require("@/assets/images/1_webDev/project1_preview.jpg"),
                    animation: require("@/assets/images/1_webDev/project1_animation.gif"),
                    link: "greenhouse-react.vercel.app",
                    tags: ["HTML", "CSS", "JavaScript"]
                },
                // Добавьте другие проекты здесь
            ]
        };
    }
};
</script>

<style scoped>
.web-dev-page {
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

/* Стили для темной темы */
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