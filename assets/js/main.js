// async function fetchRealTimeData() {
//   const lon = -95.33;
//   const lat = 29.78;
//   const dim = 0.1;
//   const date = "2022-01-01";
//   const apiKey = "aSn4OfEAV4FJRG13XD8XetXFmwnIB4IegowI3W8I";

//   const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=${dim}&api_key=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchRealTimeData();

//// Replace with your Earthdata username, password, and the dataset URL
// const username = "zakirul011";
// const password = "#EaZakirul[011]";
// const datasetUrl =
//   "https://data.nasa.gov/resource/global-surface-temperature.json";

// async function fetchTemperatureData() {
//   const headers = new Headers();
//   headers.set("Authorization", "Basic " + btoa(username + ":" + password));

//   try {
//     const response = await fetch(datasetUrl, {
//       method: "GET",
//       headers: headers,
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }

//     const data = await response.json();
//     console.log("Temperature Data:", data);

//     // Implement how this data will impact the systems
//     // updateSystemsWithTemperature(data);
//   } catch (error) {
//     console.error("Error fetching temperature data:", error);
//   }
// }

// fetchTemperatureData();

// HERO BUTTON TO FEATURES
const hero = document.querySelector(".hero-content");
const features = hero.querySelectorAll(".feature-item");
const expBtn = hero.querySelector(".explore-btn");
const climateBtn = hero.querySelector(".climate-btn");
const climateWrap = hero.querySelector(".climate-change");
const featureArrow = hero.querySelector(".feature-arrow");
const activitiesArrow = hero.querySelector(".activities-arrow");
const systemItem = hero.querySelectorAll(".system-list-item");
const activitiesItem = hero.querySelectorAll(".activities-item");
const systemTabs = hero.querySelectorAll(".system-tab");
const activitiesTabs = hero.querySelectorAll(".activities-tab");
const featureTabs = hero.querySelectorAll(".feature-tab");
const connectionWrap = hero.querySelectorAll(".connection-wrap");

expBtn.addEventListener("click", () => {
  hero.classList.add("animation-1");
});
climateBtn.addEventListener("click", () => {
  climateWrap.classList.add("active");
});
featureArrow.addEventListener("click", () => {
  hero.classList.remove("animation-2");
  hero.classList.remove("animation-3");
  hero.classList.remove("animation-earth");
  hero.classList.remove("animation-system");
  hero.classList.remove("animation-connection");
  hero.classList.remove("animation-climate");
  hero.classList.remove("animation-activities");
  hero.classList.remove("animation-act-expand");
  hero.classList.remove("animation-nasa");
  climateWrap.classList.remove("active");
  for (let i = 0; i < systemItem.length; i++) {
    systemItem[i].classList.remove("active");
  }
  for (let i = 0; i < activitiesItem.length; i++) {
    activitiesItem[i].classList.remove("active");
  }
  for (let i = 0; i < featureTabs.length; i++) {
    featureTabs[i].classList.remove("active");
  }
});
activitiesArrow.addEventListener("click", () => {
  hero.classList.remove("animation-act-expand");
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
      hero.classList.add("animation-earth");
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

// ACTIVITIES EXPAND
activitiesItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < activitiesItem.length; i++) {
      activitiesItem[i].classList.remove("active");
    }
    for (let i = 0; i < activitiesTabs.length; i++) {
      activitiesTabs[i].classList.remove("active");
    }
    activitiesTabs[index].classList.add("active");
    item.classList.add("active");
    hero.classList.add("animation-act-expand");
  });
});

// CONNECTION
connectionWrap.forEach((wrap) => {
  let introBtn = wrap.querySelector(".connection-intro button");
  let trees = wrap.querySelectorAll(".connection-trees img");

  let system = {
    bio: {
      trees: trees.length,
      treesParcent: 50,
    },
  };

  introBtn.addEventListener("click", () => {
    wrap.classList.add("intro");
  });

  let markerWraps = wrap.querySelectorAll(".connection-marker");
  markerWraps.forEach((markerWrap) => {
    let ball = markerWrap.querySelector(".connection-ball");
    let title = markerWrap.querySelector(".connection-title");

    ball.addEventListener("click", () => {
      markerWrap.classList.toggle("active");
    });
    title.addEventListener("click", () => {
      markerWrap.classList.toggle("active-comp");
    });

    let controlComponents = markerWrap.querySelectorAll(".connection-comps li");
    controlComponents.forEach((componentWrap) => {
      let current = componentWrap.querySelectorAll(".control-current");
      let input = componentWrap.querySelector("input");
      let value = input.value;
      current.forEach((element) => {
        element.textContent = value;
      });
      input.addEventListener("input", (e) => {
        value = e.target.value;
        current.forEach((element) => {
          element.textContent = value;
        });
      });

      if (componentWrap.classList.contains("connection-control-trees")) {
        system.bio.treesParcent = e.target.value;
        input.addEventListener("input", (e) => {
          system.bio.treesParcent = e.target.value;
        });
      }

      // UPDATE FULL SYSTEM
      updateSystem();

      // FUNCTIONS
      function updateSystem() {
        system.bio.trees = parcentToCount(
          trees.length,
          system.bio.treesParcent
        );
        updateTree(system.bio.trees);
      }

      function updateTree(currentTree) {
        for (let i = 0; i < trees.length; i++) {
          trees[i].classList.remove("active");
        }
        for (let i = 0; i < currentTree; i++) {
          trees[i].classList.add("active");
        }
      }

      function parcentToCount(total, parcentValue) {
        return total * (parcentValue / 100);
      }
    });
  });
});

// FAQ AREA
const faqWrap = document.querySelectorAll(".faq-box-wrap");
faqWrap.forEach((wrap) => {
  let faqBox = wrap.querySelectorAll(".faq-box");
  faqBox.forEach((bx) => {
    let title = bx.querySelector(".faq-box-title");
    let body = bx.querySelector(".faq-box-body");
    if (bx.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    }
    title.addEventListener("click", () => {
      if (bx.classList.contains("active")) {
        bx.classList.remove("active");
        body.style.maxHeight = null;
      } else {
        for (let i = 0; i < faqBox.length; i++) {
          faqBox[i].classList.remove("active");
          faqBox[i].querySelector(".faq-box-body").style.maxHeight = null;
        }
        bx.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
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
    } else {
      area.classList.remove("sticky");
    }
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

  //========== CLIMATE SLIDER ==========>

  // debounce from underscore.js
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // use x and y mousewheel event data to navigate flickity
  function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
    // do not trigger a slide change if another is being animated
    if (!slick_is_animating) {
      // pick the larger of the two delta magnitudes (x or y) to determine nav direction
      var direction =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

      if (direction > 0) {
        // next slide
        slick_instance.slick("slickNext");
      } else {
        // prev slide
        slick_instance.slick("slickPrev");
      }
    }
  }

  // debounce the wheel event handling since trackpads can have a lot of inertia
  var slick_handle_wheel_event_debounced = debounce(
    slick_handle_wheel_event,
    100,
    true
  );

  // init slider
  const climateSlider = $(".climate-slider");
  climateSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    appendDots: ".climate-slider-control",
    appendArrows: ".climate-slider-control",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-angle-up"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-angle-down"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
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

  var climateSlider_is_animating = false;

  climateSlider.on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      console.log(slick);
      // console.log(slick);
      // console.log(currentSlide);
      // console.log(nextSlide);
      climateSlider_is_animating = false;
    }
  );

  climateSlider.on("beforeChange", function () {
    climateSlider_is_animating = true;
  });

  climateSlider.on("wheel", function (e) {
    e.preventDefault();
    slick_handle_wheel_event_debounced(
      e.originalEvent,
      climateSlider,
      climateSlider_is_animating
    );
  });

  //========== CLIMATE SLIDER// ==========>

  //========== img SLIDER ==========>
  $(".img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
  });
  //========== img SLIDER// ==========>

  //========== NASA SLIDER ==========>
  $(".nasa-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    infinite: false,
    appendDots: ".nasa-slider-dots",
    appendArrows: ".nasa-slider-controller",
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
  //========== NASA SLIDER// ==========>
})(jQuery);
