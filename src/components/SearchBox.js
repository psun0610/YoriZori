import React, { useState } from "react";
import styles from "../styles/SearchBox.module.css";
import SearchWindow from "./SearchWindow";
import Category from "./Category";
import IngredientList from "./IngredientList";

// 재료, 레시피 검색에 사용되는 검색 컴포넌트
// 사용하려면 카테고리에 들어갈 "items" 배열 보내야함
function SearchBox(props) {
  const [searchText, setSearchText] = useState("");
  const [selectCategory, setSelectCategory] = useState(0);

  const handleSearch = searchQuery => {
    setSearchText(searchQuery); // 검색어 상태 업데이트
  };

  const handleSelectCategory = index => {
    setSelectCategory(index);
  };

  return (
    <div className={styles.search_box}>
      <SearchWindow placeholder={props.placeholder} onSearch={handleSearch} />
      <div
        className={`${styles.category_ingredient} ${props.isOpen ? styles.open : ""}`}
      >
        <Category items={props.items} onClick={handleSelectCategory} />
        <IngredientList
          searchText={searchText}
          selectCategory={selectCategory}
          onClick={ingredient => {
            props.onClick(ingredient);
          }}
        />
        {/* 검색어 props 전달 */}
      </div>
    </div>
  );
}

export default SearchBox;
