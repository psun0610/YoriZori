import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/SearchBox.module.css";
import styles2 from "../styles/Main.module.css";

// 검색에 사용되는 재료 리스트 컴포넌트
function IngredientList(props) {
  const [ingredients, setIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const baseURL = "http://localhost:8080";

  useEffect(() => {
    axios.get(baseURL + "/ingredients").then(response => {
      setIngredients(response.data);
    });
  }, []);

  useEffect(() => {
    const filtered = ingredients.filter(
      ingredient =>
        ingredient.name
          .toLowerCase()
          .includes(props.searchText.toLowerCase()) &&
        (props.selectCategory === 0 ||
          ingredient.categoryId === props.selectCategory),
    );
    setFilteredIngredients(filtered);
  }, [props.searchText, props.selectCategory, ingredients]);

  return (
    <div className={styles.ingredient_list_container}>
      <div className={styles.ingredient_list}>
        {filteredIngredients.map((ingredient, index) => (
          <div
            key={index}
            className={styles2.ingredient}
            onClick={() => {
              props.onClick(ingredient);
            }}
            style={
              Array.isArray(props.isSelect) &&
              props.isSelect.includes(ingredient)
                ? { backgroundColor: "rgba(0, 0, 0, 0.082)" }
                : {}
            }
          >
            <div className={styles2.ingredient_img_box}>
              <img src={ingredient.imageUrl} />
            </div>
            <p>{ingredient.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientList;
