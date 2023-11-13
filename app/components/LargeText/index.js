"use client"

import { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import { scrollLargeText } from "./animations"
import styles from './LargeText.module.scss'
import { victor } from '../../fonts'

export const LargeText = ({firstWord, secondWord}) => {
    const containerRef = useRef(null)
    const comp = useRef(null);
    const tl = useRef();
        
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    
        let context = gsap.context(() => {
            scrollLargeText(containerRef.current);
        }, comp)
        
        return () => context.revert()
    }, [])

    return (
        <section className={styles.largeText} ref={comp} >
            <h2 ref={containerRef}>
                <span>{firstWord}</span>
                <span className={victor.className}>{secondWord}</span>
                <span>{firstWord}</span>
                <span className={victor.className}>{secondWord}</span>
            </h2>
        </section>
    )
}