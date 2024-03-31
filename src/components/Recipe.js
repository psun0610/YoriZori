import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import axios from "axios";

function Recipe(props) {
  const { searchText } = props;
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

  return (
    <>
      {recipes.map(
        (recipe, index) =>
          recipe.title &&
          recipe.title.toLowerCase().includes(searchText.toLowerCase()) && (
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
                  {recipe.ingredient.map((ingredient, i) => (
                    <div key={i}>{ingredient}</div>
                  ))}
                </div>
              </div>
            </Link>
          ),
      )}
    </>
  );
}

export default Recipe;
