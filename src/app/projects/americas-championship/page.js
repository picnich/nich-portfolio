"use client"

import { useEffect, useLayoutEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'

import { data, content } from './data'
import { WorkDescription } from '@/components/WorkDescription'
import { ProjectHero } from '@/components/ProjectHero'
import { WorkImage } from '@/components/WorkImage'

import styles from './americas.module.scss'

export default function ProjectAmericas() {

    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    // useEffect( () => {
    // (
    //     async () => {
    //         const LocomotiveScroll = (await import('locomotive-scroll')).default
    //         const locomotiveScroll = new LocomotiveScroll();
    //     }
    // )()
    // }, [])

   
    return (
        <main className={styles.project}>
            <ProjectHero content={content.hero} />            
            <WorkDescription content={content.description} />  

            <section className={styles.project__work}>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[0]} bg={data[2]}/>
                    <WorkImage project={data[1]} />
                </div>
            </section>
            <Footer />
        </main>
    )
}