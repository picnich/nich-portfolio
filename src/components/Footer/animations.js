import SplitType from 'split-type'
import { gsap } from '@/lib/gsap'

export const enterFooterText = (text, links) => {
    const splitHeadline = new SplitType(text)
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: text,
            paused: true,
            // start: "top 50%",
            // end: "bottom 10%",
            // markers: true
            toggleActions: "restart restart none none",
        },
    });

    tl.from(splitHeadline.words, {
        yPercent: 100,
        stagger: 0.02,
    })

    tl.from(links, {
        y: 50,
        stagger: 0.1
    }, "<")
    
    tl.play()

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

