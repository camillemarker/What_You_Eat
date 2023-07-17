import { useEffect, useState } from 'react'
import { GetRecipe, PostComment } from '../services/RecipeServices'
import { useParams } from 'react-router-dom'

const RecipeDetails = ({ match }) => {
  const [recipe, setRecipe] = useState({})
  const [comment, setComment] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await GetRecipe(id)
      setRecipe(data)
    }
    fetchRecipe()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedRecipe = await PostComment(match.params.id, comment)
    setRecipe(updatedRecipe)
    setComment('')
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.photo} alt={recipe.name} />
      <p>{recipe.directions}</p>
      <ul>
        {recipe.ingredients?.map((ingredient, i) => (
          <li key={i}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
      </ul>
      <h2>Comments</h2>
      {recipe.comments?.map((comment, i) => (
        <div key={i}>
          <p>
            {comment.user}: {comment.comment}
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
      </form>
    </div>
  )
}

export default RecipeDetails
