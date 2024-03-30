/** 일치하는 아이디가 있는지, 비밀번호가 맞는지 알려주는 텍스트 작성할 것 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginJoin.module.css";
import LoginSignupInput from "../components/LoginJoinInput";
import "../App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={styles.home}>
      <img src="../../images/logo.jpg" alt="logo" className={styles.logo}></img>
      <LoginSignupInput
        name="아이디"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      {username && (
        <LoginSignupInput
          name="비밀번호"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
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
