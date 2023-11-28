import { useRef } from 'react'

import useIsomorphicLayoutEffect from '@/lib/hooks/useIsomorphicLayoutEffect'
import { gsap } from '@/lib/gsap'
import { SplitAndEnterText } from '@/lib/animations'

import styles from './HomeHero.module.scss'


export const Hero = () => {
    const headlineRef = useRef(null)

    useIsomorphicLayoutEffect(() => {
        if (!headlineRef.current) return
        
        let context = gsap.context(() => {
            SplitAndEnterText(headlineRef.current)
        }, headlineRef)

        return () => context.revert()
    }, [])
    
    return (
        <section className={styles.homeHero}>
            <h1 ref={headlineRef}>
                Heya, I’m Nich 👋 I’m a Product Designer & Developer that <br />loves designing apps, experiences and everything in <br />between for forward-thinking businesses.
            </h1>
        </section>
    )
}