import React, { useState } from "react";
import styles from "./TopNav.module.scss";

const TopNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={styles.topbar}>
      <input type="text" placeholder="Search..." className={styles.searchBar} />

      {/* Desktop view with icons and username aligned to the right */}
      <div className={styles.userSectionDesktop}>
        <span className={styles.icon}>🔔</span>
        <span className={styles.icon}>⚙️</span>
        <span className={styles.username}>👤 John Doe</span>
      </div>

      {/* Mobile dropdown view with username and icons inside */}
      <div
        className={`${styles.userDropdownMobile} ${
          dropdownOpen ? styles.open : ""
        }`}
      >
        <span
          className={styles.usernameToggle}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          👤 John Doe ▼
        </span>
        {dropdownOpen && (
          <div className={styles.dropdownMenu}>
            <span>🔔 Notifications</span>
            <span>⚙️ Settings</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
