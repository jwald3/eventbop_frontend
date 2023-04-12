import React from 'react'
import axios from 'axios';
import Header from '../../components/Header/Header';
import styles from './Venues.module.scss'
import VenueTile from '../../components/VenueTile/VenueTile';
import Footer from '../../components/Footer/Footer';
import NoResults from '../../components/NoResults/NoResults';
import { useLoaderData } from 'react-router-dom';

export async function getVenues() {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/locations`);
  return response.data ?? null;
}
export async function loader() {
  const venues = await getVenues();
  return { venues };
}

const Venues = () => {
    const { venues } = useLoaderData();

    return (
        <div>
            <Header />
            <div className={styles.venuesPage}>
                <div className={styles.venuesContainer}>
                    {venues.length > 0 ? (
                        venues.map((venue) => <VenueTile key={venue.id} url={venue.image} title={venue.title} id={venue.id} />)
                    ) : (
                        <NoResults message="No venues could be found" />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Venues;