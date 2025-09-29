const slides = document.querySelectorAll(".slide");
const nextSlideButton = document.querySelector(".next");
const previousSlideButton = document.querySelector(".previous");
const navigationDots = document.querySelectorAll(".dot");

let currentIndex = 0;

function nextSlide() {
  slides[currentIndex].classList.remove("active");
  navigationDots[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.add("active");
  navigationDots[currentIndex].classList.add("active");
}

function previousSlide() {
    slides[currentIndex].classList.remove("active");
    navigationDots[currentIndex].classList.remove("active");

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");
    navigationDots[currentIndex].classList.add("active");
}

setInterval(nextSlide,5000);

nextSlideButton.addEventListener("click", () => nextSlide());
previousSlideButton.addEventListener("click", () => previousSlide());
