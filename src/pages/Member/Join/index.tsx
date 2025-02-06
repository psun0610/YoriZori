import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AxiosCommon from "utils/AxiosCommon";
import * as S from "../style";
import { PinkButton } from "styles/Button.style";

interface UserState {
  userName: string;
  password: string;
  confirmPassword: string;
  nickName: string;
}

interface ValidState {
  validEmpty: boolean;
  passwordNoMatch: boolean;
  idDuplicate: boolean;
}

const Join = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserState>({
    userName: "",
    password: "",
    confirmPassword: "",
    nickName: "",
  });
  const [valid, setValid] = useState<ValidState>({
    validEmpty: false,
    passwordNoMatch: false,
    idDuplicate: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  /**
   * 비밀번호 Match Validation
   */
  useEffect(() => {
    setValid({
      ...valid,
      passwordNoMatch: user.password !== user.confirmPassword,
    });
  }, [user.password, user.confirmPassword]);

  /**
   * Warning 메시지 없애는 useEffect
   */
  useEffect(() => {
    setValid(prevValid => ({
      ...prevValid,
      validEmpty: false,
    }));
  }, [user.userName, user.password, user.confirmPassword, user.nickName]);

  /**
   * 아이디 중복 체크 ->
   * input 확인 -> 회원가입 api 호출
   */
  useEffect(() => {
    setValid(prevValid => ({
      ...prevValid,
      idDuplicate: false,
    }));
  }, [user.userName]);

  const handleSubmitClick = (e: FormEvent) => {
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
    AxiosCommon.post("/auth/signup", {
      name: user.userName,
      password: user.password,
      nickname: user.nickName,
    }).then(response => {
      // 회원가입 실패
      if (response.data.error === "이미 존재하는 아이디입니다.") {
        setValid({ ...valid, idDuplicate: true });
        return;
      }

      // 회원가입 성공
      AxiosCommon.post("/auth/signin", {
        name: user.userName,
        password: user.password,
      }).then(loginResponse => {
        localStorage.clear();
        localStorage.setItem("accessToken", loginResponse.data.token);
        localStorage.setItem("refreshToken", loginResponse.data.refreshToken);
        localStorage.setItem("nickname", loginResponse.data.nickname);
        navigate("/avoidance");
      });
    });
  };

  return (
    <S.Form>
      <S.Title>회원가입</S.Title>
      <S.InputContainer>
        <input
          name="userName"
          value={user.userName}
          onChange={handleInputChange}
        ></input>
        <S.Label $isActive={!!user.userName}>아이디</S.Label>
      </S.InputContainer>
      {valid.idDuplicate && (
        <S.WarningMessage>이미 존재하는 아이디입니다</S.WarningMessage>
      )}

      <S.InputContainer>
        <input
          name="password"
          value={user.password}
          onChange={handleInputChange}
          type="password"
        ></input>
        <S.Label $isActive={!!user.password}>비밀번호</S.Label>
      </S.InputContainer>

      <S.InputContainer>
        <input
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleInputChange}
          type="password"
        ></input>
        <S.Label $isActive={!!user.confirmPassword}>비밀번호 확인</S.Label>
      </S.InputContainer>

      {valid.passwordNoMatch && (
        <S.WarningMessage>비밀번호가 일치하지 않습니다</S.WarningMessage>
      )}

      <S.InputContainer>
        <input
          name="nickName"
          value={user.nickName}
          onChange={handleInputChange}
        ></input>
        <S.Label $isActive={!!user.nickName}>닉네임</S.Label>
      </S.InputContainer>

      {valid.validEmpty && (
        <S.WarningMessage>모든 항목을 채워주세요</S.WarningMessage>
      )}

      <PinkButton
        as="input"
        type="submit"
        value="확인"
        style={{ marginTop: "20px" }}
        onClick={handleSubmitClick}
      ></PinkButton>
    </S.Form>
  );
};

export default Join;
