"use client"

import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { enterFooterText, enterMetaText } from "./animations"

import styles from './Footer.module.scss'

import { NavList } from '../Navigation'
import { LargeText } from '../LargeText'

export const Footer = () => {
    const textRef = useRef([])
    const linksRef = useRef([])
    // const metaTextsRef = useRef([])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        let context = gsap.context(() => {
            enterFooterText(textRef.current, linksRef.current);
            // enterMetaText(metaTextsRef.current);
        }, [textRef, linksRef])
        
        return () => context.revert()
    }, [])

    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     enterFooterText(textRef.current, linksRef.current);
    // }, [])

    return (
        <>
            <LargeText firstWord={"Say"} secondWord={"Hey"}/>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    {/* <hr /> */}
                    <div className={styles.content}>
                        <h2 className={styles.content__headline}>
                            <span className={styles.footer__para__line}>
                                <span className={styles.footer__para__line__content} ref={ title => textRef.current.push(title) }>
                                    Thanks for stopping by!
                                </span>
                            </span>
                            <span className={styles.footer__para__line}>
                                <span className={styles.footer__para__line__content} ref={ title => textRef.current.push(title) }>
                                    Up to date work available
                                </span>
                            </span>
                            <span className={styles.footer__para__line}>
                                <span className={styles.footer__para__line__content} ref={ title => textRef.current.push(title) }>
                                    upon request.
                                </span>
                            </span>
                        </h2>
                        <ul className={styles.contactLinks}>
                            <li ref={(link) => linksRef.current.push(link)}>
                                <a href="/2023-Nich Pereira_Resume.pdf" download={true}>Download CV</a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.27344 9.03906C6.15637 8.92096 6.09101 8.76119 6.09174 8.59489C6.09248 8.4286 6.15924 8.26941 6.27734 8.15234C6.39545 8.03528 6.55522 7.96992 6.72151 7.97065C6.8878 7.97138 7.04699 8.03815 7.16406 8.15625L9.375 10.3672V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V10.3672L12.8359 8.15625C12.8939 8.09777 12.9628 8.05128 13.0388 8.01944C13.1147 7.98759 13.1961 7.97101 13.2785 7.97065C13.3608 7.97029 13.4424 7.98615 13.5186 8.01732C13.5949 8.0485 13.6642 8.09438 13.7227 8.15234C13.7811 8.21031 13.8276 8.27923 13.8595 8.35516C13.8913 8.43109 13.9079 8.51256 13.9083 8.59489C13.9086 8.67723 13.8928 8.75884 13.8616 8.83505C13.8304 8.91126 13.7845 8.98058 13.7266 9.03906L10.4453 12.3203C10.3258 12.4358 10.1662 12.5004 10 12.5004C9.83382 12.5004 9.67415 12.4358 9.55469 12.3203L6.27344 9.03906ZM16.875 11.25C16.7092 11.25 16.5503 11.3158 16.4331 11.4331C16.3158 11.5503 16.25 11.7092 16.25 11.875V16.25H3.75V11.875C3.75 11.7092 3.68415 11.5503 3.56694 11.4331C3.44973 11.3158 3.29076 11.25 3.125 11.25C2.95924 11.25 2.80027 11.3158 2.68306 11.4331C2.56585 11.5503 2.5 11.7092 2.5 11.875V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V11.875C17.5 11.7092 17.4342 11.5503 17.3169 11.4331C17.1997 11.3158 17.0408 11.25 16.875 11.25Z" />
                                </svg>
                            </li>
                            <li ref={(link) => linksRef.current.push(link)}>
                                <a href="mailto:hey@nich.design">Email</a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33333 15L13.3333 6.99996V14.1666H15V4.16663H5V5.83329H12.1667L4.16667 13.8333L5.33333 15Z" />
                                </svg>
                            </li>
                            <li ref={(link) => linksRef.current.push(link)}>
                                <a target="_blank" href="https://www.linkedin.com/in/nichp/">LinkedIn</a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33333 15L13.3333 6.99996V14.1666H15V4.16663H5V5.83329H12.1667L4.16667 13.8333L5.33333 15Z" />
                                </svg>
                            </li>
                            {/* <li ref={(link) => linksRef.current.push(link)}>
                                <a target="_blank" href="https://www.linkedin.com/in/nichp/">Twitter</a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33333 15L13.3333 6.99996V14.1666H15V4.16663H5V5.83329H12.1667L4.16667 13.8333L5.33333 15Z" />
                                </svg>
                            </li>
                            <li ref={(link) => linksRef.current.push(link)}>
                                <a target="_blank" href="https://www.linkedin.com/in/nichp/">CV</a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33333 15L13.3333 6.99996V14.1666H15V4.16663H5V5.83329H12.1667L4.16667 13.8333L5.33333 15Z" />
                                </svg>
                            </li> */}
                        </ul>
                    </div>
                    <MinimalFooter />
                </div>
            </footer>
        </>
    )
}


export const MinimalFooter = () => {

    const metaTextsRef = useRef([])

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    // }, [])

    useEffect(() => {
        const context = gsap.context(() => {
            enterMetaText(metaTextsRef.current);
        })
        return () => context.revert()
    }, [])
    return (
    
        <div className={styles.footer__meta} ref={text => metaTextsRef.current.push(text)}>
            <div className={styles.footer__meta__location}>
                <svg  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.0013 8.00004C8.36797 8.00004 8.68197 7.86937 8.9433 7.60804C9.20464 7.34671 9.33508 7.03293 9.33464 6.66671C9.33464 6.30004 9.20397 5.98604 8.94264 5.72471C8.6813 5.46337 8.36752 5.33293 8.0013 5.33337C7.63464 5.33337 7.32064 5.46404 7.0593 5.72537C6.79797 5.98671 6.66752 6.30049 6.66797 6.66671C6.66797 7.03337 6.79864 7.34737 7.05997 7.60871C7.3213 7.87004 7.63508 8.00049 8.0013 8.00004ZM8.0013 12.9C9.35686 11.6556 10.3624 10.5249 11.018 9.50804C11.6735 8.49115 12.0013 7.58849 12.0013 6.80004C12.0013 5.58893 11.6151 4.59737 10.8426 3.82537C10.0702 3.05337 9.12308 2.66715 8.0013 2.66671C6.87908 2.66671 5.93175 3.05293 5.1593 3.82537C4.38686 4.59782 4.00086 5.58937 4.0013 6.80004C4.0013 7.58893 4.32908 8.49182 4.98464 9.50871C5.64019 10.5256 6.64575 11.656 8.0013 12.9ZM8.0013 14.6667C6.21241 13.1445 4.87641 11.7307 3.9933 10.4254C3.11019 9.12004 2.66841 7.9116 2.66797 6.80004C2.66797 5.13337 3.20419 3.8056 4.27664 2.81671C5.34908 1.82782 6.59064 1.33337 8.0013 1.33337C9.41241 1.33337 10.6542 1.82782 11.7266 2.81671C12.7991 3.8056 13.3351 5.13337 13.3346 6.80004C13.3346 7.91115 12.8929 9.1196 12.0093 10.4254C11.1257 11.7312 9.78975 13.1449 8.0013 14.6667Z" />
                </svg>
    
                <span>Little Portugal, Toronto</span>
            </div>
    
            <div ref={text => metaTextsRef.current.push(text)}>
                <NavList />
            </div>
            <div className={styles.footer__meta__designed} ref={text => metaTextsRef.current.push(text)}>
                Site Designed and Developed by <Link href="/about"> <span className={styles.me}>your boy.</span></Link>
            </div>
        </div>
    
    )
}