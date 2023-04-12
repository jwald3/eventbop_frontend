import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return (
        <header className={styles.header}>
        <div className={styles.leftSection}>
            <Link to={`/`} >
                <h1 className={styles.title}>EventBop</h1>
            </Link>
        </div>
        <div className={styles.rightSection}>
            <SearchBar />
        </div>
        </header>
    );
};

export default Header;
