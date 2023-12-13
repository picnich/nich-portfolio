import Link from "next/link"

import styles from "./showcaseProject.module.scss"

export const Project = ({ project, index, setModal}) => {
    return (
        <Link 
            className={`${styles.project} work-item`} 
            href={project.link} 
            onMouseOver={() => setModal({ active: true, index: index})}
            onMouseLeave={() => setModal({ active: false, index: index})}
            >
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul>
                {project.tags.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </Link>
    )
}