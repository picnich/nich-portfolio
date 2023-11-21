import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";

import { enterWorkItem } from "./animations";

import styles from "./workImage.module.scss"

export const WorkImage = ({ project, bg, position = 'center' }) => {
    const itemRef = useRef(null);

    const imageStyle = {
        width: '100%', 
        height: '100%',
        backgroundSize: 'cover',
        objectFit: 'cover', 
        objectPosition: position
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    }, [])
    
    
    useEffect(() => {
        const context = gsap.context(() => {
            enterWorkItem(itemRef.current)
        })

        return () => context.revert()
    }, [])


    return (
        // <div className={styles.workGrid__row__item}>
        <div className={styles.project__item} ref={itemRef}>
            {
                bg ? (
                <Image
                    src={bg.image}
                    alt={`Thumbnail for ${project.projectName}'s project`}
                    fill={true}
                    style={imageStyle}
                    className={styles.project__item__bg}
                    // width="100%"
                    // objectFit='contain'
                /> 
                ) : null
            }

            <div className={styles.project__item__imageContainer}>
                <Image
                    src={project.image}
                    alt={`Thumbnail for ${project.projectName}'s project`}
                    fill={true}
                    style={imageStyle}
                    className={styles.project__item__mainImage}
                    // width="100%"
                    // objectFit='contain'
                />
            </div>
            <div className={styles.project__item__caption}>
                {project.name}
            </div>
        </div>
        // </div>

    )
}
