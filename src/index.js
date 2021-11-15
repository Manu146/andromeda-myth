import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".anim_section");

let scrollTween = gsap.to("#parallax-container", {
  xPercent: -75,
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: "#parallax-container",
    pin: true,
    scrub: 0.1,
    //snap: directionalSnap(1 / (sections.length - 1)),
    end: "+=3000",
  },
});

gsap.to(".section_two .houses1", {
  xPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".section_two .houses1",
    containerAnimation: scrollTween,
    start: "left 25%",
    end: "right 50%",
    toggleActions: "play none none reset",
    id: "1",
    scrub: true,
  },
});

gsap.to(".section_two .houses2", {
  xPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".section_two .houses2",
    containerAnimation: scrollTween,
    start: "left 25%",
    end: "right 50%",
    toggleActions: "play none none reset",
    id: "1",
    scrub: true,
  },
});
