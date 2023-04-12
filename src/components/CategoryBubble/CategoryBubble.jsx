import React, { forwardRef } from 'react';
import styles from './CategoryBubble.module.scss';
import { Link } from 'react-router-dom';

const CategoryBubble = forwardRef(({ imageLink, categoryName, slug }, ref) => {
  return (
    <Link to={`/categories/${slug}`}>
    <div className={styles.categoryBubble} ref={ref}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageLink} alt={`${categoryName} icon`} />
      </div>
      <div className={styles.categoryName}>{categoryName}</div>
    </div>
    </Link>
  );
});

export default CategoryBubble;
