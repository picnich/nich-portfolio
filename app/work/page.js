// "use client"

// import { useEffect } from 'react'

import { cookies } from 'next/headers'

import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { LargeText } from '../components/LargeText'

import styles from './work.module.scss'
import { AboutGallery } from 'app/components/AboutGallery'
import { WorkExperience } from 'app/components/WorkExperience'
import { AboutHero } from 'app/components/AboutHero'
import { PasswordPromptDialog } from 'app/components/PasswordPromptDialog'


export default function WorkPage() {

    const cookieStore = cookies()
    const loginCookies = cookieStore.get(process.env.PASSWORD_COOKIE_NAME);
    const isLoggedIn = !!loginCookies?.value;
    
    if (!isLoggedIn) {
      return <PasswordPromptDialog />;
    } else {
        console.log('asdfasdf logged in')
    }
 
    return (
    <main className={styles.main}>
        <Navigation />
        <LargeText firstWord={"Work"} secondWord={"Work"}/>
        <AboutGallery />
        <AboutHero />
        <WorkExperience />
        <Footer />
    </main>
    )
}