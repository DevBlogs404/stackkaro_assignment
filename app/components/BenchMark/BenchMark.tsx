import React from "react";
import styles from "./benchmark.module.css";
import BenchMarkCard from "./BenchMarkCard";
import { benchMarkData } from "@/app/data/benchmark";

const BenchMark = () => {
  return (
    <div className={styles.benchMark}>
      {/* heading */}
      <h2 className={styles.benchMarkHeading}>
        Talents from Stackkaroo sets the Benchmark
      </h2>
      {/* sub heading  */}
      <p className={styles.benchMarkSubHeading}>
        We choose the Best for your Company
      </p>
      <div className={styles.benchMarkCard}>
        {benchMarkData.map((data) => {
          return (
            <BenchMarkCard
              key={data.id}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BenchMark;
