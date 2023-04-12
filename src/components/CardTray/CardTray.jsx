import React from "react";
import EventCard from "../EventCard/EventCard";
import VenueCard from "../VenueCard/VenueCard";
import styles from "./CardTray.module.scss";

const CardTray = ({ cardType, data }) => {
  const renderCard = (item) => {
    if (cardType === "event") {
      return <EventCard event={item} key={item.id} />;
    } else if (cardType === "venue") {
      return <VenueCard venue={item} key={item.id} />;
    }
  };

  return (
    <div className={styles.cardTray}>
      {data && data.map((item) => renderCard(item))}
    </div>
  );
};

export default CardTray;
