import React from "react";
import styles from "./hiringprocess.module.css";
import HiringProcessCard from "./HiringProcessCard";
import { hiringProcessData } from "@/app/data/hiring";

const HiringProcess = () => {
  return (
    <div className={styles.hiringProcess}>
      {/* heading */}
      <h2 className={styles.hiringProcessHeading}>
        Our Rigorous Hiring Process{" "}
      </h2>
      {/* sub heading  */}
      <p className={styles.hiringProcessSubHeading}>
        To make sure, our Talent get the Best Opportunities
      </p>
      <div className={styles.hiringProcessCardStyle}>
        {hiringProcessData.map((data) => {
          return (
            <HiringProcessCard
              imageSrc={data.image}
              title={data.title}
              description={data.description}
              key={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HiringProcess;
