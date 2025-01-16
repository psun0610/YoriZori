import React from "react";
import Bookmark from "../components/Bookmark";
import styles from "../../styles/RecipeList.module.css";

const RecipeBookmark = () => {
  return (
    <div>
      <div id="wrapper_contain_header">
        <div className={styles.recipe_box}>
          <Bookmark />
        </div>
      </div>
    </div>
  );
};

export default RecipeBookmark;
