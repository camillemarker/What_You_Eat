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
    console.log('starting handle change ')
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleChangeIngredient = (e, index) => {
    console.log('starting handle change ingredient ')
    const { name, value } = e.target
    const list = [...formValues.ingredients]
    list[index][name] = value
    setFormValues({ ...formValues, ingredients: list })
  }

  const handleSubmit = async (e) => {
    console.log('starting handle submit ')
    e.preventDefault()
    await CreateRecipe(formValues)
    navigate('/recipes')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            required
          />
        </label>

        <button type="submit">Create Recipe</button>
      </form>
    </div>
  )
}
export default NewRecipe
