import React, { useEffect } from 'react';
import styles from './EventDetails.module.scss';
import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export async function getEventDetails(id) {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/events/${id}`);
  return response.data ?? null;
}
export async function loader({ params }) {
  const event = await getEventDetails(params.eventID);
  return { event };
}

const EventDetails = () => {
    const { event } = useLoaderData();
    const { location, title, description, start_time, image } = event;

    const formattedDate = new Date(start_time).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    useEffect(() => {
        document.title = `EventBop — ${event.title}` 
    }, [])

    return (
        

        <div className={styles.appContainer}>
        <Header />
        <div className={styles.eventDetails}>
            <div className={styles.eventImageSection} style={{ backgroundImage: `url(${image})` }}>
                <div className={styles.eventInfo}>
                    <h2>{title}</h2>
                    <p>{formattedDate}</p>
                </div>
            </div>
            <div className={styles.eventContent}>
                <h3>About the event</h3>
                <p>{description}</p>
                <h3>About {location.title}:</h3>
                <p>{location.address}</p>
                <p>{location.description}</p>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default EventDetails;
