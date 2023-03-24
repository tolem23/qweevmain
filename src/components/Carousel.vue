<template>
    <swiper
      :modules="modules"
      :slides-per-view="sliderPreview"
      :space-between="space"
      navigation
      :pagination="{ clickable: true }"
      class="main-caro"
    >
      <swiper-slide v-for="(item, i) in carousels" :key="i">
        <div
          class="single-slide relative bg-no-repeat  bg-center rounded-md   mx-auto min-h-[400px]"
          :style="{
            backgroundImage: 'url(' + item.img + ')',
          }"
        >
          <div
            class="container absolute pt-20  incest-0 slider-content  min-h-[50px] rounded-md flex flex-col items-start justify-start  text-white"
          >
            <div class="max-w-[300px] px-6 py-10 bg-[#6750A4]">
              <h2 v-if="item.title" class="text-2xl mb-2 font-semibold text-white">
                {{ item.title }}
              </h2>
              <p v-if="item.description" class="text-base text-white ">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        
      </swiper-slide>
      <div class="swiper-pagination-bullet mt-10  "></div>
      
    </swiper>
        

  </template>
  <script>
  // import Swiper core and required modules
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper";
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/effect-fade";
  
  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      sliderPreview: {
        type: Number,
        default: 1,
      },
      space: {
        type: Number,
        default: 0,
      },
  
      carousels: {
        type: Array,
        default: [],
      },
    },
  
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
      };
    },
  };
  </script>
  
  <style lang="scss">
.main-caro {
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-family: unset !important;
    @apply  mt-[400px];
  }
  .swiper-button-next:after {
    content: url("https://api.iconify.design/heroicons-outline/arrow-long-right.svg?color=#6750A4&width=24");
  }
  .swiper-button-prev:after {
    content: url("https://api.iconify.design/heroicons-outline/arrow-long-left.svg?color=#6750A4&width=30");
  }
  .swiper-pagination .swiper-pagination-bullet {
    height: 3px;
    @apply rounded-[1px] bg-[#6750A4] bg-opacity-100 w-[100px] md:w-[260px] ;
    &.swiper-pagination-bullet-active {
      @apply bg-[#6750A4]  ;
    }
  }
}
</style>
