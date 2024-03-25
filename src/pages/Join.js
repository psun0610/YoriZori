import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LoginJoin.module.css";
import LoginSignupInput from "../components/LoginJoinInput";
import Button from "../components/Button";

const Join = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleConfirmPasswordChange = e => {
    const { value } = e.target;
    setConfirmPassword(value);
    // 비밀번호 확인이 변경될 때마다 비밀번호와 일치 여부를 확인하여 상태 업데이트
    setPasswordMatchError(value !== password);
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.join_h1}>회원가입</h1>
      <LoginSignupInput
        name="아이디"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <LoginSignupInput
        name="비밀번호"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <LoginSignupInput
        name="비밀번호 확인"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {passwordMatchError && (
        <p className={styles.inconsistency}>비밀번호가 일치하지 않습니다.</p>
      )}
      <div style={{ margin: "30px auto", width: "100%" }}>
        <Link>
          <Button name="확인"></Button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
