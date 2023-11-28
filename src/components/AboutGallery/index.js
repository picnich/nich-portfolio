"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

import { gsap, ScrollTrigger } from '@/lib/gsap'
import useIsomorphicLayoutEffect from '@/lib/hooks/useIsomorphicLayoutEffect'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import { images } from "./data"
import { scrollGallery, onEnterGallery } from './animations'

import styles from './aboutGallery.module.scss'

const imageStyle = {
    width: '100%', 
    height: '100%',
    backgroundSize: 'cover',
    objectFit: 'cover'
}

export const AboutGallery = () => {
    const imgContainerRef = useRef(null);

    const splideOptions = {
        gap: '1rem',
        perPage: 3,
        speed : 600, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30      
        pagination: false,
        arrows: false,
        breakpoints: {
            991: {
                // Tablet
                perPage: 2,
            },
            767: {
                // Mobile Landscape
                perPage: 1,
            },
            479: {
                // Mobile Portrait
                perPage: 1,
            }
        }
    }


    useIsomorphicLayoutEffect(() => {
        if (!imgContainerRef.current) return 
        
        const context = gsap.context(() => { 
            onEnterGallery(imgContainerRef.current);
        })
        
        return () => context.revert();

    }, [])

    return (
        <div className={styles.aboutGallery} ref={imgContainerRef}>
            <Splide 
                aria-label="Photo Gallery"
                options={splideOptions}
            >
                {
                    images.map((pic, i) => (
                        <GalleryItem 
                            key={i}
                            pic={pic}
                        />
                    ))
                }
            </Splide>
        </div>
    )
}

const GalleryItem = ({ pic }) => {
    return (
        <SplideSlide>
            <div className={styles.aboutGallery__item}>
                <Image
                    src={pic.url}
                    alt={pic.caption}
                    fill={true}
                    className={styles.aboutGallery__item__image}
                    style={imageStyle}
                    // width="100%"
                    // objectFit='contain'
                    />
                <div className={styles.aboutGallery__item__caption}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00781 4.125C7.53808 4.125 7.0789 4.26429 6.68833 4.52526C6.29777 4.78623 5.99336 5.15715 5.8136 5.59113C5.63384 6.0251 5.58681 6.50263 5.67845 6.96334C5.77009 7.42404 5.99628 7.84723 6.32843 8.17938C6.66058 8.51153 7.08377 8.73772 7.54447 8.82936C8.00518 8.921 8.48271 8.87397 8.91669 8.69421C9.35066 8.51446 9.72158 8.21005 9.98255 7.81948C10.2435 7.42891 10.3828 6.96973 10.3828 6.5C10.3828 5.87011 10.1326 5.26602 9.68719 4.82062C9.24179 4.37522 8.6377 4.125 8.00781 4.125ZM8.00781 8.125C7.68642 8.125 7.37224 8.0297 7.10501 7.85114C6.83778 7.67258 6.6295 7.41879 6.50651 7.12186C6.38352 6.82493 6.35134 6.4982 6.41404 6.18298C6.47674 5.86776 6.6315 5.57821 6.85876 5.35095C7.08602 5.12369 7.37557 4.96892 7.69079 4.90622C8.00601 4.84352 8.33274 4.8757 8.62967 4.9987C8.9266 5.12169 9.18039 5.32997 9.35895 5.5972C9.53751 5.86443 9.63281 6.17861 9.63281 6.5C9.63117 6.93047 9.45943 7.34284 9.15504 7.64723C8.85065 7.95162 8.43828 8.12335 8.00781 8.125ZM8.00781 1.125C6.58278 1.12665 5.21659 1.69348 4.20894 2.70113C3.20129 3.70878 2.63447 5.07497 2.63281 6.5C2.63281 8.43125 3.53281 10.4812 5.22656 12.4312C5.99036 13.3174 6.85211 14.1141 7.79531 14.8062C7.85752 14.8502 7.93164 14.8742 8.00781 14.875C8.08576 14.8732 8.16161 14.8494 8.22656 14.8062C9.16545 14.1112 10.0248 13.3147 10.7891 12.4312C12.4891 10.4812 13.3828 8.43125 13.3828 6.5C13.3812 5.07497 12.8143 3.70878 11.8067 2.70113C10.799 1.69348 9.43284 1.12665 8.00781 1.125ZM8.00781 14.0312C7.07031 13.3062 3.38281 10.225 3.38281 6.5C3.38281 5.27337 3.87009 4.09699 4.73744 3.22963C5.6048 2.36228 6.78119 1.875 8.00781 1.875C9.23444 1.875 10.4108 2.36228 11.2782 3.22963C12.1455 4.09699 12.6328 5.27337 12.6328 6.5C12.6328 10.225 8.94531 13.3062 8.00781 14.0312Z"/>
                    </svg>
                    {pic.caption}
                </div>

            </div>
        </SplideSlide>  
    )
}