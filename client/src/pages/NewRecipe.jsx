import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateRecipe } from '../services/RecipeServices'

const NewRecipe = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    ingredients: [],
    directions: '',
    photo: ''
  })

  const addIngredient = () => {
    setFormValues({
      ...formValues,
      ingredients: [...formValues.ingredients, { name: '', amount: '' }]
    })
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleChangeIngredient = (e, index) => {
    const { name, value } = e.target
    const list = [...formValues.ingredients]
    list[index][name] = value
    setFormValues({ ...formValues, ingredients: list })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const recipeId = await CreateRecipe(formValues)
    navigate(`/recipes/${recipeId}`)
  }

  return (
    <div className="new-recipe">
      <form onSubmit={handleSubmit} class-className="recipe-form">
        <h1>Add A Recipe</h1>
        <h3>
          Have a great recipe you'd love to share? We want to try it! Upload it
          to our recipe page using the form below:
        </h3>
        <label>
          Recipe Name:
          <input
            onChange={handleChange}
            name="name"
            value={formValues.name}
            required
          />
        </label>
        {formValues.ingredients.map((ingredient, i) => (
          <div key={i}>
            <label>
              Ingredient:
              <input
                name="name"
                value={ingredient.name}
                onChange={(e) => handleChangeIngredient(e, i)}
                required
              />
            </label>
            <label>
              Amount:
              <input
                name="amount"
                value={ingredient.amount}
                onChange={(e) => handleChangeIngredient(e, i)}
                required
              />
            </label>
          </div>
        ))}

        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>

        <label>
          Directions:
          <textarea
            name="directions"
            value={formValues.directions}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Photo
          <input
            name="photo"
            value={formValues.photo}
            onChange={handleChange}
            placeholder="Image Adress"
            required
          />
        </label>

        <button type="submit">Create Recipe</button>
      </form>
    </div>
  )
}
export default NewRecipe
