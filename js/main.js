$(window).load(function () {
  $(".preloader-container").fadeOut();
});

$(document).ready(function () {
  // main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    navigation: {
      nextEl: ".mainBanner .swiper-button-next",
      prevEl: ".mainBanner .swiper-button-prev",
    },

    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });

  //  new arrivals swiper

  const newarrivalSwiper = new Swiper(" .newArrivals .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: ".newArrivals .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".newArrivals .swiper-button-next ",
      prevEl: ".newArrivals .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  //   offersSwiper Swiper

  const specialOffersSwiper = new Swiper(" .specialOffers .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".specialOffers .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".specialOffers .swiper-button-next ",
      prevEl: ".specialOffers .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  //   bestseller Swiper swiper

  const bestsellerSwiper = new Swiper(" .bestseller .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".bestseller .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".bestseller .swiper-button-next ",
      prevEl: ".bestseller .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  //  clientsReview swiper

  const clientsReview = new Swiper(" .clients-reviews  .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".clients-reviews .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients-reviews .swiper-button-next ",
      prevEl: ".clients-reviews .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // **************************************************************************************************

  // open and close nav

  $(".closeBtn").on("click", function () {
    $("nav").removeClass("open-nav");
    $("body").removeClass("overflow-hiddden");
    $(".toTop").show();
  });

  $(".bars").on("click", function () {
    $("nav").addClass("open-nav");
    $("body").addClass("overflow-hiddden");
    $(".toTop").hide();
  });

  // Open and close search input
  $(".open-search-btn").on("click", function () {
    $(".search-item").slideToggle(200);
    $(this).children(".icon").toggleClass("fa-xmark");
  });

  // **************************************************************************************************

  // to top button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  // **************************************************************************************************

  //fixed nav

  let myHeader = document.querySelector("header"),
    prevScrollposition = $(window).scrollTop();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(myHeader).addClass("fixed-header");
    } else {
      $(myHeader).removeClass("fixed-header");
    }
    var scrollTop = $(window).scrollTop();
    prevScrollposition < scrollTop && prevScrollposition > 0
      ? myHeader.classList.add("stayTop")
      : myHeader.classList.remove("stayTop"),
      (prevScrollposition = scrollTop);
  });

  // **************************************************************************************************

  // nested menus in siebar

  if ($(window).width() <= 768) {
    $(".li-drop").click(function (e) {
      e.preventDefault();
      $(this)
        .children()
        .children()
        .children(".mega-items-parent")
        .slideToggle(300);
      $(this).children(".nav-ancor").toggleClass("nav-arrow-rotate");
      $(".li-drop")
        .not($(this))
        .children()
        .children()
        .children(".mega-items-parent")
        .slideUp(300);
      $(".li-drop")
        .not($(this))
        .children(".nav-ancor")
        .removeClass("nav-arrow-rotate");
    });

    $(".li-drop .nav-ancor").removeAttr("href");
  }

  /********************************************************************************* */

  // footer nested menu

  if ($(window).width() < 768) {
    $(".footer-title").click(function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next().slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }

  /********************************************************************************* */
});
