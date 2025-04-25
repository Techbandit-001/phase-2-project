import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { RecipeCard } from "../RecipeCard";

function RecipeDetails() {
  const [recipe, setRecipe] = useState();
 
  const { recipeId } = useParams();
//   const params = useParams();

  // console.log(params);
  useEffect(() => {
    fetch(`http://localhost:6001/recipes/${recipeId}`) //destructured as recipeId
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [recipeId]);

  if (!recipe) {
    return <div className="p-4 text-center text-gray-500">Loading recipe...</div>;
  }
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Recipe Details</h1>
      <div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl"
        />
        {/* Details container now */}

        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold">{recipe.title}</h2>
          <p className=" text-gray-700">{recipe.description}</p>

          <div className="flex gap-4 text-sm text-gray-600 mt-2">
            <span className="flex items-center gap-1">
              ⏱️ {recipe.preparationTime}
            </span>
            <span className="flex items-center gap-1 bg-amber-100 px-2 py-1 rounded text-amber-700">
              {recipe.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
