import { Link } from "react-router-dom";
import * as S from "./style";
import { Wrapper, Logo } from "../style";
import { PinkButton, WhiteButton } from "styles/Button.style";

const Home = () => {
  return (
    <Wrapper>
      <Logo />
      <S.Header>로그인 후 이용할 수 있어요!</S.Header>
      <S.ButtonBox>
        <Link to="/login">
          <PinkButton>로그인</PinkButton>
        </Link>
        <Link to="/join">
          <WhiteButton>회원가입</WhiteButton>
        </Link>
      </S.ButtonBox>
      <footer></footer>
    </Wrapper>
  );
};

export default Home;
