import Swiper from 'swiper/swiper-bundle';
// import styles bundle
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.reviews__slider', {
  // Optional parameters
  loop: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ['-125%', 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: false,
      translate: ['125%', 0, -800],
      rotate: [0, 0, 90],
    },
  },

  breakpoints: {
    320: {
      spaceBetween: 60,
      speed: 900,
    },

    768: {
      spaceBetween: 60,
      speed: 1000,
    },

    1280: {
      spaceBetween: 60,
      speed: 1000,
    },
  },
});
