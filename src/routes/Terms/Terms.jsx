import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Terms.module.scss';

const Terms = () => {
    useEffect(() => {
        document.title = `EventBop — Terms of Service` 
    }, [])

    return (
        <div className={styles.tosContainer}>
            <Header />
            <div className={styles.tosContent}>
                <h1 className={styles.tosTitle}>Terms of Service</h1>
                <p className={styles.tosText}>
                    Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the EventBop website (the "Service") operated by EventBop ("us", "we", or "our").
                </p>
                <h2 className={styles.tosSubtitle}>1. Your access to and use of the Service</h2>
                <p className={styles.tosText}>
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
                <h2 className={styles.tosSubtitle}>2. Links to other websites</h2>
                <p className={styles.tosText}>
                    Our Service may contain links to third-party websites or services that are not owned or controlled by EventBop. EventBop has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <h2 className={styles.tosSubtitle}>3. Governing law</h2>
                <p className={styles.tosText}>
                    These Terms shall be governed and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions.
                </p>
                <h2 className={styles.tosSubtitle}>4. Changes</h2>
                <p className={styles.tosText}>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
