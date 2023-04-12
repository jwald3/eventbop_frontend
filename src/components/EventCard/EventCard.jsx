import React from 'react';
import Card from '../Card/Card';

const EventCard = ({ event }) => {
    const { id, title, location, start_time, image } = event;
    
    return (
        <Card
            itemType="event"
            imageUrl={image}
            title={title}
            subtitle={location.title}
            additionalInfo={new Date(start_time).toLocaleString()}
            linkPath={`/events/${id}`}
        />
    );
};

export default EventCard;
