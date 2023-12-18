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
    ProjectRowSingle,
} from '@/components/ProjectContent'
import { Footer } from '@/components/Footer'

import { content } from './data'
import { PasswordPromptDialog } from '@/components/PasswordPromptDialog'


export default function ProjectPFF() {

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
                title={"Opportunity"}
                content={content.content.opportunity}
            />
            <ProjectGridContainer>
                <ProjectRowSingle project={content.images[1]} />
                <ProjectRowSingle project={content.images[2]} />
                <ProjectRow projects={[content.images[3], content.images[4]]} isBigFirst={true} />
                <ProjectRow projects={[content.images[5], content.images[6]]} isBigFirst={false} />
                <ProjectRow projects={[content.images[7], content.images[8]]} isBigFirst={true} />
            </ProjectGridContainer>

            <Footer />
        </main>
    )
}