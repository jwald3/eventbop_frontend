import React from 'react'
import axios from 'axios';
import { useLoaderData } from "react-router-dom";
import Header from '../../components/Header/Header';
import styles from '../CategoryHome/CategoryHome.module.scss';
import CategoryEvents from '../../components/CategoryEvents/CategoryEvents'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react';

export async function getCategory(category) {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories/${category}`);
  return response.data ?? null;
}

export async function getEventsForCategory(category) {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/events/?category=${category}`);
    return response.data ?? null;
}

export async function loader({ params }) {
  const category = await getCategory(params.categorySlug);
  const events = await getEventsForCategory(params.categorySlug)
  return { category, events };
}

const CategoryHome = () => {
    const { category, events } = useLoaderData();

    useEffect(() => {
        document.title = `EventBop — ${category.title}` 
    }, [])

    return (
         <div>
            <Header />
            <div className={styles.categoryHomePage}>
                <div className={styles.headingText}>
                    <h1 className={styles.categoryTitle}>{category.title}</h1>
                    <p className={styles.categoryTagline}>{category.description}</p>
                </div>
                <hr />
                <CategoryEvents events={events} />
            </div>
            <Footer />
        </div>
    )
}

export default CategoryHome