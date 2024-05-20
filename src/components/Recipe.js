import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/Main.module.css";
import axios from "axios";
import AxiosAuth from "../components/AxiosAuth";

function Recipe(props) {
  const [bookmarkCheck, setBookmarkCheck] = useState({});
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { searchText, category } = props;
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    fetchRecipes();
  }, [id, token]);

  const fetchRecipes = async () => {
    try {
      let response;
      if (token) {
        response = await AxiosAuth.get("/recipes/user-filtered");
      } else {
        response = await axios.get(baseURL + "/recipes/all");
      }
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchBookmarkCheck = async recipeId => {
    try {
      const response = await AxiosAuth.get(`/users/check-bookmark`, {
        params: { recipeId },
      });
      setBookmarkCheck(prevState => ({
        ...prevState,
        [recipeId]: response.data.bookmarkCheck,
      }));
    } catch (error) {
      console.error(
        `Error fetching bookmark status for recipe ${recipeId}:`,
        error,
      );
    }
  };

  useEffect(() => {
    if (token) {
      recipes.forEach(recipe => {
        fetchBookmarkCheck(recipe.id);
      });
    }
  }, [recipes, token]);

  const filteredRecipes = recipes
    .filter(recipe => {
      if (category === 0) {
        return true;
      } else {
        return recipe.categoryId === category;
      }
    })
    .sort(
      (a, b) => a.insufficientIngredientsCount - b.insufficientIngredientsCount,
    );

  return (
    <>
      {filteredRecipes.map(
        (recipe, index) =>
          recipe.name &&
          recipe.name.includes(searchText) && (
            <Link
              to={`/recipeinfo/${recipe.id}`}
              className={styles.recipe}
              key={index}
            >
              <img src={recipe.imageUrl} alt={recipe.title} />
              <div>
                <div className={styles.up}>
                  <div className={styles.recipe_title}>
                    <h2>{recipe.name}</h2>

                    {token && (
                      <div>
                        {recipe.insufficientIngredientsCount !== 0 ? (
                          <p className={styles.lack_descript}>
                            부족한 재료{" "}
                            <span>{recipe.insufficientIngredientsCount}</span>개
                          </p>
                        ) : (
                          <p className={styles.success_message}>
                            지금 만들 수 있어요!
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  {token && (
                    <div className={styles.bookmark}>
                      <img
                        src={
                          bookmarkCheck[recipe.id]
                            ? "/images/bookmark.png"
                            : "/images/bookmark2.png"
                        }
                        alt="Bookmark"
                      />
                      <p>{recipe.bookmarkCount}</p>
                    </div>
                  )}
                </div>
                <div className={styles.lack_ingredients}>
                  {token &&
                  recipe.insufficientIngredients &&
                  recipe.insufficientIngredients.length > 0
                    ? recipe.insufficientIngredients.map((ingredient, id) => (
                        <div key={id}>{ingredient.name}</div>
                      ))
                    : null}
                </div>
              </div>
            </Link>
          ),
      )}
    </>
  );
}

export default Recipe;
