import React from "react";
import styles from "./hiringbenifits.module.css";
import { hiringBenifits } from "@/app/data/hiring";
import HiringBenifitCard from "./HiringBenifitCard";

const HiringBenifits = () => {
  return (
    <div className={styles.hiringBenifits}>
      {/* heading */}
      <h2 className={styles.hiringBenifitsHeading}>
        Benefits of Choosing Stackkaroo for Hiring Talents
      </h2>
      {/* sub heading  */}
      <p className={styles.hiringBenifitsSubHeading}>
        Range of Benefits for all firms, Financial and Non-Financial
      </p>
      <div className={styles.hiringBenifitsCard}>
        {hiringBenifits.map((data) => {
          return (
            <HiringBenifitCard description={data.description} key={data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default HiringBenifits;
