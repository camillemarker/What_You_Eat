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
    <div className="recipe-container">
      <h1 className="recipe-title">Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <Link to={`/recipes/${recipe._id}`}>
              <img
                src={recipe.photo}
                alt={recipe.name}
                className="recipe-photo"
              />
              <p>{recipe.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipes
