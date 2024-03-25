import React from "react";
import styles from "../styles/LoginJoin.module.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src="../../images/logo.jpg" className={styles.logo}></img>
      <p className={styles.home_first}>처음 오셨나요?</p>
      <div className={styles.home_buttons}>
        <Link to="/join">
          <Button name="네, 처음이에요 !"></Button>
        </Link>
        <Link to="/login">
          <Button name="아뇨, 회원이에요 !" color="white"></Button>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
};

export default Home;
