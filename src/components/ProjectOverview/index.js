import { useEffect, useRef } from "react"

import { gsap } from "@/lib/gsap"
import { 
    enterHeadlineAnimation, 
    enterListAnimation
} from "../shared/animations"

import styles from "./projectOverview.module.scss"
import { SplitAndEnterText } from "@/lib/animations"

export const ProjectOverview = ({ content }) => {
    const descriptionTextRef = useRef(null);
    const projectTypesRef = useRef(null);
    const projectToolsRef = useRef(null);
    const subtitlesRef = useRef([])

    useEffect(() => {
        const context = gsap.context(() => {
            SplitAndEnterText(subtitlesRef.current)
            enterHeadlineAnimation(descriptionTextRef.current)
            enterListAnimation(projectTypesRef.current, projectToolsRef.current)
        })

        return () => context.revert()
    }, [])

    return (
        <section className={styles.project__overview}>
            <div className={styles.project__overview__container}>
                <div className={styles.project__overview__content}>
                    <h6 ref={text => subtitlesRef.current.push(text)}>Overview</h6>
                    <h2 ref={descriptionTextRef}>{content.content.overview} </h2>
                </div>
                <div className={styles.project__overview__tags}>
                    <h6 ref={text => subtitlesRef.current.push(text)}>Project</h6>
                    <ul ref={projectTypesRef} className={styles.tag__container}>
                        {
                            content.projectTypes.map((tag, i) => <li className={styles.tag__container__item} key={i}>{tag}</li>)
                        }
                    </ul>
                    <ul ref={projectToolsRef} className={styles.tag__container}>
                        {
                            content.projectTools.map((tag, i) => <li className={styles.tag__container__item} key={i}>{tag}</li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}