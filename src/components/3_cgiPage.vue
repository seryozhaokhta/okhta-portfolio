<!-- components/3_cgiPage.vue -->

<template>
    <div class="cgi-page">
        <h1>{{ $t('cgi.title') }}</h1>
        <p>{{ $t('cgi.description') }}</p>
        <div class="gallery">
            <img class="image" v-for="image in images" :src="require('@/assets/images/3_cgiPage/' + image.src)"
                :alt="image.alt" :key="image.id" />
        </div>
    </div>
</template>

<script>
export default {
    name: "CgiPage",
    data() {
        return {
            images: [
                { id: 1, src: "1 521.png", alt: "Image 1" },
                // Добавьте другие изображения здесь
            ]
        };
    }
};
</script>


<style scoped>
.cgi-page {
    max-width: 1200px;
    /* Максимальная ширина страницы */
    margin: 0 auto;
    /* Отцентрирование */
    padding: 20px;
    /* Отступы вокруг содержимого */
}

.gallery {
    display: grid;
    /* Использование сетки для расположения изображений */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* Создание адаптивных колонок */
    gap: 20px;
    /* Отступы между элементами сетки */
}

.image {
    width: 100%;
    /* Заставляем изображение заполнять свою ячейку сетки */
    height: auto;
    /* Сохраняем пропорции изображения */
    border-radius: 8px;
    /* Небольшое скругление углов */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Добавляем тень для визуального выделения */
    object-fit: cover;
    /* Обрезка изображения по контейнеру */
}
</style>
