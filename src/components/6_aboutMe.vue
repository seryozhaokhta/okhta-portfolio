<!-- components/6_aboutMe.vue -->

<template>
    <div class="about-me-page">
        <div class="cell">
            <h2>{{ $t('aboutMePage.greeting') }}</h2>
            <h3>{{ $t('aboutMePage.intro') }}</h3>
            <h3>{{ $t('aboutMePage.skillsTitle') }}</h3>
            <div v-for="(skill, index) in skills" :key="index" class="skill-cell">
                <h4>
                    <img :src="getIconPath(index)" :alt="skill.title" class="icon" />{{
                        $t(`aboutMePage.skills.${index}.title`) }}
                </h4>
                <p>{{ $t(`aboutMePage.skills.${index}.description`) }}</p>
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
.cell {
    margin-bottom: 20px;
}

.skill-cell {
    display: flex;
    align-items: center;
    /* Добавили для выравнивания иконки с текстом */
    margin-bottom: 20px;
}

.icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}
</style>