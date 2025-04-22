export function RecipeForm() {
  

    return (
      <div>
      <form className="border p-2 rounded-xl w-full" 
      action="">
        <div>
        <label htmlFor="title">Title</label>
        <input 
        id="title"
        className='border p-2 bg-white w-full rounded-lg'
         type="text"
         required />
         </div>
         <div>
            <label htmlFor="description">Description</label>
        <textarea 
        className='border p-2 bg-white w-full rounded-lg'
         name=""
         placeholder="description"
          id="description">
          </textarea>
          </div>
          <div>
            <label htmlFor="">Category</label>
        <input 
        className='border p-2 bg-white w-full rounded-lg'
        type="text" 
        name=""
        placeholder="category" />
        </div>
        div
    
      </form>
     
    </div>
    )
  }
  