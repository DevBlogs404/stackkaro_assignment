import React from "react";
import styles from "./hiringbenifits.module.css";

const HiringBenifitCard = ({ description }: { description: string }) => {
  return (
    <div className={styles.card}>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HiringBenifitCard;
