"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

import styles from "./passwordPromptDialog.module.scss"
import { Navigation } from '../Navigation';
import { MinimalFooter } from '../Footer';
import useIsomorphicLayoutEffect from '@/lib/hooks/useIsomorphicLayoutEffect';

import { gsap } from '@/lib/gsap'
import { SplitText } from '@/lib/animations';

export const PasswordPromptDialog = ({ onSubmit }) => {
    const headlineRef = useRef(null);
    const paraRef = useRef(null);
    const formRef = useRef(null);

    const [password, setPassword] = useState('');
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)
    const [loading, setLoading] = useState(false);

    useIsomorphicLayoutEffect(() => {
        const splitTitle = SplitText(headlineRef.current)
        const splitPara = SplitText(paraRef.current)

        const ctx = gsap.context(() => {
            if (!headlineRef.current) return

            const timeline = gsap.timeline({
                paused: true,
                defaults: {
                    ease: 'power4.out'
                }
            });

            timeline.from(splitTitle.chars, {
                // opacity: 0,
                yPercent: 100,
                stagger: 0.02
            })
            timeline.from(splitPara.words, {
                // opacity: 0,
                yPercent: 100,
                stagger: 0.02
            }, "<")
            timeline.from(formRef.current, {
                opacity: 0,
                yPercent: 20,
            }, "<")

            timeline.play();

        })

        return () => ctx.revert()

    }, [])

    const handleSubmit = async (e) => {
        // const onSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);

            console.log(password)
            
            const request = await fetch(`/api/work`, {
                body: JSON.stringify({password}),
                headers: {"Content-Type": "application/json"},
                method: "post",
            });
       
            if (request.status !== 200) {
                return setPasswordIncorrect(true), setLoading(false);
            } else {
                window.location.reload();
            }
    //    };
    }

return (
    <main className={styles.main}>
        {/* <Navigation showNav={false} /> */}
        <section className={styles.passwordDialog}>
            <div className={styles.passwordDialog__content}>
                <h1 ref={headlineRef}>Log in</h1>
                <p ref={paraRef}>Don’t have a password? <a href="mailto:hey@nich.design">Request access</a>
                </p>
            </div>
            <form 
                onSubmit={handleSubmit} 
                className={styles.passwordDialog__form} 
                ref={formRef}
            >
                {/* <label htmlFor="password">Password:</label> */}
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Password'
                    />
                
                {
                    loading ? <div>Loading...</div> : <button type="submit">Submit</button>
                }
            </form>

            {
                passwordIncorrect && <FailedPassword />
            }
        </section>
        <div className={styles.footerContainer}>
            <MinimalFooter />
        </div>
    </main>
 );
};




const FailedPassword = () => {
    return (
        <div className={styles.incorrectPassword}>
            <h2>Shoot, no bueno.</h2>
            <p>You can <a href="mailto:hey@nich.design"> hit me up</a> if you'd like access!</p>

        </div>
    )
}