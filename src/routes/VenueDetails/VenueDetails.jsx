import React from 'react';
import styles from './VenueDetails.module.scss';
import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import Header from '../../components/Header/Header';
import Event from '../../components/Event/Event';
import Footer from '../../components/Footer/Footer';
import NoResults from '../../components/NoResults/NoResults';

export async function getVenueDetails(id) {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/locations/${id}`);
  return response.data ?? null;
}

export async function getEventsAtVenue(id) {
    const response = await await axios.get(`${process.env.REACT_APP_API_URL}/events/?location=${id}`);
    return response.data ?? null
}

export async function loader({ params }) {
  const venue = await getVenueDetails(params.venueID);
  const events = await getEventsAtVenue(params.venueID);
  return { venue, events };
}

const VenueDetails = () => {
    const { venue, events } = useLoaderData();
    const { title, address, description, image } = venue;

    return (
        <div>
            <Header />
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.venueCard}>
                        <div className={styles.venueCardImage}>
                            <img src={image} alt={title} />
                        </div>
                        <div className={styles.venueCardContent}>
                            <h2 className={styles.venueCardTitle}>{title}</h2>
                            <p className={styles.venueCardAddress}>{address}</p>
                            <p className={styles.venueCardDescription}>{description}</p>
                        </div>
                    </div>
                <div className={styles.eventsSection}>
                    <h3 className={styles.eventsTitle}>Upcoming Events at {title}</h3>
                    {events.length > 0 ? (
                        events.map((event) => <Event key={event.id} event={event} />)
                    ) : (
                        <NoResults message="No upcoming events at this venue" />
                    )}
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VenueDetails;
