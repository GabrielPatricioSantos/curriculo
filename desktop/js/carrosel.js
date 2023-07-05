const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
 },
 effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  });