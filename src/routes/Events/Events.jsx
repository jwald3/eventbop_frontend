import React from 'react'
import axios from 'axios';
import { useLoaderData } from "react-router-dom";
import Header from '../../components/Header/Header';
import styles from './Events.module.scss';
import CategoryEvents from '../../components/CategoryEvents/CategoryEvents'
import Footer from '../../components/Footer/Footer';

export async function getEvents() {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
  return response.data ?? null;
}
export async function loader() {
  const events = await getEvents();
  return { events };
}

const Events = () => {
    const { events } = useLoaderData();

    return (
         <div>
            <Header />
            <div className={styles.eventsHomePage}>
                <div className={styles.headingText}>
                    <h1 className={styles.eventsTitle}>All Events</h1>
                    <p className={styles.eventsTagline}>Dive into Diverse Experiences, Ignite Your Passion</p>
                </div>
                <hr />
                <CategoryEvents events={events} />
            </div>
            <Footer />
        </div>
    )
}

export default Events