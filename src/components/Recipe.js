import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import axios from "axios";

function Recipe(props) {
  const { searchText, category } = props;
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


  const filteredRecipes = recipes.filter(recipe => {
    if (category === 0) {
      return true;
    } else {
      return recipe.category === category;
    }
  });

  return (
    <>
      {filteredRecipes.map(
        (recipe, index) =>
          recipe.title &&
          recipe.title.includes(searchText) && (
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
          ),
      )}
    </>
  );
}

export default Recipe;
