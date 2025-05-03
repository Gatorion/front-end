import React from 'react'
import styles from './SocialMedia.module.css'
import PostImage from '../assets/img/PostPicture.png'

const SocialMedia = () => {
    return (
        <>
            <main>
                <article className={styles.postBody}>
                    <div className={styles.profile}>
                        <img className={styles.profileImage} src='' alt='' />
                        <h2>Asteros</h2>
                        <code>@asteros</code>
                        <time>20 min</time>
                    </div>
                    <div className={styles.postContent}>
                        <p>Finalmente lançamos nossa plataforma! Esperamos que aproveitem ao máximo essa jornada astronômica!</p>
                        <img src={PostImage} alt='' />
                    </div>
                </article>
            </main>
        </>
    )
}

export default SocialMedia