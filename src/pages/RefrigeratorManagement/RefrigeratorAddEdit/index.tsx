import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import SearchBox from "components/Search/SearchBox";
import Header from "layout/Header";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import AxiosAuth from "../../../utils/axiosAuth";
import * as S from "./style";
import { IngredientType } from "types/IngredientType";
import { IngredientDetailType } from "../Refrigerator/IngredientDetailType";
import styles from "./datepicker.module.css";

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

const RefrigeratorAddEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("id");
  const today = dayjs();

  // EditMode일 경우
  // isEditMode가 true, selectedIngredient가 location을 통해 넘어옴
  const isEditMode = location.state?.isEditMode;
  const selectedIngredient: IngredientDetailType =
    location.state?.selectedIngredient || null;

  const [selectedAddIngredient, setSelectedAddIngredient] =
    useState<IngredientType | null>(null);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [storage, setStorage] = useState(
    location.state?.selectedIngredient.storagePlace || "COLD",
  );
  const [putDate, setPutDate] = useState(
    dayjs(location.state?.selectedIngredient.putDate) || today,
  );
  const [expDate, setExpDate] = useState(
    dayjs(location.state?.selectedIngredient.expDate) || today,
  );

  /**
   * 재료를 선택하면 재료와 재료의 기본 유통기한을 설정한다.
   * @param ingredient 선택한 재료
   */
  const handleItemSelect = (ingredient: IngredientType) => {
    setSelectedAddIngredient(ingredient);
    setExpDate(prevPutDate =>
      prevPutDate.add(ingredient.defaultExpDate, "day"),
    );
    setSearchIsOpen(false);
  };

  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  /**
   * 재료창이 아닌 곳을 클릭했을 때 창을 닫는 함수
   * @param event 클릭 이벤트 객체
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target as Node)
    ) {
      setSearchIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * 재료 추가 Submit 동작 함수
   * 냉동일 때 expDate null로 처리
   * @returns 재료를 선택하지 않았을 때 처리하지 않음
   */
  const handleSubmitClick = () => {
    if (selectedAddIngredient === null) {
      alert("재료를 선택해주세요");
      return;
    }
    let requestExpDate;
    if (storage === "FROZEN") {
      requestExpDate = null;
    } else {
      requestExpDate = expDate.format("YYYY-MM-DD");
    }
    AxiosAuth.post(`/fridges/ingredients`, {
      fridgeId: userId,
      ingredientId: selectedAddIngredient.id,
      putDate: putDate.format("YYYY-MM-DD"),
      expDate: requestExpDate,
      storagePlace: storage,
    })
      .then(() => {
        navigate("/refrigerator");
      })
      .catch(() => {
        alert("재료를 선택해주세요");
        return;
      });
  };

  /**
   * 재료 수정 Submit 동작 함수
   */
  const handleEditSubmitClick = () => {
    let requestExpDate;
    if (storage === "FROZEN") {
      requestExpDate = null;
    } else {
      requestExpDate = expDate.format("YYYY-MM-DD");
    }
    AxiosAuth.put(`/fridges/ingredients/${selectedIngredient?.id}`, {
      putDate: putDate.format("YYYY-MM-DD"),
      expDate: requestExpDate,
      storagePlace: storage,
    })
      .then(() => {
        navigate("/refrigerator");
      })
      .catch(() => {
        alert("Error");
        return;
      });
  };

  return (
    <div>
      <Header
        name={
          isEditMode === true
            ? `${selectedIngredient?.name} 재료수정`
            : "냉장고 재료 등록"
        }
      />
      <S.Container id="wrapper_contain_header">
        <div>
          {/* 재료 선택 */}
          {/* 재료수정모드에서는 사용X */}
          {!isEditMode && (
            <S.Section>
              <S.SelectBox>
                <h1>
                  <span>어떤 재료</span>를 등록할까요?
                </h1>
                {selectedAddIngredient && (
                  <S.SelectedIngredient>
                    {selectedAddIngredient.name}
                  </S.SelectedIngredient>
                )}
              </S.SelectBox>
              {/* 클릭하면 열기, 재료 선택하면 닫기 */}
              <S.SearchWindow
                ref={searchBoxRef}
                style={{ cursor: "pointer" }}
                onClick={() => setSearchIsOpen(true)}
              >
                <SearchBox
                  placeholder="재료 검색하기"
                  isOpen={searchIsOpen}
                  ITEMS={ITEMS}
                  onItemSelect={handleItemSelect}
                  userSelectList={
                    selectedAddIngredient ? [selectedAddIngredient] : []
                  }
                />
              </S.SearchWindow>
            </S.Section>
          )}

          {/* 보관 방법 */}
          <S.Section>
            <h1>
              <span>보관 방법</span>을 선택해주세요
            </h1>
            <S.ButtonList>
              <S.Button
                $active={storage === "COLD"}
                onClick={() => setStorage("COLD")}
              >
                냉장
              </S.Button>
              <S.Button
                $active={storage === "FROZEN"}
                onClick={() => setStorage("FROZEN")}
              >
                냉동
              </S.Button>
              <S.Button
                $active={storage === "OUTSIDE"}
                onClick={() => setStorage("OUTSIDE")}
              >
                실온
              </S.Button>
            </S.ButtonList>
          </S.Section>

          {/* 등록일 */}
          <S.Section>
            <h1>
              <span>등록일</span>과 <span>소비기한</span>을 입력해주세요
            </h1>
            <div>
              <S.AddDate>
                <p>등록일</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    className={styles.datepicker}
                    format="YYYY년 MM월 DD일"
                    disableFuture={true}
                    value={putDate}
                    defaultValue={today}
                    onChange={(putDate: Dayjs | null) => {
                      if (putDate) {
                        setPutDate(putDate);
                      }
                    }}
                  />
                </LocalizationProvider>
              </S.AddDate>
              <S.AddDate>
                <p>소비기한</p>
                {storage !== "FROZEN" ? (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      className={styles.datepicker}
                      format="YYYY년 MM월 DD일"
                      value={expDate}
                      defaultValue={today}
                      onChange={(expDate: Dayjs | null) => {
                        if (expDate) {
                          setExpDate(expDate);
                        }
                      }}
                    />
                  </LocalizationProvider>
                ) : (
                  <S.None>-</S.None>
                )}
              </S.AddDate>
            </div>
          </S.Section>
        </div>

        <S.SubmitButton
          value={isEditMode ? "재료 수정하기" : "재료 추가하기"}
          onClick={isEditMode ? handleEditSubmitClick : handleSubmitClick}
        />
      </S.Container>
    </div>
  );
};

export default RefrigeratorAddEdit;
