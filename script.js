let on = false;
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  if (on) {
    gsap.to(".light-saber-light", {width: '0%', duration: 0.5});
    on = false;
  } else {
    gsap.to(".light-saber-light", {width: '100%', duration: 0.5});
    on = true;
  }
});

const animateButton = () => {
  gsap.to(".button .center", {duration: 0.3, opacity: 0.3});
  gsap.to(".button .center", {duration: 0.5, delay: 0.6, opacity: 1});
  gsap.to(".button .circle", {duration: 0.5, delay: 0.6,opacity: 0, scale: 1.3});
  gsap.to(".button .circle", {duration: 0, delay: 1.2, scale: 1});
  gsap.to(".button .circle", {duration: 1, delay: 1.5, opacity: 1});
  setTimeout(() => {
    animateButton();
  }, 4000);
}

animateButton();