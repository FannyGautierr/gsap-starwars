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
