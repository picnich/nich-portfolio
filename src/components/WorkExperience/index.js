"use client"

import { useEffect, useRef, useState } from "react"

import { gsap, ScrollTrigger } from '@/lib/gsap'

import { experience } from "./data"
import { scrollExperience, toggleJob } from "./animations"

import styles from "./workExperience.module.scss"


export const WorkExperience = () => {

   
    
    return (
        <section className={styles.workExperience}>
            {
                experience.map((job, i) => <JobItem job={job} jobKey={i} key={i} />)    
            }
        </section>
    )
}

const JobItem = ({job, jobKey}) => {
    const jobItem = useRef(null);
    const clickRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const context = gsap.context(() => {
            // jobItem.current.map(row => scrollExperience(row))
            scrollExperience(jobItem.current)
        })
        
        return () => context.revert()
    }, [])
    useEffect(() => {
        const context = gsap.context(() => {
            toggleJob(jobItem.current, !isOpen, clickRef.current )
        })
        
        return () => context.revert()
    }, [isOpen])
    
    function handleClick() {
        setOpen(!isOpen)
        console.log('clicked', isOpen)

    }


    return (
            <div 
                key={jobKey} 
                className={styles.job} 
                ref={jobItem}
               
            >
                <div className={styles.job__col_1}>
                    <h2 className={styles.job__role}>{job.title}</h2>
                    <h6 className={styles.job__company}>{job.company}</h6>
                </div>
                <div className={styles.job__col_2}>
                    <p className={styles.job__date}>{job.date}</p>
                    <p className={styles.job__location}>{job.location}</p>

                </div>
                <div className={styles.job__col_3}>
                    <div className={styles.job__description}>
                        { job.desc.map((para, i) => {
                            return (
                                <p className={styles.job__description__item} key={i}>{para}</p>
                                )
                        }) }
                    </div>
                    <div className={styles.job__plus}  onClick={handleClick} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={clickRef}>
                            <path d="M12 5.75V18.25"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.25 12H5.75"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
    )
}