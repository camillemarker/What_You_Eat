const { Schema } = require('mongoose')
const ingredientSchema = require('./Ingredient')
const commentSchema = require('./Comment')

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
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comments: { type: [commentSchema], required: true }
})

module.exports = recipeSchema
