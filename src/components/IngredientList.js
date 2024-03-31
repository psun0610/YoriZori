import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/SearchBox.module.css";
import styles2 from "../styles/Main.module.css";

// 검색에 사용되는 재료 리스트 컴포넌트
function IngredientList(props) {
  const [ingredients, setIngredients] = useState([]);
  // const [select, setSelect] = useState("");
  const baseURL = "http://localhost:8080";

  useEffect(() => {
    axios.get(baseURL + "/ingredients").then(response => {
      setIngredients(response.data);
    });
  }, []);

  // 검색어에 따라 재료를 필터링하는 함수
  const filteredIngredients = ingredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(props.searchText.toLowerCase()),
  );

  // props.selectCategory랑 Ingredient.category_id랑 비교해서 필터링해야함

  return (
    <div className={styles.ingredient_list_container}>
      <div className={styles.ingredient_list}>
        {filteredIngredients.map((ingredient, index) => (
          <div
            key={index}
            className={styles2.ingredient}
            // onClick={e => {
            //   setSelect(e.target.index);
            // }}
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
