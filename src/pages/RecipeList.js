import React, { useState } from "react";
import styles from "../styles/RecipeList.module.css";
import styleSearch from "../styles/SearchBox.module.css";
import Navigation from "../components/Navigation";
import Category from "../components/Category";
import Recipe from "../components/Recipe";
import Header from "../components/Header";

const RecipeList = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSearchChange = event => {
    const inputValue = event.target.value;
    if (typeof inputValue === "string") {
      setSearchText(inputValue);
    } else {
      setSearchText("");
    }
  };

  const handleCategorySelect = index => {
    setSelectedCategory(index);
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
      <Header name="레시피" />
      <div id="wrapper_contain_header">
        <div className={styles.wrapper}>
          <Category items={items} onClick={handleCategorySelect} />
          
          <div
            className={styleSearch.search_box}
            style={{ marginTop: "1.5vh" }}
          >
            <div className={styleSearch.search_window}>
              <input
                className={styleSearch.search_input}
                type="text"
                placeholder="레시피 검색하기"
                value={searchText}
                onChange={handleSearchChange}
              />
              <button className={styleSearch.magnifier}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG 아이콘 */}
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.recipe_box}>
            <Recipe searchText={searchText} category={selectedCategory} />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default RecipeList;
