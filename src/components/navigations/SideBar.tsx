import React, { useState } from "react";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        <nav>
          <a href="#" className={styles.active}>
            Overview
          </a>
          <a href="#">Create campaign</a>
          <a href="#">Automation</a>
          <a href="#">Subscriptions</a>
          <a href="#">AI Chatbot</a>
          <a href="#">Integrations</a>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
