// "use client"

// import { useLayoutEffect } from 'react'
// import { gsap } from "@/lib/gsap"
import { cookies } from 'next/headers'

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
import { PasswordPromptDialog } from '@/components/PasswordPromptDialog'


export default function ProjectToohla() {

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
                <ProjectRow projects={[content.images[0], content.images[1]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[2], content.images[3]]} isBigFirst={false} />
                <ProjectRow projects={[content.images[4], content.images[5]]} isBigFirst={true} />
            </ProjectGridContainer>
            
            <IndentedText 
                title={"Outcomes"}
                content={content.content.outcomes}
            />

            <Footer />
        </main>
    )
}