import { BaseHelpers } from "./utils/base-helpers";
import '@/css/main.css'

import Swiper from 'swiper'
import { Navigation, Autoplay, Grid } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'

// Базовые скрипты для автомастабирования и больших экранов с dpr

import { initViewport } from "@/js/utils/viewport";
initViewport({
  breakpoint: 1536,
  designWidth: 1920
});


import initAutoRem from './utils/autorem';
import { getScaleFactor } from './utils/autorem'

let resizeTimeout;
let reviewsSwiper;

function applySwiperScale(swiper) {
  const scale = getScaleFactor();

  swiper.params.spaceBetween = 20 * scale;

  swiper.update();
}


const { scaleFactor, destroy } = initAutoRem({
  baseSiteWidth: 1920,
  baseFontSize: 16,
  widthFactor: 1,
  auto: true,
  edge: false,

  onUpdate: () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      if (reviewsSwiper) {
        applySwiperScale(reviewsSwiper);
      }
    }, 100);
  }
});

BaseHelpers.addLoadedClass();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();

/*======================================================================================================================
Основной js
========================================================================================================================*/
document.addEventListener('DOMContentLoaded', () => {

  reviewsSwiper = new Swiper('.reviews-slider', {
    modules: [Navigation, Autoplay, Grid],

    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'row',
    },

    spaceBetween: 20,

    navigation: {
      nextEl: '.reviews-next',
      prevEl: '.reviews-prev',
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    loop: false
  })

  applySwiperScale(reviewsSwiper);

  console.log('Start to write js here !');
})

