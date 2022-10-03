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

  // autoplay: {
  //   delay: 4000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  // },

  effect: 'creative',
  // creativeEffect: {
  //   prev: {
  //     // will set `translateZ(-400px)` on previous slides
  //     translate: [-250, -100, 0],
  //     scale: 0.5,
  //   },
  //   next: {
  //     // will set `translateX(100%)` on next slides
  //     translate: [250, -100, 0],
  //     scale: 0.5,
  //   },
  // },

  breakpoints: {
    320: {
      effect: 'flip',
      flipEffect: {
        slideShadows: false,
      },
      spaceBetween: 60,
      speed: 900,
    },

    768: {
      effect: 'creative',
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [-250, -100, 0],
          scale: 0.5,
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: [250, -100, 0],
          scale: 0.5,
        },
      },
      spaceBetween: 60,
      speed: 1000,
    },

    1280: {
      effect: 'creative',
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [-250, -100, 0],
          scale: 0.5,
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: [250, -100, 0],
          scale: 0.5,
        },
      },
      spaceBetween: 60,
      speed: 1000,
    },
  },
});
