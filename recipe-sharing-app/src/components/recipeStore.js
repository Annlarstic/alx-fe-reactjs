import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import useRecipeStore from "./recipeStore"; // Import Zustand store

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes); // Access recipes from Zustand store

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Add a Link to navigate to recipe details */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;