"use client"
import Link from "next/link"

import { data } from "./data"
import styles from "./showcaseList.module.scss"

export const ShowcaseList = () => {
    const filteredProjects = data.filter(proj => !proj.soon)
    return (
        <section className={styles.showcaseList}>
            <div className={styles.showcaseList__legend}>
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
        <Link className={styles.project} href={project.link}>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul>
                {project.tags.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </Link>
    )
}