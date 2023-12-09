"use client"

import Image from "next/image"
import Link from "next/link"

import { data } from "./data"
import styles from "./showcaseHero.module.scss"

export const ShowcaseHero = () => {
    return (
        <section className={styles.showcaseHero}>
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
        <Link href={project.link} className={styles.project}>
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