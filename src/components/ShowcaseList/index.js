"use client"

import { useRef, useState } from "react"

import { gsap } from "@/lib/gsap"
import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
// import useMousePosition from "@/lib/hooks/useMousePosition"

import { enterWorkList, enterLegend } from "./animations"
import { data } from "./data"

import { Project } from "../ShowcaseProject"
import styles from "./showcaseList.module.scss"
import { ShowcaseModal } from "../ShowcaseModal"

export const ShowcaseList = () => {
    const filteredProjects = data.filter(proj => !proj.soon)

    const containerRef = useRef(null)
    const legendLabels = useRef(null)

    const [modal, setModal] = useState({ active: false, index: 0 })

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

            <div className={styles.projectList}>
                {
                    filteredProjects.map((proj, i) => (
                        <Project 
                            key={i} 
                            index={i}
                            project={proj}
                            setModal={setModal}
                        />
                    ))
                }
            </div>

            <ShowcaseModal projects={filteredProjects} modal={modal} />
        </section>
    )
}