import React from "react";
import styles from "../styles/avoidance.module.css";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";

function Avoidance() {
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
  return (
    <div>
      <h1 className={styles.title}>
        평소에 <span>기피하는 음식</span>이 있으신가요?
      </h1>
      <SearchBox items={items} />
      <div style={{ margin: "5vh 0", width: "100%" }}>
        <Button name="없어요 !" color="pink" width="95%" />
      </div>
    </div>
  );
}

export default Avoidance;
