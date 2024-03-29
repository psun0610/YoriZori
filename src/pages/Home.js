import React from "react";
import styles from "../styles/LoginJoin.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src="../../images/logo.jpg" className={styles.logo}></img>
      <p className={styles.home_first}>처음 오셨나요?</p>
      <div className={styles.home_buttons}>
        <Link to="/join">
          <div className={`button pink_back`}>네, 처음이에요 !</div>
        </Link>
        <Link to="/login">
          <div className={`button white_back`}>아뇨, 회원이에요 !</div>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
