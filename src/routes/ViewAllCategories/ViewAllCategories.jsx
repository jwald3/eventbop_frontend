import axios from 'axios';
import CategoryTile from '../../components/CategoryTile/CategoryTile'
import Header from '../../components/Header/Header';
import styles from '../ViewAllCategories/ViewAllCategories.module.scss'
import Footer from '../../components/Footer/Footer';
import NoResults from '../../components/NoResults/NoResults';
import { useLoaderData } from 'react-router-dom';

export async function getCategories() {
  const response = await axios.get('http://localhost:8000/api/entertainmentapp/categories/');
  return response.data ?? null;
}
export async function loader() {
  const categories = await getCategories();
  return { categories };
}

const ViewAllCategories = () => {
    const { categories } = useLoaderData();

    return (
        <div>
            <Header />
            <div className={styles.categoriesPage}>
                <div className={styles.categoriesContainer}>
                    {categories.length > 0 ? (
                        categories.map((category) => <CategoryTile key={category.id} url={category.image} title={category.title} id={category.id} />)
                    ) : (
                        <NoResults message="No categories could be found." />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ViewAllCategories;