window.addEventListener('load', function () {

  // 메인 캐러셀 슬릭
  {

    let carouselIndexItem = document.querySelectorAll('.carousel-box .item');
    let countCarouseIndexItem = Number(carouselIndexItem.length);
    let slickCount = countCarouseIndexItem - 1;
    console.log($('.main-slick'))
    if (document.querySelector('.main-slick')) {
      $('.main-slick').slick({
        centerMode: true,
        dots: true,
        appendDots: ".slick-list",
        appendArrows: ".slick-list",
        dotsClass: "custom-dot",
        asNavFor: '.carousel-box',
        centerPadding: '230px',
        focusOnSelect: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              centerPadding: '100px',
            }
          },
          {
            breakpoint: 1055,
            settings: {
              centerPadding: '50px',
            }
          },
          {
            breakpoint: 777,
            settings: {
              centerPadding: 0,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.carousel-box').slick({
        slidesToShow: slickCount,
        asNavFor: '.slick',
        infinite: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1055,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 777,
            settings: {
              slidesToShow: 3,
            }
          },

        ]
      });

      // 메인 캐러셀 기타 함수

      let currentIndex = 0;
      let carouselIndexItem = document.querySelectorAll('.main_banner .carousel-box .item');
      let slickIndexItem = document.querySelectorAll('.main_banner .custom-dot li');

      function initArrowCarousel() {
        let slickPrevArrow = document.querySelector('.main_banner .slick-prev');
        let slickNextArrow = document.querySelector('.main_banner .slick-next');
        let customLeftArrow = document.querySelector('.main_banner .arrow-left');
        let customRightArrow = document.querySelector('.main_banner .arrow-right');

        customLeftArrow.addEventListener('click', () => slickPrevArrow.click())
        customRightArrow.addEventListener('click', () => slickNextArrow.click())
      }

      function activeIndexCarousel() {
        for (let i = 0; i < slickIndexItem.length; i++) {
          if (carouselIndexItem[i].classList.contains('slick-active')) {
            carouselIndexItem[i].classList.add('active')
          }
        }
      }

      function calCurrentIndex() {
        $('.slick').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
          currentIndex = nextSlide;
          activeIndexCarousel()
        })
      }

      function init() {
        initArrowCarousel();
        calCurrentIndex();
      }

      init()
    }
  }

  // 월령별 가이드 캐러셀
  {
    if (document.querySelector('.second-slick')) {
      $('.second-slick').slick({
        dots: true,
        swipeToSlide: true,
        dotsClass: "baby-custom-dot",
        fade: true,
        speed: 500,
      });

      let currentIndex = 0;
      let customBabyBadges = document.querySelectorAll('.baby_guide_badege_btn');
      let cusstomMobileBabyBadges = document.querySelectorAll('.m_baby_guide_badege_btn')
      let slickBabyIndex = document.querySelectorAll('.baby-custom-dot li');

      function initArrowCarousel() {
        let slickPrevArrow = document.querySelector('.babyGuide_carousel .slick-prev');
        let slickNextArrow = document.querySelector('.babyGuide_carousel .slick-next');
        let customLeftArrow = document.querySelector('.babyGuide_carousel .arrow-left');
        let customRightArrow = document.querySelector('.babyGuide_carousel .arrow-right');

        customLeftArrow.addEventListener('click', () => slickPrevArrow.click())
        customRightArrow.addEventListener('click', () => slickNextArrow.click())
      }

      function initBadgeEvent() {
        // 웹
        for (let i = 0; i < customBabyBadges.length; i++) {
          customBabyBadges[i].addEventListener('click', () => {
            slickBabyIndex[i].click();
          })
        }
        // 모바일
        for (let i = 0; i < cusstomMobileBabyBadges.length; i++) {
          cusstomMobileBabyBadges[i].addEventListener('click', () => {
            slickBabyIndex[i].click();
          })
        }
      }

      function activeBadge(index) {
        // 웹
        for (let i = 0; i < customBabyBadges.length; i++) {
          customBabyBadges[i].classList.remove('active')
        }
        customBabyBadges[index].classList.add('active')
        // 모바일
        for (let i = 0; i < cusstomMobileBabyBadges.length; i++) {
          cusstomMobileBabyBadges[i].classList.remove('active')
        }
        cusstomMobileBabyBadges[index].classList.add('active')
      }

      $('.second-slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        currentIndex = nextSlide;
        activeBadge(currentIndex)
      });


      function init() {
        initArrowCarousel()
        initBadgeEvent()
      }
      init()
    }
  }

  // 중간 배너 캐러셀
  {
    if (document.querySelector('.mini_carousel_box')) {
      $('.mini_carousel_box').slick({
        swipeToSlide: true,
        dotsClass: "baby-custom-dot",
        speed: 500,
      });

      let customPrevButton = document.querySelector('.mc_prev_btn');
      let customNextButton = document.querySelector('.mc_next_btn');
      let slickPrevButton = document.querySelector('.mini_carousel .slick-prev');
      let slickNextButton = document.querySelector('.mini_carousel .slick-next');



      function initArrow() {
        customPrevButton.addEventListener('click', () => slickPrevButton.click())
        customNextButton.addEventListener('click', () => slickNextButton.click())
      }

      function init() {
        initArrow();
      }
      init()
    }
  }


  //모바일 사이드 메뉴 캐러셀
  {
    if (document.querySelector('.m__side__slick')) {
      $('.m__side__slick').slick({
        swipeToSlide: true,
        dots: true,
      });
    }
  }

  //팝업 캐러셀
  {

    let popUp = document.querySelector('.popup__background');
    let popupImgs = document.querySelectorAll('.popup__box .popup__img__slick .popup__link');
    let popupTexts = document.querySelectorAll('.popup__box .popup__text__slick .text__item');
    let popupImgCount = popupImgs.length > 3 ? 3 : popupImgs.length;
    let currentIndex = 0;
    let popupCloseBtn = document.querySelector('.popup__banner .close__button .button__img');

    if (document.querySelector('.popup__img__slick')) {
      $('.popup__img__slick').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
      });

      $('.popup__img__slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        currentIndex = nextSlide;
        popupTexts[currentIndex].click()

      });

      $('.popup__text__slick').slick({
        slidesToShow: popupImgCount,
        asNavFor: '.popup__img__slick',
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
      });

      if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', () => {
          popUp.remove()
        })
      }
    }

  }

  //사이드박스 캐러셀
  {
    if (document.querySelector('.side__slick')) {
      $('.side__slick').slick({
        dots: true,
      });

      let currnetNumberText = document.querySelector('.side__bar .current__number');
      let totalNumberText = document.querySelector('.side__bar .total__number');
      let sideCarouselCount = document.querySelectorAll('.side__bar .slick-dots li').length;
      let sideCustomLeftArrow = document.querySelector('.side__bar .left__arrow');
      let sideCustomRightArrow = document.querySelector('.side__bar .right__arrow');
      let sideLeftArrow = document.querySelector('.side__bar .slick-prev');
      let sideRightArrow = document.querySelector('.side__bar .slick-next');

      $('.side__slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        currnetNumberText.textContent = nextSlide + 1;
      })

      function sideCarouselInit() {
        totalNumberText.textContent = sideCarouselCount;
        sideCustomLeftArrow.addEventListener('click', () => sideLeftArrow.click())
        sideCustomRightArrow.addEventListener('click', () => sideRightArrow.click())
      }
      sideCarouselInit()
    }
  }
  console.log('carousel.js end')
})