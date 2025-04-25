// Receives a single recipe object as a prop from the parent RecipeList
import { Link } from "react-router-dom";
import {Clock, ClipboardList, Trash2} from "lucide-react"
import toast from "react-hot-toast";

export function RecipeCard({ recipe, onDelete }) {


  // A handler to trigger delete and also confirms if the user wanna delete the recipe

  const handleDelete = (e) => {
    e.preventDefault(); // prevents the reloead on delete

    // Then perform the Delete request using fetch using the recipes unique IDs

    fetch(`http://localhost:6001/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onDelete(recipe.id); //Ask the parent to remove the recipe from the RecipeList
        }
      })
      .catch((err) => {
        console.error("Delete error:", err);
      });
  };
  return (
    <div className="relative">
      <Link
        to={`/RecipeList/${recipe.id}`}
        className="block hover:scale-105 transition-transform duration-200"
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-md font-semibold text-gray-800">
              {recipe.title}
            </h2>

            <div className="mt-2 space-y-1 text-sm text-gray-600">
              {recipe.preparationTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Prep time: {recipe.preparationTime}</span>
                </div>
              )}
              {recipe.ingredients?.length > 0 && (
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4" />
                  <span>Ingredients: {recipe.ingredients.length}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
      {/* Delete button */}

      <button
        onClick={handleDelete}
        title="Delete"
        className="absolute bottom-2 right-2 ... cursor-pointer"
      >
        {/* Trash Icon for the delete button */}
        <Trash2 className="w-4 h-5" /> 
      </button>
    </div>
  );
}

