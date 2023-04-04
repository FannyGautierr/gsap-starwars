/* KARAOKE */

let audioplay = document.createElement('audio');
audioplay.setAttribute('src', 'sound/Cantina-Song.mp3');

let sectionKaraoke = document.querySelector("#karaoke")

let startkaraoke = document.querySelector(".start-karaoke")



startkaraoke.addEventListener("click", function(){
    ScrollTrigger.create({
        trigger: sectionKaraoke,
        start: "top 80%",
        end: "bottom 80%",
        onEnter: () => audioplay.play(),
        onLeave: () => audioplay.pause(),
    })
    startkaraoke.style.display="none";
    let lyrics = document.createElement("p");
    lyrics.classList.add("lyrics");
    lyrics.innerHTML = "Tou Tou Toutouloutou Tou Tou Toutouloutou"
   document.querySelector(".the-kara").appendChild(lyrics);

   gsap.to(".lyrics",{
    width : "10px",
    duration: 4, 
    rotation: 360, 
    ease: "none", 
    paused: true
   })
});