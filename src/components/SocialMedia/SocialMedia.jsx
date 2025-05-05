import React from 'react'
import styles from './SocialMedia.module.css'
import profilePicture from '../../assets/img/UserPicture1.png'

const SocialMedia = (props) => {
    return (
        <>
            <article className={styles.postBody}>
                <div className={styles.profile}>
                    <img className={styles.profilePicture} src={profilePicture} alt='Foto de Perfil do Usuário' />
                    <div className={styles.profileInfo}>
                        <h2>Asteros</h2>
                        <p>
                            <code>@asteros</code>
                            <time>20 min</time>
                        </p>
                    </div>
                </div>
                <div className={styles.postContent}>
                    <p>{props.postText}</p>
                    <img src={props.postImage} alt='Imagem de Post do Usuário' />
                </div>
                <div className={styles.interactionButtons}>
                    <button type="button" aria-label='Curtir'>
                        <i className="fas fa-rocket"></i> {props.postLikes}
                    </button>
                    <button type="button" aria-label='Comentar'>
                        <i className="fas fa-comment"></i> {props.postComents}
                    </button>
                    <button type="button" aria-label='Compartilhar'>
                        <i className="fas fa-share"></i> {props.postShares}
                    </button>
                    <button type="button" aria-label='Estatísticas'>
                        <i className="fas fa-chart-bar"></i> {props.postStatistics}
                    </button>
                </div>
            </article>
            <br />
        </>
    )
}

export default SocialMedia