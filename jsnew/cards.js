var swiper = new Swiper('.myswiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  // centeredSlides: true,
  // init: false,
 loop: true,
 slidesPerGroup: 1,

// autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
// },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
       slidesPerView: '1',
       spaceBetween: 20,
       freeMode: true,
      //  centeredSlides: true,
    },
    768: {
      slidesPerView: '1',
      spaceBetween: 20,
      // freeMode: true,
    },
    900: {
      slidesPerView: '2',
      spaceBetween: 20,
      // freeMode: true,
    },
    1024: {
      slidesPerView: '4',
      spaceBetween: 20,
      // freeMode: true,
    },

  }
});
