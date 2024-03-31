import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Refrigerator.module.css";
import SearchBox from "../components/SearchBox";
import Navigation from "../components/Navigation";
/** 달력 */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";

function RefrigeratorAdd() {
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
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [storage, setStorage] = useState("냉장");
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

  return (
    <div>
      <div id="wrapper" className={styles.refrigerator_add}>
        {/* 재료 선택 */}
        <div className={styles.add_title}>
          <h1>
            <span>어떤 재료</span>를 등록할까요?
          </h1>
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
              className={storage === "냉장" ? styles.active : ""}
              onClick={() => handleStorageClick("냉장")}
            >
              냉장
            </button>
            <button
              className={storage === "냉동" ? styles.active : ""}
              onClick={() => handleStorageClick("냉동")}
            >
              냉동
            </button>
            <button
              className={storage === "실온" ? styles.active : ""}
              onClick={() => handleStorageClick("실온")}
            >
              실온
            </button>
          </div>
        </div>

        {/* 등록일 */}
        <div className={styles.add_title}>
          <h1>
            <span>등록일</span>을 입력해주세요
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
              {storage != "냉동" ? (
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
      <Navigation />
    </div>
  );
}

export default RefrigeratorAdd;
