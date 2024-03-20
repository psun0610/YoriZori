
/** 일치하는 아이디가 있는지, 비밀번호가 맞는지 알려주는 텍스트 작성할 것 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";
import LoginSignupInput from "../components/LoginJoinInput";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className={styles.home_img_container}>
        <img src="../../images/logo.jpg" alt="logo"></img>
      </div>
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
      <div style={{ marginTop: "30px" }}>
        <Link>
          <Button name="로그인"></Button>
        </Link>
        <Link to="../join" className={styles.join_button}>
          회원가입
        </Link>
      </div>
    </div>
  );
};


export default Login;
