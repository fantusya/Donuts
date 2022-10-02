const swiper = new Swiper('.swiper', {
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

  //   effect: 'creative',
  //   creativeEffect: {
  //     prev: {
  //       // will set `translateZ(-400px)` on previous slides
  //       translate: [-200, -50, 0],
  //     },
  //     next: {
  //       // will set `translateX(100%)` on next slides
  //       translate: [200, -50, 0],
  //     },
  //   },

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
      spaceBetween: 100,
      speed: 1400,
    },
  },
});
