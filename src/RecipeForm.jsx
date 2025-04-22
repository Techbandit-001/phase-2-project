export function RecipeForm() {
  

    return (
      <div>
      <form className="border p-2 rounded-xl w-full bg-amber-100" 
      action="">
        <div>
        <label htmlFor="title">Title</label>
        <input 
        id="title"
        className='border p-2 bg-white w-full rounded-lg'
         type="text"
         placeholder="Ingredients"
         required />
         </div>
         <div>
            <label htmlFor="description">Description</label>
        <textarea 
        className='border p-2 bg-white w-full rounded-lg'
         name=""
         placeholder="Description"
          id="description">
          </textarea>
          </div>
         <div>
            <label htmlFor="category">Category</label>
            <select
             name="Category" 
             id="category"
             placeholder='Category'
             className="border p-2 bg-white w-full rounded-lg"

             >
                <option value =''>Select a category</option>
                <option value ='breakfast'>Breakfast</option>
                <option value ='brunch'>Brunch</option>
                <option value ='lunch'>Lunch</option>
                <option value ='dinner'>Dinner</option>
             </select>
        </div> 
        <div className="mt-4">
            <button className="border rounded-lg w-full p-2 bg-amber-500 hover:bg-gray-600">Add recipes</button>
        </div>
      </form>
     
    </div>
    )
  }
  