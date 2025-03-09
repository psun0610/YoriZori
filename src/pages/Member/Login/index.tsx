import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AxiosCommon from "../../../utils/AxiosCommon";
import * as S from "../style";
import { JoinButton } from "./style";
import { PinkButton } from "styles/Button.style";
import { useAuthStore } from "stores/useAuthStore";

const Login = () => {
  const useAuth = useAuthStore();
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validEmpty, setValidEmpty] = useState("");
  const [validMatch, setValidMatch] = useState("");

  const handleSubmitClick = (e: FormEvent) => {
    e.preventDefault();
    // input이 비어있는지 확인
    if (userName.trim() === "") {
      setValidEmpty("아이디");
      return;
    } else if (password.trim() === "") {
      setValidEmpty("비밀번호");
      return;
    } else {
      setValidEmpty("");
    }
    AxiosCommon.post("/auth/signin", {
      name: userName,
      password: password,
    }).then(response => {
      // 아이디, 비밀번호 Match Check
      if (response.data.statusCode === 500) {
        setValidMatch("아이디와 비밀번호를 다시 확인해주세요");
        return;
      }
      const accessToken = response.data.token;
      const refreshToken = response.data.refreshToken;
      const nickname = response.data.nickname;
      useAuth.login(accessToken, refreshToken, nickname);
      navigate("/");
    });
  };

  useEffect(() => {
    setValidEmpty("");
    setValidMatch("");
  }, [userName, password]);

  return (
    <S.Form>
      <S.Logo />
      <S.InputContainer>
        <input
          name="userName"
          value={userName}
          onChange={e => setUsername(e.target.value)}
        ></input>
        <S.Label $isActive={!!userName}>아이디</S.Label>
      </S.InputContainer>

      {userName && (
        <S.InputContainer>
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
          <S.Label $isActive={!!password}>비밀번호</S.Label>
        </S.InputContainer>
      )}
      {validEmpty !== "" ? (
        <S.WarningMessage>{validEmpty}를 입력하세요</S.WarningMessage>
      ) : (
        ""
      )}
      {validMatch !== "" ? (
        <S.WarningMessage>{validMatch}</S.WarningMessage>
      ) : (
        ""
      )}
      <PinkButton
        as="input"
        type="submit"
        value="로그인"
        onClick={handleSubmitClick}
      ></PinkButton>
      <JoinButton to="../join">회원가입</JoinButton>
    </S.Form>
  );
};

export default Login;
