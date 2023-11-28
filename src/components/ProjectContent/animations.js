import { gsap } from "@/lib/gsap"

export const enterWorkItem = (item) => {
    const img = item.querySelectorAll('.project__img');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            toggleActions: "restart none none none"
        }
    });

    tl.from(item, {
        yPercent: 10,
    })
    
    tl.fromTo(img, {
        scale: 1.1,
    }, {
        scale: 1,
    }, "<")
    
    return tl
}