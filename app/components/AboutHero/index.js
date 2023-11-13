"use client"

import { useEffect, useRef } from 'react'
import { gsap } from "gsap"

import styles from './aboutHero.module.scss'
import { titleAnimation } from './animations'
import { victor } from 'app/fonts'

export const AboutHero = () => {
    const titleRefs = useRef([]);

    useEffect(() => {
        const context = gsap.context(() => {
            // const tl = gsap.timeline({
            //     // paused: true,
            //     // onComplete: () => router.push('/landing'),
            // })
            titleAnimation(titleRefs.current)
        })

        return () => context.revert()
    }, [])

    return (
        <section className={styles.aboutHero}>
            <h1 className={styles.aboutHero__headline__desktop}>
                <span className={styles.aboutHero__para}>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            I’m a <span className={victor.className}>multi-disciplinary designer</span> and, based in Toronto, 🇨🇦. During my 
                        </span>
                    </span>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            7+ years in the industry, I’ve worked with <span className={victor.className}>early-stage startups</span> in a 
                        </span>
                    </span>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            variety of industries. Through my experience, I’ve been able to 
                        </span>
                    </span>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            help these companies navigate the challenges of launching and 
                        </span>
                    </span>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            scaling their businesses.
                        </span>
                    </span>
                </span>
                <span className={styles.aboutHero__para}>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            My passion for developing and designing not only fuels my 
                        </span>
                    </span>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            professional journey but also <span className={victor.className}>motivates me to continuously push </span>
                        </span>
                    </span>
                    <span className={styles.aboutHero__para__line}>
                        <span className={styles.aboutHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            <span className={victor.className}>the boundaries</span> of what's possible in the world of design.
                        </span>
                    </span>

                </span>
            </h1>
            <h1 className={styles.aboutHero__headline__mobile}>
                <span>I’m a multi-disciplinary designer, based in Toronto, 🇨🇦. During my 7+ years in the industry, I’ve worked with early-stage startups in a variety of industries. Through my experience, I’ve been able to help these companies navigate the challenges of launching and scaling their businesses.</span>
                <span>My passion for developing and designing not only fuels my professional journey but also motivates me to continuously push the boundaries of what's possible in the world of design.</span>
            </h1>
        </section>
    )
}