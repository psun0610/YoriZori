import React from "react";
import "../styles/mypage.css";
import { useNavigate } from "react-router";
import Footer from "../components/footer";

const Mypage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="mypage-header">Mypage</header>
      <div className="mypage-top">
        <div className="bookmark">
          <span className="bookmark-text">레시피북마크</span>
          <img className="bookmark-image" src="./images/bookmark.png"></img>
        </div>
        <div className="hate">
          <div className="hate-top">
            <span className="hate-text">나의 기피 음식</span>
            <button className="hate-button">
              <img className="hate-button-img" src="/images/pencil.png"></img>
            </button>
          </div>
          <span className="hate-food">기피하는 음식들</span>
        </div>
      </div>
      <div className="memberedit">
        <span
          onClick={() => {
            navigate("/memberedit");
          }}
        >
          회원정보수정
        </span>

        <span className="logout">로그아웃</span>
      </div>
      <Footer />
    </div>
  );
};

export default Mypage;
