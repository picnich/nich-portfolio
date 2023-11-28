import { gsap, ScrollTrigger, ScrollToPlugin } from '@/lib/gsap'


gsap.defaults({
    duration: 2,
    ease: 'expo.out',
})

export const onEnterAnimation = (container, title) => {
    const items = container.querySelectorAll('.splide__slide');
    const targets = gsap.utils.toArray(items);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            toggleActions:'restart none none reset',
            lazy: false,
        }, 
        paused: true
    })

    tl.fromTo(targets, {
        opacity: 0,
        yPercent: 10,
        stagger: 1
    }, {
        opacity: 1,
        yPercent: 0
    })
    tl.fromTo(title, {
        opacity: 0,
    }, {
        opacity: 1
    }, "<")
    
    tl.play()

    return tl
}




/* 
    Exit Animations
*/
export const animFixPlease = (container) => {
    return gsap.to(container, {
        scale: 3
    })
}

export const setInitAnim = (clickedIndex) => {
    const tl = gsap.timeline();
    const items = gsap.utils.toArray('.work__item')
    const clickedItem = items[clickedIndex]
    
    // tl.set(clickedItem, {
    //     position: 'absolute'
    // })

    tl.to(window, { duration: 1, scrollTo: ".scrollContainer" });

    return tl;
}

export const animOutWorkItems = (title, clickedIndex) => {
    // if (clickedIndex === null) return 
    // if (!clickedIndex) return 

    console.log('Starting animation 2/2', clickedIndex)

    const items = gsap.utils.toArray('.work__item')
    const clickedItem = items[clickedIndex]
    const siblings = items.filter((el, i) => i !== clickedIndex)
    // const siblings = items.splice(clickedIndex, 1)

    
    const tl = gsap.timeline({
        defaults: {
            // duration: 2,
            delay: 0.01
        }
    })

    tl.to(title, {
        // opacity: 0, 
        yPercent: 100,
        // stagger: 0.02,
        duration: 1
    })
    tl.to(items, {
        opacity: 0,
        stagger: 0.2,
        // duration: 0.5
    }, "<")

    // // hideSiblings(tl, siblings)
    // siblings.forEach(sibling => (
    //     tl.to(sibling, {
    //         opacity: 0,
    //         stagger: 0.02,
    //         // duration: 0.2
    //     }, "<")
    // ))

    return tl
}

const hideSiblings = (tl, siblings) => {
    siblings.forEach((sibling, i) => {

        tl.to(sibling, {
            opacity: 0,
            stagger: 0.02,
            // duration: 0.2
        }, "<")
        
        return console.log(sibling, i)
    })
}


export const setInitialState = (container) => {
    console.log('Set initial state', container)

    gsap.set(container, {
        scale: 1.4
    })
    
}
export const animOutOtherWorkItems = (list, title) => {
    // console.log(list.slides, title, "List")
    const tl = gsap.timeline()
    const slides = list.slides 
    console.log("playing Animation Out")

    gsap.to(title, {
        opacity: 0, 
        yPercent: 20
    })
    gsap.to(slides, {
        opacity: 0,
        yPercent: 5,
        stagger: 0.2
    }, "<")

    return tl

}

export const animOutSelectedText = (selectedItem) => {

}
export const scaleSectedImage = (selectedItem) => {

}
