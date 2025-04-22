import { useState } from 'react'

export function RecipeForm() {
    const initialData= {
        image:"",
        title:"",
        description:'',
        preparationTime:"",
        category:""    }
    const [form, setForm] = useState(initialData);
// Dynamically adding an event listener that handles the submission of the form 

  const handleSubmit = (e) => {
    // line 8 is used to ensure that the page doesn't reload on submission
    e.preventDefault();
    //   
    console.log("form submitted");
    console.log(form);
    // used to reset the form to its intial status 
     setForm(initialData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
      setForm((prev) => ({
        // to return the form to its previous state which is empty values 
      ...prev,
      [name]: value,
    }));
  };

    return (
      <div>
      <form className="border p-2 rounded-xl w-full bg-amber-100 space-y-3" 
      action="" onSubmit={handleSubmit}>

        <div>
        <label htmlFor="title">Title</label>
        <input 
        id="title"
        className='border p-2 bg-white w-full rounded-lg'
         type="text"
         placeholder="Ingredients"
         name="title"
         value={form.title}
         onChange={handleChange}
         required />
         </div>

         <div>
            <label htmlFor="description">Description</label>
        <textarea 
        className='border p-2 bg-white w-full rounded-lg'
         name="description"
         placeholder="Description"
          id="description"
          value={form.description}
          onChange={handleChange}
          >
          </textarea>
          </div>
           <div>
            <label htmlFor="preparation time">Prepartion Time</label>
            <input
            placeholder='Preparation Time' 
            id='preparationTime'
            name='preparationTime'
            type="text" 
            className="border p-2 bg-white w-full rounded-lg"
            value={form.preparationTime}
            onChange={handleChange}
            />
          </div> 

         <div>
            <label htmlFor="category">Category</label>
            <select
             name="category" 
             id="category"
             placeholder='Category'
             className="border p-2 bg-white w-full rounded-lg"
             value={form.category}
             onChange={handleChange}
             >
                <option value =''>Select a category</option>
                <option value ='breakfast'>Breakfast</option>
                <option value ='brunch'>Brunch</option>
                <option value ='lunch'>Lunch</option>
                <option value ='dinner'>Dinner</option>
             </select>
        </div> 

        <div>
        <label htmlFor="image">Image</label>
        <input 
        id="image"
        className='border p-2 bg-white w-full rounded-lg'
         type="text"
         placeholder="image"
         name='image'
         value={form.image}
         onChange={handleChange}
         />
         </div>

        <div className="mt-4">
            <button className="border rounded-lg w-full p-2 bg-amber-500 hover:bg-gray-600">Add recipes</button>
        </div>
      </form>
     
    </div>
    )
  }
  