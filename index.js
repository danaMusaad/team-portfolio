const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  container.classList.add("active");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  container.classList.remove("active");
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    container.classList.remove("active");
    hamburger.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    if (!navLinks.classList.contains("active")) {
      hamburger.style.display = "block";
    }
  }
});
