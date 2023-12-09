"use client"
import { useRef } from "react"
import Link from "next/link"

import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
import { gsap } from "@/lib/gsap"

import { enterWorkList, enterLegend } from "./animations"
import { data } from "./data"
import styles from "./showcaseList.module.scss"

export const ShowcaseList = () => {
    const filteredProjects = data.filter(proj => !proj.soon)

    const containerRef = useRef(null)
    const legendLabels = useRef(null)

    useIsomorphicLayoutEffect(() => {
        window.scrollTo(0,0)
        const ctx = gsap.context(() => {
            enterLegend(legendLabels.current)
            enterWorkList(containerRef.current);

        }, containerRef)
        return () => ctx.revert()
    
    }, [])

    return (
        <section className={styles.showcaseList} ref={containerRef}>
            <div className={styles.showcaseList__legend} ref={legendLabels}>
                <h2>Client</h2>
                <h2>Deliverables</h2>
            </div>

            {
                filteredProjects.map((proj, i) => <Project key={i} project={proj}/>)
            }
        </section>
    )
}

const Project = ({ project }) => {
    return (
        // <Link className={`${styles.project} ${project.soon ? styles.project__soon : ''}`}>
        <Link className={`${styles.project} work-item`} href={project.link}>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul>
                {project.tags.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </Link>
    )
}