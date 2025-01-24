import { useLocation } from "react-router-dom";
import * as S from "./Navigation.style";
import { MenuDatas } from "./MenuDatas";
import NavButton from "./NavButton";

// 네비게이션 사용시, 네비게이션 앞의 모든 내용을 #wrapper로 묶어야 함! (특히 컨텐츠가 적은 페이지)
const Navigation = () => {
  const currentURL = useLocation().pathname;
  return (
    <S.NavContainer>
      {MenuDatas.map((menu, index) => (
        <NavButton
          key={index}
          name={menu.name}
          linkTo={menu.linkTo}
          icon={menu.icon}
          currentURL={currentURL}
        />
      ))}
    </S.NavContainer>
  );
};

export default Navigation;
