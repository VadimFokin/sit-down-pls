import Swiper from 'swiper/bundle';

const heroSwiper = document.querySelector('.hero__swiper');
if (heroSwiper) {
  const swiper = new Swiper(heroSwiper, {
    loop: true,
    effect: "fade",
    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
    },
  });
}

const specialSwiper = document.querySelector('.special__swiper');
if (specialSwiper) {
  const swiperSpecial = new Swiper(specialSwiper, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.special__btn-next',
      prevEl: '.special__btn-prev',
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 31,
        slidesPerGroup: 2,
      },
      1021: {
        slidesPerView: 3,
        spaceBetween: 31,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        slidesPerGroup: 3,
      }
    },
  });
}

const helpfulSwiper = document.querySelector('.helpful__swiper');
if (helpfulSwiper) {
  const swiperHelpful = new Swiper(helpfulSwiper, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },

    breakpoints: {
      586: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      930: {
        slidesPerView: 3,
      },
      1335: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      }
    },
  });
}

const sofaImages = document.querySelector('.sofa-images-slider');
if (sofaImages) {
  const sofaSlider = new Swiper('.sofa-images-nav', {
    direction: 'horizontal',
    spaceBetween: 28,
    slidesPerView: 2.5,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      586: {
        direction: 'vertical',
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1021: {
        direction: 'horizontal',
        slidesPerView: 3.7,
        spaceBetween: 38,
      },
      1335: {
        slidesPerView: 4,
      }
    },
  });

  const sofaSlidesNav = new Swiper(sofaImages, {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: sofaSlider,
    },
  });
}

const similar = document.querySelector('.similar-swiper')
if (similar) {
  const swiperSimilar = new Swiper(similar, {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.similar__btn-next',
      prevEl: '.similar__btn-prev',
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
      },
      1021: {
        slidesPerView: 3,
        spaceBetween: 31,
        slidesPerGroup: 2,
      },
      1335: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        slidesPerGroup: 1,
      }
    },
  });
}

const modalSlider = document.querySelector('.modal-slider');
if (modalSlider) {
  const modalSliderNav = new Swiper('.modal-slider-nav', {
    direction: 'horizontal',
    spaceBetween: 78,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.modal-slider-nav__btn--next',
      prevEl: '.modal-slider-nav__btn--prev',
    },

    breakpoints: {
      586: {
        slidesPerView: 2,
        spaceBetween: 78,
      },
      900: {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 78,
      },
      1335: {
        slidesPerView: 4,
      }
    },
  });

  const sofaSlidesNav = new Swiper(modalSlider, {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: modalSliderNav,
    },

    breakpoints: {
      586: {
        spaceBetween: 32,
      },
      1021: {
        spaceBetween: 78,
      },
      1335: {
        spaceBetween: 10,
        slidesPerView: 1,
      }
    },
  });
}

const catalogSwiper = document.querySelector('.catalog__swiper');
if (catalogSwiper) {
  const gallerySlider = new Swiper(catalogSwiper, {
    slidesPerView: 2,
    slidesPerGroup: 2,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    grid: {
      rows: 3
    },

    spaceBetween: 16,
    pagination: {
      el: ".catalog__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    breakpoints: {
      596: {
        spaceBetween: 32
      },
      1020: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 3
        },
        spaceBetween: 32
      }
    },

    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }
  });
}

