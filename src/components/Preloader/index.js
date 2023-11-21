"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"

import styles from './preloader.module.scss'
import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"

export const Preloader = () => {
    
    const loaderRef = useRef(null)
    const svgRef = useRef(null)
    const textRef = useRef(null)
    const progressRef = useRef(null)
    const percentRef = useRef(null)
    // const [progress, setprogress] = useState(0);

    const [ isLoading, setLoading ] = useState(true);

    // Manual
    // useEffect(() => {
    //     const timer = setTimeout(() => {  
    //       setLoading(false)
    //     }, 3000);

    //     return () => clearTimeout(timer);

    // }, [])

    useIsomorphicLayoutEffect(() => {
        const context = gsap.context(() => {
            
            const tl = gsap.timeline({
                onComplete: () => {
                    return setLoading(false)
                }
            });
            
            tl.to(progressRef.current, {
                strokeDashoffset: 0,
                duration: 3, 
                ease: "power3.out"
                // ease: "expo.out",
            })
            tl.to(textRef.current, {
                // ease: "expo.out",
                textContent: 100,
                duration: 3,
                snap: "innerText",
                ease: "power3.out",
                roundProps: "textContent"
                
            }, "<")
            tl.to(svgRef.current, {
                opacity: 0,
                duration: 1
            })
            tl.to(textRef.current, {
                opacity: 0,
                duration: 1
            }, "<")
            tl.to(percentRef.current, {
                opacity: 0,
                duration: 1
            }, "<")
            tl.to(loaderRef.current, {
                scaleY: 0,
                transformOrigin: 'center top',
            }, "-=1")

        });

        return () => context.revert()
    }, [])

    return isLoading ? <Spinner textRef={textRef} progressRef={progressRef} loaderRef={loaderRef} svgRef={svgRef} percentRef={percentRef} /> : ''
}


const Spinner = ({ textRef, progressRef, loaderRef, svgRef, percentRef }) => {
    return (
        <>
            <section className={styles.loader} ref={loaderRef}>    
                <div className={styles.loader__container}>    
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
                        <circle cx="50" cy="50" r="48" className={styles.loader__container__outline}/>
                        <circle cx="50" cy="50" r="48" className={styles.loader__container__progress} ref={progressRef} />
                    </svg>
                    <div className={styles.loader__container__number}>
                        <span className={styles.loader__container__number__value} ref={textRef}>0</span>
                        <span ref={percentRef}>%</span>
                    </div>
                </div>
            </section>
        </>
    )
}

