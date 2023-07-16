const { Recipe } = require('../models')

const GetItems = async (req, res) => {
  try {
    const items = await Recipe.find({})
    res.send(items)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetItems
}
