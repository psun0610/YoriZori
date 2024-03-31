import React from "react";
import styles from "../styles/LoginJoin.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src="../../images/logo.jpg" className={styles.logo}></img>
      <p className={styles.home_first}>로그인 후 이용할 수 있어요!</p>
      <div className={styles.home_buttons}>
        <Link to="/login">
          <div className={`button pink_back`}>로그인 하기</div>
        </Link>
        <Link to="/join">
          <div className={`button white_back`}>회원가입</div>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
