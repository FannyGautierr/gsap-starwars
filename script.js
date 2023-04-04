let on = false;
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  if (on) {
    gsap.to(".light-saber-light", {height: 0, duration: 0.5});
    on = false;
  } else {
    gsap.to(".light-saber-light", {height: 500, duration: 0.5});
    on = true;
  }
});
