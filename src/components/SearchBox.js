import React from "react";
import styles from "../styles/SearchBox.module.css";
import SearchWindow from "./SearchWindow";
import Category from "./CategoryMaterial";
import MaterialList from "./MaterialList";

// 재료, 레시피 검색에 사용되는 검색 컴포넌트
// 사용하려면 카테고리에 들어갈 "items" 배열 보내야함
function SearchBox(props) {
  return (
    <div className={styles.search_box}>
      <SearchWindow placeholder="검색하기" />
      <Category items={props.items} />
      <MaterialList />
    </div>
  );
}

export default SearchBox;
