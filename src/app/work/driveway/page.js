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


export default function ProjectDriveway() {

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
                <ProjectRowSingle project={content.images[1]} />
                <ProjectRowSingle project={content.images[2]} />
                <ProjectRowSingle project={content.images[3]} />
                <ProjectRowSingle project={content.images[4]} />
            </ProjectGridContainer>
            
            <Footer />
        </main>
    )
}