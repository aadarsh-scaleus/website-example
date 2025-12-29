const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reducedMotion) {
  const baseOptions = {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  };

 
  const swiper1 = new Swiper(".heroSwiper--1", {
    ...baseOptions,
    speed: 4200,
  });

  
  const swiper2 = new Swiper(".heroSwiper--2", {
    ...baseOptions,
    speed: 5200,
  });

  
  const swiper3 = new Swiper(".heroSwiper--3", {
    ...baseOptions,
    speed: 4200,
  });


  setTimeout(() => {
    swiper2.setTranslate(-140);
  }, 50);

  // Pause on hover
  const container = document.querySelector(".hero__images");

  container.addEventListener("mouseenter", () => {
    swiper1.autoplay.stop();
    swiper2.autoplay.stop();
    swiper3.autoplay.stop();
  });

  container.addEventListener("mouseleave", () => {
    swiper1.autoplay.start();
    swiper2.autoplay.start();
    swiper3.autoplay.start();
  });
}


if (window.innerWidth <= 768) {
  const heroMobileSwiper = new Swiper('.heroMobileSwiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
// Choose School Mobile Swiper
        const chooseSwiper = new Swiper('.choose__mobile-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            loop: true,
            speed: 600
        });

        // Benefits Swiper
       new Swiper(".benefits__swiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,

  navigation: {
    nextEl: ".benefits-next",
    prevEl: ".benefits-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            heroVerticalSwiper.autoplay.stop();
            heroHorizontalSwiper.autoplay.stop();
            chooseSwiper.autoplay.stop();
            benefitsSwiper.autoplay.stop();
        }
 
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
});
