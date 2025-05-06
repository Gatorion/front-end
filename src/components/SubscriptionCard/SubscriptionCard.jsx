import styles from './SubscriptionCard.module.css';
import Button from '../Button/Button';

import BenefitIcon from '../../assets/img/benefitIcon.svg';

const SubscriptionCard = ({recommended, title, description, price, pricePeriod, btnContent, btnLink, benefitsDescription, benefitsList }) => {
    const isRecommended = recommended ? styles.cardRecommended : styles.card;

    return (
        <div className={isRecommended}>
            <div className={styles.recommendedTag}>
                <p>Recomendado</p>
            </div>

            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{price} <span className={styles.pricePeriod}>{pricePeriod}</span></p>
            <a className={styles.button} href={btnLink}>{btnContent}</a>
            <p className={styles.benefitsDescription}>{benefitsDescription}</p>
            <div className={styles.benefitsList}>
                {benefitsList.map((benefit) => (
                    <div className={styles.benefit}>
                        <img src={BenefitIcon} alt="" />
                        <p>{benefit}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubscriptionCard;