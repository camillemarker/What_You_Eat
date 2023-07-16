const { Schema } = require('mongoose')
const ingredientSchema = require('./Ingredient')
const commentSchema = require('./Comment')
const userSchema = require('./User')

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
  creator: { type: { userSchema }, required: true },
  comments: { type: [commentSchema], required: true }
})

module.exports = recipeSchema
