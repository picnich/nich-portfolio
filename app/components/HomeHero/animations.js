import { gsap } from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})


export const titleAnimation = (titleRefs) => {
    return gsap.from(titleRefs, {
        yPercent: 100,
        stagger: 0.2,
    })
}
