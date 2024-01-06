import React from "react";
import Image from "next/image";
import { ICardProps } from "../Card/Card";
import styles from "./hiringprocess.module.css";

const HiringProcessCard = ({ imageSrc, title, description }: ICardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.group}>
        {/* image */}
        <Image src={imageSrc} alt="logo" className={styles.logo} />
        {/* title  */}
        <h3 className={styles.title}>{title}</h3>
      </div>
      {/* description */}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HiringProcessCard;
