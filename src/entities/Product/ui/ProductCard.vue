<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Product } from '../model/types';
import { AppIcon } from '@/shared/ui'; // Используем ваши общие компоненты

const props = defineProps<{
  data: Product;
}>();

// 1. Логика смены картинок [Требование из ТЗ]
const activeImage = ref(props.data.image);

// Получаем массив всех URL из сложной структуры additionalImages
const allImages = computed(() => {
  const additional = props.data.additionalImages.additionalImages || {};
  return [
    props.data.image,
    ...Object.values(additional).filter(Boolean) as string[]
  ];
});

const handleThumbnailClick = (imgUrl: string) => {
  activeImage.value = imgUrl;
};
</script>

<template>
  <article class="product-card group relative border rounded-lg p-4 hover:shadow-xl transition-all">
    <!-- Основное изображение -->
    <div class="aspect-square overflow-hidden rounded-md mb-4 bg-gray-100">
      <img
        :src="activeImage"
        :alt="data.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Дополнительные картинки (thumbnails) [Требование из ТЗ] -->
    <div class="flex gap-2 mb-4 overflow-x-auto pb-2">
      <img
        v-for="img in allImages"
        :key="img"
        :src="img"
        @click="handleThumbnailClick(img)"
        class="w-12 h-12 border rounded cursor-pointer object-cover hover:border-black transition-colors"
        :class="{ 'border-black': activeImage === img }"
      />
    </div>

    <!-- Информация о товаре -->
    <div class="space-y-1">
      <h3 class="text-base font-medium text-gray-900 line-clamp-2">{{ data.title }}</h3>
      <p class="text-lg font-bold text-blue-600">${{ data.price }}</p>

      <!-- Рейтинг (пока статичный, так как в JSON нет массива reviews) -->
      <div class="flex items-center gap-1">
        <AppIcon name="search" class="w-4 h-4 text-yellow-400" />
        <span class="text-sm text-gray-500">4.5</span>
      </div>
    </div>

    <!-- СЛОТЫ ДЛЯ ФИЧ (Избранное, Глаз, Корзина) [Принцип FSD] -->
    <div class="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <slot name="favorite-button"></slot>
      <slot name="quick-view"></slot>
    </div>

    <div class="mt-4">
      <slot name="actions"></slot>
    </div>
  </article>
</template>
