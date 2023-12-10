import SplitType from 'split-type'
import { gsap } from "@/lib/gsap"

import { SplitAndEnterText } from "@/lib/animations"

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})


export const enterWorkList = (container) => {
    const list = container.querySelectorAll(".work-item")

    list.forEach(item => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                // toggleActions: "restart none none none"
            }
        })
        const title = item.querySelector("h3")
        const para = item.querySelector("p")
        const tags = item.querySelectorAll("li")

        // tl.from(item, { opacity: 0})
        // tl.add(SplitAndEnterText(title), "<+=0.5")
        // tl.add(SplitAndEnterText(para), "<")
        tl.from(title, {
            opacity: 0,
            yPercent: 100,
        }, "<")
        tl.from(para, {
            opacity: 0,
            yPercent: 100,
        }, "<")


        tl.from([...tags], {
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
        }, "<")
        
        return tl

    })

    return
}

export const enterLegend = ( legend ) => {
    const legendLabels = legend.querySelectorAll("h2");
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: legend, 
            // toggleActions: "restart reset restart reset"
        }
    })
    
    // console.log(legendLabels)
    tl.from([...legendLabels], {
        opacity: 0,
        yPercent: 100,
        stagger: .2
    })
    
    return tl;
}