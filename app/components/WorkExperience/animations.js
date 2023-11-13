import gsap from "gsap"

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})

export const scrollExperience = (row) => {
    
    // console.log(row)
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: row,
            toggleActions: "restart none none none",
            // scrub: true,
            // start: "clamp(bottom 100%)",
            // end: "clamp(bottom 10%)",
            // markers: true
        },
    });

    tl.from(row, {
        yPercent: 50,
        opacity: 0
    })
    
    return tl
}

export const toggleJob = (job, isOpen, xButton) => {
    // console.log(xButton)
    let mm = gsap.matchMedia();
    const tl = gsap.timeline();

    mm.add('(min-width: 769px)', () => {
        tl.to(job, {
            height: isOpen ? '72px' : 'auto'
        })
        
        tl.to(xButton, {
            rotateZ: isOpen ? '0deg' : '45deg'
        }, "<")
    })
    mm.add('(max-width: 768px)', () => {
        tl.to(job, {
            height: isOpen ? '156px' : 'auto'
        })
        
        tl.to(xButton, {
            rotateZ: isOpen ? '0deg' : '45deg'
        }, "<")
    })

    return tl;

}