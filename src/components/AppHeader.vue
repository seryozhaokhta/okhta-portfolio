<!-- components/AppHeader.vue -->

<template>
    <header>
        <div class="container">
            <div class="left">
                <router-link to="/" class="nav-link logo-link">
                    <svg class="logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 12C6.6274 12 12 6.6274 12 0C12 0 12 0 12 0C12 6.62742 17.3726 12 24 12C17.3737 12 12.0018 17.3707 12 23.9966C11.9981 17.3707 6.62627 12 0 12Z" />
                    </svg>
                </router-link>
            </div>
            <div class="center">
                <router-link to="/past" class="nav-link">
                    <img :src="require('../assets/arrow_lf.svg')" alt="Arrow" class="icon"> {{ $t('nav.past') }}
                </router-link>
                <router-link to="/today" class="nav-link">
                    <img :src="require('../assets/arrow_lf.svg')" alt="Arrow" class="icon"> {{ $t('nav.today') }}
                </router-link>
                <router-link to="/sketches" class="nav-link">
                    <img :src="require('../assets/arrow_lf.svg')" alt="Arrow" class="icon"> {{ $t('nav.sketches') }}
                </router-link>
            </div>
            <div class="right">
                <button class="toggle-button" @click="toggleTheme">
                    <img :src="isDarkTheme ? require('../assets/moon.svg') : require('../assets/sun.svg')" alt="Theme"
                        class="theme-icon">
                </button>
                <div class="language-toggle desktop-only">
                    <button @click="setLanguage('ru')" :class="{ 'active': currentLanguage === 'ru' }">Russian</button>
                    <button @click="setLanguage('en')" :class="{ 'active': currentLanguage === 'en' }">English</button>
                </div>
                <button class="burger-menu mobile-only" @click="toggleMenu">
                    <span :class="{ 'active': menuActive }"></span>
                    <span :class="{ 'active': menuActive }"></span>
                    <span :class="{ 'active': menuActive }"></span>
                </button>
            </div>
        </div>
        <div class="mobile-menu" :class="{ 'active': menuActive }">
            <div class="language-toggle">
                <button @click="setLanguage('ru')" :class="{ 'active': currentLanguage === 'ru' }">Russian</button>
                <button @click="setLanguage('en')" :class="{ 'active': currentLanguage === 'en' }">English</button>
            </div>
        </div>
    </header>
</template>


<script>
export default {
    data() {
        return {
            isDarkTheme: false,
            currentLanguage: localStorage.getItem('locale') || 'en',
            menuActive: false,
        };
    },
    watch: {
        '$i18n.locale'(newLocale) {
            this.currentLanguage = newLocale;
        }
    },
    methods: {
        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            this.$emit('theme-toggled');
            localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
        },
        setLanguage(lang) {
            this.currentLanguage = lang;
            this.$i18n.locale = lang;
            localStorage.setItem('locale', lang);
        },
        toggleMenu() {
            this.menuActive = !this.menuActive;
        },
    },
    created() {
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
    },
};
</script>

<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: var(--background-default);
    color: var(--text-color-default);
    padding: 20px 0;
    border-bottom: 1px solid var(--border-color-default);
}

.dark-theme header {
    background-color: var(--background-dark);
    color: var(--text-color-dark);
    border-bottom: 1px solid var(--border-color-dark);
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;
}

.left,
.center,
.right {
    display: flex;
    align-items: center;
}

.left {
    justify-content: flex-start;
}

.center {
    justify-content: center;
}

.right {
    justify-content: flex-end;
}

.nav-link {
    display: flex;
    align-items: center;
    margin-right: 30px;
    text-decoration: none;
    color: var(--text-color-default);
    font-weight: normal;
    transition: color 0.3s;
}

.nav-link:hover {
    color: var(--text-color-hover);
}

.icon {
    width: 10px;
    height: auto;
    margin-right: 6px;
}

.toggle-button {
    background: none;
    border: none;
    cursor: pointer;
}

.theme-icon {
    width: 24px;
    height: 24px;
}

.language-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
    background-color: #e0e0e0;
    border-radius: 15px;
    padding: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.language-toggle button {
    background: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
    transition: color 0.3s, background-color 0.3s;
}

.language-toggle button.active {
    background-color: var(--highlight-background-color);
    color: var(--highlight-text-color);
}

.language-toggle button:not(.active):hover {
    background-color: var(--hover-background-color);
    color: var(--hover-text-color);
}

.burger-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    cursor: pointer;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
}

.burger-menu span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #333;
    border-radius: 1px;
    transition: all 0.3s;
    transform-origin: 1px;
}

.burger-menu span.active:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
    width: 12px;
    height: 1px;
    border-radius: 0;
}

.burger-menu span.active:nth-child(2) {
    opacity: 0;
    pointer-events: none;
}

.burger-menu span.active:nth-child(3) {
    transform: rotate(-45deg) translate(2px, -2px);
    width: 12px;
    height: 1px;
    border-radius: 0;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    top: 90px;
    left: 0;
    width: auto;
    padding: 10px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
    display: flex;
}

.mobile-nav-link,
.mobile-social-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    margin-bottom: 10px;
}

.desktop-only {
    display: flex;
    align-items: center;
}

.dark-theme .language-toggle {
    background-color: #444;
}

.dark-theme .language-toggle button.active {
    background-color: var(--highlight-background-color-dark);
    color: var(--highlight-text-color-dark);
}

.dark-theme .language-toggle button:not(.active):hover {
    background-color: var(--hover-background-color-dark);
    color: var(--hover-text-color-dark);
}

@media (max-width: 768px) {
    .nav-link {
        display: block;
        font-size: 12px;
    }

    .icon {
        width: 12px;
        height: 12px;
    }

    .desktop-only {
        display: none;
    }
}

@media (min-width: 769px) {
    .mobile-only {
        display: none;
    }
}
</style>
