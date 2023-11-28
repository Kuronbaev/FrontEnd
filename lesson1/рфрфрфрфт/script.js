document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".menu-btn");
  var menu = document.querySelector(".menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



