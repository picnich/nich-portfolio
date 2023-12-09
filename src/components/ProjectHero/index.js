"use client"

import { useRef } from "react"
import Image from "next/image"

import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
import { gsap } from "@/lib/gsap"

import { Navigation } from "../Navigation"
import {
    titleAnimation, 
    imageAnimation,
    enterLink, 
    setInitialState, 
    enterTitle,
    enterImage
} from "./animations"


import styles from "./projectHero.module.scss"
import { SplitAndEnterText } from "@/lib/animations"

export const ProjectHero = ({ content }) => {
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const imageContainerRef = useRef(null);
    const linkRef = useRef(null);
    
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0);
    //     let ctx = gsap.context( () => {
    //         gsap.set(window, {scrollTo: 0})
    //     })
    //     // return ctx.revert()
    // }, []);

    useIsomorphicLayoutEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            // SplitAndEnterText(titleRef.current)
            enterTitle(titleRef.current)
            enterLink(linkRef.current)
            enterImage(imageRef.current)
            // imageAnimation(imageContainerRef.current, imageRef.current)
        })

        return () => ctx.revert()
    })

    return (
        <section className={styles.project__hero}>
            <div className={styles.project__hero__title}>
                <div className={styles.heading__container}>
                    <h1 ref={titleRef}>{content.title}</h1>
                </div>
                {
                    content.link && (
                        <div className={styles.visit__container}>
                            <a href={content.link} className={styles.visit} ref={linkRef}>
                                Visit Site
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.92333 7.28585L9.84293 7.28584L6.29561 10.8332L7.12057 11.6581L12.0703 6.70837L7.12056 1.75863L6.29561 2.58359L9.84293 6.1309L1.92333 6.1309L1.92333 7.28585Z"/>
                                </svg>
                            </a>
                        </div>
                    )
                }
                
            </div>
            <div className={styles.project__hero__imgContainer} ref={imageContainerRef}>
                <Image 
                    src={content.heroImage}
                    width={1200}
                    height={1200}
                    className={styles.image}
                    alt={`${content.title}'s Project Hero Image`}
                    priority={true}
                    ref={imageRef}
                />
            </div>
        </section>
    )
}