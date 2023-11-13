"use client"

// import { WorkPreviewImage } from 'app/components/WorkGrid'
import { useEffect, useLayoutEffect, useRef } from 'react'

import gsap from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Image from 'next/image'

// import { Navigation } from 'app/components/Navigation'
import { Footer } from 'app/components/Footer'
// import { enterWorkItem } from 'app/components/WorkImage/animations'
import { enterHeadlineAnimation } from 'app/components/shared/animations'

import { data, content } from './data'
import { WorkDescription } from 'app/components/WorkDescription'
import { ProjectHero } from 'app/components/ProjectHero'
import { WorkImage } from 'app/components/WorkImage'
import styles from './booksluts.module.scss'

export default function ProjectBookSluts() {
    const blurbRef = useRef([]);

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

    useEffect(() => {
        const context = gsap.context(() => {
            enterHeadlineAnimation(blurbRef.current)
        })

        return () => context.revert()
    }, [])
    

   
    return (
        <main className={styles.project}>
            <ProjectHero content={content.hero} />            
            <WorkDescription content={content.description} />  

            <section className={styles.project__work}>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[0]} />
                    <WorkImage project={data[1]} />
                </div>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[2]} />
                    <WorkImage project={data[3]} />
                </div>
            </section>
            <section className={styles.project__work}>
                <div className={styles.project__work__blurb}>
                    <h2>Strategy</h2>
                    <div>
                        <p ref={text => blurbRef.current.push(text)}>I wanted the brand to be bold and memorable, while also conveying a sense of inclusivity, and community. I drew inspiration from the club's contemporary book selection and created a visual language that with as much sass as the characters in the books we read.</p>
                        
                        <p ref={text => blurbRef.current.push(text)}>The web design experience for the website is heavily inspired by print magazines and editorial design. The large contrasting type, big use of white space, horizontal scroll and bold colours are all characteristics I was inspired by when designing the site.</p>
                    </div>
                </div>
                <div className={styles.project__work__row}>
                    <WorkImage project={data[5]} />
                    <WorkImage project={data[4]} />
                </div>
            </section>
            <Footer />
        </main>
    )
}