import { useState } from 'react'
import { RecipeForm } from './RecipeForm'
import Footer from './Footer'
import NavBar from './NavBar'

export function App() {
  return (
    <>
    <header> 
    <NavBar/>
      </header>
    <main className='min-h-screen flex p-8 gap-3'>
      <div className='w-[35%]'>
        <strong>+ Add recipes</strong>
        <RecipeForm/>
      </div>
      <div className='flex-1'> Recipes </div>
    </main>
      <footer>
        <Footer/>
    </footer>
      
    </>
  )
}


