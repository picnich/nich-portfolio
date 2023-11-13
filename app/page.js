"use client"

import { useEffect } from 'react'

import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { LargeText } from './components/LargeText'
import { WorkGrid } from './components/WorkGrid'
import { Hero } from './components/HomeHero'

import styles from './page.module.scss'
// import { Preloader } from './components/Preloader'


export default function Home() {
    
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
      <Hero />
      <LargeText firstWord={"Some"} secondWord={"work"}/>
      <WorkGrid />
      <Footer />
    </main>
  )
}
