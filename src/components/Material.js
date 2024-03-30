import React from "react";
import styles from "../styles/Main.module.css";

// 냉장고 관리에 사용되는 재료 컴포넌트 (소비기한 디데이 포함)
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
