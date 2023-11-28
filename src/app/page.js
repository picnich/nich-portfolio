"use client"

import { useEffect, useState, useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

import useIsomorphicLayoutEffect from '@/lib/hooks/useIsomorphicLayoutEffect'
import { gsap } from "@/lib/gsap"

import { Footer } from '../components/Footer'
import { Hero } from '../components/HomeHero'
import { AboutGallery } from '@/components/AboutGallery'
import { AboutBlurb } from '@/components/AboutBlurb'
import { WorkExperience } from '@/components/WorkExperience'
import { WorkSnippet } from '@/components/WorkSnippet'

// import styles from './page.module.scss'

export default function Home() {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null)

  useEffect(() => {
      const context = gsap.context(() => {
          const tl = gsap.timeline({
              paused: true,
              onComplete: handleCompleteAnimation,
          })
          setTimeline(tl)
      })

      return () => context.revert()
  }, [])

  function handleCompleteAnimation() {
    router.push(this.data.link, { scroll: true })
    // router.push(this.data.link)
  }

  return (
    <main>
      <Hero />
      <AboutGallery />
      <AboutBlurb />
      <WorkExperience />
      <WorkSnippet timeline={timeline} />
      <Footer />
    </main>
  )
}
