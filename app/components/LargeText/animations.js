import { gsap } from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})


export const scrollLargeText = (containerRef) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef,
            scrub: true,
            start: "clamp(bottom 100%)",
            end: "clamp(bottom 10%)",
            // markers: true, 
            // ease: 'linear'
        },
    })
    
    timeline.to(containerRef, { 
        xPercent: -50,
        ease: 'linear'
        // yPercent: -16
    })

    return timeline
}

// export const scrollLargeText = (containerRef) => {
    
//     return gsap.to(containerRef, { 
//         scrollTrigger: {
//             trigger: containerRef,
//             scrub: true,
//             start: "clamp(bottom 100%)",
//             end: "clamp(bottom 10%)",
//         },
//         xPercent: -50,
//         ease: 'linear'
//         // yPercent: -16
//     })
// }
