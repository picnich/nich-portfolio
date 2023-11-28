"use client"

import { useEffect, useLayoutEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { gsap, ScrollToPlugin } from "@/lib/gsap"

import { data, content } from './data'
// import { WorkDescription } from '@/components/WorkDescription'
// import { WorkImage } from '@/components/WorkImage'
import { ProjectHero } from '@/components/ProjectHero'
import { ProjectOverview } from '@/components/ProjectOverview'
import { 
    IndentedText,
    ProjectImage, 
    ProjectRow, 
    ProjectGridContainer,
} from '@/components/ProjectContent'
import styles from './ryan.module.scss'

export default function ProjectRyan() {

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
                <ProjectRow projects={[content.images[0], content.images[1]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[2], content.images[3]]} isBigFirst={false} />
            </ProjectGridContainer>


            <Footer />
        </main>
    )
}