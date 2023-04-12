// Event.jsx

import React from 'react';
import styles from './Event.module.scss';
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })} at ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
};

const Event = ({ event }) => {
  const { title, description, image, start_time, id } = event;

  return (
    <div >
        <Link to={`/events/${id}`}>
            <div className={styles.eventCard}>
                <div className={styles.eventCardImage}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.eventCardContent}>
                    <h4 className={styles.eventCardTitle}>{title}</h4>
                    <p className={styles.eventCardDate}>{formatDate(start_time)}</p>
                    <p className={styles.eventCardDescription}>{description}</p>
                </div>
            </div>
        </Link>
    </div>
  );
};

export default Event;
