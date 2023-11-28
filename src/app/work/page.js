// "use client"

// import { useEffect } from 'react'

import { cookies } from 'next/headers'

import { Footer } from '../../components/Footer'
import { Navigation } from '../../components/Navigation'
import { LargeText } from '../../components/LargeText'

import styles from './work.module.scss'
import { AboutGallery } from '@/components/AboutGallery'
import { WorkExperience } from '@/components/WorkExperience'
import { AboutHero } from '@/components/AboutHero'
import { PasswordPromptDialog } from '@/components/PasswordPromptDialog'


export default function WorkPage() {

    const cookieStore = cookies()
    const loginCookies = cookieStore.get(process.env.PASSWORD_COOKIE_NAME);
    const isLoggedIn = !!loginCookies?.value;
    
    if (!isLoggedIn) {
      return <PasswordPromptDialog />;
    } 
 
    return (
    <main className={styles.main}>
        {/* <Navigation /> */}
        <LargeText firstWord={"Work"} secondWord={"Work"}/>
        <AboutGallery />
        <AboutHero />
        <WorkExperience />
        <Footer />
    </main>
    )
}