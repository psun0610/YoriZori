import React from "react";
import styles from "../styles/SearchBox.module.css";
import styles2 from "../styles/Main.module.css";

// SearchBox에 사용되는 검색용 재료 리스트
function MaterialList() {
  const materials = [];
  for (let i = 0; i < 100; i++) {
    materials.push(
      <div key={i} className={styles2.material}>
        <div className={styles2.material_img_box}>
          <img src={`image_${i}.jpg`} />
        </div>
        <p>계란</p>
      </div>,
    );
  }

  return (
    <div className={styles.material_list_container}>
      <div className={styles.material_list}>{materials}</div>
    </div>
  );
}

export default MaterialList;
