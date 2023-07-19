import Client from './api'

export const GetAllRecipes = async () => {
  try {
    const res = await Client.get('/recipes')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRecipe = async (id) => {
  console.log('BSTARTING GET RECIPEEEE')
  try {
    const res = await Client.get(`/recipes/${id}`)
    console.log('BEFORERETURNNNNN GET RECIPE=')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateRecipe = async (data) => {
  try {
    const res = await Client.post('/recipes', data)
    return res.data._id
  } catch (error) {
    throw error
  }
}

export const AddToSavedRecipes = async (recipeId) => {
  try {
    const res = await Client.post(`/recipes/${recipeId}/save`)
    console.log('BEFORERETURNNNNN IN ADD TO SAVE=')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetSavedRecipes = async () => {
  console.log('STARTING GET SAVED RECIPES')
  try {
    const res = await Client.get('/recipes/saved')
    console.log('BEFORERETURNNNNN IN GET SAVE=')
    return res.data
  } catch (error) {
    throw error
  }
}
