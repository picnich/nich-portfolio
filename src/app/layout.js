import Script from "next/script";
import localFont from 'next/font/local'

// import './styles/globals.scss'
import '../styles/globals.scss'
import { Preloader } from '../components/Preloader'
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import SmoothScroller from "@/lib/smoothScroller";
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
  description: 'Designed and Developed in Toronto, On',
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
      <body className={`${roobert.variable} font-sans`}>
        <Script
          id="get-theme"
          dangerouslySetInnerHTML={{
            __html: setInitialTheme,
          }}
        />
        <Navigation />
        {children}
        {/* <Footer /> */}
        {/* <Preloader /> */}
        <SmoothScroller />
      </body>
    </html>
  )
}
