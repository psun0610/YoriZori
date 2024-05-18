import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "../styles/Refrigerator.module.css";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
/** 달력 */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import AxiosAuth from "../components/AxiosAuth";

function RefrigeratorAdd() {
  const navigate = useNavigate();
  const location = useLocation();

  // EditMode일 경우
  // isEditMode가 true, selectedIngredient가 location을 통해 넘어옴
  const isEditMode = location.state?.isEditMode;
  const [selectedIngredient, setSelectedIngredient] = useState(
    location.state?.selectedIngredient || null,
  );

  const userId = localStorage.getItem("id");
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [storage, setStorage] = useState(
    location.state?.selectedIngredient.storagePlace || "COLD",
  );
  const today = dayjs();
  const [putDate, setPutDate] = useState(
    dayjs(location.state?.selectedIngredient.putDate) || today,
  );
  const [expDate, setExpDate] = useState(
    dayjs(location.state?.selectedIngredient.expDate) || today,
  );

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

  // 재료를 선택하는 동시에 기본 소비기한 자동으로 등록
  useEffect(() => {
    if (putDate && selectedIngredient && selectedIngredient.defaultExpDate) {
      // dayjs로 변환된 날짜에 기본 소비기한을 더하여 expDate를 설정
      console.log(expDate.format("YYYY년 MM월 DD일"));
      setExpDate(putDate.add(selectedIngredient.defaultExpDate, "day"));
      console.log(expDate.format("YYYY년 MM월 DD일"));

      console.log("====");
    }
  }, [selectedIngredient, putDate]);

  const items = [
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

  /* 날짜 계산 */
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearchIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  /* 재료추가완료 버튼 동작 함수 */
  // 냉동일때 expDate null로 처리
  const handleSubmitClick = () => {
    if (selectedIngredient === "") {
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
      ingredientId: selectedIngredient.id,
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

  const handleEditSubmitClick = () => {
    let requestExpDate;
    if (storage === "FROZEN") {
      requestExpDate = null;
    } else {
      requestExpDate = expDate.format("YYYY-MM-DD");
    }
    AxiosAuth.put(`/fridges/ingredients/${selectedIngredient.id}`, {
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
      {isEditMode === true ? (
        <Header name={`${selectedIngredient.name} 재료수정`} />
      ) : (
        <Header name="냉장고 재료 등록" />
      )}

      <div id="wrapper_contain_header" className={styles.refrigerator_add}>
        <div>
          {/* 재료 선택 */}
          {/* 재료수정모드에서는 사용X */}
          {!isEditMode && (
            <div className={styles.add_title}>
              <div className={styles.select_ingredient_box}>
                <h1>
                  <span>어떤 재료</span>를 등록할까요?
                </h1>
                {selectedIngredient && (
                  <div className={styles.select_ingredient}>
                    {selectedIngredient.name}
                  </div>
                )}
              </div>
              {/* 클릭하면 열기, 재료 선택하면 닫기 */}
              <div
                ref={wrapperRef}
                style={{ cursor: "pointer" }}
                className={styles.search_window}
                onClick={() => setSearchIsOpen(true)}
              >
                <SearchBox
                  placeholder="재료 검색하기"
                  isOpen={searchIsOpen}
                  items={items}
                  onClick={ingredient => {
                    setSelectedIngredient(ingredient);
                  }}
                  select={[selectedIngredient]}
                />
              </div>
            </div>
          )}

          {/* 보관 방법 */}
          <div className={styles.add_title}>
            <h1>
              <span>보관 방법</span>을 선택해주세요
            </h1>
            <div className={styles.buttons}>
              <button
                className={storage === "COLD" ? styles.active : ""}
                onClick={() => setStorage("COLD")}
              >
                냉장
              </button>
              <button
                className={storage === "FROZEN" ? styles.active : ""}
                onClick={() => setStorage("FROZEN")}
              >
                냉동
              </button>
              <button
                className={storage === "OUTSIDE" ? styles.active : ""}
                onClick={() => setStorage("OUTSIDE")}
              >
                실온
              </button>
            </div>
          </div>

          {/* 등록일 */}
          <div className={styles.add_title}>
            <h1>
              <span>등록일</span>과 <span>소비기한</span>을 입력해주세요
            </h1>
            <div>
              <div className={styles.add_date}>
                <p>등록일</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    className={styles.datepicker}
                    format="YYYY년 MM월 DD일"
                    disableFuture={true}
                    value={putDate}
                    defaultValue={today}
                    onChange={newValue => {
                      setPutDate(newValue);
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className={styles.add_date}>
                <p>소비기한</p>
                {storage != "FROZEN" ? (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      className={styles.datepicker}
                      format="YYYY년 MM월 DD일"
                      value={expDate}
                      defaultValue={today}
                      onChange={newValue => {
                        setExpDate(newValue);
                      }}
                    />
                  </LocalizationProvider>
                ) : (
                  <div className={styles.none}>-</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {!isEditMode ? (
          <input
            type="submit"
            value="재료 추가하기"
            className={`button pink_back`}
            style={{
              width: "100%",
              backgroundColor: "var(--main_text)",
            }}
            onClick={handleSubmitClick}
          ></input>
        ) : (
          <input
            type="submit"
            value="재료 수정하기"
            className={`button pink_back`}
            style={{
              width: "100%",
              backgroundColor: "var(--main_text)",
            }}
            onClick={handleEditSubmitClick}
          ></input>
        )}
      </div>
      <Navigation />
    </div>
  );
}

export default RefrigeratorAdd;
