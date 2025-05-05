import styles from './CardContentThirdSection.module.css';

const CardContentThirdSection = ({icon, title, content}) => {
    return (
        <div className={styles.container}>
            <img src={icon} alt="" />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default CardContentThirdSection;