// Carousel
let currentImageIndex = 0;

const carouselImages = document.querySelectorAll(".carousel-image");

const updateImg = () => {
  let img = carouselImages[currentImageIndex];
  img.classList.add("hidden");
  currentImageIndex++;
  if (currentImageIndex === carouselImages.length) currentImageIndex = 0;
  img = carouselImages[currentImageIndex];
  img.classList.remove("hidden");
};

setInterval(() => {
  updateImg();
}, 5000);

//Parallaxing

const headerActivationMargin = 65;
const sectionActivationMargin = 300;

const setActiveContent = () => {
  if (window.scrollY > headerActivationMargin) {
    $("header").removeClass("hidden");
  } else {
    $("header").addClass("hidden");
  }

  carouselImages.forEach(image => {
    image.style.top = `${window.scrollY / 3}px`;
  });

  document.querySelectorAll("section").forEach(section => {
    const sectionBounds = section.getBoundingClientRect();
    if (sectionBounds.top < window.innerHeight - sectionActivationMargin && sectionBounds.bottom > 0) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", setActiveContent);
setActiveContent();
