// Cursor And Cursor-Blur
let cursor = document.querySelector(".cursor");
let cursor_blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (cap) {
  gsap.to(cursor, {
    x: cap.x,
    y: cap.y,
    duration: 1.5,
    ease: "back.out(1.7)",
  });
});
document.addEventListener("mousemove", function (cap) {
  gsap.to(cursor_blur, {
    x: cap.x - 130 + "px",
    y: cap.y - 130 + "px",
    duration: 1.5,
    ease: "back.out(1.7)",
  });
});
if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", function (cap) {
    gsap.to(cursor, {
      x: cap.x,
      y: cap.y,
      duration: 1.5,
      ease: "back.out(1.7)",
    });

    gsap.to(cursor_blur, {
      x: cap.x - 130,
      y: cap.y - 130,
      duration: 1.5,
      ease: "back.out(1.7)",
    });
  });
}

// Navbar
gsap.to("nav", {
  height: "17vh",
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -12%",
    scrub: 1,
  },
});

// Main Div Animation
gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "top -45%",
    scrub: 1,
  },
});

// Page 3 Quote Animation
gsap.from("#quote1", {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    // markers: true,
    start: "top 25%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from("#quote2", {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    // markers: true,
    start: "top 25%",
    end: "top 55%",
    scrub: 3,
  },
});

// Page 4 Text Animation
gsap.to("#page4>h1", {
  y: -25,
  scrollTrigger: {
    trigger: "#page4>h1",
    scroler: "body",
    // markers: true,
    start: "top 75%",
    end: "top 90%",
    scrub: 1,
  },
});

// About Us Section
gsap.from("#about-us img,.about-us-inner", {
  y: 70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroll: "body",
    // markers: true,
    start: "top 60%",
    end: "top 58%",
    scrub: 3,
  },
});

// Card Section
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.8,
  scrollTrigger: {
    trigger: ".card",
    scroll: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
