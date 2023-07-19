import { useEffect, useState } from 'react'
import { GetRecipe, AddToSavedRecipes } from '../services/RecipeServices'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({})
  const [recipeSaved, setRecipeSaved] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await GetRecipe(id)
      setRecipe(data)
    }
    fetchRecipe()
  }, [id])

  const handleSave = async () => {
    try {
      const res = await AddToSavedRecipes(id)
      console.log(res.status)
      setRecipeSaved(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="recipe-details">
      <h1 className="details-recipe-title">{recipe.name}</h1>
      <button className="save-btn" onClick={handleSave}>
        {recipeSaved ? 'Saved!' : 'Save Recipe'}
      </button>
      <div className="content-wrapper">
        <img
          className="details-recipe-image"
          src={recipe.photo}
          alt={recipe.name}
        />
        <div className="recipe-text">
          <ul className="ingredients-list">
            {recipe.ingredients?.map((ingredient, i) => (
              <li key={i}>
                {ingredient.name} - {ingredient.amount}
              </li>
            ))}
          </ul>
          <p className="recipe-directions">{recipe.directions}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
