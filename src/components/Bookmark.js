import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Main.module.css";
import AxiosAuth from "../components/AxiosAuth";

function Bookmark() {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
  
      fetchRecipes();
    
  }, [id, token]);

  const fetchRecipes = async () => {
    try {
      const response = await AxiosAuth.get(`/users/bookmarks`);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const filteredRecipes = recipes.sort(
    (a, b) => a.insufficientIngredientsCount - b.insufficientIngredientsCount
  );

  const handleRecipeClick = (recipe) => {
    navigate(`/recipeinfo/${recipe.recipeId}`, { state: { recipe } });
  };

  return (
    <>
      {filteredRecipes.map((recipe, index) => (
        <div
          onClick={() => handleRecipeClick(recipe)}
          className={styles.recipe}
          key={index}
        >
          <img src={recipe.imageUrl} alt={recipe.name} />
          <div>
            <div className={styles.up}>
              <div className={styles.recipe_title}>
                <h2>{recipe.name}</h2>
                {token && (
                  <div>
                    {recipe.insufficientIngredientsCount !== 0 ? (
                      <p className={styles.lack_descript}>
                        부족한 재료 <span>{recipe.insufficientIngredientsCount}</span>개
                      </p>
                    ) : (
                      <p className={styles.success_message}>지금 만들 수 있어요!</p>
                    )}
                  </div>
                )}
              </div>
              {token && (
                <div className={styles.bookmark}>
                  <img
                    src={
                      "/images/bookmark.png"
                    }
                    alt="bookmark"
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
        </div>
      ))}
    </>
  );
}

export default Bookmark;
