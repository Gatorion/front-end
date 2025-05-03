import React from 'react'
import styles from './Header.module.css'
import profilePic from '/src/assets/img/UserPicture.png'
import Logo from '/src/assets/img/Logo.svg'
import settingIcon from '/src/assets/img/settingIcon.svg'
import brightnessIcon from '/src/assets/img/brightness.svg'
import notificationIcon from '/src/assets/img/notificationIcon.svg'
import searchIcon from '/src/assets/img/searchIcon.svg'


const Header = () => {
    return (
        <header>
            <div className={styles.logo}><img src={Logo} alt="" /></div>
            <input type='text' className={styles.search} placeholder='Pesquisar' />
            <div className={styles.containerButtons}>
                <button type='button' className={styles.theme}><img src={brightnessIcon} alt="" /></button>
                <a href='#' className={styles.profile}><img src={profilePic} alt='' className={styles.profilePic} /></a>
                <button type='button' className={styles.settings}><img src={settingIcon} alt='' /></button>
                <button type='button' className={styles.notification}><img src={notificationIcon} alt="" /></button>
            </div>
        </header>
    )
}

export default Header