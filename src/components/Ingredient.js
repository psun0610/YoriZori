import React from "react";
import styles from "../styles/Main.module.css";

// 냉장고 관리에 사용되는 재료 컴포넌트 (소비기한 디데이 포함)
function Ingredient(props) {
  return (
    <div className={styles.ingredient}>
      <div className={styles.ingredient_img_box}>
        <img src={props.src} />
      </div>
      <p>{props.name}</p>
      <div className={styles.ingredient_day}>D-{props.dday}</div>
    </div>
  );
}

export default Ingredient;
