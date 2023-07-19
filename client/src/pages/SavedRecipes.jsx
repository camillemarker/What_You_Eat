import { useState, useEffect } from 'react'
import { GetSavedRecipes } from '../services/RecipeServices'
import { Link } from 'react-router-dom'

const SavedRecipes = ({ user }) => {
  const [recipes, setRecipes] = useState([])

  const fetchSavedRecipes = async () => {
    try {
      const recipes = await GetSavedRecipes()

      setRecipes(recipes)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchSavedRecipes()
  }, [])

  return (
    <div className="saved-recipes">
      <h1>Saved Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id} className="saves">
          <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default SavedRecipes
