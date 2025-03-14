import React from "react";
import styles from "./PerformanceCard.module.scss";

interface StatData {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

const PerformanceStats: React.FC<{ data: StatData[] }> = ({ data }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h2>Performance Over time</h2>
      <p>September 2024</p>
    </div>

    <div className={styles.performanceStats}>
      {data.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <span className={styles.label}>{stat.label}</span>
          <h3 className={styles.value}>{stat.value}</h3>
          <span
            className={`${styles.change} ${
              stat.positive ? styles.positive : styles.negative
            }`}
          >
            {stat.change} {stat.positive ? "▲" : "▼"}
          </span>
          {index < data.length - 1 && <div className={styles.divider}></div>}
        </div>
      ))}
    </div>
  </div>
);

export default PerformanceStats;
