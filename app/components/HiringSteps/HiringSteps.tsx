import React from "react";
import styles from "./hiringsteps.module.css";
import { hiringStepsData } from "@/app/data/hiring";
import HiringStepsCard from "./HiringStepsCard";

const HiringSteps = () => {
  return (
    <div className={styles.hiringSteps}>
      {/* heading */}
      <h2 className={styles.hiringStepsHeading}>
        Hire Best Talents from Stackkaroo
      </h2>
      {/* sub heading  */}
      <p className={styles.hiringStepsSubHeading}>
        4 Easy Steps for Simple and Fast Hiring
      </p>

      <div className={styles.hiringStepsCardStyle}>
        {hiringStepsData.map((data) => {
          return (
            <HiringStepsCard
              key={data.id}
              cardNumber={data.id}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HiringSteps;
