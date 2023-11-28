import { useEffect, useRef } from "react";
import Image from "next/image";


import { gsap, ScrollTrigger } from "@/lib/gsap";
import { enterWorkItem } from "./animations";
import { enterHeadlineAnimation } from "../shared/animations";

import styles from "./projectContent.module.scss"
import { SplitAndEnterText } from "@/lib/animations";


/* **************
    Layout
************** */
export const ProjectGridContainer = ({children}) => {
    return (
        <section className={styles.project__container}>
            {children}
        </section>
    )
}

export const ProjectRow = ({ projects, isBigFirst = true }) => {
    return (
        <div className={isBigFirst ? styles.row__bigSmall : styles.row__smallBig}>
            <ProjectImage project={projects[0]} />
            <ProjectImage project={projects[1]} />
        </div>

    )
}

/* **************
    Image
************** */
export const ProjectImage = ({ project }) => {
    const itemRef = useRef(null);

    const imageStyle = {
        width: '100%', 
        height: '100%',
        backgroundSize: 'cover',
        objectFit: 'cover', 
    }

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    // }, [])
    
    
    useEffect(() => {
        const context = gsap.context(() => {
            enterWorkItem(itemRef.current)
        })

        return () => context.revert()
    }, [])


    return (
        <div className={styles.project__image} ref={itemRef}>
            <div className={styles.project__image__Container}>
                <Image
                    src={project.image}
                    alt={`Thumbnail for ${project.projectName}'s project`}
                    fill={true}
                    style={imageStyle}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    className={`${styles.project__item__mainImage} project__img`}
                />
            </div>
            <div className={styles.project__image__caption}>
                {project.name}
            </div>
        </div>
    )
}


/* **************
    Text
************** */
const concatStrings = (v) => [].concat(v).map(name => name)

export const IndentedText = ({ title, content }) => {
    const ArrayedContent = concatStrings(content);
    
    const contentRefs = useRef([])
    const titleRef = useRef(null)

    useEffect(() => {
        const context = gsap.context(() => {
            // enterHeadlineAnimation(contentRefs.current)
            SplitAndEnterText(titleRef.current)
            SplitAndEnterText(contentRefs.current)
        })

        return () => context.revert()
    }, [])
    
    return (
        <div className={styles.indentedText}>
            <div className={styles.indentedText__container}>
                <h6 ref={titleRef}>{title}</h6>
                {
                    ArrayedContent.map(para => <p key={para} ref={(title) => contentRefs.current.push(title)}>{para}</p>)
                }
            </div>
        </div>  
    )
}