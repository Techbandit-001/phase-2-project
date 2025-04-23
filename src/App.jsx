import { useState } from 'react'
import { RecipeForm } from './RecipeForm'
David-Nav-Footer
import Footer from './Footer'
import NavBar from './NavBar'
//import { RecipeForm } from './RecipeForm'
//import {RecipeForm} from "./RecipeForm"
import { ReceiptList } from './RecipeList'
main

export function App() {
  return (
    <>
    <header> 
    <NavBar/>
      </header>
    <main className='min-h-screen flex p-8 gap-3'>
      <div className='w-[35%]'>
        <strong>+ Add recipes</strong>
          <RecipeForm />
          <ReceiptList/>
      </div>
      <div className='flex-1'> Recipes </div>
    </main>
      <footer>
        <Footer/>
    </footer>
      
    </>
  )
}


