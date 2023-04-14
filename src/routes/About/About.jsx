import React, { useEffect } from 'react';
import styles from './About.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
    useEffect(() => {
        document.title = `EventBop — About Us` 
    }, [])

    return (
        <div className={styles.aboutContainer}>
            <Header />
            <div className={styles.aboutContent}>
                <h1 className={styles.aboutTitle}>About EventBop</h1>
                <p className={styles.aboutText}>
                    EventBop is a platform designed to help people discover and attend exciting events and explore the best venues in their local area. We aim to connect people with their passions and provide a seamless experience for both event organizers and attendees.
                </p>
                <p className={styles.aboutText}>
                    Founded in 2023, EventBop has grown rapidly, now serving thousands of cities worldwide. With a diverse range of categories, we cater to a wide variety of interests, including music, arts, sports, and more.
                </p>
                <p className={styles.aboutText}>
                    Our dedicated team is committed to creating a dynamic and user-friendly platform that showcases the best events and venues, making it easier than ever for people to connect and create unforgettable experiences.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;