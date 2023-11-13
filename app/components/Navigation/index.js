"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

import styles from './Navigation.module.scss'
import { DarkMode } from "../DarkMode"

export const Navigation = ({ showNav = true }) => {
    // const pathname = usePathname();

    return (
        <nav className={styles.navigation}>
            { showNav ? <NavList /> : <GoHome /> }
            <DarkMode />
        </nav>
    )
}


export const NavList = () => {
    const pathname = usePathname();
    // console.log("NavList")

    return (
        <ul className={styles.navigation__wrapper}>
            {/* <li>
                <Link className={`${pathname === '/' ? `${styles.active}` : ''}`} href="/">Home</Link>
            </li> */}

            <NavItem name="Home" href="/" isCurrent={pathname === '/'} />
            <NavItem name="About" href="/about" isCurrent={pathname === '/about'} />
            <NavItem name="Work" href="/work" isCurrent={pathname === '/work'} />
        </ul>

    )
}




const NavItem = ({ name, href, isCurrent }) => {
    return (
        <li className={styles.navigation__link}>
            <Link className={`${isCurrent ? `${styles.active}` : ''}`} href={href}>{name}</Link>
            {
                isCurrent && <div className={styles.navigation__link__dot}></div>
            }
        </li>
    )
}

const GoHome = () => (
    <div className={styles.goHome}>
        <Link href={"/"}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.43527 2.75062C6.51613 2.83424 6.56133 2.94601 6.56133 3.06233C6.56133 3.17866 6.51613 3.29043 6.43527 3.37405L3.24152 6.56233L11.8111 6.56233C11.9271 6.56233 12.0384 6.60843 12.1204 6.69047C12.2025 6.77252 12.2486 6.8838 12.2486 6.99983C12.2486 7.11587 12.2025 7.22715 12.1204 7.30919C12.0384 7.39124 11.9271 7.43733 11.8111 7.43733H3.24152L6.43527 10.6256C6.50504 10.7106 6.54069 10.8185 6.5353 10.9284C6.5299 11.0382 6.48385 11.1421 6.40609 11.2199C6.32833 11.2976 6.22443 11.3437 6.11459 11.3491C6.00476 11.3545 5.89684 11.3188 5.81184 11.2491L1.87434 7.31155C1.79218 7.2286 1.74609 7.11658 1.74609 6.99983C1.74609 6.88309 1.79218 6.77106 1.87434 6.68812L5.81184 2.75062C5.89478 2.66846 6.00681 2.62237 6.12355 2.62237C6.2403 2.62237 6.35233 2.66846 6.43527 2.75062Z"/>
            </svg>
            Home
        </Link>
    </div>
)