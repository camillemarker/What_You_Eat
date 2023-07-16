const { Recipe } = require('../models')

const GetRecipes = async (req, res) => {
  try {
    const items = await Recipe.find({})
    res.send(items)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecipes
}
