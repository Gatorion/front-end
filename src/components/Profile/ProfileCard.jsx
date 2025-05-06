import React from 'react'

import styles from './ProfileCard.module.css'
import profilePic from '/src/assets/img/UserPicture.png'
import profileHeader from '/src/assets/img/UserCover.png'
import badge from '/src/assets/img/Badge.svg'
import badge1 from '/src/assets/img/Badge1.svg'
import badge2 from '/src/assets/img/Badge2.svg'

const ProfileCard = ({ xpPercentage }) => {
    return (
        <section className={styles.profileInfo}>
            <div className={styles.headerImage}><img src={profileHeader} alt="" /></div>
            <div className={styles.profileImage}><img src={profilePic} alt="" /></div>
            <div className={styles.profileName}>
                <h2>Gatorion</h2>
                <code>@Gatorion</code>
            </div>
            <div className={styles.xp}>
                <h2>Nv. 39</h2>
                <div className={styles.xpBar}>
                    <div
                        className={styles.xpProgress}
                        style={{ width: `${xpPercentage}%` }}
                    ></div>
                </div>
            </div>
            <hr className={styles.row} />
            <div className={styles.badges}>
                <img src={badge} alt="" />
                <img src={badge1} alt="" />
                <img src={badge2} alt="" />
            </div>
        </section>
    );
};

export default ProfileCard