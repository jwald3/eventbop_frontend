import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SeeAllBubble.module.scss';

const SeeAllBubble = () => {
  return (
    <div className={styles.seeAllBubble} role="button" tabIndex={0}>
        <Link to={`/categories`}>
            <div className={styles.content}>
                <div className={styles.arrow}></div>
                <div className={styles.text}>See all</div>
            </div>
        </Link>
    </div>
  );
};

export default SeeAllBubble;
