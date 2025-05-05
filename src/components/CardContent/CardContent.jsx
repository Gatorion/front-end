import styles from './CardContent.module.css';

const CardContent = ({icon, title, content}) => {
    return (
        <div className={styles.container}>
            <img src={icon} alt=""/>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default CardContent;