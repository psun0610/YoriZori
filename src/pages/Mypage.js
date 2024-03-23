import React from "react";
import styles from "../styles/mypage.module.css";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";

const Mypage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className={styles.mypage_header}>Mypage</header>
      <div className={styles.mypage_top}>
        <div className={styles.bookmark}>
          <span className={styles.bookmark_text}>레시피북마크</span>
          <img className={styles.bookmark_image} src="./images/bookmark.png" alt="bookmark"></img>
        </div>
        <div className={styles.hate}>
          <div className={styles.hate_top}>
            <span className={styles.hate_text}>나의 기피 음식</span>
            <button className={styles.hate_button}>
              <img className={styles.hate_button_img} src="/images/pencil.png" alt="pencil"></img>
            </button>
          </div>
          <span className={styles.hate_food}>기피하는 음식들</span>
        </div>
      </div>
      <div className={styles.memberedit}>
        <span
          onClick={() => {
            navigate("/memberedit");
          }}
        >
          회원정보수정
        </span>

        <span className={styles.logout}>로그아웃</span>
      </div>
      <Navigation />
    </div>
  );
};

export default Mypage;
