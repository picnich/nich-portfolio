import SplitType from 'split-type'
import { gsap, scrollTrigger } from "@/lib/gsap"


gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})


export const enterHeadlineAnimation = (headline) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: headline, 
            toggleActions: "restart restart none none",
        }
    })
    
    const splitHeadline = new SplitType(headline)

    tl.from(splitHeadline.words, {
        yPercent: 100,
        stagger: 0.02,

    })

    return tl
}

export const enterListAnimation = (types, tools) => {
    const list = document.querySelectorAll('li')
    return gsap.fromTo(list, {
        opacity: 0,
        y: 50,
        stagger: 2
    }, {
        opacity: 1,
        y: 0
    })
}
