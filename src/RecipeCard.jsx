// Receives a single recipe object as a prop from the parent RecipeList
export function RecipeCard({ recipe }) {
  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.category}</p>
      <p>
        <strong>Prep Time:</strong> {recipe["prep time"]}
      </p>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
    </div>
  );
}
