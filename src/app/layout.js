// "use client"

import Script from "next/script";
import localFont from 'next/font/local'

// import './styles/globals.scss'
import '../styles/globals.scss'
import { Preloader } from '../components/Preloader'
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import SmoothScroller from "@/lib/smoothScroller";
import Lenify from "@/components/Scroller/lenis-provider";
import { ReactLocoScrollProvider } from "@/lib/contexts/ReactLocomotiveScrollProvider";
import { Suspense } from "react";
import { PHProvider, PostHogPageview } from "@/lib/contexts/PostHogProvider";
// import { LenisScroller } from '@/components/Scroller/lenis-scroller'


const roobert = localFont({ 
  src: [
    {
      path: '../../public/fonts/Roobert-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roobert-Bold.otf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-roobert',
})

export const metadata = {
  title: 'Nich | Product Designer',
  description: 'Product Designer and Developer from Toronto, CA',
  metadataBase: new URL("https://nich-portfolio.vercel.app/"),
}


export default function RootLayout({ children }) {
  const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light'
      }
      document.body.dataset.theme = getUserPreference();
      // document.body.dataset.theme = 'light';
      
    `;
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={`${roobert.variable} font-sans`}>
          {/* <Script
            id="get-theme"
            dangerouslySetInnerHTML={{
              __html: setInitialTheme,
            }}
          /> */}
          {/* <ReactLocoScrollProvider> */}
            <Navigation />
            {children}

          {/* </ReactLocoScrollProvider> */}
          {/* <main data-scroll-container className="container">
          </main> */}
          {/* <Footer /> */}
          {/* <Preloader /> */}
          {/* <SmoothScroller /> */}
        </body>
      </PHProvider>
    </html>
  )
}
