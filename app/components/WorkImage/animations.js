import gsap from "gsap"

export const enterWorkItem = (item) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            toggleActions: "restart none none none"
        }
    });

    tl.from(item, {
        yPercent: 10,
    })
    
    return tl
}