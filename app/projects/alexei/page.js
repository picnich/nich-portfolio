"use client"

// import { WorkPreviewImage } from 'app/components/WorkGrid'
import { useEffect, useLayoutEffect, useRef } from 'react'

import gsap from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Image from 'next/image'

// import { Navigation } from 'app/components/Navigation'
import { Footer } from 'app/components/Footer'
// import { enterWorkItem } from 'app/components/WorkImage/animations'
// import { enterHeadlineAnimation } from 'app/components/shared/animations'

import { WorkDescription } from 'app/components/WorkDescription'
import { ProjectHero } from 'app/components/ProjectHero'
import { WorkImage } from 'app/components/WorkImage'

import { data, content } from './data'
import styles from './alexei.module.scss'

export default function ProjectAlexei() {
    // const descriptionTextRef = useRef(null);

    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);


    // useEffect( () => {
    //     (
    //         async () => {
    //             const LocomotiveScroll = (await import('locomotive-scroll')).default
    //             const locomotiveScroll = new LocomotiveScroll();
    //         }
    //       )()
    // }, [])

    // useEffect(() => {
    //     const context = gsap.context(() => {
    //         enterHeadlineAnimation(descriptionTextRef.current)
    //     })

    //     return () => context.revert()
    // }, [])
    

   
    return (
        <main className={styles.project}>
            <ProjectHero content={content.hero} />  
            <WorkDescription content={content.description} isSimple={false} />  

            <section className={styles.project__work}>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[0]} position='left'/>
                    <WorkImage project={data[1]} />
                </div>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[2]} />
                    <WorkImage project={data[3]} position='top'/>
                </div>
            </section>
            <Footer />
        </main>
    )
}

