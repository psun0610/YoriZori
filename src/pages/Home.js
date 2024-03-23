import React from "react";
import styles from "../styles/LoginJoin.module.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <div className={styles.home_img_container}>
        <img src="../../images/logo.jpg"></img>
      </div>
      <p className={styles.home_first}>처음 오셨나요?</p>
      <Link to="/join">
        <Button name="네, 처음이에요 !"></Button>
      </Link>
      <Link to="/login">
        <Button name="아뇨, 회원이에요 !" color="white"></Button>
      </Link>
      <footer></footer>
    </div>
  );
};

export default Home;
