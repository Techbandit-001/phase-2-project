// Receives a single recipe object as a prop from the parent RecipeList
export function RecipeCard({ recipe }) {
  return (

    // card container 
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{recipe.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {recipe.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-amber-100 text-sm px-2 py-1 rounded">
            {recipe.category}
          </span>
          <span className="text-amber-600 text-sm">
            {recipe.preparationTime}
          </span>
        </div>
      </div>
    </div>
  );
}

