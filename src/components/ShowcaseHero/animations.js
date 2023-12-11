import SplitType from 'split-type'
import { gsap } from "@/lib/gsap"

import { SplitAndEnterText } from "@/lib/animations"

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})


export const enterFeatured = (container) => {
    const list = container.querySelectorAll(".project-item")

    list.forEach(item => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                toggleActions: "restart none none none"
            }
        })
        const image = item.querySelector("img")
        const title = item.querySelector("h2")
        const para = item.querySelector("p")
        const splitPara = new SplitType(para)

        const tags = item.querySelectorAll("li")

        // console.log(title, para, tags);
        tl.from(image, {
            opacity: 0,
            scale: 1.1,
        })
        // tl.add(SplitAndEnterText(title, "restart none none none"), "<+=0.5")
        tl.from(title, {
            yPercent: 100,
        }, "<")
        tl.from(splitPara.words, {
            yPercent: 100,
            stagger: 0.02,
            // opacity: 0,
        }, "<")
        tl.from([...tags], {
            yPercent: 100,
            stagger: 0.2,
        }, "<")
        
        return tl

    })
}
