import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Category from "../components/CategoryMaterial";
import Material from "../components/Material";
import styles from "../styles/Refrigerator.module.css";

const refrigerator = () => {
  const items = [
    "전체",
    "과일",
    "채소",
    "육류",
    "해산물",
    "유제품",
    "음료/주류",
    "조미료/향신료",
    "견과류/곡류",
    "디저트",
    "요리",
    "기타",
  ];
  const materials = [];
  for (let i = 0; i < 100; i++) {
    materials.push(
      <div key={i}>
        <Material />
      </div>,
    );
  }
  return (
    <div>
      <div id="wrapper" className={styles.wrapper}>
        <div className={styles.category}>
          <Category items={items} />
        </div>
        <div className={styles.material_box}>{materials}</div>
        <Link to="/refrigerator_add" className={styles.material_add_button}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0.125C8.14383 0.125 0.125 8.14383 0.125 18C0.125 27.8562 8.14383 35.875 18 35.875C27.8562 35.875 35.875 27.8562 35.875 18C35.875 8.14383 27.8562 0.125 18 0.125ZM24.875 19.375H19.375V24.875C19.375 25.2397 19.2301 25.5894 18.9723 25.8473C18.7144 26.1051 18.3647 26.25 18 26.25C17.6353 26.25 17.2856 26.1051 17.0277 25.8473C16.7699 25.5894 16.625 25.2397 16.625 24.875V19.375H11.125C10.7603 19.375 10.4106 19.2301 10.1527 18.9723C9.89487 18.7144 9.75 18.3647 9.75 18C9.75 17.6353 9.89487 17.2856 10.1527 17.0277C10.4106 16.7699 10.7603 16.625 11.125 16.625H16.625V11.125C16.625 10.7603 16.7699 10.4106 17.0277 10.1527C17.2856 9.89487 17.6353 9.75 18 9.75C18.3647 9.75 18.7144 9.89487 18.9723 10.1527C19.2301 10.4106 19.375 10.7603 19.375 11.125V16.625H24.875C25.2397 16.625 25.5894 16.7699 25.8473 17.0277C26.1051 17.2856 26.25 17.6353 26.25 18C26.25 18.3647 26.1051 18.7144 25.8473 18.9723C25.5894 19.2301 25.2397 19.375 24.875 19.375Z"
              fill="#6C6C6C"
            />
          </svg>

          <p>재료등록</p>
        </Link>
      </div>
      <Navigation />
    </div>
  );
};

export default refrigerator;
