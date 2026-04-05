//Swiper

var swiper = new Swiper(".product-content", {
      
      loop: true,
      loopedSlides: 7,
      speed: 800,
      grabCursor: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        280: {
          slidesPerView:1 ,
          spaceBetween: 10,
        },
        618: {
          slidesPerView:2 ,
          spaceBetween: 10,
        },
        980: {
          slidesPerView:4 ,
          spaceBetween: 15,
        },
      }
    });

    // header
    let header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      header.classList.toggle("shadow", window.scrollY > 0);
    });

    // Menu Open Close
    let menu = document.querySelector(".nav-links");
    document.querySelector("#menu-icon").onclick = () => {
      menu.classList.toggle("menu-open");
    };

    //Animation
    const animate = ScrollReveal ({
      origin: "top",
      distance: "60px",
      duration: "2500",
      delay: "400",
    });

    animate.reveal(".nav-container");
    animate.reveal(".home-text, .collection-img, .promotion-text", { origin: "left"});
    animate.reveal(".home-img, .collection-text, .promotion-img", { origin: "bottom"});
    animate.reveal(".feature,.product-box,.footer-box", { interval: "100"});

