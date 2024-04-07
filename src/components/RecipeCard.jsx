export default function RecipeCard({ recipe }) {
  if (!recipe) {
    return null;
  }
  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
      >
        <div className="recipe">
          <h2>{recipe.title}</h2>
          <p>
            <strong>Description:</strong>{" "}
            {recipe.description ? recipe.description : "No description"}
          </p>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Directions:</strong> {recipe.directions}
          </p>
        </div>
      </div>
    </>
  );
}
