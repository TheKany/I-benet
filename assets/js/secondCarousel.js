// window.addEventListener('DOMContentLoaded', function () {
//   $('.second-slick').slick({
//     dots: true,
//     swipeToSlide: true,
//     dotsClass: "baby-custom-dot",
//     fade: true,
//     speed: 500,

//   });

//   let currentIndex = 0;
//   let customBabyBadges = document.querySelectorAll('.baby_guide_badege_btn');
//   let slickBabyIndex = document.querySelectorAll('.baby-custom-dot li');

//   function initArrowCarousel() {
//     let slickPrevArrow = document.querySelector('.babyGuide_carousel .slick-prev');
//     let slickNextArrow = document.querySelector('.babyGuide_carousel .slick-next');
//     let customLeftArrow = document.querySelector('.babyGuide_carousel .arrow-left');
//     let customRightArrow = document.querySelector('.babyGuide_carousel .arrow-right');

//     customLeftArrow.addEventListener('click', () => slickPrevArrow.click())
//     customRightArrow.addEventListener('click', () => slickNextArrow.click())
//   }

//   function initBadgeEvent() {
//     for (let i = 0; i < customBabyBadges.length; i++) {
//       customBabyBadges[i].addEventListener('click', () => {
//         slickBabyIndex[i].click();
//       })
//     }
//   }

//   function activeBadge(index) {
//     for (let i = 0; i < customBabyBadges.length; i++) {
//       customBabyBadges[i].classList.remove('active')
//     }
//     customBabyBadges[index].classList.add('active')
//   }

//   $('.second-slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//     currentIndex = nextSlide;
//     activeBadge(currentIndex)
//   });


//   function init() {
//     initArrowCarousel()
//     initBadgeEvent()
//   }
//   init()
// })



// // const imgSlide = document.querySelector("#baby_guide_imgSlide");
// // const prevBtn = document.querySelector('.prev_btn');
// // const nextBtn = document.querySelector('.next_btn');

// // const secondCeroBtn = document.querySelectorAll('.second_cero_btn');
// // let scbArr = [...secondCeroBtn].map(item => item.getAttribute('id'));
// // let idx = 0;

// // secondCeroBtn.forEach(item => {
// //   item.addEventListener('click', () => {
// //     console.log(item);
// //     let btnId = item.getAttribute('id');
// //     idx = scbArr.indexOf(btnId);

// //     imgSlide.src = imgList[idx];

// //   })
// // })

// // console.log()

// // let imgList = [
// //   '../assets/image/bg01.png',
// //   '../assets/image/bg02.png',
// //   '../assets/image/bg03.png',
// //   '../assets/image/bg04.png',
// //   '../assets/image/bg05.png',
// //   '../assets/image/bg06.png',
// //   '../assets/image/bg07.png',
// //   '../assets/image/bg08.png',
// //   '../assets/image/bg09.png',
// //   '../assets/image/bg10.png',
// // ];



// // const onCLickPrevBtn = () => {
// //   idx--;
// //   imgSlide.src = imgList[idx];

// //   if(idx < 0){
// //     idx = imgList.length - 1;
// //     imgSlide.src = imgList[idx];
// //   }
// // }

// // const onCLickNextBtn = () => {
// //   idx++;
// //   imgSlide.src = imgList[idx];

// //   if(idx >= imgList.length){
// //     idx = 0;
// //     imgSlide.src = imgList[idx];
// //   }
// // };




// // prevBtn.addEventListener('click', onCLickPrevBtn);
// // nextBtn.addEventListener('click', onCLickNextBtn);
