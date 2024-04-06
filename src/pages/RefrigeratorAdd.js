import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/Refrigerator.module.css";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
/** 달력 */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import axios from "axios";

function RefrigeratorAdd() {
  // 로그인 한 사용자인지 확인
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token_nickname") === null) {
      navigate("/home");
    }
  }, []);

  const baseURL = "http://localhost:8080";
  const userId = localStorage.getItem("id");
  const [selectIngredient, setSelectIngredient] = useState([]);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

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

  /* 냉장, 냉동, 실온 */
  const [storage, setStorage] = useState("COLD");
  const handleStorageClick = type => {
    setStorage(type);
  };

  /* 날짜 계산 */
  const today = dayjs();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
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

  /* 제출 버튼 동작 함수 */
  // 냉동일때 expDate 처리해야함.
  const handleSubmitClick = () => {
    if (selectIngredient.length === 0) {
      alert("재료를 선택해주세요");
      return;
    }
    axios
      .post(`${baseURL}/fridges/${userId}/ingredients`, {
        fridgeId: userId,
        ingredientId: selectIngredient[0].id,
        putDate: JSON.stringify(startDate).substr(1, 10),
        expDate: JSON.stringify(endDate).substr(1, 10),
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

  return (
    <div>
      <Header name="냉장고 재료 등록" />
      <div id="wrapper_contain_header" className={styles.refrigerator_add}>
        <div>
          {/* 재료 선택 */}
          <div className={styles.add_title}>
            <div className={styles.select_ingredient_box}>
              <h1>
                <span>어떤 재료</span>를 등록할까요?
              </h1>
              {selectIngredient.length !== 0 && (
                <div className={styles.select_ingredient}>
                  {selectIngredient[0].name}
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
                  setSelectIngredient([ingredient]);
                }}
                select={selectIngredient}
              />
            </div>
          </div>

          {/* 보관 방법 */}
          <div className={styles.add_title}>
            <h1>
              <span>보관 방법</span>을 선택해주세요
            </h1>
            <div className={styles.buttons}>
              <button
                className={storage === "COLD" ? styles.active : ""}
                onClick={() => handleStorageClick("COLD")}
              >
                냉장
              </button>
              <button
                className={storage === "FROZEN" ? styles.active : ""}
                onClick={() => handleStorageClick("FROZEN")}
              >
                냉동
              </button>
              <button
                className={storage === "OUTSIDE" ? styles.active : ""}
                onClick={() => handleStorageClick("OUTSIDE")}
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
                    value={startDate}
                    defaultValue={today}
                    onChange={newValue => {
                      setStartDate(newValue);
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
                      value={endDate}
                      defaultValue={today}
                      onChange={newValue => {
                        setEndDate(newValue);
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
      </div>
      <Navigation />
    </div>
  );
}

export default RefrigeratorAdd;
