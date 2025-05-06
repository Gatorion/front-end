import styles from './SocialLink.module.css';

const SocialLink = ({icon, link}) => {
    return (
        <>
            <a href={link}>
                <img className={styles.icon} src={icon} alt="" />
            </a>
        </>
    )
}

export default SocialLink;