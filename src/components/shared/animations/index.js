import SplitType from 'split-type'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})


export const enterHeadlineAnimation = (headline) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: headline, 
            toggleActions: "restart none none none"
        }
    })
    
    const splitHeadline = new SplitType(headline)

    tl.from(splitHeadline.words, {
        yPercent: 100,
        stagger: 0.02,

    })

    return tl
}


