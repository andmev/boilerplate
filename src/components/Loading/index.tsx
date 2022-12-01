import React from "react";
import styles from "./styles.modules.css";

export default () => {
  return (
    <div className={styles.fullPageLoading}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
