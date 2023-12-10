// "use client"

// import { useEffect } from 'react'

import { Footer } from '../../components/Footer'
import { Navigation } from '../../components/Navigation'
import { LargeText } from '../../components/LargeText'

import styles from './about.module.scss'
import { AboutGallery } from '@/components/AboutGallery'
import { WorkExperience } from '@/components/WorkExperience'
import { AboutHero } from '@/components/AboutHero'
// import { Preloader } from './components/Preloader'


export default function AboutPage() {
    
  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  return (
    <main className={styles.main}>
      {/* <Navigation /> */}
      <LargeText firstWord={"About"} secondWord={"Me"}/>
      <AboutGallery />
      <AboutHero />
      <WorkExperience />
      <Footer />
    </main>
  )
}


export const metadata = {
  title: 'About | Nich Pereira',
  description: 'Product Designer and Developer from Toronto, CA',
  metadataBase: new URL("https://nich-portfolio.vercel.app/"),
}