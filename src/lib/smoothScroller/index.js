'use client';

// From this issue: https://github.com/studio-freight/lenis/issues/170

import Lenis from '@studio-freight/lenis';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';

/**
 * Wrapper for Lenis
 */
export default function SmoothScroller() {
    const lenis = useRef<Lenis | null>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Scroll to top if the dependencies change (on pathname/searchParams/lenis change)
    useEffect(() => {
        if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
    }, [pathname, searchParams, lenis]);

    useEffect(() => {
        const lenis = new Lenis();

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
    }, []);

    return <></>;
}