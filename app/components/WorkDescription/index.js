import { useEffect, useRef } from "react"

import gsap from "gsap"

import { enterHeadlineAnimation } from "../shared/animations"

import styles from "./workDescription.module.scss"

export const WorkDescription = ({ content, pageTitle }) => {
    const descriptionTextRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            enterHeadlineAnimation(descriptionTextRef.current)
        })

        return () => context.revert()
    }, [])

    return (
        <section className={styles.project__description}>
            <h1>{pageTitle}</h1>

            {
                content.tags ? (
                    <LongDescription descRef={descriptionTextRef } content={content} />
                ) : (
                    <ShortDescription descRef={descriptionTextRef } content={content} />
                )
            }
        </section>
    )
}

const LongDescription = ({ descRef, content }) => (
    <div className={styles.project__description__container}>
        <div className={styles.col}>
            <h2 ref={descRef}>{content.description} </h2>
            <a href={content.link} target="_blank" className={styles.visit}>
                Visit Site
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.92333 7.28585L9.84293 7.28584L6.29561 10.8332L7.12057 11.6581L12.0703 6.70837L7.12056 1.75863L6.29561 2.58359L9.84293 6.1309L1.92333 6.1309L1.92333 7.28585Z"/>
                </svg>
            </a>
        </div>
        <div className={styles.col}>
            <ul className={styles.detail__list}>
                {
                    content.tags.map((tag, i) => <li className={styles.detail__list__item} key={i}>{tag}</li>)
                }
            </ul>
        </div>
    </div>
)

const ShortDescription = ({ descRef, content }) => (
    <div className={styles.single__col}>
        <h2 ref={descRef}>{content.description} </h2>
    </div>
)