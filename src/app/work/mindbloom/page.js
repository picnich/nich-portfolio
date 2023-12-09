// "use client"

import { cookies } from 'next/headers'

// import { useLayoutEffect } from 'react'
import { gsap } from "@/lib/gsap"


import { ProjectHero } from '@/components/ProjectHero'
import { ProjectOverview } from '@/components/ProjectOverview'
import { 
    IndentedText,
    ProjectImage, 
    ProjectRow, 
    ProjectRowSingle,
    ProjectGridContainer,
} from '@/components/ProjectContent'
import { Footer } from '@/components/Footer'
import { PasswordPromptDialog } from '@/components/PasswordPromptDialog'

import { content } from './data'


export default function ProjectMindbloom() {

    const cookieStore = cookies()
    const loginCookies = cookieStore.get(process.env.PASSWORD_COOKIE_NAME);
    const isLoggedIn = !!loginCookies?.value;
    
    if (!isLoggedIn) {
      return <PasswordPromptDialog />;
    } 

    return (
        <main>
            <ProjectHero content={content} />            
            <ProjectOverview content={content}/>
            
            <ProjectGridContainer>
                <ProjectRow projects={[content.images[0], content.images[1]]} isBigFirst={false} />
                <ProjectRow projects={[content.images[2], content.images[3]]} isBigFirst={true} />
                <ProjectRowSingle project={content.images[4]} />
                <ProjectRowSingle project={content.images[5]} />
            </ProjectGridContainer>
            
            <Footer />
        </main>
    )
}