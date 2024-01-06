import React from "react";
import styles from "./hiringsteps.module.css";

interface IHiringStepsCard {
  cardNumber: number;
  title: string;
  description: string;
}

const HiringStepsCard = ({
  cardNumber,
  title,
  description,
}: IHiringStepsCard) => {
  return (
    <div className={styles.card}>
      <div className={styles.circle}>{cardNumber}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HiringStepsCard;
