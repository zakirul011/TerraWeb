// HERO BUTTON TO FEATURES
const hero = document.querySelector(".hero-content");
const features = hero.querySelectorAll(".feature-item");
const expBtn = hero.querySelector(".explore-btn");
const featureArrow = hero.querySelector(".feature-arrow");
const systemItem = hero.querySelectorAll(".system-list-item");
const systemTabs = hero.querySelectorAll(".system-tab");
const featureTabs = hero.querySelectorAll(".feature-tab");
const connectionWrap = hero.querySelectorAll(".connection");

expBtn.addEventListener("click", () => {
  hero.classList.add("animation-1");
});
featureArrow.addEventListener("click", () => {
  hero.classList.remove("animation-2");
  hero.classList.remove("animation-3");
  hero.classList.remove("animation-system");
  hero.classList.remove("animation-connection");
  hero.classList.remove("animation-climate");
  hero.classList.remove("animation-activities");
  hero.classList.remove("animation-nasa");
  for (let i = 0; i < systemItem.length; i++) {
    systemItem[i].classList.remove("active");
  }
  for (let i = 0; i < featureTabs.length; i++) {
    featureTabs[i].classList.remove("active");
  }
});

// FEATURE EXPAND
features.forEach((feature, index) => {
  feature.style.transitionDuration = 0.4 + index / 10 + "s";
  feature.addEventListener("click", () => {
    for (let i = 0; i < features.length; i++) {
      features[i].classList.remove("active");
    }
    for (let i = 0; i < featureTabs.length; i++) {
      featureTabs[i].classList.remove("active");
    }
    featureTabs[index].classList.add("active");
    feature.classList.add("active");
    if (index == 0) {
      hero.classList.add("animation-2");
    } else if (index == 1) {
      hero.classList.add("animation-2");
      hero.classList.add("animation-connection");
    } else if (index == 2) {
      hero.classList.add("animation-climate");
    } else if (index == 3) {
      hero.classList.add("animation-2");
      hero.classList.add("animation-activities");
    } else if (index == 4) {
      hero.classList.add("animation-nasa");
    }
  });
});

// SYSTEM EXPAND
systemItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < systemItem.length; i++) {
      systemItem[i].classList.remove("active");
    }
    for (let i = 0; i < systemTabs.length; i++) {
      systemTabs[i].classList.remove("active");
    }
    systemTabs[index].classList.add("active");
    item.classList.add("active");
    hero.classList.add("animation-system");
  });
});

// CONNECTION
connectionWrap.forEach((wrap) => {
  let pannel = wrap.querySelectorAll(".connection-bar");
  let content = wrap.querySelectorAll(".connection-content > div");

  let leftPannel = pannel[0].querySelectorAll("li");
  let rightPannel = pannel[1].querySelectorAll("li");

  let l, r;

  leftPannel.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < leftPannel.length; i++) {
        leftPannel[i].classList.remove("active");
      }
      for (let i = 0; i < rightPannel.length; i++) {
        rightPannel[i].classList.remove("hide");
      }

      rightPannel[index].classList.add("hide");

      btn.classList.add("active");
      l = index + 1;

      if (l && r) {
        for (let i = 0; i < content.length; i++) {
          content[i].classList.remove("active");
        }
      }

      if (wrap.querySelector(`.connection-content-${l}-${r}`)) {
        wrap
          .querySelector(`.connection-content-${l}-${r}`)
          .classList.add("active");
      } else {
        console.log(`.connection-content-${l}-${r}`);
      }
    });
  });

  rightPannel.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < rightPannel.length; i++) {
        rightPannel[i].classList.remove("active");
      }

      for (let i = 0; i < leftPannel.length; i++) {
        leftPannel[i].classList.remove("hide");
      }

      leftPannel[index].classList.add("hide");

      btn.classList.add("active");
      r = index + 1;

      if (l && r) {
        for (let i = 0; i < content.length; i++) {
          content[i].classList.remove("active");
        }
      }
      if (wrap.querySelector(`.connection-content-${l}-${r}`)) {
        wrap
          .querySelector(`.connection-content-${l}-${r}`)
          .classList.add("active");
      } else {
        console.log(`.connection-content-${l}-${r}`);
      }
    });
  });

  for (let i = 0; i < leftPannel.length; i++) {
    leftPannel[i].addEventListener("click", () => {});
  }
});

//========== PRELOADER ==========>
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
//========== PRELOADER// ==========>

//========== STICKY HEADER, BACK TO TOP ==========>
const headerArea = document.querySelectorAll(".header-area");
headerArea.forEach((area) => {
  let height;
  let scrollUp = document.querySelector(".scroll-up");
  window.addEventListener("resize", () => {
    addHeaderHeight();
  });
  window.addEventListener("load", () => {
    addHeaderHeight();
  });
  function addHeaderHeight() {
    height = area.clientHeight;
    document.documentElement.style.setProperty("--header-h", height + "px");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > height) {
      area.classList.add("sticky");
      scrollUp.classList.add("sticky");
    } else {
      area.classList.remove("sticky");
      scrollUp.classList.remove("sticky");
    }
  });
  scrollUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
//========== STICKY HEADER, BACK TO TOP// ==========>

// lottieIcon
const lottieIcon = document.querySelectorAll(".lottie-icon");

lottieIcon.forEach((icon) => {
  let src = icon.getAttribute("src");

  let animation = bodymovin.loadAnimation({
    container: icon,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: src,
  });
  icon.addEventListener("mouseenter", function () {
    animation.play();
  });
  icon.addEventListener("mouseleave", function () {
    animation.stop();
  });
});

// // gsap
// ScrollTrigger.create({
//   trigger: ".hero-area",
//   start: "top top",
//   end: "+=1500",
//   pin: ".hero-content",
// });

// gsap.to(".hero-text", {
//   scale: 0.5,
//   xPercent: -30,
//   yPercent: 20,
//   opacity: 0,

//   scrollTrigger: {
//     trigger: ".hero-area",
//     start: "top top",
//     end: "+=800",
//     scrub: 1,
//   },
// });

// // Create a timeline with a ScrollTrigger instance
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".hero-area",
//     start: "top top",
//     end: "+=1500",
//     scrub: 1,
//   },
// });

// // First animation: Scale down and move the globe slightly
// tl.fromTo(
//   ".globe",
//   {
//     scale: 2,
//   },
//   {
//     scale: 1,
//     xPercent: -5,
//     yPercent: -80,
//     duration: 1,
//     ease: "power1.inOut",
//   }
// );

// tl.to({}, { duration: 2 });

// // Second animation: Move the globe to the right after the gap
// // tl.to(".globe", {
// //   xPercent: 124,
// //   duration: 0.5,
// //   ease: "power1.inOut",
// // });

// // features aniamtion
// const featureTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".hero-area",
//     start: "500 top",
//     end: "+=1000", // Total duration combining both animations (1200px + 800px)
//     scrub: 1,
//   },
// });

// // First animation: Fade in and move elements to the left
// featureTl.fromTo(
//   ".feature-item",
//   { opacity: 0, x: 100, pointerEvents: "none" },
//   {
//     opacity: 1,
//     x: 0,
//     pointerEvents: "all",
//     stagger: 0.1,
//     duration: 1, // Adjust duration as needed
//     ease: "power1.inOut",
//   }
// );

// // featureTl.to({}, { duration: 0.5 });

// // // Reverse animation: Fade out and move elements back to the right
// // featureTl.to(".feature-item", {
// //   opacity: 0,
// //   x: 100,
// //   pointerEvents: "none",
// //   stagger: { each: 0.1, from: "end" },
// //   duration: 1, // Adjust duration as needed
// //   ease: "power1.inOut",
// // });

// // System aniamtion
// const systemTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".hero-area",
//     start: "2000 top",
//     end: "+=2500", // Total duration combining both animations (1200px + 800px)
//     scrub: 1,
//   },
// });

(function ($) {
  "use strict";

  //========== MAGNIFIC POPUP ==========>
  $(".video-btn").magnificPopup({
    type: "iframe",
  });
  $(".pop-img-btn").magnificPopup({
    type: "image",
  });
  $(".gallery-item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //========== MAGNIFIC POPUP// ==========>

  //========== ONE PAGE NAV ==========>
  var top_offset = $(".header-area").height() - 170;
  $(".mainmenu ul, .sidebar ul").onePageNav({
    scrollOffset: top_offset,
  });
  //========== ONE PAGE NAV// ==========>

  //========== SKROLLR JS ==========>
  var skrollrSetting = {
    forceHeight: false,
    smoothScrollingDuration: 500,
  };
  var s = skrollr.init(skrollrSetting);
  function doubleAction() {
    if (window.matchMedia("(max-width: 991px)").matches) {
      s.destroy();
    } else {
      s = skrollr.init(skrollrSetting);
    }
  }
  window.addEventListener("load", () => {
    doubleAction();
  });
  window.addEventListener("resize", () => {
    doubleAction();
  });
  //========== SKROLLR JS// ==========>

  //========== HERO AREA SLIDER ==========>
  function heroSlider() {
    var BasicSlider = $(".hero-slider");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".hero-slide:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.hero-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: true,
      appendArrows: ".hero-slider-wrap .slider-nav",
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
    });
    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  heroSlider();
  //========== HERO AREA SLIDER// ==========>

  //========== NASA SLIDER ==========>
  $(".nasa-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    swipeToSlide: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //========== PRODUCT SLIDER// ==========>
})(jQuery);
