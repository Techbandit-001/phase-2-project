import { useState } from 'react'
import { RecipeForm } from './RecipeForm'
//import { RecipeForm } from './RecipeForm'
//import {RecipeForm} from "./RecipeForm"

export function App() {
  return (
    <>
    <header> 
    <h1>Recipe book </h1>
      </header>
    <main className='min-h-screen flex p-8 gap-3'>
      <div className='w-[40%]'>
        <RecipeForm/>
      </div>
      <div className='flex-1'> Recipes </div>
    </main>
    <footer></footer>
      
    </>
  )
}


