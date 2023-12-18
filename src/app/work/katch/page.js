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
    ProjectRowSingle,
    ProjectGridContainer,
} from '@/components/ProjectContent'
import { Footer } from '@/components/Footer'

import { content } from './data'
import { PasswordPromptDialog } from "@/components/PasswordPromptDialog"


export default function ProjectKatch() {

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
            </ProjectGridContainer>
            
            <IndentedText 
                title={"Challenge"}
                content={content.content.challenge}
            />
            <ProjectGridContainer>
                <ProjectRow projects={[content.images[1], content.images[2]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[3], content.images[4]]} isBigFirst={false} />
            </ProjectGridContainer>
            
            <Footer />
        </main>
    )
}