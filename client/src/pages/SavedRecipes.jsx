import { useState, useEffect } from 'react'
import { GetSavedRecipes } from '../services/RecipeServices'

const SavedRecipes = ({ user }) => {
  const [recipes, setRecipes] = useState([])

  const fetchSavedRecipes = async () => {
    const recipes = await GetSavedRecipes()
    setRecipes(recipes)
  }

  useEffect(() => {
    fetchSavedRecipes()
  }, [])

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h2>{recipe.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default SavedRecipes
