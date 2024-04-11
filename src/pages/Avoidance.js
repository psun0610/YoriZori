import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Avoidance.module.css";
import SearchBox from "../components/SearchBox";
import axios from "axios";

function Avoidance() {
  const baseURL = "http://localhost:8080";
  const userId = localStorage.getItem("id");
  // 로그인 한 사용자인지 확인
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token_nickname") === null) {
      navigate("/home");
    }
  }, []);

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

  const [select, setSelect] = useState([]);
  const handleSelect = item => {
    if (select.includes(item)) {
      setSelect(select.filter(i => i !== item));
    } else {
      setSelect([...select, item]);
    }
  };

  // 제출 기능 아직 미개발
  const handleSubmit = () => {
    let selectArray = select.map(s => s.id);
    axios
      .post(`${baseURL}/users/${userId}/avoid-ingredients`, selectArray)
      .then(() => {
        navigate("/join_complete");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1
        className={styles.title}
        style={{ margin: select.length === 0 ? "0 0 4vh" : "0 0 2.3vh" }}
      >
        평소에 <span>기피하는 음식</span>이 있으신가요?
      </h1>
      <div
        className={styles.avoid_selects}
        style={{ margin: select.length === 0 ? "0 0 4vh" : "0 0 2.3vh" }}
      >
        {select.map(item => (
          <div
            key={item.id}
            onClick={() => setSelect(select.filter(i => i !== item))}
          >
            {item.name}
          </div>
        ))}
      </div>

      <SearchBox
        items={items}
        placeholder={"검색하기"}
        isOpen={true}
        onClick={handleSelect}
        select={select}
      />
      <div style={{ margin: "4vh 0 0", width: "100%" }}>
        {select.length === 0 ? (
          <Link to="/join_complete">
            <div className={`button pink_back`} style={{ width: "95%" }}>
              없어요 !
            </div>
          </Link>
        ) : (
          <div
            className={`button pink_back`}
            style={{ width: "95%" }}
            onClick={handleSubmit}
          >
            모두 골랐어요
          </div>
        )}
      </div>
    </div>
  );
}

export default Avoidance;
