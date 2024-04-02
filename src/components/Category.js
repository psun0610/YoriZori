import React, { useState } from "react";
import styles from "../styles/SearchBox.module.css";

// 재료, 레시피 검색에 사용되는 검색 컴포넌트
// props로 items 배열이 들어와야함
function Category(props) {
  const [selectedItem, setSelectedItem] = useState(0); // 첫 번째 버튼 기본 선택
  const handleItemClick = index => {
    setSelectedItem(index);
    props.onClick(index);
  };
  return (
    <div className={styles.category_button_list}>
      {props.items.map((item, index) => (
        <div
          key={index}
          className={`${styles.category_button} ${
            selectedItem === index ? styles.selected : ""
          }`}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Category;
