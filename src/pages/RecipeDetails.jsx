// Import hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { RecipeCard } from "../RecipeCard";

// This function is for displaying a detailed info about a single Recipe
function RecipeDetails() {

  // State to store fetched recipe data
  const [recipe, setRecipe] = useState();
 
  // The Use param returns the dynamic part of the route/simply grabs route parameters and then we destructure to get the recipeId directly
  const { recipeId } = useParams();
//   const params = useParams();

  // console.log(params);

  // UseEffect Runs after the component recipeId changes
  useEffect(() => {
    fetch(`http://localhost:6001/recipes/${recipeId}`) //destructured as recipeId
      .then((res) => res.json())
      .then((data) => setRecipe(data)); //Saves the data to state
  }, [recipeId]);


  // While the data is loading/lets say undefined, it shows a loading message(conditional rendering)
  if (!recipe) {
    return <div className="p-4 text-center text-gray-500">Loading recipe...</div>;
  }


// Now when the Recipe is loaded, it renders the details
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
          <ul className="list-disc list-inside text-gray-700 space-y-1">

            {/* letting the description appear as unordered list */}
            {recipe.description
              .split(".")// This line breaks the string into parts
              .map((step, index) =>//Loopin over each step 
                step.trim() ? <li key={index}>{step.trim()}.</li> : null //Render the list item if the step if it doesnt have empty spaces
              )}
          </ul>

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
