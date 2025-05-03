import React from 'react'
import ProfileCard from './ProfileCard'
import styles from './Aside.module.css'

const Aside = () => {
    return (
        <aside>
            <ProfileCard
                xpPercentage={100} />
        </aside>
    )
}

export default Aside