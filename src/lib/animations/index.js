import SplitType from 'split-type'
// import gsap from "gsap"
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})

export const SplitAndEnterText = (text) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: text, 
            toggleActions: "restart reset restart reset"
        }, 
        paused: true
    })
    
    const splitHeadline = new SplitType(text)

    tl.from(splitHeadline.words, {
        yPercent: 100,
        stagger: 0.02,
    })
    
    tl.play()

    return tl
}    

export const SplitText = (text) => {
    return new SplitType(text)
}