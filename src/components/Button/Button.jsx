import styles from './Button.module.css';

const Button = ({content, link}) => {
    return (
        <>
            <a className={styles.button} href={link}>{content}</a>
        </>
    )
}

export default Button;