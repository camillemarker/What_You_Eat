// src/pages/SavedRecipes.jsx
import { useState, useEffect } from 'react'
import { GetRecipe } from '../services/RecipeServices'

const SavedRecipes = ({ user }) => {
  const [recipes, setRecipes] = useState([])

  const fetchSavedRecipes = async () => {
    const promises = user.savedRecipes.map((recipeId) => GetRecipe(recipeId))
    const recipes = await Promise.all(promises)
    setRecipes(recipes)
  }

  useEffect(() => {
    fetchSavedRecipes()
  }, [])

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default SavedRecipes
