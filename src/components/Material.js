import React from "react";
import styles from "../styles/main.module.css";

function Material() {
  return (
    <div className={styles.material}>
      <div className={styles.material_img_box}>
        <img src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg" />
      </div>
      <p>계란</p>
      <div className={styles.material_day}>D-1</div>
    </div>
  );
}

export default Material;
