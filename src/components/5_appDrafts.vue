<!-- components/5_appDrafts.vue -->

<template>
    <div class="app-drafts-page">
        <h1>{{ $t('appDrafts.title') }}</h1>
        <p>{{ $t('appDrafts.description') }}</p>
        <div class="widgets">
            <div v-for="widget in widgets" :key="widget.name" class="widget">
                <img :src="widget.icon" :alt="widget.name + ' icon'" class="widget-icon" />
                <h2 class="widget-title">{{ widget.name }}</h2>
                <p class="widget-description">{{ widget.description }}</p>
                <img :src="widget.screenshot" :alt="widget.name + ' screenshot'" class="widget-screenshot" />
                <p class="widget-status">{{ $t('appDrafts.status') }}: {{ widget.status }}</p>
                <ul class="widget-features">
                    <li v-for="(feature, i) in widget.features" :key="i">{{ feature }}</li>
                </ul>
                <a :href="widget.demoLink" target="_blank" class="widget-demo-link">{{ $t('appDrafts.demoLinkText', {
                    defaultValue: 'Demo Link'
                }) }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "appDrafts",
    data() {
        return {
            widgets: this.getWidgets()
        };
    },
    methods: {
        getWidgets() {
            // Предполагается, что данные виджетов берутся из локализованных сообщений
            return this.$i18n.messages[this.$i18n.locale].appDrafts.widgets;
        }
    }
};
</script>

<style scoped>
.app-drafts-page {
    padding: 20px;
}

.widgets {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.widget {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.widget:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.widget-icon,
.widget-screenshot {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.widget-title {
    font-size: 1.5em;
    margin-top: 10px;
}

.widget-description {
    margin: 10px 0;
}

.widget-status {
    font-weight: bold;
    margin: 10px 0;
}

.widget-features {
    list-style-type: disc;
    margin: 10px 0;
    padding-left: 20px;
}

.widget-demo-link {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.2s;
}

.widget-demo-link:hover {
    background-color: #0056b3;
}
</style>



