let on = false;
const button = document.querySelector(".button");
const hyperspaceButton = document.querySelector(".hyperspace-button");
const video = document.querySelector("video");

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
  gsap.to(".button .circle", {duration: 0.5, delay: 0.6, opacity: 0, scale: 1.3});
  gsap.to(".button .circle", {duration: 0, delay: 1.2, scale: 1});
  gsap.to(".button .circle", {duration: 1, delay: 1.5, opacity: 1});
  setTimeout(() => {
    animateButton();
  }, 4000);
}

animateButton();

let xPos = 0;
let hovered = false;
const animateHyperspaceButton = () => {
  if (hovered) {
    xPos += 1
    gsap.to(".hyperspace-button", {backgroundPositionX: xPos});
    setTimeout(() => {
      animateHyperspaceButton();
    }, 30);
  }
}

hyperspaceButton.addEventListener('mouseover', () => {
  hovered = true;
  animateHyperspaceButton();
})

hyperspaceButton.addEventListener('mouseleave', () => {
  hovered = false;
})

hyperspaceButton.addEventListener('click', async () => {
  await video.play();
  gsap.to("video", {duration: 0.5, opacity: 1});
  gsap.to("video", {duration: 0.5, opacity: 0, delay: 9});
})