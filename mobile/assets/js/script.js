var swiperTvstreaming = new Swiper(".grup-streaming", { slidesPerView: "auto" }),
      mySwiper = new Swiper(".mySwiper", {
         loop: !0,
         speed: 1e3,
         effect: "coverflow",
         grabCursor: !0,
         centeredSlides: !0,
         slidesPerView: 1.24,
         coverflowEffect: { rotate: 0, stretch: 232, depth: 200, modifier: 1, slideShadows: !1 },
         breakpoints: {
               360: { slidesPerView: 1.27, coverflowEffect: { stretch: 230 } },
               370: { slidesPerView: 1.27, coverflowEffect: { stretch: 230 } },
               376: { slidesPerView: 1.25, coverflowEffect: { stretch: 229 } },
               385: { slidesPerView: 1.27, coverflowEffect: { stretch: 230 } },
               390: { slidesPerView: 1.28, coverflowEffect: { stretch: 230 } },
               400: { slidesPerView: 1.3, coverflowEffect: { stretch: 231 } },
               413: { slidesPerView: 1.39, coverflowEffect: { stretch: 218 } },
               414: { slidesPerView: 1.39, coverflowEffect: { stretch: 218 } },
               500: { slidesPerView: 1.34, coverflowEffect: { stretch: 283 }, modifier: 2 },
               550: { slidesPerView: 1.47, coverflowEffect: { stretch: 270 }, modifier: 2 },
               600: { slidesPerView: 1.65, coverflowEffect: { stretch: 250 }, modifier: 2 },
         },
      });
$(".burger-menu").on("click", function (e) {
   $(".top").addClass("disabled");
   });
   $(".close-menu").on("click", function (e) {
   $(".top").removeClass("disabled");
   });