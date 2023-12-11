import { useEffect, useRef, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import { onEnterAnimation } from "./animations"
import { enterHeadlineAnimation } from "../shared/animations"

import { 
    // setInitialState, 
    // animOutOtherWorkItems, 
    // animOutSelectedText, 
    // scaleSectedImage, 
    // animFixPlease, 
    animOutWorkItems, 
    setInitAnim
} from "./animations"

import { data } from "./data"
import styles from "./workSnippet.module.scss"


export const WorkSnippet = ({ timeline, setNextUrl }) => { 
    const containerRef = useRef(null)
    const imageRefs = useRef([])
    const imageContainerRefs = useRef([])
    const contentRefs = useRef([])
    const titleRef = useRef(null)
    const splideListRef = useRef(null)
    const selectedRef = useRef(null)
    const [ clickedIndex, setClickedIndex ] = useState(null)

    const splideOptions = {
        gap: '2rem',
        perPage: 3,
        speed : 600, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30      
        pagination: false,
        arrows: false,
        breakpoints: {
            991: {
                // Tablet
                perPage: 2,
                gap: '3vw',
            },
            767: {
                // Mobile Landscape
                perPage: 1,
                gap: '3vw',
            },
            479: {
                // Mobile Portrait
                perPage: 1,
                gap: '3vw',
            }
        }
    }

    // useIsomorphicLayoutEffect(() => {
    //     if (!containerRef.current) return
    //     if (!titleRef.current) return

    //     const ctx = gsap.context(() => {
    //         onEnterAnimation(containerRef.current, titleRef.current)
    //         // enterHeadlineAnimation(titleRef.current)
    //     }, [containerRef, titleRef])

    //     return () => ctx.revert()

    // }, [])


    // Exit Animation
    useEffect(() => {
        // Intro Animation
        onEnterAnimation(containerRef.current, titleRef.current)


        // if (!timeline) return 
        // console.log(imageRefs.current)

        // Set Initial State
        // Hide Every section? 
        // Hide every work item EXCEPT selected
        // Hide Selected Text
        // Scale Selected Image 
        timeline && timeline
            // .add(setInitialState(containerRef.current))
            // .add(animFixPlease(containerRef.current))
            .add(setInitAnim(clickedIndex))
            .add(animOutWorkItems(titleRef.current, clickedIndex))
            // .add(animOutOtherWorkItems(splideListRef.current, titleRef.current))
            // .add(animOutSelectedText(selectedRef.current))
            // .add(scaleSectedImage(selectedRef.current))

    }, [timeline])


    function handleProjectClick(proj) {
        // Find what item was clicked
        const nextIndex = data.findIndex(el => el.name === proj.name)
        
        // Tell animation what item was clicked
        setClickedIndex(nextIndex)
        // console.log('Starting animation 1/2')

        timeline.data = proj
        timeline.play() 
    }
    
    return (
        <div className={`${styles.workSnippet} scrollContainer`} ref={containerRef}>
            <div className={styles.heading__container}>
                <h2 ref={titleRef}>See some work</h2>
            </div>
            <div className={styles.project__list}>
                <Splide 
                    aria-label="Featured Work"
                    options={splideOptions}
                    style={{ overflow: 'visible' }}
                    className={styles.splide__container}
                    ref={splideListRef}
                >

                {
                    data.map((project, i) => (
                        <WorkItem 
                            key={project.name} 
                            project={project} 
                            isLast={i === (data.length - 1)} 
                            imageRefs={imageRefs}
                            imageContainerRefs={imageContainerRefs}
                            contentRefs={contentRefs}
                            handleProjectClick={(proj) => {
                                // timeline.data = proj
                                // timeline.play() 
                                handleProjectClick(proj)
                            }}
                            // setClickedIndex={setClickedIndex}
                        />
                    ))
                }
                </Splide>
            </div>
        </div>     
    )
}


const WorkItem = ({ project, isLast, imageRefs, handleProjectClick, contentRefs, imageContainerRefs }) => {

    // function handleClick() {
    //     const index = 
    //     console.log('asdfasdf clicked', project)
    //     handleProjectClick(project)
    // }

    return (
        <SplideSlide 
            className={`${styles.project} work__item`} 
            // onClick={() => handleProjectClick(project)}
        >
            <Link href={project.link}>
                <div className={`${styles.project__imgContainer} imgContainer`} ref={i => imageContainerRefs.current.push(i)}>
                    <Image
                        src={project.image}
                        alt={`Project thumbnail for ${project.name} project`}
                        fill={true}
                        ref={img => imageRefs.current.push(img)}
                        />
                </div>
                <div ref={content => contentRefs.current.push(content)}>
                    <ul className={styles.tags}>
                        { 
                            project.tags.map(tag => <div key={tag} className={styles.tag}>{tag}</div>)
                        }
                    </ul>
                    <div className={styles.name_container}>
                        <h2>{project.name}</h2>
                        {
                            isLast && (
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.53333 24L21.3333 11.2V22.6667H24V6.66669H8V9.33335H19.4667L6.66667 22.1334L8.53333 24Z" />
                                </svg>
                            )
                        }
                    </div>
                </div>
            </Link>
        </SplideSlide>
    )
}