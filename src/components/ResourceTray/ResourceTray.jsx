import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CardTray from "../CardTray/CardTray";
import styles from "./ResourceTray.module.scss";

const ResourceTray = ({
  sectionTitle,
  subtitle,
  linkText,
  linkHref,
  data,
  cardType,
}) => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader
        title={sectionTitle}
        subtitle={subtitle}
        linkText={linkText}
        linkHref={linkHref}
      />
      <CardTray cardType={cardType} data={data} />
    </div>
  );
};

export default ResourceTray;
