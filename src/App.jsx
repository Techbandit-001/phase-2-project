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
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <RecipeList />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
