import { useRouteError } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './ErrorPage.module.scss'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <Header />
      <div className={styles.errorContent}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className={styles.errorStatus}>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </div>
  );
}