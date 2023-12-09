"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
import { gsap } from "@/lib/gsap"

import { data } from "./data"
import {
    enterFeatured
} from "./animations"
import { SplitAndEnterText } from "@/lib/animations"
import styles from "./showcaseHero.module.scss"

export const ShowcaseHero = () => {
    const containerRef = useRef(null)

    useIsomorphicLayoutEffect(() => {
        window.scrollTo(0,0)
        const ctx = gsap.context(() => {
            SplitAndEnterText("h1")
            enterFeatured(containerRef.current);

        }, containerRef)
        return () => ctx.revert()
    
    }, [])

    return (
        <section className={styles.showcaseHero} ref={containerRef}>
            <div className={styles.showcaseHero__title}>
                <h1>Work Showcase</h1>
            </div>

            <section className={styles.showcaseGrid}>
                <div className={styles.showcaseGrid__row_1}>
                    <ShowcaseProject project={data[0]}/>
                    <ShowcaseProject project={data[1]}/>
                </div>
                <div className={styles.showcaseGrid__row_2}>
                    <ShowcaseProject project={data[2]}/>
                    <ShowcaseProject project={data[3]}/>
                </div>

            </section>

        </section>
    )       
}


const ShowcaseProject = ({ project }) => {
    return (
        <Link href={project.link} className={`${styles.project} project-item`}>
            <div className={styles.project__imageContainer}>
                <Image 
                    src={project.image}
                    alt={`${project.name}'s Project Hero Image`}
                    priority={true}
                    fill={true}
                    // width={800}
                />

            </div>
            <div className={styles.project__container}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <ul>
                    {project.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                </ul>
            </div>
        </Link>
    )
}