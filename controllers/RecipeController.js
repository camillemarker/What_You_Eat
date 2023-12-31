const { Recipe, User } = require('../models')

const CreateRecipe = async (req, res) => {
  try {
    const { payload } = res.locals
    const user = await User.findById(payload.id)
    const recipe = await Recipe.create({ ...req.body, creator: user })
    user.recipes.push(recipe)
    await user.save()
    res.send(recipe)
  } catch (error) {
    throw error
  }
}

const GetAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.send(recipes)
  } catch (error) {
    throw error
  }
}

const GetRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipe_id)
    res.send(recipe)
  } catch (error) {
    throw error
  }
}

const SaveRecipe = async (req, res) => {
  try {
    const { payload } = res.locals
    const user = await User.findById(payload.id)
    const recipe = await Recipe.findById(req.params.recipe_id)
    if (!user.savedRecipes.includes(recipe.id)) {
      user.savedRecipes.push(recipe)

      await user.save()

      res.send({ status: 'Recipe Saved' })
    } else {
      res.send({ status: 'Recipe Already Saved!' })
    }
  } catch (error) {
    throw error
  }
}

const GetSavedRecipes = async (req, res) => {
  try {
    const { payload } = res.locals
    const user = await User.findById(payload.id).populate('savedRecipes')
    res.send(user.savedRecipes)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateRecipe,
  GetAllRecipes,
  GetRecipe,
  SaveRecipe,
  GetSavedRecipes
}
