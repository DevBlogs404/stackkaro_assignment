import React from "react";
import styles from "./benchmark.module.css";

const BenchMarkCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.first}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.second}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default BenchMarkCard;
