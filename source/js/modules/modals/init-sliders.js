import Swiper from '../../vendor/swiper-bundle';

export function initSlider(target) {
  let swiperSlider = new Swiper(target, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: `${target}-button-next`,
      prevEl: `${target}-button-prev`,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1294: {
        slidesPerView: 4,
        spaceBetween: 40,
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
