import { victor } from "app/fonts"
import Link from "next/link"
import { gsap } from "gsap"

import styles from './linkanim.module.scss'
import { useState, useEffect, useRef } from "react";

export const LinkAnim = ({isInternal = true, text, href}) => {

    const [isHovering, setHovering] = useState(false);

    const firstWordRef = useRef(null)
    const secondWordRef = useRef(null)

    useEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({ 
                paused: !isHovering, 
                defaults: {
                    duration: 1
                }, 
                onComplete: () => {
                    setHovering(false)
                }
            });
            // console.log(firstWordRef.current, secondWordRef.current)

            tl.to(firstWordRef.current, {
                yPercent: -120,
                stagger: 0.1
            })
            tl.to(secondWordRef.current, {
                yPercent: -105,
                stagger: 0.1
            }, "<")
        })

        return () => context.revert()
    },[isHovering])


    return (

        isInternal ? (
            <Link href={href} className={styles.linkContainer} onMouseEnter={() => setHovering(!isHovering)} >
                {splitWord(text, firstWordRef)}
                {splitWord(text, secondWordRef)}
            </Link>
            ) : (
                <a href={href} target="_blank" className={styles.linkContainer} onMouseEnter={() => setHovering(!isHovering)} >
                    {splitWord(text, firstWordRef)}
                    {splitWord(text, secondWordRef)}
                </a>
                
        )

    )
}

const splitWord = (word, wordRef) => {
    return (
        <span className={victor.className} ref={wordRef}>
            {word.split("").map((letter, i) => {
                return <span key={i} className={styles.letter}>{letter}</span>
            })}
        </span>
    )
}