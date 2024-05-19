import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router";
import styles from "../styles/Refrigerator.module.css";
import AxiosAuth from "../components/AxiosAuth";
import SearchBox from "../components/SearchBox";

const ShoppingBasketAdd = () => {
  const navigate = useNavigate();
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

  const [selectIngredient, setSelectIngredient] = useState([]);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const wrapperRef = useRef(null);
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


  const handleSubmitClick = async () => {
    try {
      const ingredientId = selectIngredient[0].id;
      console.log(ingredientId);
      const response = await AxiosAuth.post("/users/cart", [ingredientId]);
      console.log("Added to cart:", response.data);
     
      navigate("/shoppingbasket")
      
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <Header name="장바구니 재료 등록" />
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
};

export default ShoppingBasketAdd;
