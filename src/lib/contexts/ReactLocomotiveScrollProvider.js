"use client"

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';

export const ReactLocoScrollProvider = ({ Component, pageProps, children, options }) => {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      onLocationChange={(scroll) => {
        console.log('scroll to top')
        window.scrollTo(0,0);
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        {/* <Component {...pageProps} />; */}
        {children}
      </div>
    </RLSProvider>
  );
}

