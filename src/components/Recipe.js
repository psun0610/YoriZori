import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import axios from "axios";
import AxiosAuth from "../components/AxiosAuth";


function Recipe(props) {
 const baseURL = "http://localhost:8080";
  const { searchText, category,LoginUser} = props;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      let response;
     if(LoginUser){
        response = await AxiosAuth.get("/recipes/user-filtered");
     }else{
      response = await axios.get(baseURL + "/recipes/all");
     }
      
      setRecipes(response.data);
    } catch (error) {
      console.error("Error Code:", error);
    }
  };

  const filteredRecipes = recipes.filter(recipe => {
    if (category === 0) {
      return true;
    } else {
      return recipe.categoryId === category;
    }
  });

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
                <div className={styles.recipe_title}>
                  <h2>{recipe.name}</h2>
                </div>
                {recipe.insufficientIngredientsCount !== 0 && (
                  <p className={styles.lack_descript}>
                    부족한 재료{" "}
                    <span>{recipe.insufficientIngredientsCount}</span>개
                  </p>
                )}

                <div className={styles.lack_ingredients}>
                  {recipe.insufficientIngredients &&
                  recipe.insufficientIngredients.length > 0 ? (
                    recipe.insufficientIngredients.map((ingredient, id) => (
                      <div key={id}>{ingredient.name}</div>
                    ))
                  ) : (
                    <p>지금 만들 수 있습니다!</p>
                  )}
                </div>
              </div>
            </Link>
          ),
      )}
    </>
  );
}

export default Recipe;
