import { useEffect, useState } from "react";
// imported RecipeCard Component to render each recipe nicely
import { RecipeCard } from "./RecipeCard";

export function RecipeList({recipes}) {
  
  const handleDelete = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        // <div key={recipe.id}>
        //   <img
        //     src={recipe.image}
        //     alt={recipe.title}
        //     className="w-full h-48 object-cover rounded-t-lg"
        //   ></img>
        //   <h4 className="text-xl font-bold">{recipe.title}</h4>
        //   <p className="text-gray-600">{recipe.description}</p>
        //   <span className="bg-amber-100 px-2 py-1 rounded mt-2">
        //     {recipe.category}
        //   </span>
        //   <span className="ml-2 text-amber-600">{recipe.preparationTime}</span>
        // </div>

        // RecipeCard for each recipe
        <RecipeCard key={recipe.id} recipe={recipe}
        onDelete={handleDelete}/>
      ))}
    </div>
  );
}
