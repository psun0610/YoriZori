import React, { useEffect, useState } from "react";
import styles from "../styles/RecipeInfo.module.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
  const baseURL = "http://localhost:8080";
  const [loginUser, setLoginUser] = useState("");
  const [isBookmarked, setIsBookmarked] = useState();

  const { id } = useParams();
  const [info, setInfo] = useState({});
  const recipeId = id;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(baseURL + `/recipes/all/${recipeId}`);
        
        setInfo({
          ...response.data,
          isBookmarked: response.data.isBookmarked || false,
        });
        setIsBookmarked(response.data.isBookmarked || false);
      } catch (error) {
        console.error("Error Code:", error);
      }
    };

    fetchInfo();
  }, [id]);

  useEffect(() => {
    if (localStorage.getItem("token_nickname") !== null) {
      setLoginUser(localStorage.getItem("id"));
    }
  }, []);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);

    setInfo(prevInfo => ({ ...prevInfo, isBookmarked: !isBookmarked }));
  };

  return (
    <div>
      <Header name="레시피" />
      <div id="wrapper_contain_header">
        <div className={styles.recipe_img}>
          <img src={info.imageUrl} alt={info.name} />
        </div>

        <div className={styles.container}>
          <div className={styles.info_up}>
            <div>
              <div className={styles.info_between}>
                <h1 className={styles.title}>{info.name}</h1>
                <div className={styles.button_container}>
                  <button className={styles.basket_button}>
                    <p>장바구니에 추가</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_219_17)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.1875 3.0625C9.1875 2.48234 8.95703 1.92594 8.5468 1.5157C8.13656 1.10547 7.58016 0.875 7 0.875C6.41984 0.875 5.86344 1.10547 5.4532 1.5157C5.04297 1.92594 4.8125 2.48234 4.8125 3.0625V3.5H9.1875V3.0625ZM10.0625 3.0625V3.5H13.125V12.25C13.125 12.7141 12.9406 13.1592 12.6124 13.4874C12.2842 13.8156 11.8391 14 11.375 14H2.625C2.16087 14 1.71575 13.8156 1.38756 13.4874C1.05937 13.1592 0.875 12.7141 0.875 12.25V3.5H3.9375V3.0625C3.9375 2.25027 4.26016 1.47132 4.83449 0.896985C5.40882 0.322655 6.18777 0 7 0C7.81223 0 8.59118 0.322655 9.16551 0.896985C9.73984 1.47132 10.0625 2.25027 10.0625 3.0625ZM7.4375 7C7.4375 6.88397 7.39141 6.77269 7.30936 6.69064C7.22731 6.60859 7.11603 6.5625 7 6.5625C6.88397 6.5625 6.77269 6.60859 6.69064 6.69064C6.60859 6.77269 6.5625 6.88397 6.5625 7V8.3125H5.25C5.13397 8.3125 5.02269 8.35859 4.94064 8.44064C4.85859 8.52269 4.8125 8.63397 4.8125 8.75C4.8125 8.86603 4.85859 8.97731 4.94064 9.05936C5.02269 9.14141 5.13397 9.1875 5.25 9.1875H6.5625V10.5C6.5625 10.616 6.60859 10.7273 6.69064 10.8094C6.77269 10.8914 6.88397 10.9375 7 10.9375C7.11603 10.9375 7.22731 10.8914 7.30936 10.8094C7.39141 10.7273 7.4375 10.616 7.4375 10.5V9.1875H8.75C8.86603 9.1875 8.97731 9.14141 9.05936 9.05936C9.14141 8.97731 9.1875 8.86603 9.1875 8.75C9.1875 8.63397 9.14141 8.52269 9.05936 8.44064C8.97731 8.35859 8.86603 8.3125 8.75 8.3125H7.4375V7Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_219_17">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button className={styles.bookmark} onClick={toggleBookmark}>
                    <img
                      src={
                        isBookmarked
                          ? "/images/bookmark.png"
                          : "/images/bookmark2.png"
                      }
                      alt="Bookmark"
                    />
                    <p>{info.scrap}</p>
                  </button>
                </div>
              </div>

              {/** 재료 로그인 한 사용자만 볼 수 있게 함 (전체 재료 출력 필요함) */}
              {loginUser && (
                <div className={styles.title_sub}>
                  <div>
                    가진 재료|
                    {info.haveIngredient && info.haveIngredient.length > 0 ? (
                      info.haveIngredient.map((ingredient, id) => (
                        <p key={id}>{ingredient.name}</p>
                      ))
                    ) : (
                      <p>재료가 없습니다.</p>
                    )}
                  </div>
                  <div>
                    없는 재료|
                    {info.needIngredient &&
                      info.needIngredient.map((ingredient, id) => (
                        <p key={id}>{ingredient.name}</p>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.cook}>
            <img className={styles.cook_img} src={info.cookimg} alt="Cooking" />
            <span>{info.cooktext}</span>
          </div>
          <div />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default RecipeInfo;
