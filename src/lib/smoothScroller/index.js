'use client';

// From this issue: https://github.com/studio-freight/lenis/issues/170

import Lenis from '@studio-freight/lenis';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import { gsap } from "@/lib/gsap"

/**
 * Wrapper for Lenis
 */
export default function SmoothScroller() {
    const lenis = useRef(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // console.log("Start Smooth Scroller out of useeffect");
    
    // Scroll to top if the dependencies change (on pathname/searchParams/lenis change)
    useEffect(() => {
        if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
        // console.log("scroll to top");
    }, [pathname, searchParams, lenis]);
    
    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const lenis = new Lenis({
                // duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                smoothTouch: true,
              });
            // console.log("Start Smooth Scroller");
    
            // lenis.on('scroll', (e) => {
            //     console.log(e);
            // });
    
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
    
            requestAnimationFrame(raf);
    
            return () => {
                lenis.destroy();
            };
        })
        return () => ctx.revert()
    }, []);

    return <></>;
}