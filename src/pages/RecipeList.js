import React from "react";
import styles from "../styles/recipelist.module.css"; // 모듈화된 CSS 파일 import
import Footer from "../components/footer";
import Recipe from "../components/Recipe";

const RecipeList = () => {
  return (
    <div>
      <div className={styles.up}>
        <div className={styles.list}>
          <div className={styles.uplist}>
            <p>전체</p>
            <p>메인요리</p>
            <p>밑반찬</p>
            <p>면/만두</p>
            <p>국/찌개</p>
            <p>간식</p>
          </div>
          <div className={styles.downlist}>
            <p>샐러드</p>
            <p>해장</p>
            <p>밥/죽/떡</p>
            <p>야식</p>
            <p>디저트</p>
          </div>
        </div>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="재료 검색하기"
          ></input>
          <img className={styles.search_img} src="../images/search.png" alt="search"></img>
        </div>
      </div>
      <div className={styles.recipe_box}>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeList;
