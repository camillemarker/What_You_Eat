const { Schema } = require('mongoose')
const ingredientSchema = require('./Ingredient')

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
  },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = recipeSchema
