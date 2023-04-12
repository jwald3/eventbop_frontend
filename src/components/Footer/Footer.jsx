import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLinks}>
                    <a href="/">Home</a>    
                    <a href="/about">About Us</a>
                    <a href="/terms">Terms of Service</a>
                </div>
                <p className={styles.footerCopyright}>© {new Date().getFullYear()} EventBop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;