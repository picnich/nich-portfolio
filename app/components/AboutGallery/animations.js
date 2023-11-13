import gsap from 'gsap'


gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})

export const scrollGallery = (galleryContainer) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: galleryContainer,
            scrub: true,
            start: "clamp(bottom 100%)",
            end: "clamp(bottom 10%)",
            // markers: true
        },
    }) 

    tl.to(galleryContainer, {
        x: '-40vh'
    })

    return tl
    
}
