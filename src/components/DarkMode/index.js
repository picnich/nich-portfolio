"use client"

import { useState, useEffect } from "react"

import styles from './darkmode.module.css'
import { Moon, Sun } from "./svg";

export const DarkMode = () => {
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  
    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        savedTheme && setActiveTheme(savedTheme);
      }, []);
        
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);

    }, [activeTheme]);


    return (
        <button
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
            type="button"
            onClick={() => setActiveTheme(inactiveTheme)}
            className={styles.theme__trigger}
        >
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