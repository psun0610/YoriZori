/** 일치하는 아이디가 있는지, 비밀번호가 맞는지 알려주는 텍스트 작성할 것 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginJoin.module.css";
import "../App.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={styles.home}>
      <img src="../../images/logo.jpg" alt="logo" className={styles.logo}></img>

      <div className={styles.input_container}>
        <input
          name="userName"
          value={userName}
          onChange={e => setUsername(e.target.value)}
        ></input>
        <p className={userName ? ` ${styles.active}` : ""}>아이디</p>
      </div>

      {userName && (
        <div className={styles.input_container}>
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
          <p className={password ? ` ${styles.active}` : ""}>비밀번호</p>
        </div>
      )}
      <input
        type="submit"
        value="로그인"
        className={`button pink_back`}
      ></input>
      <Link to="../join" className={styles.join_button}>
        회원가입
      </Link>
    </form>
  );
};

export default Login;
