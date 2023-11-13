"use client"

import { useEffect } from 'react'

// import { Footer } from './components/Footer'
// import { Navigation } from './components/Navigation'
// import { WorkGrid } from './components/WorkGrid'
// import { Hero } from './components/HomeHero'

// import styles from './page.module.scss'
import { LargeText } from 'app/components/LargeText'
// import { Preloader } from './components/Preloader'


export default function Home() {
    
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main>
        <Spacer />
        <Spacer />
        <LargeText firstWord={"PLEASE"} secondWord={"work"} />
        <Spacer />
    </main>
  )
}


const Spacer = () => {
    return (
        <div style={{height:"100vh", display: "block", background: "orange"}}></div>
    )
}