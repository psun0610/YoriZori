import React from "react";
import styles from "../styles/main.module.css";

function Material() {
  return (
    <div className={styles.material}>
      <div className={styles.material_img_box}>
        <img />
      </div>
      <p>계란</p>
      <div className={styles.material_day}>D-1</div>
    </div>
  );
}

export default Material;
