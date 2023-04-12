import React from 'react';
import styles from './ResourceTile.module.scss';
import { Link } from 'react-router-dom';

const ResourceTile = ({ resource, imageUrl, title, id }) => {
  return (
    <Link to={`/${resource}/${id}`}>
        <div className={styles.resourceTile} style={{ backgroundImage: `url(${imageUrl})` }}>
            <span className={styles.resourceTitle}>{title}</span>
        </div>
    </Link>
  );
};

export default ResourceTile;