import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams(); 
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>Recipe ID:</strong> {recipe.id}</p> {/* Ensures recipe.id is present */}
    </div>
  );
};

export default RecipeDetails;
