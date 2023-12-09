// "use client"
import { cookies } from 'next/headers'

// import { useLayoutEffect } from 'react'
// import { gsap } from "@/lib/gsap"


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



export default function ProjectBolder() {

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
                <ProjectRowSingle project={content.images[0]} />
                <ProjectRow projects={[content.images[1], content.images[2]]} isBigFirst={true} />
                <ProjectRowSingle project={content.images[3]} />
                <ProjectRow projects={[content.images[4], content.images[5]]} isBigFirst={false} />
                <ProjectRow projects={[content.images[6], content.images[7]]} isBigFirst={true} />
            </ProjectGridContainer>
            
            <Footer />
        </main>
    )
}