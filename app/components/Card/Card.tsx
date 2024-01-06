import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

export interface ICardProps {
  imageSrc: any;
  title: string;
  description: string;
}

const Card = ({ imageSrc, title, description }: ICardProps) => {
  return (
    <div className={styles.card}>
      {/* image */}
      <Image src={imageSrc} alt="logo" className={styles.cardLogo} />
      {/* title  */}
      <h3 className={styles.cardTitle}>{title}</h3>
      {/* description */}
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
