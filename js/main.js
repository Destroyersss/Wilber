const mySwiper = new Swiper(".swiper-container", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});

const buttonCart = document.querySelector(".button-cart");
const modalCart = document.querySelector("#modal-cart");
const modaClose = document.querySelector(".modal-close");

const openModal = function () {
  modalCart.classList.add("show");
};
const closeModal = function () {
  modalCart.classList.remove("show");
};

buttonCart.addEventListener("click", openModal);
modaClose.addEventListener("click", closeModal);

// scroll

{
  const srcollLink = document.querySelectorAll(".scroll-link");

  for (let i = 0; i < srcollLink.length; i++) {
    srcollLink[i].addEventListener("click", function (e) {
      e.preventDefault();
      const id = srcollLink[i].getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
