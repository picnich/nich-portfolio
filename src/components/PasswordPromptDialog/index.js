"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

import styles from "./passwordPromptDialog.module.scss"
import { Navigation } from '../Navigation';
import { MinimalFooter } from '../Footer';
import useIsomorphicLayoutEffect from '@/lib/hooks/useIsomorphicLayoutEffect';

import { gsap } from '@/lib/gsap'

export const PasswordPromptDialog = ({ onSubmit }) => {
    const headlineRef = useRef(null);

    const [password, setPassword] = useState('');
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)
    const [loading, setLoading] = useState(false);

    useIsomorphicLayoutEffect(() => {
        // check if the productRef.current is defined. If it isn't, we return early to avoid errors.
        if (!headlineRef.current) return

        const timeline = gsap.timeline({
            paused: true,
            defaults: {
                ease: 'power4.out'
            }
        });

        timeline.fromTo(headlineRef.current, {
            opacity: 0,
            yPercent: 100,
        }, {
            opacity: 1, 
            yPercent: 0,
        })

        timeline.play();

        return () => timeline.revert()

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
        <Navigation showNav={false} />
        <section className={styles.passwordDialog}>
            <div className={styles.passwordDialog__content}>
                <h1 ref={headlineRef}>Password Protected</h1>
                <p>To see some of my latest design portfolio please provide a password or <a href="mailto:hey@nich.design">request a password</a> here. Otherwise please visit some of my side projects on the <Link href={"/#work__grid"}>homepage.</Link></p>
            </div>
            <form onSubmit={handleSubmit} className={styles.passwordDialog__form} >
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