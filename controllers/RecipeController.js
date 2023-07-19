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
      console.log('BEFOREE SAVEE IN SAVVVEEE RECIPEEE')
      await user.save()
      console.log('AFTER SAVEE IN SAVVVEEE RECIPEEE')
      // console.log(user)
      res.send({ status: 'Recipe Saved' })
    } else {
      res.send({ status: 'Recipe Already Saved!' })
    }
  } catch (error) {
    throw error
  }
}

// const AddComment = async (req, res) => {
//   const recipe = await Recipe.findById(req.params.id)
//   let comment = {
//     user: req.user._id,
//     comment: req.body.comment
//   }
//   recipe.comments.push(comment)
//   try {
//     await recipe.save()
//     res.send(`/recipe/${recipe._id}`)
//   } catch (error) {
//     throw error
//   }
// }

// const DeleteComment = async (req, res, next) => {
//   try {
//     const recipe = await Recipe.findOne({
//       'comment._id': req.params.id,
//       'comment.user': req.user._id
//     })

//     if (!recipe) {
//       return res.send('Recipe not found')
//     }

//     recipe.comment.remove(req.params.id)
//     await recipe.save()

//     res.send(`/recipes/${recipe._id}`)
//   } catch (err) {
//     next(err)
//   }
// }

const GetSavedRecipes = async (res) => {
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
  // AddComment,
  // DeleteComment,
  GetSavedRecipes
}
