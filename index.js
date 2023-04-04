const menuButton = document.querySelector("#menu-btn")
const navbar = document.querySelector(".header .flex .navbar")


menuButton.onclick = () => {
    menuButton.classList.toggle('fa-times');
    navbar.classList.toggle("active")
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

      breakpoints: {
        540: {
          slidesPerView: 1,
         
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    },
  });
