import { useState, useEffect } from 'react'
import { GetSavedRecipes } from '../services/RecipeServices'
import { Link } from 'react-router-dom'

const SavedRecipes = ({ user }) => {
  const [recipes, setRecipes] = useState([])
  console.log('PRINT RECIPES 11111111')

  const fetchSavedRecipes = async () => {
    try {
      const recipes = await GetSavedRecipes()
      console.log('PRINT RECIPES 22222222')
      setRecipes(recipes)
      console.log('PRINT RECIPES 3333333')
    } catch (error) {
      console.log('ERROR IN FETCH SAVED', error)
      throw error
    }
  }

  useEffect(() => {
    console.log('BEFOREFETCHHHHH')
    fetchSavedRecipes()
    console.log('AFTERFETCHHHHH')
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
