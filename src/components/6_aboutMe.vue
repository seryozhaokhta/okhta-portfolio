<!-- components/6_aboutMe.vue -->

<template>
    <div class="about-me-page">
        <div class="content">
            <img src="@/assets/images/ansiktet mitt.jpg" alt="Моё фото" class="profile-picture">
            <h2>{{ $t('aboutMePage.greeting') }}</h2>
            <h3>{{ $t('aboutMePage.intro') }}</h3>
            <h3>{{ $t('aboutMePage.skillsTitle') }}</h3>
            <div v-for="(skill, index) in skills" :key="index" class="skill">
                <img :src="getIconPath(index)" :alt="skill.title" class="icon" />
                <div class="skill-text">
                    <h4>{{ $t(`aboutMePage.skills.${index}.title`) }}</h4>
                    <p>{{ $t(`aboutMePage.skills.${index}.description`) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import editingIcon from '@/assets/pencil200.svg';
import interactiveDesignIcon from '@/assets/bero1re.svg';
import webDevelopmentIcon from '@/assets/web200.svg';
import design3DIcon from '@/assets/cube200.svg';
import dataVisualizationIcon from '@/assets/data200.svg';
import programmingIcon from '@/assets/code200.svg';

const { t } = useI18n();
const icons = [
    editingIcon,
    interactiveDesignIcon,
    webDevelopmentIcon,
    design3DIcon,
    dataVisualizationIcon,
    programmingIcon,
];
const skillsLength = 6;

const skills = computed(() =>
    Array.from({ length: skillsLength }, (_, i) => ({
        title: t(`aboutMePage.skills.${i}.title`),
        description: t(`aboutMePage.skills.${i}.description`)
    }))
);

const getIconPath = (index) => {
    return icons[index];
};
</script>

<style scoped>
.about-me-page {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: var(--background-default);
    color: var(--text-color-default);
    border-radius: 8px;
}

.content {
    text-align: left;
}

.skill {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.icon {
    width: 48px;
    height: 48px;
    margin-right: 1rem;
    transition: transform 0.2s ease;
}

.icon:hover {
    transform: scale(1.1);
}

.skill-text {
    flex-grow: 1;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
}

p {
    line-height: 1.6;
}

.profile-picture {
    width: 200px;
    height: auto;
    border-radius: 50%;
    display: block;
    margin: 0 auto 2rem auto;
}

.dark-theme .about-me-page {
    background-color: var(--background-dark);
    color: var(--text-color-dark);
}

.dark-theme .icon {
    filter: invert(100%);
}

@media (max-width: 768px) {
    .about-me-page {
        padding: 1rem;
    }

    .skill {
        flex-direction: column;
        align-items: flex-start;
    }

    .icon {
        width: 32px;
        height: 32px;
        margin-right: 0;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.25rem;
    }

    .profile-picture {
        width: 150px;
        margin: 0 auto 1.5rem auto;
    }
}
</style>
