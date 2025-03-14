import React from "react";
import styles from "./CampaignPerformance.module.scss";

type Props = {};

const CampainPerformance = (props: Props) => {
  return (
    <div className={styles.campaignPerformance}>
      <h2>Campaign Performance</h2>
      <p>
        <strong>$24,747.01</strong> | 12% increase
      </p>
      <div className={styles.barChart}></div>
    </div>
  );
};

export default CampainPerformance;
