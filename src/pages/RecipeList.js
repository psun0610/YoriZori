import React from "react";
import "../styles/recipelist.css"
import Footer from "../components/footer";

const RecipeList = () => {
  return <div>
    <div className="up">
      <div className="list">
        <div className="uplist">
          <p>전체</p>
          <p>메인요리</p>
          <p>밑반찬</p>
          <p>면/만두</p>
          <p>국/찌개</p>
          <p>간식</p>
        </div>
        <div className="downlist">
          <p>샐러드</p>
          <p>해장</p>
          <p>밥/죽/떡</p>
          <p>야식</p>
          <p>디저트</p>
        </div>
      </div>
      <div className="search">
      <input
      className="search-input"
      type="text"
      placeholder="재료 검색하기">
        
      </input>
      <img className="search-img" src="../images/search.png"></img>
      </div>
    </div>
    <Footer/>
  </div>;
};

export default RecipeList;
