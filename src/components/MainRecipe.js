import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import axios from "axios";

function MainRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/recipe.json");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error Code:", error);
      }
    };

    fetchRecipes();
  }, []);

  // recipes가 초기화되지 않은 경우 렌더링하지 않음
  if (!recipes) {
    return null;
  }

  return (
    <>
      {recipes.map((recipe, index) => (
        <Link to="/recipeinfo" className={styles.recipe} key={index}>
          <img src={recipe.imageUrl} alt={recipe.title} />
          <div>
            <div className={styles.recipe_title}>
              <h2>{recipe.title}</h2>
            </div>
            <p className={styles.lack_descript}>
              부족한 재료 <span>{recipe.lackCount}</span>개
            </p>
            <div className={styles.lack_ingredients}>
              {recipe.ingredient
                ? recipe.ingredient.map((ingredient, i) => (
                    <div key={i}>{ingredient}</div>
                  ))
                : ""}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default MainRecipe;
