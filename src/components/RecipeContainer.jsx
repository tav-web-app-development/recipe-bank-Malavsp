import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const results = await fetch("https://api.sampleapis.com/recipes/recipes");
      const json = await results.json();
      setRecipes(json);
    }

    fetchRecipes();
    document.title = "Recipe Bank";

    return () => {
      console.log("Unmounted");
    };
  }, []);

  const recipeJsx =
    // recipes &&
    recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);

  return <>{recipeJsx}</>;
}
