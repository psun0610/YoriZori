import React, { useState } from "react";
import styles from "../styles/recipelist.module.css";
import Navigation from "../components/Navigation";
import Category from "../components/CategoryMaterial";
import Recipe from "../components/Recipe";

const RecipeList = () => {
  const [searchText, setSearchText] = useState(""); // 초기 상태를 빈 문자열로 설정

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    if (typeof inputValue === "string") { // 입력된 값이 문자열인지 확인
      setSearchText(inputValue.toLowerCase()); // 문자열로 변경 후 소문자로 변환하여 상태 업데이트
    } else {
      setSearchText(""); // 아니면 빈 문자열로 설정
    }
  };

  const items = [
    "전체",
    "메인요리",
    "밑반찬",
    "면/만두",
    "국/찌개",
    "간식",
    "샐러드",
    "해장",
    "밥/죽/떡",
    "야식",
    "디저트",
  ];

  return (
    <div>
      <div id="wrapper">
        <div className={styles.up}>
          <div className={styles.category}>
            <Category items={items} />
          </div>
          <div className={styles.search}>
            <input
              className={styles.search_input}
              type="text"
              placeholder="재료 검색하기"
              value={searchText}
              onChange={handleSearchChange} 
            />
            <img
              className={styles.search_img}
              src="../images/search.png"
              alt="search"
            />
          </div>
        </div>
        <div className={styles.recipe_box}>
          
          <Recipe searchText={searchText} />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default RecipeList;
