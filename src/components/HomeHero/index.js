// import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger'



import { titleAnimation } from './animations'
// import { victor } from '../../fonts'
import { Greeting } from '../shared/Greeting'
import { LinkAnim } from '../shared/LinkAnim'

import styles from './HomeHero.module.scss'

export const Hero = () => {

    const titleRefs = useRef([]);

    useEffect(() => {
        
        let context = gsap.context(() => {
            // const tl = gsap.timeline({
            //     // paused: true,
            //     // onComplete: () => router.push('/landing'),
            // })
            titleAnimation(titleRefs.current)
        }, titleRefs)

        return () => context.revert()
    }, [])
    
    return (
        <section className={styles.homeHero}>
            <h1 className={styles.homeHero__headline__desktop}>
                <span className={styles.homeHero__para}>
                    <span className={styles.homeHero__para__line}>
                        <span className={styles.homeHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            <Greeting />, I’m Nich 👋 Welcome to my site 💻 👽. I like <LinkAnim isInternal={true} href="/work" text="designing"/> and  
                        </span>
                    </span>
                    <span className={styles.homeHero__para__line}>
                        <span className={styles.homeHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                        <LinkAnim href="#work__grid" text="building"/> things. I’m currently a Sr. Product Designer at <LinkAnim isInternal={false} href="https://trycatalog.com/" text="Catalog"/> 
                        </span>
                    </span>
                    <span className={styles.homeHero__para__line}>
                        <span className={styles.homeHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            helping small businesses succeed.
                        </span>
                    </span>
                </span>
                <span className={styles.homeHero__para}>
                    <span className={styles.homeHero__para__line}>
                        <span className={styles.homeHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            In my free time, I’m either reading for my <LinkAnim isInternal={false} href="https://booksluts.com/" text="Book Club"/> 📖, cheering on
                        </span>
                    </span>
                    <span className={styles.homeHero__para__line}>
                        <span className={styles.homeHero__para__line__content} ref={(title) => titleRefs.current.push(title)}>
                            the Raptors 🦖, or (my latest obsession) learning about <LinkAnim isInternal={true} href="/" text="wine"/>🍷.
                        </span>
                    </span>

                </span>
            </h1>

            <h1 className={styles.homeHero__headline__mobile}>
                <span>Heya, I’m Nich 👋 Welcome to my site 💻 👽. I like designing and building things. I’m currently a Sr. Product Designer at Catalog, helping small businesses succeed.</span>
                <span>In my free time, I’m either reading for my Book Club 📖, cheering on the Raptors 🦖, or (my latest obsession) learning about wine 🍷.</span>
            </h1>
        </section>
    )
}