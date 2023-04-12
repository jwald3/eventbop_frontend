import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const Card = ({ item, itemType, imageUrl, title, subtitle, additionalInfo, linkPath }) => {
    return (
        <Link to={linkPath}>
            <div className={styles.card}>
                <img className={styles.cardImage} src={imageUrl} alt={title} />
                <div className={styles.cardInfo}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardSubtitle}>{subtitle}</p>
                    {additionalInfo && <p className={styles.cardAdditionalInfo}>{additionalInfo}</p>}
                </div>
            </div>
        </Link>
    );
};

export default Card;
