import { useRef } from "react"
import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
import { gsap } from '@/lib/gsap'
import { SplitAndEnterText } from "@/lib/animations"

import styles from "./aboutBlurb.module.scss"

export const AboutBlurb = () => {

    const para1 = useRef(null)
    const para2 = useRef(null)
    const para3 = useRef(null)

    useIsomorphicLayoutEffect( () => {
        if (!para1.current) return

        let context = gsap.context(() => {
            SplitAndEnterText(para1.current);
            SplitAndEnterText(para2.current);
            SplitAndEnterText(para3.current);
        }, [para1])
        
        return () => context.revert()
        
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.aboutBlurb}>
                
                <h6>About Me</h6>
                <p ref={para1}>
                    During my 7+ years in the industry, I’ve worked with early-stage startups in a variety of industries. Through my experience, I’ve been able to help these companies navigate the challenges of launching and scaling their businesses.
                </p>
                <p ref={para2}>
                    My passion for developing and designing not only fuels my professional journey but also motivates me to continuously push the boundaries of what's possible in the world of design.
                </p>
                <p ref={para3}>
                    In my free time, I’m either reading for my Book Club, cheering on the Raptors, or (my latest obsession) learning about wine.
                </p>
            </div>
        </div>
    )
}