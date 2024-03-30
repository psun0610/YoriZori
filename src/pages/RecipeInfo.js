import React from "react";
import styles from "../styles/recipeinfo.module.css";

const RecipeInfo = () => {
  return (
    <div>
      <div id="wrapper">
        <div>
          <img
            className={styles.recipe_img}
            src="./images/mainpage_food_image.jpg"
          />
        </div>
        <div className={styles.info_up}>
          <div className={styles.info_left}>
            <span className={styles.title}>계란찜</span>
            <span>가진 재료 |</span>
            <span>없는 재료 |</span>
          </div>

          <div className={styles.button}>
            <button className={styles.basket_button}>
              <img className={styles.basket_img} src="./images/basket_button.png" />
            </button>
            <button className={styles.bookmark_button}>
              <img className={styles.bookmark} src="./images/bookmark.png" />
            </button>
          </div>
        </div>
        <div className={styles.cook}>
          <img
            className={styles.cook_img}
            src="./images/mainpage_food_image.jpg"
          />
          <span>1.계란을 풀어준다</span>
        </div>
        <div />
      </div>
    </div>
  );
};

export default RecipeInfo;
