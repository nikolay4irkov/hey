gsap.registerPlugin(ScrollTrigger);

// gsap.timeline()
//   .to(".box-up", {y: -215, duration: 1, delay: 0})
//   .to(".confetti", {opacity: 1, duration: 0.4}, "-=0.2")

// gsap.set('.box-up', {transformOrigin: '-50% -50%'});


ScrollTrigger.matchMedia({
  '(max-width: 500px)': function () {
    const boxTl = gsap.timeline();
    boxTl
      // .to(".box-up", {y: -245, duration: 1, delay: 0})
      .fromTo(".box-up", {y: 0, xPercent: -50}, {y: -245, xPercent: -50, duration: 1, delay: 0})
      .to(".confetti", {opacity: 1, duration: 0.4}, "-=0.2")
      .to(".box-text", {opacity: 1, duration: 0.8}, "<");

    ScrollTrigger.create({
      animation: boxTl,
      trigger: ".header",
      start: "top top",
      end: "+=100",
    });

    gsap.to(".smile-1", {
      scrollTrigger: {
        trigger: ".section-prize",
        start: "top 50%",
        end: "+=400",
        ease: "circ.out",
        scrub: 0.5
      },
      x: -160,

    });

    gsap.to(".smile-2", {
      scrollTrigger: {
        trigger: ".smile-2",
        start: "top 90%",
        end: "+=600",
        ease: "circ.out",
        scrub: 0.5
      },
      x: 1350,
    });
  },

  '(min-width: 1180px)': function () {
    const boxTl = gsap.timeline();
    boxTl
      // .to(".box-up", {y: -215, duration: 1, delay: 0})
      .fromTo(".box-up", {y: 0, xPercent: -50}, {y: -215, xPercent: -50, duration: 1, delay: 0})
      .to(".confetti", {opacity: 1, duration: 0.4}, "-=0.2")
      .to(".box-text", {opacity: 1, duration: 0.8}, "<")

    ScrollTrigger.create({
      animation: boxTl,
      trigger: ".header",
      start: "top top",
      end: "+=100",
    });

    gsap.to(".smile-1", {
      scrollTrigger: {
        trigger: ".section-prize",
        start: "top 50%",
        end: "+=400",
        ease: "circ.out",
        scrub: 0.5
      },
      x: -200,
    });

    gsap.to(".smile-2", {
      scrollTrigger: {
        trigger: ".smile-2",
        start: "top 95%",
        end: "+=600",
        ease: "circ.out",
        scrub: 0.5
      },
      x: 2800,
    });

  },

  '(min-width: 300px)': function () {
    gsap.to(".participate__bg", {
      scrollTrigger: {
        trigger: ".section-participate",
        start: "top 50%",
        end: "+=200",
        ease: "circ.out",
        // scrub: true
      },
      opacity: 1,
      duration: 1
    });

    gsap.to(".about-background", {
      scrollTrigger: {
        trigger: ".about-background",
        start: "top 50%",
        end: "+=200",
        ease: "circ.out",
        // scrub: true
      },
      opacity: 1,
      duration: 1
    });
  }
});