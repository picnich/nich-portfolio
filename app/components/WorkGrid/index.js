import Image from 'next/image'
import gsap from "gsap"

import { data } from './data'
import Link from 'next/link'
// import { victor } from 'app/fonts'
import { useEffect, useRef } from 'react'
import { enterWorkItem } from '../WorkImage/animations'


import styles from './WorkGrid.module.scss'

const imageStyle = {
    width: '100%', 
    height: '100%',
    backgroundSize: 'cover',
    objectFit: 'cover'
}

export const WorkGrid = () => {
    return (
        <section className={styles.workGrid} id="work__grid">
            <div className={styles.workGrid__row}>
                <WorkPreviewImage project={data.booksluts} />
                <WorkPreviewImage project={data.ally} comingSoon={true} />
            </div>
            <div className={styles.workGrid__row}>
                <WorkPreviewImage project={data.tired} />
                <WorkPreviewImage project={data.ryan} />
            </div>
            <div className={styles.workGrid__row}>
                <WorkPreviewImage project={data.pickleball} />
                <WorkPreviewImage project={data.alexei} />
            </div>
            <div className={styles.workGrid__row}>
                <WorkPreviewImage project={data.canadianFintech} />
                <WorkPreviewImage project={data.homebnb} comingSoon={true} />
            </div>
            {/* <WorkPreviewImage project={data.creditkick} /> */}
        </section>
    )
}



export const WorkPreviewImage = ({ project, comingSoon }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        let context = gsap.context(() => {
        
            enterWorkItem(itemRef.current)
        
        }, itemRef)

        return () => context.revert()
    }, [])


    return (
        // <div className={styles.workGrid__row__item}>
        <Link 
            href={comingSoon ? '' : project.link} 
            className={styles.workGrid__row__item} 
            ref={itemRef} 
            scroll={true}
        >       
            <Image
                src={project.image}
                alt={`Thumbnail for ${project.projectName}'s project`}
                fill={true}
                style={imageStyle}
                // width="100%"
                // objectFit='contain'
            />
            <div className={styles.workGrid__row__item__overlay}></div>
            <div className={styles.item__content}>
                <div className={styles.item__content__heading}>
                    <h3>{project.name}</h3>
                    {
                        comingSoon ? (
                            <div className={styles.comingSoon}>Coming Soon</div>
                        ) : ''
                    }
                </div>
                <ul className={styles.categoryList}>
                    {
                        project.category.map( (cat, i) => {
                            return (
                                <li 
                                    key={i} 
                                    className={styles.categoryList__item}
                                >
                                    {cat}
                                </li>
                                )
                            })
                    }
                </ul>
            </div>
            
        </Link>
        // </div>

    )
}