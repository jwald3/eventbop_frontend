import React from 'react';
import styles from './CategoryEvents.module.scss';
import Event from '../Event/Event';

const EventTray = ({ events }) => {
    return (
        <div className={styles.eventTray}>
            {events.map(ev => <Event key={ev.id} event={ev}/>)}
        </div>
    );
};

export default EventTray;
