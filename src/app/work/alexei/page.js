"use client"

import { useLayoutEffect } from 'react'
import { gsap } from "@/lib/gsap"


import { ProjectHero } from '@/components/ProjectHero'
import { ProjectOverview } from '@/components/ProjectOverview'
import { 
    IndentedText,
    ProjectImage, 
    ProjectRow, 
    ProjectGridContainer,
} from '@/components/ProjectContent'
import { Footer } from '@/components/Footer'

import { content } from './data'


export default function ProjectAlexei() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context( () => {
            gsap.set(window, {scrollTo: 0})
        })
        // return ctx.revert()
    }, []);

    return (
        <main>
            <ProjectHero content={content} />            
            <ProjectOverview content={content}/>
            
            <ProjectGridContainer>
                <ProjectRow projects={[content.images[0], content.images[1]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[2], content.images[3]]} isBigFirst={false} />
                <ProjectRow projects={[content.images[4], content.images[5]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[6], content.images[7]]} isBigFirst={false} />
            </ProjectGridContainer>
            
            <Footer />
        </main>
    )
}