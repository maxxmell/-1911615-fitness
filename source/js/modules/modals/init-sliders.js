import Swiper from '../../vendor/swiper';

export function initSlider(target) {
  let swiperSlider = new Swiper(target, {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: `${target}-button-next`,
      prevEl: `${target}-button-prev`,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  window.swiperSlider = swiperSlider;
}

export function initCarousel(target) {
  let swiperSlider = new Swiper(target, {
    slidesPerView: 1,
    navigation: {
      nextEl: `${target}-button-next`,
      prevEl: `${target}-button-prev`,
    },
  });

  window.swiperSlider = swiperSlider;
}

