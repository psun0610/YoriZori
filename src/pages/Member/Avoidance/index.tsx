import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "components/Search/SearchBox";
import AxiosAuth from "utils/AxiosAuth";
import * as S from "./style";
import { IngredientType } from "types/IngredientType";

const ITEMS = [
  "전체",
  "과일",
  "채소",
  "육류",
  "해산물",
  "유제품",
  "음료/주류",
  "조미료/향신료",
  "견과류/곡류",
  "디저트",
  "요리",
  "기타",
];

const Avoidance = () => {
  // 로그인 유저 확인
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      AxiosAuth.post("/auth/validate", {
        token: token,
      }).catch(error => {
        console.log(error);
        navigate("/home");
      });
    } else {
      navigate("/home");
    }
  }, []);

  const navigate = useNavigate();
  const [userSelectList, setUserSelectList] = useState<IngredientType[]>([]);

  /**
   * 재료를 선택하거나 취소하는 함수
   * @param select 선택한 재료
   */
  const handleSelect = (select: IngredientType) => {
    if (userSelectList.includes(select)) {
      setUserSelectList(userSelectList.filter(i => i !== select));
    } else {
      setUserSelectList([...userSelectList, select]);
    }
  };

  /**
   * 기피음식 등록을 완료하고 회원가입 완료 페이지로 보내는 함수
   */
  const handleSubmit = () => {
    let selectArray = userSelectList.map(s => s.id);
    AxiosAuth.post(`/users/avoid-ingredients`, selectArray).then(() => {
      navigate("/join_complete");
    });
  };

  return (
    <S.Container>
      <S.Title isSelect={userSelectList.length != 0}>
        평소에 <span>기피하는 음식</span>이 있으신가요?
      </S.Title>
      <S.SelectList isSelect={userSelectList.length != 0}>
        {userSelectList.map(select => (
          <div
            key={select.id}
            onClick={() =>
              setUserSelectList(userSelectList.filter(i => i !== select))
            }
          >
            {select.name}
          </div>
        ))}
      </S.SelectList>

      <SearchBox
        ITEMS={ITEMS}
        placeholder={"검색하기"}
        isOpen={true}
        onClick={handleSelect}
        userSelectList={userSelectList}
      />
      <S.Notice>
        {userSelectList.length === 0 ? (
          <Link to="/join_complete">
            <S.Button as="button">없어요 !</S.Button>
          </Link>
        ) : (
          <S.Button as="button" onClick={handleSubmit}>
            모두 골랐어요
          </S.Button>
        )}
      </S.Notice>
    </S.Container>
  );
};

export default Avoidance;
