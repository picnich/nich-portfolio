
import { gsap } from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})


export const titleAnimation = (titleRefs) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: titleRefs, 
            toggleActions: "restart restart none none",
            end: "bottom bottom"
        }
    });

    tl.from(titleRefs, {
        yPercent: 100,
        stagger: 0.2,
    })
    return tl
}
