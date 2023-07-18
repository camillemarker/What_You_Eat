import { useEffect, useState } from 'react'
import {
  GetRecipe,
  // PostComment,
  // DeleteComment,
  AddToSavedRecipes
} from '../services/RecipeServices'
import { useParams } from 'react-router-dom'

const RecipeDetails = ({ user }) => {
  const [recipe, setRecipe] = useState({})
  // const [comment, setComment] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchRecipe = async () => {
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
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.photo} alt={recipe.name} />
      <button onClick={handleSave}>Save Recipe</button>
      <p>{recipe.directions}</p>
      <ul>
        {recipe.ingredients?.map((ingredient, i) => (
          <li key={i}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
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
