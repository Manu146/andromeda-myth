import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to("#stars", {
  opacity: 0,
  ease: "power3.ease",
  scrollTrigger: {
    trigger: ".scene_one",
    scrub: true,
    end: "60% top",
    start: "top top",
  },
});

gsap.from(".cloud6", {
  xPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene_two",
    scrub: true,
    start: "top bottom",
    end: "30% top",
  },
});

gsap.from(".cloud3", {
  xPercent: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene_two",
    scrub: true,
    start: "top 20%",
    end: "center top",
  },
});

gsap.from(".cloud4", {
  xPercent: -25,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene_two",
    scrub: true,
    start: "top 30%",
    end: "60% top",
  },
});

gsap.to(".cloud1", {
  xPercent: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene_two",
    scrub: true,
    start: "top 30%",
    end: "60% top",
  },
});

gsap.from(".cloud2", {
  xPercent: 80,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene_two",
    scrub: true,
    start: "top 40%",
    end: "55% top",
  },
});

gsap.from(".cloud7", {
  xPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene_two",
    scrub: true,
    start: "top top",
    end: "75% top",
  },
});

gsap.from(".cloud8", {
  xPercent: 60,
  ease: "none",
  scrollTrigger: {
    trigger: ".scene_two",
    scrub: true,
    start: "top top",
    end: "75% top",
  },
});

let scrollTween = gsap.to("#parallax-container", {
  xPercent: -90,
  ease: "none",
  scrollTrigger: {
    trigger: "#parallax-container",
    pin: true,
    scrub: true,
    end: "+=3000",
  },
});

gsap.to(".house1", {
  xPercent: -1,
  ease: "none",
  scrollTrigger: {
    trigger: ".house1",
    containerAnimation: scrollTween,
    start: "20% left",
    end: "80% left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".house2", {
  xPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".city",
    containerAnimation: scrollTween,
    start: "20% left",
    end: "80% left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".mountain1", {
  xPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".city",
    containerAnimation: scrollTween,
    start: "left left",
    end: "right right",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".mountain2", {
  xPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".city",
    containerAnimation: scrollTween,
    start: "10% left",
    end: "90% right",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.from(".rocks", {
  xPercent: 6,
  ease: "none",
  scrollTrigger: {
    trigger: ".city",
    containerAnimation: scrollTween,
    start: "left left",
    end: "right right",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to("#text1", {
  opacity: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text1",
    containerAnimation: scrollTween,
    start: "left 30%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.from("#text1", {
  xPercent: -20,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text1",
    containerAnimation: scrollTween,
    start: "left 30%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.to("#text2", {
  opacity: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text2",
    containerAnimation: scrollTween,
    start: "left 40%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.from("#text2", {
  xPercent: -20,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text2",
    containerAnimation: scrollTween,
    start: "left 40%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.fromTo(
  ".shore .sea_bg",
  { background: "linear-gradient(180deg, #71a7f4 5.55%, #5981ff 87.36%)" },
  {
    background: "linear-gradient(180deg, #535575 5.54%, #637395 87.35%)",
    ease: "none",
    scrollTrigger: {
      trigger: ".shore",
      containerAnimation: scrollTween,
      start: "10% left",
      end: "30% left",
      toggleActions: "play none none reset",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".shore .sea_bg",
  { background: "linear-gradient(180deg, #535575 5.54%, #637395 87.35%)" },
  {
    background: "linear-gradient(180deg, #71a7f4 5.55%, #5981ff 87.36%)",
    ease: "none",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".shore",
      containerAnimation: scrollTween,
      start: "60% left",
      end: "70% left",
      toggleActions: "play none none reset",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".shore",
  {
    background:
      "linear-gradient(0deg, #9ff1e4 0%, #93e6e8 17.47%, #74c9f2 48.78%, #71c6f3 51.55%, #6c9bf6 100%)",
  },
  {
    background:
      "linear-gradient(0deg, rgba(219,225,237,1) 23%, rgba(166,188,201,1) 34%, rgba(137,152,184,1) 44%, rgba(113,123,170,1) 52%, rgba(92,97,158,1) 100%)",
    ease: "none",
    scrollTrigger: {
      trigger: ".shore",
      containerAnimation: scrollTween,
      start: "10% left",
      end: "30% left",
      toggleActions: "play none none reset",
      scrub: true,
    },
  }
);

gsap.to(".shore", {
  background:
    "linear-gradient(0deg,#9ff1e4 0%,#93e6e8 17.47%,#74c9f2 48.78%,#71c6f3 51.55%,#6c9bf6 100%)",
  ease: "none",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".shore",
    containerAnimation: scrollTween,
    start: "60% left",
    end: "70% left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".rain", {
  opacity: 0.3,
  ease: "none",
  scrollTrigger: {
    trigger: ".rain",
    containerAnimation: scrollTween,
    start: "10% left",
    end: "35% left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".rain", {
  opacity: 0,
  ease: "none",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".rain",
    containerAnimation: scrollTween,
    start: "60% left",
    end: "70% left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.from("#text4", {
  xPercent: -20,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".rocks1",
    containerAnimation: scrollTween,
    start: "left 10%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.to("#text4", {
  opacity: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".rocks1",
    containerAnimation: scrollTween,
    start: "left 10%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.from("#text3", {
  xPercent: -20,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".cetus",
    containerAnimation: scrollTween,
    start: "left 30%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.to("#text3", {
  opacity: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".cetus",
    containerAnimation: scrollTween,
    start: "left 30%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.to("#text5", {
  opacity: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text5",
    containerAnimation: scrollTween,
    start: "left 26%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.from("#text5", {
  xPercent: -20,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#text5",
    containerAnimation: scrollTween,
    start: "left 26%",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

let rocks3 = gsap.utils.toArray(".rocks3");
let rocks2 = gsap.utils.toArray(".rocks2");
let rocks4 = gsap.utils.toArray(".rocks4");

rocks4.forEach((rock) => {
  gsap.to(rock, {
    xPercent: -70,
    ease: "none",
    scrollTrigger: {
      trigger: rock,
      containerAnimation: scrollTween,
      start: "right right",
      end: "left left",
      toggleActions: "play none none reset",
      scrub: true,
    },
  });
});

rocks3.forEach((rock) => {
  gsap.to(rock, {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: rock,
      containerAnimation: scrollTween,
      start: "right right",
      end: "left left",
      toggleActions: "play none none reset",
      scrub: true,
    },
  });
});

rocks2.forEach((rock) => {
  gsap.to(rock, {
    xPercent: -130,
    ease: "none",
    scrollTrigger: {
      trigger: rock,
      containerAnimation: scrollTween,
      start: "right right",
      end: "left left",
      toggleActions: "play none none reset",
      scrub: true,
    },
  });
});

gsap.from(".rocks1", {
  xPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".rocks1",
    containerAnimation: scrollTween,
    start: "right right",
    end: "left left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".nereida1", {
  xPercent: -300,
  ease: "none",
  scrollTrigger: {
    trigger: ".nereida1",
    containerAnimation: scrollTween,
    start: "right right",
    end: "left left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".nereida2", {
  xPercent: -260,
  ease: "none",
  scrollTrigger: {
    trigger: ".nereida2",
    containerAnimation: scrollTween,
    start: "right right",
    end: "left left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to(".nereida3", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".nereida3",
    containerAnimation: scrollTween,
    start: "right right",
    end: "left left",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to("#parallax-container", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".shore_2",
    containerAnimation: scrollTween,
    start: "30% right",
    end: "right right",
    toggleActions: "play none none reset",
    scrub: true,
  },
});

gsap.to("#text6", {
  opacity: 1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".shore_2",
    containerAnimation: scrollTween,
    start: "right right",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

gsap.from("#text6", {
  xPercent: -20,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".shore_2",
    containerAnimation: scrollTween,
    start: "right right",
    toggleActions: "play none none reset",
    duration: 200,
  },
});

let constellations = gsap.utils.toArray(".constellations");

constellations.forEach((c) => {
  let opacity = Math.random() * (0.5 - 0) + 0;
  console.log(opacity);

  gsap.from(c, {
    opacity,
    scrollTrigger: {
      trigger: ".shore_2",
      containerAnimation: scrollTween,
      start: "right right",
      toggleActions: "play none none reset",
      duration: 200,
      scrub: false,
    },
  });
});
