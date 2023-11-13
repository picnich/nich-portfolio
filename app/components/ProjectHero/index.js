import Image from "next/image"
import { Navigation } from "../Navigation"
import styles from "./projectHero.module.scss"

export const ProjectHero = ({ content }) => {
    return (
        <>    
            <div className={styles.hero__bg}></div>

            <div className={styles.nav__container}>
                <Navigation showNav={false} />
            </div>
 
            <section className={styles.project__hero}>
                <div className={styles.project__hero__content}>
                    <ul className={styles.category__list}>
                        {
                            content.tags.map((tag, i) => <li key={i} className={styles.category__list__item}>{tag}</li>)
                        }
                    </ul>
                    <h1>{content.title}</h1>
                </div>
                <div className={styles.project__hero__image}>
                    <Image 
                        src={content.heroImage}
                        width={1200}
                        height={1200}
                        className={styles.image}
                        alt={"Project Hero Image"}
                    />
                </div>
            </section>
        </>
    )
}