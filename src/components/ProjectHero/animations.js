import { gsap } from "@/lib/gsap"


// export const titleAnimation = (title, link) => {
//     const tl = gsap.timeline()

//     // tl.from(title, {
//     //     yPercent: 100,
//     // })
//     // tl.set(link, { yPercent: 100 })
//     tl.add(SplitAndEnterText(title))
//     tl.to(link, {
//         yPercent: 0
//     }, "<")
    
//     return tl
// }

gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})

export const setInitialState = (imageRef, titleRef, linkRef) => {
    gsap.set(imageRef, { scale: 1.5 })
    gsap.set(titleRef, { yPercent: 100 })
    gsap.set(linkRef, { yPercent: 100 })
    // return 
}

export const enterTitle = (titleRef) => {
    return gsap.to(titleRef, {
        y: 0
    })
}
export const enterLink = (linkRef) => {
    return gsap.to(linkRef, {
        y: 0
    })
}
export const enterImage = (imageRef) => {
    return gsap.to(imageRef, {
        scale: 1,
        opacity: 1
    })
}

// export const enterLink = (link) => {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: link, 
//             toggleActions: "restart restart none none"
//         }, 
//         paused: true
//     })
    
//     tl.from(link, {
//         yPercent: 100,
//     })
    
//     tl.play()

//     return tl
// }
export const imageAnimation = (imageContainer, image) => {
    const tl = gsap.timeline()

    tl.set(image, { scale: 1.2 })
    tl.from(imageContainer, {
        y: 50,
        opacity: 0
    })
    tl.from(image, {
        scale: 1
    }, "<")

    return tl
}