var swiper = new Swiper(".slider-content", {
        slidesPerView: 2,
        spaceBetween: 25,
        loop: true,
        fade: true,
        grabCursor: true,
        pagination: {
          el: '.prof-pagination',
          clickable: true,
          dynamicBullets: true,
        },  
        navigation: {
          nextEl: '.prof-next',
          prevEl: '.prof-prev',
        },
     

      breakpoints:{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 2,
        },
      }
     });

var swiper = new Swiper('.ambientes-slider', {
        pagination: {
          el: '.amb-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.amb-next',
          prevEl: '.amb-prev',
        },
      });