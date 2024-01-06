import React from "react";
import styles from "./infostrip.module.css";

const InfoStrip = () => {
  return (
    <div className={styles.infoStrip}>
      <p className={styles.infoStripDescription}>
        STACKKAROO aims to simplify the remote hiring process and allows global
        companies to tap into top tech talent from India. Also, it assists
        Indian talent to find the dream jobs on the global level
      </p>
    </div>
  );
};

export default InfoStrip;
