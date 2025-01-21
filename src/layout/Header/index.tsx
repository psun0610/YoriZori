import { useNavigate } from "react-router";
import * as S from "./Header.style";

const Header = ({ name }: { name: string }) => {
  const navigator = useNavigate();

  return (
    <S.NavHeader>
      <S.GoBackButton
        onClick={() => {
          navigator(-1);
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.375 5.25L8.625 12L15.375 18.75"
            stroke="#6C6C6C"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </S.GoBackButton>
      <h1>{name}</h1>
    </S.NavHeader>
  );
};

export default Header;
