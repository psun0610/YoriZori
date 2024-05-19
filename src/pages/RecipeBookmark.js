import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Bookmark from "../components/Bookmark";
import styles from "../styles/RecipeList.module.css";

const RecipeBookmark = () => {
  return (
    <div>
      <Header name="북마크 페이지" />
      <div id="wrapper_contain_header">
        <div className={styles.recipe_box}>
          <Bookmark />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default RecipeBookmark;
