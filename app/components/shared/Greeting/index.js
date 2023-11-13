import { useEffect, useState } from 'react';
import styles from './greeting.module.scss'

const greetings = [
    "Heya", 
    "Hola", 
    "Ciao",
    "Buenas",
    "Ni hao",
    "Olà",
    "Yassas"
]

export const Greeting = () => {
    const [greeting, setGreeting] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (greeting === greetings.length - 1) {
                setGreeting(0);
                // console.log('max', greeting, greetings.length)
            } else {
                setGreeting(greeting + 1);
                // console.log(' not max', greeting, greetings.le   ngth)
            }
        }, 2000);
    
        return () => {
          clearTimeout(timeout);
        };
    }, [greeting]);

    return (
            <span className={styles.greetingContainer}>
                <span>{greetings[greeting]}</span>
            </span>
    )
}