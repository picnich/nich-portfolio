"use client";

import { useState } from 'react';

import styles from "./passwordPromptDialog.module.scss"
import { Navigation } from '../Navigation';
import Link from 'next/link';
import { MinimalFooter } from '../Footer';

export const PasswordPromptDialog = ({ onSubmit }) => {
    const [password, setPassword] = useState('');
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)
    const [loading, setLoading] = useState(false);

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
                <h1>Password Protected</h1>
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