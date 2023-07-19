const mongoose = require('mongoose')
const itemSchema = require('./Item')
const userSchema = require('./User')
const recipeSchema = require('./Recipe')

const Item = mongoose.model('Item', itemSchema)
const User = mongoose.model('User', userSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = {
  Item,
  User,
  Recipe
}
