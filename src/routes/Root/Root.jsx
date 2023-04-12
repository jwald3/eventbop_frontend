import React from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Testimonials from '../../components/Testimonials/Testimonials';
import HomeCategories from '../../components/HomeCategories/HomeCategories'
import ResourceTray from '../../components/ResourceTray/ResourceTray'
import styles from './Root.module.scss'
import { useLoaderData } from 'react-router-dom';


export async function getEvents() {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
  return response.data ?? null;
}

export async function getVenues() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/locations`);
    return response.data ?? null;
}

export async function loader() {
  const events = await getEvents();
  const venues = await getVenues();

  return { events, venues };
}

const Root = () => {
    const { events, venues } = useLoaderData();

    return (
        <div className={styles.rootWrapper}>
            <Header />
            <HomeCategories />
            <ResourceTray
                sectionTitle="Featured Events"
                subtitle="Some of our most anticipated events"
                linkText="View all events"
                linkHref="/events"
                data={events}
                cardType="event"
            />
            <div className={styles.space}></div>
            <ResourceTray
                sectionTitle="Upcoming Events"
                subtitle="Discover the latest events happening around you"
                linkText="View all events"
                linkHref="/events"
                data={
                    events.sort((a, b) => {
                        const dateA = new Date(a.start_time);
                        const dateB = new Date(b.start_time);

                        // For ascending order, swap 'dateA' and 'dateB' for descending order
                        return dateA - dateB;
                    })
                }
                cardType="event"
            />            
            <div className={styles.space}></div>
            <ResourceTray
                sectionTitle="Popular Venues"
                subtitle="Explore the best venues in town"
                linkText="View all venues"
                linkHref="/venues"
                data={venues}
                cardType="venue"
            />
            <div className={styles.space}></div>
            <Testimonials />
            <div className={styles.space}></div>
            <Footer />
        </div>
    )
}

export default Root;