// SectionHeader.js
import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({ title, subtitle, linkText, linkHref }) => {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionHeaderTitles}>
        <h1 className={styles.sectionHeaderTitle}>{title}</h1>
        <h2 className={styles.sectionHeaderSubtitle}>{subtitle}</h2>
      </div>
      <a href={linkHref} className={styles.sectionHeaderLink}>
        {linkText}
      </a>
    </div>
  );
};

export default SectionHeader;
