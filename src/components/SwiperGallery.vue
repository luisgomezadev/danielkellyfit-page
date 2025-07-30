<template>
  <swiper
    :modules="[Navigation, Pagination]"
    :navigation="true"
    :pagination="{ clickable: true }"
    loop
    class="my-swiper"
  >
    <swiper-slide v-for="(img, i) in images" :key="i">
      <img
        :src="img"
        :alt="`Slide ${i + 1}`"
        loading="lazy"
        class="w-full h-auto object-cover aspect-square rounded-lg overflow-hidden select-none"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.my-swiper {
  width: 100%;
  height: auto;
}

.swiper-pagination-bullet {
  background-color: #ccc;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #00bf63 !important;
}
.swiper-button-next,
.swiper-button-prev {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background-color: rgba(250, 250, 250, .5);
  color: #FFF;
  border: 1px solid #FFF;
  border-radius: 0.375rem;
  backdrop-filter: blur(10px);
  transition: background-color 0.2s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 191, 99, 0.1);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1rem;
  color: #FFF;
}

@media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
