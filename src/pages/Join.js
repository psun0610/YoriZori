import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginJoin.module.css";
import axios from "axios";
import "../App.css";

const Join = () => {
  const baseURL = "http://localhost:8080";
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    nickName: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Validation 설정
  const [valid, setValid] = useState({
    validEmpty: false,
    passwordNoMatch: false,
    idDuplicate: false,
  });

  // 비밀번호 Match Validation
  useEffect(() => {
    setValid({
      ...valid,
      passwordNoMatch: user.password !== user.confirmPassword,
    });
  }, [user.password, user.confirmPassword]);

  // 모든 항목을 채워달라는 에러 메시지 없애는 useEffect
  useEffect(() => {
    setValid(prevValid => ({
      ...prevValid,
      validEmpty: false,
    }));
  }, [user.userName, user.password, user.confirmPassword, user.nickName]);

  useEffect(() => {
    setValid(prevValid => ({
      ...prevValid,
      idDuplicate: false,
    }));
  }, [user.userName]);

  const handleSubmitClick = e => {
    e.preventDefault();
    // input이 비어있는지 확인
    if (
      user.userName.trim() === "" ||
      user.password.trim() === "" ||
      user.confirmPassword.trim() === "" ||
      user.nickName.trim() === ""
    ) {
      setValid({ ...valid, validEmpty: true });
      return;
    } else {
      setValid({ ...valid, validEmpty: false });
    }

    // 회원가입
    axios
      .post(baseURL + "/users", {
        name: user.userName,
        password: user.password,
        nickname: user.nickName,
      })
      .then(() => {
        axios
          .post(baseURL + "/login", {
            name: user.userName,
            password: user.password,
          })
          .then(response => {
            /** 현재 닉네임이 토큰으로 돼있는데 추후 JWT 추가되면 수정 **/
            localStorage.clear();
            localStorage.setItem("id", response.data.userId);
            localStorage.setItem("token_nickname", response.data.nickname);
            navigate("/avoidance");
          });
      })
      .catch(error => {
        if (error.response.data.message === "이미 존재하는 아이디입니다.")
          setValid({ ...valid, idDuplicate: true });
        return;
      });
  };

  return (
    <form className={styles.home}>
      <h1 className={styles.join_h1}>회원가입</h1>

      <div className={styles.input_container}>
        <input
          name="userName"
          value={user.userName}
          onChange={handleChange}
        ></input>
        <p className={user.userName ? ` ${styles.active}` : ""}>아이디</p>
      </div>
      {valid.idDuplicate && (
        <p className={styles.inconsistency}>이미 존재하는 아이디입니다</p>
      )}

      <div className={styles.input_container}>
        <input
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
        ></input>
        <p className={user.password ? ` ${styles.active}` : ""}>비밀번호</p>
      </div>

      <div className={styles.input_container}>
        <input
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          type="password"
        ></input>
        <p className={user.confirmPassword ? ` ${styles.active}` : ""}>
          비밀번호 확인
        </p>
      </div>

      {valid.passwordNoMatch && (
        <p className={styles.inconsistency}>비밀번호가 일치하지 않습니다</p>
      )}

      <div className={styles.input_container}>
        <input
          name="nickName"
          value={user.nickName}
          onChange={handleChange}
        ></input>
        <p className={user.nickName ? ` ${styles.active}` : ""}>닉네임</p>
      </div>

      {valid.validEmpty && (
        <p className={styles.inconsistency}>모든 항목을 채워주세요</p>
      )}

      <input
        type="submit"
        value="확인"
        className={`button pink_back`}
        style={{ marginTop: "20px" }}
        onClick={handleSubmitClick}
      ></input>
    </form>
  );
};

export default Join;
