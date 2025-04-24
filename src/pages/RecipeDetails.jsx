import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { RecipeCard } from "../RecipeCard";

function RecipeDetails() {
  const [recipe, setRecipe] = useState();
  const { recipeId } = useParams();
//   const params = useParams();

  // console.log(params);
  useEffect(() => {
    fetch(`http://localhost:6001/recipes/${params.recipeId}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [recipeId]);
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded"
      />
      <p className="mt-4 text-gray-700">{recipe.description}</p>
      <div className="mt-4 flex justify-between text-sm text-amber-600">
        <span className="bg-amber-100 px-2 py-1 rounded">
          {recipe.category}
        </span>
        <span>{recipe.preparationTime}</span>
      </div>
    </div>
  );
}

export default RecipeDetails;
