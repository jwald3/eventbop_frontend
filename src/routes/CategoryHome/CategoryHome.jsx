import React from 'react'
import axios from 'axios';
import { useLoaderData } from "react-router-dom";
import Header from '../../components/Header/Header';
import styles from '../CategoryHome/CategoryHome.module.scss';
import CategoryEvents from '../../components/CategoryEvents/CategoryEvents'
import Footer from '../../components/Footer/Footer'

export async function getCategory(category) {
  const response = await axios.get(`http://localhost:8000/api/entertainmentapp/categories/${category}`);
  return response.data ?? null;
}

export async function getEventsForCategory(category) {
    const response = await axios.get(`http://localhost:8000/api/entertainmentapp/events/?category=${category}`);
    return response.data ?? null;
}

export async function loader({ params }) {
  const category = await getCategory(params.categorySlug);
  const events = await getEventsForCategory(params.categorySlug)
  return { category, events };
}

const CategoryHome = () => {
    const { category, events } = useLoaderData();

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