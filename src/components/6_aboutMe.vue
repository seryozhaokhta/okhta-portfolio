<!-- components/6_aboutMe.vue -->

<template>
    <div class="about-me-page">
        <div class="cell">
            <h2>{{ $t('aboutMePage.greeting') }}</h2>
            <h3>{{ $t('aboutMePage.intro') }}</h3>
            <h3>{{ $t('aboutMePage.skillsTitle') }}</h3>
            <div v-for="(skill, key) in $t('aboutMePage.skills')" :key="key" class="cell">
                <h4>
                    <img :src="getIconPath(key)" :alt="skill.title" class="icon">{{ skill.title }}
                </h4>
                <p>{{ skill.description }}</p>
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
    name: "AboutMePage",
    data() {
        return {
            icons: {
                editing: editingIcon,
                interactiveDesign: interactiveDesignIcon,
                webDevelopment: webDevelopmentIcon,
                design3D: design3DIcon,
                dataVisualization: dataVisualizationIcon,
                programming: programmingIcon,
            }
        };
    },
    methods: {
        getIconPath(key) {
            return this.icons[key];
        }
    }
};
</script>

<style scoped>
.cell {
    margin-bottom: 20px;
}

.icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.nowrap {
    white-space: nowrap;
}
</style>