"use client"

import { useEffect, useLayoutEffect, useRef } from 'react'

import { Footer } from 'app/components/Footer'

import { data, content } from './data'
import { WorkDescription } from 'app/components/WorkDescription'
import { ProjectHero } from 'app/components/ProjectHero'
import { WorkImage } from 'app/components/WorkImage'

import styles from './ryan.module.scss'

export default function ProjectRyan() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect( () => {
    (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
        }
    )()
    }, [])

   
    return (
        <main className={styles.project}>
            <ProjectHero content={content.hero} />            
            <WorkDescription content={content.description} />  

            <section className={styles.project__work}>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[0]} position='right bottom' />
                    <WorkImage project={data[1]} bg={data[4]} />
                </div>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[2]} bg={data[5]} />
                    <WorkImage project={data[3]} position='left bottom' />
                </div>
            </section>
            <Footer />
        </main>
    )
}