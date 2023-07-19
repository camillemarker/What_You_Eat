import { useState, useEffect } from 'react'
import { GetAllRecipes } from '../services/RecipeServices'
import { Link } from 'react-router-dom'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    const data = await GetAllRecipes()
    setRecipes(data)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Recipes
