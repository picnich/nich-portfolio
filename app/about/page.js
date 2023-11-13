"use client"

import { useEffect } from 'react'

import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import { LargeText } from '../components/LargeText'

import styles from './about.module.scss'
import { AboutGallery } from 'app/components/AboutGallery'
import { WorkExperience } from 'app/components/WorkExperience'
import { AboutHero } from 'app/components/AboutHero'
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
      <Navigation />
      <LargeText firstWord={"About"} secondWord={"Me"}/>
      <AboutGallery />
      <AboutHero />
      <WorkExperience />
      <Footer />
    </main>
  )
}
