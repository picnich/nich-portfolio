"use client"

import { useEffect, useRef, useState } from "react";

import { gsap } from "@/lib/gsap"

import styles from "./test.module.scss"
import useIsomorphicLayoutEffect from "@/lib/hooks/useIsomorphicLayoutEffect";

const data = Array(10).fill(0)

export default function Test() {
    const [ state, setState ] = useState([])

    // useEffect(() => {
    //     console.log(state);
    // }, [state])

    function handleHover(item, value) {
        // console.log(item, value)
        
        const updatedList = [...state]
        updatedList[item] = value
        setState(updatedList);
    }
    return (
        <>
            <div className={styles.test}>
                {
                    data.map((item, i) => (
                        <Item 
                            key={i} 
                            val={i} 
                            onHover={handleHover}
                        />
                    ))
                } 
            </div>
            <div className={styles.test}>
                {
                    data.map((item, i) => (
                        <Label 
                            key={i} 
                            val={i} 
                            isHovering={state}
                        />
                    ))
                } 
            </div>
        </>
    )
}

const Item = ({ val, onHover }) => {
    const [isHovering, setHovering] = useState(false);

    useEffect(() => {
        // console.log(val, isHovering);
        onHover(val, isHovering)
    }, [isHovering])

    return (
        <div
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        > 
            {val}
            {isHovering ? "hovering" : ""}
        </div>
    )
}

const Label = ({ val, isHovering }) => {
    const containerRef = useRef(null);
    // const isUp = isHovering[val] ? "50px" : "0px"

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                yPercent: isHovering[val] ? 100 : 0
            })    
        })
        
        return () => ctx.revert()

    }, [isHovering])

    return (
        // <div ref={containerRef} style={{ transform: `translateY(${isUp})`}}>
        <div ref={containerRef}>
            {val}
        </div>
    )
}