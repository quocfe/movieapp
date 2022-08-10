// Swiper

var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
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
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
  });

let playTrailerBtn = document.querySelector(".play-movie");
let closeTrailerBtn = document.querySelector(".close-video");
let videoContainer = document.querySelector(".video-container");
let myVideo = document.querySelector("#myvideo");


// 1
// playTrailerBtn.onlick = () =>{
//   videoContainer.classList.add("show-video");
//   // myVideo.play();
// };

// closeTrailerBtn.onlick = () =>{
//   videoContainer.classList.remove("show-video");
//   // myVideo.pause();
// };

// 2
playTrailerBtn.addEventListener("click", ()=>{
  videoContainer.classList.add("show-video");
    myVideo.play();
})

closeTrailerBtn.addEventListener("click", ()=>{
  videoContainer.classList.remove("show-video");
    myVideo.pause();
})