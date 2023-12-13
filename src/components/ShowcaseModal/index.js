import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { gsap } from "@/lib/gsap"
import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect"
import useMousePosition from "@/lib/hooks/useMousePosition"

import styles from "./showcaseModal.module.scss"

const scaleAnimation = { 
    initial: { 
        scale: 0,
        x: "-50%",
        y: "-50%",
    }, 
    open: {
        scale: 1, 
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 0.4, 
            ease: [0.76, 0, 0.24, 1]
        }
    },
    closed: {
        scale: 0, 
        x: "-50%",
        y: "-50%",
        transition: {            
            duration: 0.4, 
            ease: [0.32, 0, 0.67, 0]
        }
    }
}

export const ShowcaseModal = ({ projects, modal}) => {
    const { active, index } = modal;
    const mousePosition = useMousePosition();
    const containerRef = useRef(null)
    const cursorRef = useRef(null)
    const cursorLabelRef = useRef(null)

    useIsomorphicLayoutEffect(() => {
        // Move Container
        let moveContainerX = gsap.quickTo(containerRef.current, "left", {duration: .8, ease: "power3"})
        let moveContainerY = gsap.quickTo(containerRef.current, "top", {duration: .8, ease: "power3"})

        //Move cursor
        let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {duration: 0.5, ease: "power3"})
        let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {duration: 0.5, ease: "power3"})
        
        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "left", {duration: 0.45, ease: "power3"})
        let yMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "top", {duration: 0.45, ease: "power3"})


        window.addEventListener("mousemove", (e) => {
            const { pageX, pageY } = e;
            // console.log("X: ", pageX, mousePosition.x, "Y: ", pageY, mousePosition.y)
            
            moveContainerX(pageX)
            moveContainerY(pageY)

            xMoveCursor(pageX)
            yMoveCursor(pageY)
            
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
      
        })
    }, [])

    return (
        <>
            <motion.div 
                ref={containerRef}
                variants={scaleAnimation} 
                initial={"initial"} 
                animate={active ? "open" : "closed"}
                className={styles.modalContainer}
            >
                <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                    {
                        projects.map((project, index) => {
                            
                            return (
                                <div key={index} className={styles.modal}>
                                    <Image 
                                        src={project.image}
                                        width={300}
                                        height={0}
                                        alt={"Project Image"}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
            <motion.div ref={cursorRef} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "open" : "closed"}></motion.div>
            <motion.div ref={cursorLabelRef} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "open" : "closed"}>View</motion.div>

        </>
    )
}