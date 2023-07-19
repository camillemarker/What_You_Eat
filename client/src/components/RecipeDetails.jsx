import { useEffect, useState } from 'react'
import {
  GetRecipe,
  // PostComment,
  // DeleteComment,
  AddToSavedRecipes
} from '../services/RecipeServices'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({})
  const [recipeSaved, setRecipeSaved] = useState(false)
  // const [comment, setComment] = useState('')
  const { id } = useParams()
  console.log('PRINT IDDDDDD', id)
  console.log('PRINT recipe user IDDDDDD', recipe.creator)
  useEffect(() => {
    console.log('BEFORE DECLARE FETCH RECIPE')
    const fetchRecipe = async () => {
      console.log('BEFORE DECLARE DATA IN GET RECIPE')
      const data = await GetRecipe(id)
      setRecipe(data)
    }
    fetchRecipe()
  }, [id])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const updatedRecipe = await PostComment(id, comment)
  //   setRecipe(updatedRecipe)
  //   setComment('')
  // }

  // const handleDelete = async (commentId) => {
  //   try {
  //     const updatedRecipe = await DeleteComment(id, commentId)
  //     setRecipe(updatedRecipe)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

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
      {/* <h2>Comments</h2>
      {recipe.comments?.map((comment, i) => (
        <div key={i}>
          <p>
            {comment.user._id}: {comment.comment}
            {user && user._id === comment.user._id && (
              <button onClick={() => handleDelete(comment._id)}>Delete</button>
            )}
          </p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button type="submit">Post Comment</button>
      </form> */}
    </div>
  )
}

export default RecipeDetails
