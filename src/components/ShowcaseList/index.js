"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { gsap } from "@/lib/gsap"
import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
import useMousePosition from "@/lib/hooks/useMousePosition"

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

            <div className={styles.projectList}>
                {
                    filteredProjects.map((proj, i) => (
                        <ShowcaseProject 
                            key={i} 
                            project={proj}
                            num={i}
                        />
                    ))
                }
            </div>
        </section>
    )
}


const ShowcaseProject = ({ project, num }) => {
    const [isHovering, setHovering] = useState(false)
    const imageRef = useRef(null);
    const imageContainer = useRef(null);
    const comp = useRef(null);
    
    const mousePosition = useMousePosition();

    // console.log(mousePosition)

    // Image Follows Mouse
    useIsomorphicLayoutEffect(() => {
       const ctx = gsap.context(() => {
            gsap.set(imageContainer.current, {
                y: mousePosition.y,
                x: mousePosition.x
            })
        }) 
       return () => ctx.revert()
    }, [mousePosition])
    
    // Is Hovering
    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                scale: isHovering ? 1 : 0, 
                opacity: isHovering ? 1 : 0,
                rotate: -5
            })
        }) 
       return () => ctx.revert()
    }, [isHovering])

    return (
        <div ref={comp}>
            <div className={`${styles.projectImage} img_container`} ref={imageContainer}>
                <Image 
                    src={project.image}
                    alt={`${project.name}'s Project Hero Image`}
                    fill={true}
                    sizes="30vw"
                    loading="lazy"
                    ref={imageRef}
                />
                {/* <p>{mousePosition.x}</p>
                <p>{mousePosition.y}</p> */}
            </div>
            <Link 
                className={`${styles.project} work-item`} 
                href={project.link} 
                onMouseOver={() => setHovering(true)} 
                onMouseLeave={() => setHovering(false)} 
                >
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul>
                    {project.tags.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </Link>
        </div>
    )
}