import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // create and delete functionality
  const deleteRecipe = (recipeIndex) => setRecipes(recipes.filter((beefAndCheese, index) => index !== recipeIndex))
  const createRecipe = (recipe) => setRecipes([...recipes, recipe])

  return (
    <div className="App">
      <header><h1 className="heading">Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
