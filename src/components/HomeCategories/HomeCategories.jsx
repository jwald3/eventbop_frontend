import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CategoryBubble from '../../components/CategoryBubble/CategoryBubble';
import styles from './HomeCategories.module.scss';
import SeeAllBubble from '../SeeAllBubble/SeeAllBubble';

const HomeCategories = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const calculateMaxItemsInRow = () => {
        const wrapperWidth = window.innerWidth * 0.75;
        const horizontalSpace = wrapperWidth - 24 * 2;
        const itemWidthPlusGap = 100 + 24;
        return Math.floor(horizontalSpace / itemWidthPlusGap) - 1;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/entertainmentapp/categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const maxItemsInRow = calculateMaxItemsInRow();
            setFilteredCategories(categories.slice(0, maxItemsInRow));
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [categories]);



    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>Categories</div>
            <div className={styles.categoryList}>
                {
                    filteredCategories && filteredCategories.map(cat => (<CategoryBubble imageLink={cat.image} categoryName={cat.title} slug={cat.id} key={cat.id}/>))
                }
                <SeeAllBubble />
            </div>
        </div>
    )
}

export default HomeCategories