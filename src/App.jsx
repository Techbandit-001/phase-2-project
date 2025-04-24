import { useEffect, useState } from "react";
import { RecipeForm } from "./RecipeForm";
import { RecipeList } from "./RecipeList";
import { SearchBar } from "./SearchBar";

import Footer from "./Footer";
import NavBar from "./NavBar";
//import { RecipeForm } from './RecipeForm'
//import {RecipeForm} from "./RecipeForm"

export function App() {
  const [searchTerm, setSearchTerm] = useState("");

  
  // lifted the recipe state from the RecipeList so that they can Interact with the searchBar
  // state to store all the recipes that are fetched from the server.
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);
// This filters the recipes via title using the searchTerm and its case-sensitive
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen flex p-8 gap-3">
        <div className="w-[35%]">
          <strong>+ Add recipes</strong>
          <RecipeForm />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recipes</h2>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm} />
          </div>
          {/* Pass the filtered recipes to RecipeList */}
          <RecipeList recipes={ filteredRecipes} /> 
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
