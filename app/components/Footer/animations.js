import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

export const enterFooterText = (text, links) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: text,
            // start: "top 50%",
            // end: "bottom 10%",
            // markers: true
            toggleActions: "restart restart none none",
        },
    });

    tl.from(text, {
        yPercent: 100,
        stagger: 0.1,
    })

    tl.from(links, {
        y: 50,
        stagger: 0.1
    }, "<")

    return tl;
}


export const enterMetaText = (text) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: text
        }
    })

    tl.from(text, {
        opacity: 0,
        stagger: .5
        // yPercent: 50,
    })
    return tl;
}

