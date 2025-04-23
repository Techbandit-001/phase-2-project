import { useEffect, useState } from "react";

export function RecipeList() {
  // using set state to update and
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-t-lg"
          ></img>
          <h4 className="text-xl font-bold">{recipe.title}</h4>
          <p className="text-gray-600">{recipe.description}</p>
          <span className="bg-amber-100 px-2 py-1 rounded mt-2">
            {recipe.category}
          </span>
          <span className="ml-2 text-amber-600">{recipe.preparationTime}</span>
        </div>
      ))}
    </div>
  );
}
