import { cookies } from 'next/headers'

import { PasswordPromptDialog } from '@/components/PasswordPromptDialog'

import { ShowcaseHero } from '@/components/ShowcaseHero'
import { ShowcaseList } from '@/components/ShowcaseList'
import { Footer } from '../../components/Footer'

import styles from './work.module.scss'

export default function WorkPage() {

    const cookieStore = cookies()
    const loginCookies = cookieStore.get(process.env.PASSWORD_COOKIE_NAME);
    const isLoggedIn = !!loginCookies?.value;
    
    if (!isLoggedIn) {
      return <PasswordPromptDialog />;
    } 
 
    return (
    <main>
        <ShowcaseHero />
        <ShowcaseList />
        <Footer />
    </main>
    )
}