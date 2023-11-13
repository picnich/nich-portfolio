"use client"

import { useState, useEffect } from "react"

import styles from './darkmode.module.css'
import { Moon, Sun } from "./svg";

export const DarkMode = () => {
    // const [ doc, setDoc ] = useState(null)
    // if (document) {
        const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme || 'light');
        const inactiveTheme = activeTheme === "light" ? "dark" : "light";
        
        useEffect(() => {
            document.body.dataset.theme = activeTheme;
            window.localStorage.setItem("theme", activeTheme);
        
          }, [activeTheme]);
    // }

    // if (!activeTheme) {
    //     return null;
    // }
    

    return (
        <button
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
            type="button"
            onClick={() => setActiveTheme(inactiveTheme)}
            className={styles.theme__trigger}
        >
            {/* <span activeTheme={activeTheme}></span>
            <span>🌙</span>
            <span>☀️</span> */}

            {
                activeTheme === 'dark' ? (
                    // <div className={styles.theme__trigger}>

                    <span className={styles.theme__trigger__sun}>
                        <Sun />
                    </span>
                ) : (
                    <span className={styles.theme__trigger__moon}>
                        <Moon />
                    </span>
                )
            }
        </button>
    )
}