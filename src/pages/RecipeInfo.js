import React, { useEffect, useState } from "react";
import styles from "../styles/RecipeInfo.module.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AxiosAuth from "../components/AxiosAuth";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeInfo = () => {
  const [bookmarkCheck, setBookmarkCheck] = useState();
  const [info, setInfo] = useState({});
  const [cartMessage, setCartMessage] = useState("");
  const baseURL = "http://localhost:8080";
  const { id } = useParams();
  //const location = useLocation();
  const token = localStorage.getItem("accessToken");
  //const recipe = location.state?.recipe;
  //const recipeBookmarkId = recipe?.recipeBookmarkId;
  const recipeId = id;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = token
          ? await AxiosAuth.get(`/recipes/user-filtered/${recipeId}`)
          : await axios.get(`${baseURL}/recipes/all/${recipeId}`);
        setInfo(response.data);
      } catch (error) {
        console.error("Error fetching recipe info:", error);
      }
    };

    fetchInfo();
  }, [recipeId, token]);

  useEffect(() => {
    const fetchBookmarkCheck = async () => {
      try {
        const response = await AxiosAuth.get(`/users/check-bookmark`, {
          params: { recipeId },
        });
        setBookmarkCheck(response.data.bookmarkCheck);
      } catch (error) {
        console.error("Error fetching bookmark status:", error);
      }
    };
    fetchBookmarkCheck();
  }, [recipeId, token]);

  const toggleBookmark = async () => {
    let newBookmarkCount;
    console.log(bookmarkCheck);
    try {
      if (bookmarkCheck) {
        // await AxiosAuth.delete(
        //   `/users/bookmarks/${recipeBookmarkId}`,
        //   recipeBookmarkId,
        // );
        await AxiosAuth.delete(`/users/bookmarks2/${recipeId}`);
        newBookmarkCount = info.bookmarkCount - 1;
      } else {
        await AxiosAuth.post("/users/bookmarks", recipeId);
        newBookmarkCount = info.bookmarkCount + 1;
      }
      await AxiosAuth.patch(`/recipes/update/${recipeId}`, 
        newBookmarkCount
      );

      setInfo(prevInfo => ({
        ...prevInfo,
        bookmarkCount: newBookmarkCount,
      }));
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
    setBookmarkCheck(!bookmarkCheck);
  };

  const addToCart = async () => {
    try {
      const ingredientIds = info.insufficientIngredients.map(
        ingredient => ingredient.id,
      );
      await AxiosAuth.post("/users/cart", { ingredientIds });
      setCartMessage("장바구니에 추가되었습니다.");
      setTimeout(() => setCartMessage(""), 5000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
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
                {token && (
                  <div className={styles.button_container}>
                    <button
                      className={styles.basket_button}
                      onClick={addToCart}
                    >
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

                    <button
                      className={styles.bookmark}
                      onClick={toggleBookmark}
                    >
                      <img
                        src={
                          bookmarkCheck
                            ? "/images/bookmark.png"
                            : "/images/bookmark2.png"
                        }
                        alt="Bookmark"
                      />
                      <p>{info.bookmarkCount}</p>
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.title_sub}>
                {/* <div>
                  가진 재료|
                  {info.haveIngredient && info.haveIngredient.length > 0 ? (
                    info.haveIngredient.map((ingredient, id) => (
                      <p key={id}>{ingredient.name}</p>
                    ))
                  ) : (
                    <p>재료가 없습니다.</p>
                  )}
                </div> */}
                {token && (
                  <div>
                    부족한 재료 |
                    {info.insufficientIngredients &&
                      info.insufficientIngredients.map((ingredient, id) => (
                        <p key={id}>{ingredient.name}</p>
                      ))}
                  </div> 
                )}
              </div>
            </div>
          </div>
          <div className={styles.all}>전체 재료 | {info.ingredientDetails}</div>
          <div className={styles.cook}>
            {/* cookimg와 cooktext를 묶어서 표시 */}
            {info.manualImg &&
              info.manual &&
              info.manualImg.length === info.manual.length &&
              info.manualImg.map((img, index) => (
                <div key={index} className={styles.cook_item}>
                  <img
                    className={styles.cook_img}
                    src={info.manualImg[index]}
                    alt={info.name}
                  />
                  <span className={styles.cook_text}>{info.manual[index]}</span>
                </div>
              ))}
          </div>

          <div className={styles.message}>
            <p>{cartMessage}</p>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default RecipeInfo;
