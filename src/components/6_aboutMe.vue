<!-- components/6_aboutMe.vue -->
 
<template>
    <div class="about-me-page">
        <div class="content">
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

<script>
import editingIcon from '@/assets/pencil200.svg';
import interactiveDesignIcon from '@/assets/bero1re.svg';
import webDevelopmentIcon from '@/assets/web200.svg';
import design3DIcon from '@/assets/cube200.svg';
import dataVisualizationIcon from '@/assets/data200.svg';
import programmingIcon from '@/assets/code200.svg';

export default {
    name: 'AboutMePage',
    data() {
        return {
            icons: [
                editingIcon,
                interactiveDesignIcon,
                webDevelopmentIcon,
                design3DIcon,
                dataVisualizationIcon,
                programmingIcon,
            ],
            skillsLength: 6,
        };
    },
    computed: {
        skills() {
            // Создаем массив заглушек, потому что реальные данные загружаются через i18n
            return Array.from({ length: this.skillsLength }, (_, i) => ({
                title: this.$t(`aboutMePage.skills.${i}.title`),
                description: this.$t(`aboutMePage.skills.${i}.description`)
            }));
        }
    },
    methods: {
        getIconPath(index) {
            return this.icons[index];
        },
    },
};
</script>

<style scoped>
.content {
    padding: 20px;
}

.skill {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-direction: column;
    /* Добавлено для выравнивания в колонку */
    text-align: left;
    /* Добавлено для выравнивания по левому краю */
}

.icon {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    /* Изменено с margin-right для выравнивания в колонку */
    transition: filter 0.3s ease;
}

.skill-text {
    flex-grow: 1;
}

.dark-theme .icon {
    filter: invert(100%);
}

h2,
h3 {
    margin-bottom: 20px;
    line-height: 1.5;
}

h4 {
    margin: 0 0 10px 0;
    font-size: 1.2rem;
}

p {
    margin: 0;
    line-height: 1.5;
}

@media (max-width: 768px) {
    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.25rem;
    }

    h4 {
        font-size: 1.1rem;
    }

    .icon {
        width: 24px;
        height: 24px;
    }
}
</style>
