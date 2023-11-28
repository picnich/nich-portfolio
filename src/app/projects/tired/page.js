"use client"

import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap, ScrollToPlugin } from "@/lib/gsap"

import { Footer } from '@/components/Footer'

import { data, content } from './data'
import { WorkDescription } from '@/components/WorkDescription'
import { ProjectHero } from '@/components/ProjectHero'
import { WorkImage } from '@/components/WorkImage'
import { ProjectOverview } from '@/components/ProjectOverview'
import { 
    IndentedText,
    ProjectImage, 
    ProjectRow, 
    ProjectGridContainer,
} from '@/components/ProjectContent'

import styles from './tired.module.scss'

export default function ProjectTired() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context( () => {
            gsap.set(window, {scrollTo: 0})
        })

        // return ctx.revert()
    }, []);
   
    return (
        <main className={styles.project}>
            <ProjectHero content={content} />            
            <ProjectOverview content={content}/>
            
            <ProjectGridContainer>
                <ProjectRow projects={[content.images[0], content.images[1]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[2], content.images[3]]} isBigFirst={false} />
            </ProjectGridContainer>
            
            <IndentedText 
                title={"Development"}
                content={content.content.development}
            />
            
            <ProjectGridContainer>
                <ProjectRow projects={[content.images[4], content.images[4]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[5], content.images[6]]} isBigFirst={false} />
            </ProjectGridContainer>

            <Footer />
        </main>
    )
}