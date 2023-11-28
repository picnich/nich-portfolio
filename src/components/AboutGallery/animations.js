import { gsap, ScrollTrigger } from '@/lib/gsap'


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

export const onEnterGallery = (galleryContainer) => {
    const items = galleryContainer.querySelectorAll('.splide__slide > div');
    const images = galleryContainer.querySelectorAll('.splide__slide img');
    let targets = gsap.utils.toArray(items);
    let imgs = gsap.utils.toArray(images);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: galleryContainer,
            toggleActions:'restart none none reset',
            lazy: false,
        }, 
        // paused: true
    })

    tl.fromTo(targets, {
        opacity: 0,
        stagger: 0.2
    }, {
        opacity: 1
    })
    tl.fromTo(imgs, {
        scale: 1.1,
        stagger: 0.2
    }, {
        scale: 1,
    }, "<")
    
    // tl.play()

    return tl
}
