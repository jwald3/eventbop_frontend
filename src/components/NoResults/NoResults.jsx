import styles from "./NoResults.module.scss"

const NoResults = ({ message }) => (
  <div className={styles.noResults}>
    <p>{message}</p>
  </div>
);

export default NoResults;