import React from 'react'
import Logo from '/src/assets/img/Logo.svg'
import brightnessIcon from '/src/assets/img/brightness.svg'
import styles from './LogoutHeader.module.css'

const LogoutHeader = () => {
    return (
        <header>
            <nav className={styles.nav_bar}>
                <a id="logo" href="#"><img src={Logo} alt="" /></a>
                <div className={styles.links}>
                    <ul className={styles.links_nav}>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Planos</a></li>
                        <li><a href="#">Sobre nós</a></li>
                    </ul>
                </div>

                <div className={styles.botoes}>
                    <button type="button"><img src={brightnessIcon} alt="" /></button>
                    <button type="button" aria-label="Entrar na Conta">ENTRAR</button>
                    <button type="button" aria-label="Cadastrar Conta">CRIAR CONTA</button>
                </div>
            </nav>
        </header>
    );
}

export default LogoutHeader