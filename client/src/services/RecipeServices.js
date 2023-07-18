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
  try {
    const res = await Client.get(`/recipes/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateRecipe = async (data) => {
  try {
    const res = await Client.post('/recipes', data)
    return res.data
  } catch (error) {
    throw error
  }
}

// export const PostComment = async (recipeId, comment) => {
//   try {
//     const res = await Client.post(`/recipes/${recipeId}/comment`, { comment })
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

// export const DeleteComment = async (recipeId, commentId) => {
//   try {
//     const res = await Client.delete(
//       `/recipes/${recipeId}/comments/${commentId}`
//     )
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export const AddToSavedRecipes = async (recipeId) => {
  try {
    const res = await Client.post(`/recipes/${recipeId}/save`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetSavedRecipes = async () => {
  try {
    const res = await Client.get('/recipes/saved')
    return res.data
  } catch (error) {
    throw error
  }
}
