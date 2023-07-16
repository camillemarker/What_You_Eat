const { Schema } = require('mongoose')

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String
  }
})

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: [ingredientSchema], required: true },
  directions: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
})

module.exports = recipeSchema
