import React from "react";
import styles from "./ScheduleCampaign.module.scss";

const ScheduleCampaign = () => {
  return (
    <div className={styles.schedule}>
      <h2>Schedule Campaign</h2>
      <p>September 2024</p>
      <div className={styles.scheduleList}>
        <div className={styles.event}>📌 Element of Design Test</div>
        <div className={styles.event}>🎯 Design Principle Test</div>
      </div>
    </div>
  );
};

export default ScheduleCampaign;
