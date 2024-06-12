<!-- components/IntroPage.vue -->

<template>
    <div class="intro-page">
        <div class="intro-content">
            <h1 class="intro-name">{{ $t('intro.preName') }}
                <span @mouseenter="hoverName(true)" @mouseleave="hoverName(false)" class="name-part">
                    <span v-if="isHovered" class="name-transition">{{ modifiedName }}</span>
                    <span v-else>{{ originalName }}</span>
                </span>{{ $t('intro.postName') }}
            </h1>
            <p class="intro-description">{{ $t('intro.welcome') }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroPage',
    data() {
        return {
            isHovered: false,
        };
    },
    computed: {
        originalName() {
            return this.$t('intro.name');
        },
        modifiedName() {
            const currentLocale = this.$i18n.locale; // Получаем текущий язык интерфейса
            if (currentLocale === 'ru') {
                return this.originalName.replace('Oхта', 'Óхта'); // Здесь латинская «О» (как и в базах), а не кириллическая!
            } else if (currentLocale === 'en') {
                return this.originalName.replace('Okhta', 'Ókhta');
            }
            return this.originalName; // Возвращаем оригинальное имя, если язык не определен
        }
    },
    methods: {
        hoverName(hover) {
            this.isHovered = hover;
        },
    },
};
</script>

<style scoped>
.intro-page {
    font-family: 'Helvetica', sans-serif;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.intro-content {
    position: absolute;
    top: 0;
    left: 20px;
    max-width: 85ch;
    padding: 1rem 0;
    opacity: 0;
    text-align: left;
    animation: fadeIn 2s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.intro-name,
.intro-description {
    color: var(--intro-text-color-default);
    transition: color 0.3s ease;
}

.dark-theme .intro-name,
.dark-theme .intro-description {
    color: var(--text-color-dark);
}

.intro-name {
    font-size: 1.9rem;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.intro-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.name-part {
    display: inline-block;
    transition: all 0.5s ease;
    will-change: transform;
    backface-visibility: hidden;
    /* пытаемся предотвратить мелькания при анимации */
    -webkit-font-smoothing: subpixel-antialiased;
}


.name-part:hover {
    transform: skewX(-14deg);
    cursor: pointer;
}

@media (max-width: 768px) {
    .intro-content {
        max-width: 40ch;
        left: 10px;
        padding: 0.5rem 0;
    }

    .intro-name {
        font-size: 1.5rem;
    }

    .intro-description {
        font-size: 0.9rem;
    }
}
</style>