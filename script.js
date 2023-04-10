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
/* DROIDS */

let bb8 = document.querySelector('.bb8');
let head = document.querySelector('.head');
let body = document.querySelector('.body');
let antenna = document.querySelector('.antenna');
let eye = document.querySelector('.eye');



const tl = gsap.timeline({ repeat: -1 });

tl.to(head, { duration: 0.5, rotate: 360, transformOrigin: '50% 50%' });
tl.to(antenna, { duration: 0.1, y: '-=10px', ease: 'bounce.out' });
tl.to(antenna, { duration: 0.1, y: '+=10px', ease: 'bounce.in' });

tl.to(head, { duration: 0.1, rotateX: 25, ease: 'power1.inOut' });
tl.to(head, { duration: 0.1, rotateX: -25, ease: 'power1.inOut' });

tl.to(bb8, { duration: 2, x: '+=500px', ease: 'power4.out' },"move");
tl.to(body, { duration: 2, rotate: 360, transformOrigin: '50% 50%' },'move');
tl.to(bb8, { duration: 1.1, x: '-=500px', ease: 'power4.in' },'move-back');
tl.to(body, { duration: 2, rotate: -180, transformOrigin: '50% 50%' },'move-back');
tl.play();

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