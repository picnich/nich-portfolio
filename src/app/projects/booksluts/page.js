"use client"

// import { WorkPreviewImage } from 'app/components/WorkGrid'
import { useEffect, useLayoutEffect, useRef } from 'react'

// import gsap from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Image from 'next/image'

// import { Navigation } from 'app/components/Navigation'
import { Footer } from '@/components/Footer'
// import { enterWorkItem } from 'app/components/WorkImage/animations'
import { enterHeadlineAnimation } from '@/components/shared/animations'

import { data, content } from './data'
// import { WorkDescription } from '@/components/WorkDescription'
import { ProjectHero } from '@/components/ProjectHero'
// import { WorkImage } from '@/components/WorkImage'
import { ProjectOverview } from '@/components/ProjectOverview'
import { 
    IndentedText,
    ProjectImage, 
    ProjectRow, 
    ProjectGridContainer,
} from '@/components/ProjectContent'

import { gsap, ScrollToPlugin } from "@/lib/gsap"

import styles from './booksluts.module.scss'


export default function ProjectBookSluts() {

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
                <ProjectRow projects={[content.images[4], content.images[5]]} isBigFirst={true} />
            </ProjectGridContainer>
            

            <IndentedText 
                title={"Strategy"}
                content={content.content.strategy}
            />
            
            <ProjectGridContainer>
                <ProjectRow projects={[content.images[6], content.images[7]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[8], content.images[9]]} isBigFirst={false} />
                <ProjectRow projects={[content.images[10], content.images[11]]} isBigFirst={true} />
            </ProjectGridContainer>
            
            <IndentedText 
                title={"Experience"}
                content={content.content.experience}
            />

            <ProjectGridContainer>
                <ProjectRow projects={[content.images[12], content.images[13]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[14], content.images[15]]} isBigFirst={false} />
            </ProjectGridContainer>
            
            <Footer />
        </main>
    )
}