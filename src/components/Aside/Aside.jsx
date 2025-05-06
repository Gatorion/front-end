import React from 'react'
import ProfileCard from '../Profile/ProfileCard'
import styles from './Aside.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Aside = () => {
    return (
        <aside>
            <ProfileCard
                xpPercentage={30} />

            <div className={styles.asideContainer}>
                <h3>Seguidores</h3>
                <h2>121</h2>
                <h3>Seguindo</h3>
                <h2>80</h2>
            </div>
            <div className={styles.asideContainer}>
                <a href="#"><i className="fas fa-gamepad"></i> Jogos</a>
                <a href='#'><i className="fas fa-book"></i> Materiais de Estudo</a>
                <a href='#'><i className="fas fa-binoculars"></i> Observatório Virtual</a>
            </div>
            <div className={styles.asideContainer}>
                <a href="#"><i className="fas fa-bookmark"></i> Itens Salvos</a>
                <a href="#"><i className="fas fa-newspaper"></i> Notícias</a>
                <a href="#"><i className="fas fa-calendar-alt"></i> Eventos</a>
            </div>

        </aside>
    )
}

export default Aside