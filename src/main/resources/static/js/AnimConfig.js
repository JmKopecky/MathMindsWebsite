const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    const imageScrollContainer = document.getElementById("gallery-container");

    let totalScrollAmount = imageScrollContainer.scrollWidth;// - (0.525 * window.innerWidth);
    gsap.to(imageScrollContainer, {
       x: -totalScrollAmount,
       ease: "none",
       scrollTrigger: {
           trigger: "#gallery-container",
           start: "top " + window.innerHeight/10,
           end: "+=" + totalScrollAmount,
           pin: true,
           scrub: true
       }
    });
});


function scrollToCompetitor() {
    const competitorTarget = document.getElementById("competition-container");
    const options = {
        duration: 3,

    }
    lenis.scrollTo(competitorTarget, options);
}